import Image from "next/image";
import { experience, profile, skills, stack } from "@/content/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 px-5 pt-28 sm:px-10 sm:pt-36">
      <div className="mx-auto max-w-[1440px] rounded-[28px] bg-paper p-6 sm:p-10 lg:p-14">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="relative aspect-square w-full max-w-[320px] rotate-[-3deg] overflow-hidden rounded-[24px] shadow-[0_24px_50px_-26px_rgba(22,23,20,0.55)] ring-1 ring-ink/10">
              <Image src={profile.avatar} alt={`${profile.name}'s avatar`} fill sizes="320px" className="object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-[12px] font-semibold tracking-[0.18em] text-muted uppercase">About</p>
              <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[0.95] font-extrabold tracking-[-0.045em]">
                Hi, I&apos;m {profile.name}.
              </h2>
              {profile.about.map((p) => (
                <p key={p.slice(0, 20)} className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">
                  {p}
                </p>
              ))}
            </Reveal>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <Reveal>
                <h3 className="border-b border-line pb-3 text-[12px] font-semibold tracking-[0.18em] text-muted uppercase">
                  Recent shipping
                </h3>
                <ul>
                  {experience.map((e) => (
                    <li key={e.period} className="grid grid-cols-[5.5rem_1fr] gap-3 border-b border-line py-3 text-[14px]">
                      <span className="text-muted">{e.period}</span>
                      <span>{e.items}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.08}>
                <h3 className="border-b border-line pb-3 text-[12px] font-semibold tracking-[0.18em] text-muted uppercase">
                  Skills
                </h3>
                <ul>
                  {skills.map((s) => (
                    <li key={s} className="border-b border-line py-3 text-[14px]">
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal className="mt-10 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="rounded-full border border-ink/15 px-3.5 py-1.5 text-[13px]">
                  {s}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
