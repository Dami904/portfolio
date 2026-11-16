import Image from "next/image";
import { profile, showcase } from "@/content/site";
import { Frame } from "./Frame";
import { Reveal } from "./Reveal";

// Three real screenshots laid on the desk panel under the wordmark.
const desk = [
  { slug: "fides", className: "left-[4%] top-[16%] w-[52%] -rotate-[5deg] sm:w-[40%]" },
  { slug: "tender", className: "right-[3%] top-[9%] w-[50%] rotate-[5deg] sm:w-[37%]" },
  { slug: "bursar", className: "left-[22%] top-[38%] z-10 w-[58%] rotate-[1.5deg] sm:left-[30%] sm:top-[30%] sm:w-[42%]" },
];

export function Hero() {
  return (
    <section id="top" className="px-5 pt-24 sm:px-10 sm:pt-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="relative h-32 w-32 -rotate-6 overflow-hidden rounded-[26px] shadow-[0_18px_40px_-20px_rgba(22,23,20,0.55)] ring-1 ring-ink/10 sm:h-40 sm:w-40">
              <Image src={profile.avatar} alt={`${profile.name}'s avatar`} fill sizes="160px" className="object-cover" priority />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
            <p className="text-[12px] font-semibold tracking-[0.18em] text-orange uppercase">
              {profile.name} · {profile.role}
            </p>
            <p className="mt-3 max-w-xl text-xl leading-snug sm:text-2xl">{profile.intro}</p>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={40}>
          <h1 className="relative z-10 mt-8 -mb-[0.13em] font-display text-[clamp(4.25rem,19.5vw,19rem)] leading-[0.8] font-extrabold tracking-[-0.035em] sm:mt-10">
            {profile.handle.toUpperCase()}
          </h1>
        </Reveal>

        <Reveal delay={0.25} y={24}>
          <div className="desk relative aspect-[4/3.4] overflow-hidden rounded-[6px] sm:aspect-[16/7.5]">
            {desk.map((d, i) => {
              const p = showcase.find((s) => s.slug === d.slug)!;
              return (
                <a
                  key={d.slug}
                  href={`#${p.slug}`}
                  aria-label={`${p.name}: jump to project`}
                  className={`absolute block transition-transform duration-500 hover:-translate-y-2 ${d.className}`}
                >
                  <Frame
                    src={p.shot}
                    url={p.live}
                    alt={`${p.name} screenshot`}
                    sizes="(min-width: 640px) 42vw, 60vw"
                    priority={i === 2}
                  />
                </a>
              );
            })}
            <span className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-medium text-muted sm:bottom-6 sm:left-6">
              Live: Fides · Bursar · Tender
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
