import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,hsl(var(--accent)/0.25),transparent),radial-gradient(800px_500px_at_90%_-20%,hsl(var(--primary)/0.15),transparent)]" />
      <div className="container py-24 md:py-32">
        <div className="grid items-center gap-10 justify-items-center">
          <div className="max-w-3xl mx-auto text-center motion-safe:animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/70">
              <Star className="size-3.5 text-accent" /> Available for freelance & full‑time
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight motion-safe:animate-fade-up" style={{ animationDelay: "120ms" }}>
              Hi, I'm Beka — a UI/UX Designer crafting intuitive digital experiences.
            </h1>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto motion-safe:animate-fade-up" style={{ animationDelay: "240ms" }}>
              I design clean, user‑focused websites and apps with a blend of creativity and strategy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center motion-safe:animate-fade-up" style={{ animationDelay: "360ms" }}>
              <Button asChild className="group">
                <a href="#work">
                  View My Work
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#contact">Let’s Connect</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

