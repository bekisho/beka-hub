import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Figma, Layers, Rocket, Send } from "lucide-react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submitContact(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="container py-24">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s build something amazing</h2>
          <p className="mt-3 text-foreground/70 max-w-prose">
            Tell me about your project, timeline, and goals. I’ll get back within 1–2 business days.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-border p-4 bg-card/60">
              <CheckCircle2 className="size-5 text-accent" />
              <p className="mt-2 font-medium">Accessible, responsive UI</p>
            </div>
            <div className="rounded-xl border border-border p-4 bg-card/60">
              <Layers className="size-5 text-accent" />
              <p className="mt-2 font-medium">Design systems & tokens</p>
            </div>
            <div className="rounded-xl border border-border p-4 bg-card/60">
              <Figma className="size-5 text-accent" />
              <p className="mt-2 font-medium">Prototyping & handoff</p>
            </div>
            <div className="rounded-xl border border-border p-4 bg-card/60">
              <Rocket className="size-5 text-accent" />
              <p className="mt-2 font-medium">Impact‑driven outcomes</p>
            </div>
          </div>
        </div>
        <form onSubmit={submitContact} className="rounded-2xl border border-border p-6 bg-card/60 space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="mt-2" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="mt-2" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea id="message" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me about your project…" className="mt-2 min-h-32" />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send Message"}
              <Send className="ml-2 size-4" />
            </Button>
            {status === "success" && (
              <span className="text-sm text-emerald-600 dark:text-emerald-400">Thanks! I’ll be in touch shortly.</span>
            )}
            {status === "error" && (
              <span className="text-sm text-red-600 dark:text-red-400">Something went wrong. Please try again.</span>
            )}
          </div>
          <p className="text-sm text-foreground/60">
            Or email me directly: <a className="text-accent" href="bekafite@gmail.com">bekafite@gmail.com</a>
          </p>
        </form>
      </div>
    </section>
  );
}
