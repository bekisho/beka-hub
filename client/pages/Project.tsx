import { useParams, Link } from "react-router-dom";

type Project = {
  title: string;
  image: string;
  description: string;
  tools: string[];
  role: string;
  outcomes: string;
};

const PROJECTS: Record<string, Project> = {
  pro1: {
    title: "Mill Online Shop (Mobile E-commerce App)",
    image: "/ast/proj 1 (2).png",
    description:
      "A personalized mobile commerce app with smart search, clean product grid, and bottom navigation. Designed for ease of browsing and fast purchases on the go, and delivered high-fidelity prototypes.",
    tools: ["Figma"],
    role: "End‑to‑end product design: research, IA, visual system, prototyping, testing, handoff",
    outcomes: "Task success +32%, time‑on‑task −18%, adoption of key workflows +22%",
  },
  pro2: {
    title: "Sneaker Shopping App (Nike UI)",
    image: "/ast/proj 2.png",
    description:
      "Created a sleek and contemporary e-commerce UI for sneakerheads. Prioritized simple product discovery through minimal categories, a visible search bar, and engaging features such as wishlist and cart icons. Prioritized clean design, bold brand imagery (Nike), and adaptive navigation to maximize user shopping experience.",
    tools: ["Figma", ],
    role: "Journey mapping, empty states, email + in‑app flows, prototype validation",
    outcomes: "Activation +18%, support tickets −12% within first 30 days",
  },
  pro3: {
    title: "Book Library & Recommendation App",
    image: "/ast/proj 3.png",
    description:
      "Developed a user-centered library app UI enabling users to discover, search, and save books according to interests. Focused on accessibility and interactivity with vibrant visuals and personalized recommendation categories such as 'For You' and 'Recommends.",
    tools: ["Figma", "Usability Testing"],
    role: "Audit, wireframes, UI polish, prototype, moderated tests",
    outcomes: "Checkout conversion +11%, cart abandonment −9%",
  },
  pro4: {
    title: "Video Editing Service App (VisionCraft)",
    image: "/ast/proj 4.png",
    description:
      "Created a modern dark-themed UI for an innovative service platform that provides video editing, color grading, and motion graphics. The interface prioritizes service discovery, user rewards, as well as promotion banners, adding value to the business and motivating users.",
    tools: ["Figma",],
    role: "Design tokens, components, guidelines, contribution model",
    outcomes: "Build velocity +25%, UI defects −30%",
  },
  pro5: {
    title: "VisionCraft (Creative Agency Website)",
    image: "/ast/Proj 5.png",
    description:
      "A modern portfolio site for a video editing business. It features services, client works, and collaborations with a comprehensible layout and engaging visuals.",
    tools: ["Figma", "Prototyping"],
    role: "Research synthesis, IA, visual design, prototype",
    outcomes: "Completion rate +14%, NPS +9",
  },
  pro6: {
    title: " BRIDGE Watch (Desktop E-commerce)",
    image: "/ast/proj 6.png",
    description:
      "A high-end watch store homepage with simple design, product focus, and promotional elements. It boasts clear visual hierarchy and user-friendly shopping navigation.",
    tools: ["Figma"],
    role: "Content structure, art direction, component library",
    outcomes: "Donation conversion +12%, time to publish −40%",
  },
};

export default function Project() {
  const { id } = useParams();
  const proj = id ? PROJECTS[id] : undefined;

  if (!proj) {
    return (
      <div className="container py-20">
        <p className="text-foreground/70">Project not found.</p>
        <Link to="/" className="text-accent">Back home</Link>
      </div>
    );
  }

  return (
    <section className="container py-10 md:py-16">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{proj.title}</h1>
      </header>
      <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow">
        <img src={proj.image} alt={proj.title} className="w-full h-auto" />
      </figure>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <p className="text-foreground/80">{proj.description}</p>
          <p className="text-foreground/80"><span className="font-semibold">Outcomes:</span> {proj.outcomes}</p>
        </div>
        <aside className="rounded-2xl border border-border p-6 bg-card/60 space-y-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/60">Role</p>
            <p className="mt-1 text-sm">{proj.role}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/60">Tools</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {proj.tools.map((t) => (
                <span key={t} className="inline-flex items-center rounded-full border px-3 py-1 text-xs">{t}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <div className="mt-8 text-sm text-foreground/60">
        <Link to="/" className="hover:text-foreground">← Back home</Link>
      </div>
    </section>
  );
}
