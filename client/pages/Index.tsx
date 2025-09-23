import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Index() {
  return (
    <div>
      <Hero />
      <About />
      <Work />
      <Process />
      <Testimonials />
      <Contact />
    </div>
  );
}
