import { marquee, profile } from "@/content/site";
import { Reveal } from "./Reveal";

export function Statement() {
  return (
    <section className="px-5 pt-28 pb-20 text-center sm:px-10 sm:pt-36">
      <Reveal className="mx-auto max-w-4xl">
        <p className="text-[12px] font-semibold tracking-[0.18em] text-muted uppercase">What I believe</p>
        <h2 className="mt-5 font-display text-[clamp(2.25rem,5.2vw,4.5rem)] leading-[1.02] font-bold tracking-[-0.035em]">
          {profile.statement}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.statementBody}</p>
        <a
          href="#work"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-[15px] font-medium text-paper transition-transform hover:-translate-y-0.5"
        >
          See the work <span aria-hidden>↓</span>
        </a>
      </Reveal>
    </section>
  );
}

export function Marquee() {
  const row = [...marquee, ...marquee, ...marquee, ...marquee];
  return (
    <div className="overflow-hidden py-6" aria-label={marquee.join(", ")}>
      <div className="marquee-track flex w-max items-center" aria-hidden>
        {row.map((w, i) => (
          <span
            key={i}
            className="flex items-center font-display text-[clamp(3.5rem,9vw,8rem)] leading-none font-extrabold tracking-[-0.05em] whitespace-nowrap text-orange uppercase"
          >
            {w}
            <span className="mx-[0.35em] text-[0.55em]">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
