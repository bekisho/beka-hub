const testimonials = [
  {
    quote:
      "Beka elevated our product with systems‑thinking and a calm, user‑first mindset. A joy to collaborate with.",
    name: "Alex Kim",
    role: "PM, Nimbus Analytics",
  },
  {
    quote:
      "Pragmatic, fast, and meticulous. Our onboarding metrics improved within weeks of Beka’s redesign.",
    name: "Jordan Lee",
    role: "Head of Growth, Flowly",
  },
  {
    quote:
      "Beka combines craft and strategy—great instincts backed by research. Users loved the new experience.",
    name: "Priya Patel",
    role: "Design Lead, Aurora Health",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container py-20">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Kind Words</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="rounded-2xl border border-border p-6 bg-card/60">
            <p className="text-foreground/80">“{t.quote}”</p>
            <footer className="mt-4 text-sm text-foreground/60">— {t.name}, {t.role}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
