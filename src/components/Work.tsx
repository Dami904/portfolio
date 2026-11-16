import { grid, showcase, type Project, type Tone } from "@/content/site";
import { Frame } from "./Frame";
import { Reveal } from "./Reveal";

const toneClass: Record<Tone, { card: string; soft: string; rule: string; chip: string; link: string; badge: string }> = {
  ink: { card: "bg-ink text-paper", soft: "text-paper/60", rule: "border-paper/15", chip: "border-paper/20", link: "bg-paper text-ink", badge: "bg-orange text-paper" },
  orange: { card: "bg-orange text-paper", soft: "text-paper/75", rule: "border-paper/25", chip: "border-paper/30", link: "bg-paper text-ink", badge: "bg-paper text-orange" },
  forest: { card: "bg-forest text-paper", soft: "text-paper/65", rule: "border-paper/15", chip: "border-paper/20", link: "bg-paper text-ink", badge: "bg-orange text-paper" },
  sand: { card: "bg-sand text-ink", soft: "text-muted", rule: "border-line", chip: "border-ink/15", link: "bg-ink text-paper", badge: "bg-orange text-paper" },
};

function Award({ text, className }: { text: string; className: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold ${className}`}>
      <span aria-hidden>★</span>
      {text}
    </span>
  );
}

function Links({ p, solid, outline }: { p: Project; solid: string; outline: string }) {
  const base = "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium transition-transform hover:-translate-y-0.5";
  return (
    <div className="flex flex-wrap gap-2">
      {p.live && (
        <a href={p.live} target="_blank" rel="noreferrer" className={`${base} ${solid}`}>
          Open live <span aria-hidden>↗</span>
        </a>
      )}
      <a href={p.repo} target="_blank" rel="noreferrer" className={`${base} border ${outline}`}>
        Code
      </a>
      {p.video && (
        <a href={p.video} target="_blank" rel="noreferrer" className={`${base} border ${outline}`}>
          Demo video
        </a>
      )}
    </div>
  );
}

function ShowcaseCard({ p, index }: { p: Project; index: number }) {
  const t = toneClass[p.tone];
  return (
    <Reveal>
      <article id={p.slug} className={`scroll-mt-24 overflow-hidden rounded-[28px] ${t.card}`}>
        <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
          <div className="flex flex-col lg:col-span-5">
            <div className={`flex items-center justify-between text-[12px] ${t.soft}`}>
              <span>
                {String(index + 1).padStart(2, "0")} / {String(showcase.length).padStart(2, "0")}
              </span>
              <span>{p.category}</span>
            </div>
            {p.award && (
              <div className="mt-6">
                <Award text={p.award} className={t.badge} />
              </div>
            )}
            <p className={`${p.award ? "mt-4" : "mt-8"} font-display text-2xl leading-tight font-semibold tracking-tight sm:text-3xl`}>
              {p.tagline}
            </p>
            <p className={`mt-4 text-[15px] leading-relaxed ${t.soft}`}>{p.description}</p>

            <dl className={`mt-8 border-t ${t.rule}`}>
              {p.proof.map((x) => (
                <div key={x.label} className={`flex items-baseline gap-4 border-b py-3 ${t.rule}`}>
                  <dt className="w-24 shrink-0 font-display text-2xl font-bold tracking-tight">{x.value}</dt>
                  <dd className={`text-[14px] ${t.soft}`}>{x.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <Links p={p} solid={t.link} outline={t.chip} />
            </div>

            <h3 className="mt-auto pt-12 font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.85] font-extrabold tracking-[-0.055em]">
              {p.name}
            </h3>
            <p className={`mt-3 text-[12px] ${t.soft}`}>
              {p.role} · {p.chain} · {p.year}
            </p>
          </div>

          <div className="flex items-center lg:col-span-7">
            <div className="w-full transition-transform duration-700 hover:-translate-y-1.5">
              <Frame src={p.shot} url={p.live} alt={`${p.name} live site`} sizes="(min-width: 1024px) 55vw, 92vw" />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function GridCard({ p, delay }: { p: Project; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article id={p.slug} className="group scroll-mt-24">
        <div className="desk relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-[22px] p-6 sm:p-10">
          {p.award && <Award text={p.award} className="absolute top-4 left-4 z-10 bg-orange text-paper" />}
          <div className="w-full transition-transform duration-700 group-hover:-translate-y-2">
            <Frame src={p.shot} url={p.live} alt={`${p.name} live site`} sizes="(min-width: 768px) 42vw, 88vw" />
          </div>
        </div>
        <div>
        <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-line pb-3">
          <h3 className="font-display text-2xl font-bold tracking-tight">{p.name}</h3>
          <span className="text-right text-[13px] text-muted">{p.category}</span>
        </div>
        <p className="mt-3 text-[15px] font-medium">{p.tagline}</p>
        <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{p.description}</p>
        <p className="mt-3 text-[12px] text-muted">
          {p.role} · {p.chain}
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[13px]">
            <span className="font-display font-bold">{p.proof[0].value}</span>{" "}
            <span className="text-muted">{p.proof[0].label}</span>
          </p>
          <div className="flex gap-4 text-[13px] font-medium">
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" className="text-orange hover:underline">
                Live ↗
              </a>
            )}
            <a href={p.repo} target="_blank" rel="noreferrer" className="hover:text-orange">
              Code
            </a>
            {p.video && (
              <a href={p.video} target="_blank" rel="noreferrer" className="hover:text-orange">
                Video
              </a>
            )}
          </div>
        </div>
        </div>
      </article>
    </Reveal>
  );
}

/** The odd card out: spans both grid columns as a full feature, screenshot first. */
function FeatureCard({ p }: { p: Project }) {
  const t = toneClass[p.tone];
  return (
    <Reveal className="md:col-span-2">
      <article id={p.slug} className={`group scroll-mt-24 overflow-hidden rounded-[28px] ${t.card}`}>
        <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:gap-14 lg:p-14">
          <div className="lg:col-span-7">
            <div className="rotate-[-1.5deg] transition-transform duration-700 group-hover:rotate-0 group-hover:-translate-y-1.5">
              <Frame src={p.shot} url={p.live} alt={`${p.name} live site`} sizes="(min-width: 1024px) 55vw, 92vw" />
            </div>
          </div>
          <div className="flex flex-col lg:col-span-5">
            <div className={`flex items-center justify-between text-[12px] ${t.soft}`}>
              <span>Featured</span>
              <span>{p.category}</span>
            </div>
            <h3 className="mt-6 font-display text-[clamp(3rem,6.5vw,6rem)] leading-[0.85] font-extrabold tracking-[-0.055em]">
              {p.name}
            </h3>
            <p className="mt-5 font-display text-2xl leading-tight font-semibold tracking-tight">{p.tagline}</p>
            <p className={`mt-4 text-[15px] leading-relaxed ${t.soft}`}>{p.description}</p>
            <dl className={`mt-7 border-t ${t.rule}`}>
              {p.proof.map((x) => (
                <div key={x.label} className={`flex items-baseline gap-4 border-b py-3 ${t.rule}`}>
                  <dt className="w-24 shrink-0 font-display text-2xl font-bold tracking-tight">{x.value}</dt>
                  <dd className={`text-[14px] ${t.soft}`}>{x.label}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className={`rounded-full border px-3 py-1 text-[12px] ${t.chip}`}>
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-7">
              <Links p={p} solid={t.link} outline={t.chip} />
            </div>
            <p className={`mt-6 text-[12px] ${t.soft}`}>
              {p.role} · {p.chain} · {p.year}
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-16 px-5 pt-24 sm:px-10 sm:pt-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-14">
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-extrabold tracking-[-0.05em]">
            Selected work
          </h2>
          <p className="max-w-sm text-[15px] text-muted">
            Products I&apos;ve designed and shipped, solo and as lead engineer on a team. Each one is live, tested and documented.
          </p>
        </Reveal>

        <div className="space-y-6">
          {showcase.map((p, i) => (
            <ShowcaseCard key={p.slug} p={p} index={i} />
          ))}
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {grid.map((p, i) => (
            grid.length % 2 === 1 && i === grid.length - 1 ? (
              <FeatureCard key={p.slug} p={p} />
            ) : (
              <GridCard key={p.slug} p={p} delay={(i % 2) * 0.08} />
            )
          ))}
        </div>
      </div>
    </section>
  );
}
