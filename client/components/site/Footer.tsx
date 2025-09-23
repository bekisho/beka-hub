import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Dribbble, Globe } from "lucide-react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-20">
      <div className="container py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex size-8 items-center justify-center rounded-md bg-accent text-accent-foreground font-bold">BF</span>
            <span className="font-semibold tracking-tight">Beka Fite</span>
          </div>
          <p className="text-sm text-foreground/70 max-w-sm">
            UI/UX designer crafting intuitive, user-first digital experiences across web and mobile.
          </p>
        </div>
        <nav className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-foreground/60">Quick Links</p>
          <div className="flex flex-wrap gap-3">
            
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-foreground/70 hover:text-foreground transition-colors">{l.label}</a>
            ))}
          </div>
        </nav>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-foreground/60">Connect</p>
          <div className="flex gap-3">
            <a aria-label="LinkedIn" href="http://linkedin.com/in/beka-addisu-" target="_blank" rel="noreferrer" className="size-9 inline-flex items-center justify-center rounded-md bg-secondary/80 hover:bg-secondary transition-colors">
              <Linkedin className="size-5" />
            </a>
            <a aria-label="Behance" href="https://www.behance.net/bekafite" target="_blank" rel="noreferrer" className="size-9 inline-flex items-center justify-center rounded-md bg-secondary/80 hover:bg-secondary transition-colors">
              <Globe className="size-5" />
            </a>
            <a aria-label="Dribbble" href="https://dribbble.com/account/profile" target="_blank" rel="noreferrer" className="size-9 inline-flex items-center justify-center rounded-md bg-secondary/80 hover:bg-secondary transition-colors">
              <Dribbble className="size-5" />
            </a>
            <a aria-label="Email" href="bekafite@gmail.com" className="size-9 inline-flex items-center justify-center rounded-md bg-secondary/80 hover:bg-secondary transition-colors">
              <Mail className="size-5" />
            </a>
            <a aria-label="GitHub" href="https://github.com/bekisho/" target="_blank" rel="noreferrer" className="size-9 inline-flex items-center justify-center rounded-md bg-secondary/80 hover:bg-secondary transition-colors">
              <Github className="size-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6">
        <div className="container flex items-center justify-between text-sm text-foreground/60">
          <p>© 2025 Beka Fite. All rights reserved.</p>
          <p>
            <a href="#home" className="hover:text-foreground">Back to top ↑</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
