"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/content/site";

function Count({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const c = animate(0, to, { duration: 1.4, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {val.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="px-5 sm:px-10">
      <dl className="mx-auto mt-14 grid max-w-[1440px] grid-cols-2 border-y border-line md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`py-7 pr-4 ${i % 2 === 1 ? "pl-5 md:pl-0" : ""} ${i < 2 ? "border-b border-line md:border-b-0" : ""}`}
          >
            <dd className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              <Count to={s.value} suffix={s.suffix} />
            </dd>
            <dt className="mt-1.5 text-[13px] text-muted">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
