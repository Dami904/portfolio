import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { OpenSource, Process, Recognition } from "@/components/Process";
import { Marquee, Statement } from "@/components/Statement";
import { Stats } from "@/components/Stats";
import { MoreProjects } from "@/components/MoreProjects";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Statement />
        <Marquee />
        <Work />
        <Recognition />
        <OpenSource />
        <MoreProjects />
        <Capabilities />
        <Process />
        <About />
      </main>
      <Footer />
    </>
  );
}
