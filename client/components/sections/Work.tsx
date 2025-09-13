import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "pro1",
    title: "Mill Online Shop (Mobile E-commerce App)",
    tools: ["Figma", "User Testing"],
    description:
      "A personalized mobile commerce app with smart search, clean product grid, and bottom navigation. Designed for ease of browsing and fast purchases on the go, and delivered high-fidelity prototypes.",
    colorFrom: "from-[#111827]",
    colorTo: "to-[#4F8EF7]",
    imageSrc: "public/ast/beka.pro 1.png",
  },
  {
    id: "pro2",
    title: "Sneaker Shopping App (Nike UI)",
    tools: ["Figma"],
    description:
      "Created a sleek and contemporary e-commerce UI for sneakerheads. Prioritized simple product discovery through minimal categories, a visible search bar, and engaging features such as wishlist and cart icons. Prioritized clean design, bold brand imagery (Nike), and adaptive navigation to maximize user shopping experience.",
    colorFrom: "from-[#0F172A]",
    colorTo: "to-[#9B59B6]",
    imageSrc: "public/ast/beka.pro 2.png",
  },
  {
    id: "pro3",
    title: "Book Library & Recommendation App",
    tools: ["Figma", "Usability Testing"],
    description:
      "Developed a user-centered library app UI enabling users to discover, search, and save books according to interests. Focused on accessibility and interactivity with vibrant visuals and personalized recommendation categories such as 'For You' and 'Recommends.",
    colorFrom: "from-[#111827]",
    colorTo: "to-[#22d3ee]",
    imageSrc: "public/ast/beka.pro 3.png",
  },
  {
    id: "pro4",
    title: "Video Editing Service App (VisionCraft)",
    tools: ["Figma", "Tokens", "Documentation"],
    description:
      "Created a modern dark-themed UI for an innovative service platform that provides video editing, color grading, and motion graphics. The interface prioritizes service discovery, user rewards, as well as promotion banners, adding value to the business and motivating users.",
    colorFrom: "from-[#0F172A]",
    colorTo: "to-[#34d399]",
    imageSrc: "public/ast/beka.pro 4.png",
  },
  {
    id: "pro5",
    title: "VisionCraft (Creative Agency Website)",
    tools: ["Figma", "Prototyping"],
    description:
      "A modern portfolio site for a video editing business. It features services, client works, and collaborations with a comprehensible layout and engaging visuals.",
    colorFrom: "from-[#111827]",
    colorTo: "to-[#f59e0b]",
    imageSrc: "public/ast/beka.pro 51.png",
  },
  {
    id: "pro6",
    title: "BRIDGE Watch (Desktop E-commerce)",
    tools: ["Figma"],
    description:
      "A high-end watch store homepage with simple design, product focus, and promotional elements. It boasts clear visual hierarchy and user-friendly shopping navigation.",
    colorFrom: "from-[#0F172A]",
    colorTo: "to-[#ef4444]",
    imageSrc: "public/ast/beka.pro 6 (1).png",
  },
];

export function Work() {
  return (
    <section id="work" className="container py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Work</h2>
          <p className="mt-2 text-foreground/70 max-w-2xl">A selection of projects spanning product design, design systems, and conversion‑focused UX.</p>
        </div>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <CaseStudy key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

function CaseStudy({ id, title, tools, description, colorFrom, colorTo, imageSrc }: {
  id: string;
  title: string;
  tools: string[];
  description: string;
  colorFrom: string;
  colorTo: string;
  imageSrc?: string;
}) {
  return (
    <Link to={`/projects/${id}`} className="group overflow-hidden rounded-2xl border border-border text-left bg-card/60 focus:outline-none focus:ring-2 focus:ring-ring">
      <div className={cn("p-3", "bg-gradient-to-br", colorFrom, colorTo)}>
        <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
          {imageSrc ? (
            <img src={imageSrc} alt={title} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(200px_120px_at_20%_20%,rgba(255,255,255,0.8),transparent),radial-gradient(300px_160px_at_80%_20%,rgba(255,255,255,0.35),transparent)]" />
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 line-clamp-2 text-foreground/70">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tools.map((t) => (
            <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
          ))}
        </div>
        <div className="mt-4 inline-flex items-center text-sm text-accent">
          View Case Study <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
