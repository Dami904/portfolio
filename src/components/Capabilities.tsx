"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { capabilities } from "@/content/site";
import { Reveal } from "./Reveal";

export function Capabilities() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-5 pt-28 sm:px-10 sm:pt-36">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <p className="text-[12px] font-semibold tracking-[0.18em] text-muted uppercase">What I build</p>
          <p className="max-w-sm text-[14px] text-muted">Four things show up in almost everything I ship. Open one to see where.</p>
        </Reveal>
        <ul className="border-t border-line">
          {capabilities.map((c, i) => {
            const isOpen = open === i;
            return (
              <li key={c.title} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left sm:py-7"
                >
                  <span
                    className={`font-display text-[clamp(3rem,10vw,9rem)] leading-[0.9] font-extrabold tracking-[-0.055em] transition-colors ${isOpen ? "text-ink" : "text-ink/25 group-hover:text-ink/60"}`}
                  >
                    {c.title}
                    <sup className="ml-2 align-super text-[0.18em] font-semibold tracking-normal text-orange">
                      {String(i + 1).padStart(2, "0")}
                    </sup>
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 text-xl transition-transform duration-300 ${isOpen ? "rotate-45 bg-orange text-paper" : ""}`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-8 md:grid-cols-12">
                        <p className="text-lg leading-relaxed md:col-span-6">{c.body}</p>
                        <div className="flex flex-wrap content-start gap-2 md:col-span-5 md:col-start-8">
                          {c.projects.map((p) => (
                            <span key={p} className="rounded-full bg-sand px-3.5 py-1.5 text-[13px]">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
