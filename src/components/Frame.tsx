import Image from "next/image";

export function hostOf(url?: string) {
  if (!url) return "";
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

/** A light browser window holding a real screenshot of a live project. */
export function Frame({
  src,
  url,
  alt,
  sizes,
  priority,
  className = "",
}: {
  src: string;
  url?: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[14px] border border-ink/15 bg-paper shadow-[0_28px_60px_-28px_rgba(22,23,20,0.45)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-ink/10 px-3 py-2">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-orange" />
          <span className="h-2 w-2 rounded-full bg-clay" />
          <span className="h-2 w-2 rounded-full bg-clay" />
        </span>
        <span className="mx-auto truncate pr-8 text-[11px] text-muted">{hostOf(url)}</span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
      </div>
    </div>
  );
}
