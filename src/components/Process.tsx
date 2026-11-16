import { openSource, process, recognition } from "@/content/site";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section className="px-5 pt-28 sm:px-10 sm:pt-36">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="text-[12px] font-semibold tracking-[0.18em] text-muted uppercase">How I work</p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[0.95] font-extrabold tracking-[-0.045em]">
            From idea to live product.
          </h2>
        </Reveal>
        <ol className="space-y-3 lg:col-span-8">
          {process.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.06}>
              <li className="grid grid-cols-[3rem_1fr] items-baseline gap-4 rounded-[18px] bg-sand px-5 py-6 sm:grid-cols-[4rem_16rem_1fr] sm:px-8">
                <span className="font-display text-xl font-bold text-orange">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-xl font-bold tracking-tight">{s.step}</span>
                <span className="col-start-2 text-[15px] text-muted sm:col-start-3">{s.body}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Awards and a few strong ecosystem builds, as one slim strip. */
export function Recognition() {
  return (
    <section className="px-5 pt-24 sm:px-10">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <p className="text-[12px] font-semibold tracking-[0.18em] text-muted uppercase">Recognition</p>
          <p className="max-w-sm text-[14px] text-muted">Awards and selected builds with ecosystem teams.</p>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {recognition.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.05}>
              <div
                className={`flex h-full items-start justify-between gap-4 rounded-[16px] p-5 ${r.award ? "bg-orange text-paper" : "border-t-4 border-orange bg-paper"}`}
              >
                <div>
                  <p className="font-display text-lg leading-tight font-bold tracking-tight">{r.title}</p>
                  <p className={`mt-1 text-[13px] ${r.award ? "text-paper/80" : "text-muted"}`}>{r.detail}</p>
                </div>
                {r.project && (
                  <a
                    href={`#${r.project.toLowerCase()}`}
                    className={`shrink-0 rounded-full px-3 py-1 text-[12px] font-semibold ${r.award ? "bg-paper text-orange" : "bg-sand"}`}
                  >
                    {r.project}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OpenSource() {
  const o = openSource;
  return (
    <section className="px-5 pt-24 sm:px-10">
      <Reveal className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 rounded-[28px] bg-forest p-6 text-paper sm:p-10 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-5">
            <p className="text-[12px] font-semibold tracking-[0.18em] text-paper/60 uppercase">Open source</p>
            <h2 className="mt-4 font-display text-[clamp(2.75rem,6vw,5rem)] leading-[0.9] font-extrabold tracking-[-0.05em]">
              {o.name}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-paper/70">{o.blurb}</p>
            <dl className="mt-8 flex gap-10">
              {o.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-4xl font-bold tracking-tight">{s.value}</dt>
                  <dd className="mt-1 text-[13px] text-paper/60">{s.label}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-2">
              <a
                href={o.prs}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-paper px-4 py-2 text-[13px] font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                See my pull requests <span aria-hidden>↗</span>
              </a>
              <a
                href={o.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-paper/25 px-4 py-2 text-[13px] font-medium transition-transform hover:-translate-y-0.5"
              >
                keeperhub.com
              </a>
            </div>
          </div>
          <ul className="self-center border-t border-paper/15 lg:col-span-6 lg:col-start-7">
            {o.items.map((it) => (
              <li key={it.title} className="border-b border-paper/15 py-5">
                <p className="font-display text-xl font-bold tracking-tight">{it.title}</p>
                <p className="mt-1 text-[14px] text-paper/65">{it.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
