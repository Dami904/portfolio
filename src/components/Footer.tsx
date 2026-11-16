import { links, profile } from "@/content/site";
import { Reveal } from "./Reveal";

export function Footer() {
  const contact = [
    { label: "GitHub", href: links.github },
    { label: "X", href: links.x },
    { label: "LinkedIn", href: links.linkedin },
    { label: "Email", href: links.email ? `mailto:${links.email}` : "" },
  ].filter((c) => c.href);

  return (
    <footer id="contact" className="scroll-mt-16 overflow-hidden px-5 pt-28 sm:px-10 sm:pt-36">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="grid gap-10 border-b border-line pb-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-2 text-[13px] text-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              {profile.availability}
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.92] font-extrabold tracking-[-0.05em]">
              Have something to build?
            </h2>
            <p className="mt-5 max-w-lg text-lg text-muted">
              Agents, payments or anything that has to prove it works. Send me a message and I&apos;ll get back to you.
            </p>
          </div>
          <ul className="self-end lg:col-span-4 lg:col-start-9">
            {contact.map((c) => (
              <li key={c.label} className="border-t border-line last:border-b">
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center justify-between py-4 font-display text-2xl font-bold tracking-tight transition-colors hover:text-orange"
                >
                  {c.label}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="flex flex-wrap justify-between gap-4 py-6 text-[13px] text-muted">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.handle}
          </span>
          <a href="#top" className="hover:text-orange">
            Back to top ↑
          </a>
        </div>
      </div>
      <p
        aria-hidden
        className="-mb-[0.18em] text-center font-display text-[19.5vw] leading-[0.8] font-extrabold tracking-[-0.04em] whitespace-nowrap text-orange select-none"
      >
        {profile.handle.toUpperCase()}
      </p>
    </footer>
  );
}
