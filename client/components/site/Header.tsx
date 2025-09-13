import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

const NAV = [
  { href: "#work", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex size-8 items-center justify-center rounded-md bg-accent text-accent-foreground font-bold">BF</span>
          <span className="font-semibold tracking-tight">Beka Fite</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={cn("text-foreground/70 hover:text-foreground transition-colors")}>{item.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="secondary" className="hidden md:inline-flex">
            <a href="#contact">Let’s Connect</a>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Toggle dark mode" onClick={toggle}>
            {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
        </div>
      </div>
      {/* Mobile nav */}
      <div className="md:hidden border-t border-border/60">
        <div className="container py-2 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-foreground/70 hover:text-foreground transition-colors">{item.label}</a>
          ))}
          <a href="#contact" className="ml-auto text-accent font-medium">Let’s Connect</a>
        </div>
      </div>
    </header>
  );
}
