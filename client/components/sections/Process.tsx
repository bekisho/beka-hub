const steps = [
  { step: 1, title: "Discovery & Research", desc: "Align goals, audience, and constraints via stakeholder interviews and desk research." },
  { step: 2, title: "Wireframing", desc: "Establish IA and flows; validate concepts quickly." },
  { step: 3, title: "Visual Design", desc: "Craft accessible, modern interfaces and components." },
  { step: 4, title: "Prototyping", desc: "High‑fidelity prototypes to communicate interactions." },
  { step: 5, title: "Testing & Feedback", desc: "Observe users, iterate with evidence, refine micro‑UX." },
  { step: 6, title: "Developer Handoff", desc: "Specs, tokens, and components for smooth implementation." },
];

export function Process() {
  return (
    <section id="process" className="container py-20">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Design Process</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.step} className="rounded-2xl border border-border p-6 bg-card/60">
            <div className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold">{s.step}</div>
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-foreground/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
