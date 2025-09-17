import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const skills = [
  "UI Design (Figma, Adobe XD)",
  "UX Research & Wireframing",
  "Prototyping & User Testing",
  "Framer & Responsive Design",
];

export function About() {
  return (
    <section id="about" className="container py-20 md:py-28">
      <div className="grid gap-5 md:grid-cols-[1fr_2fr] md:items-center">
        <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-2xl overflow-hidden shadow-xl border border-border">
          <img src="public/ast/beka.pro.jpg" alt="Beka portrait" className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
          <p className="mt-4 text-foreground/80 max-w-2xl">
            I’m Beka, a dedicated UI/UX designer with a background in IT (HNS). My career started in technology, 
              leading me to develop excellent problem-solving and technical skills, and eventually guiding me to realize my love for creating visually appealing digital experiences that are also intuitive to use. 
              I have spent all these years since that time developing my UI/UX design skills and I love to combine design and functionality – whether I’m designing visually interesting shadows of a button, or creating an entire user flow – I want to ensure that each detail reflects both beauty and usability. 
              My aim is to create a design that not only looks good but feels good to use.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((s) => (
              <Badge key={s} variant="secondary" className="px-3 py-1.5 rounded-full">{s}</Badge>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <a href="/file:///C:/Users/aa/Downloads/CV.UI.pdf" download>Download CV</a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#process">My Design Process</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
