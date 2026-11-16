import { profile } from "@/content/site";

const items = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bone/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 sm:px-10">
        <a href="#top" className="font-display text-[15px] font-bold tracking-tight">
          {profile.handle}
        </a>
        <p className="hidden text-[13px] text-muted lg:block">{profile.focus.join(" · ")}</p>
        <div className="flex items-center gap-5 sm:gap-7">
          <span className="hidden items-center gap-2 text-[13px] text-orange md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            {profile.availability}
          </span>
          <nav className="flex gap-4 text-[13px] sm:gap-5">
            {items.map((i) => (
              <a key={i.href} href={i.href} className="transition-colors hover:text-orange">
                {i.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
