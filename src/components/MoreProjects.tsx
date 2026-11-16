"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { moreProjects } from "@/content/site";
import { hostOf } from "./Frame";
import { Reveal } from "./Reveal";

const W = 320;
const H = 200;

export function MoreProjects() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 260, damping: 28, mass: 0.6 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  function move(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    // Keep the card on-screen: flip to the left of the cursor near the right edge.
    const flip = e.clientX + W + 32 > window.innerWidth;
    x.set(flip ? e.clientX - W - 24 : e.clientX + 24);
    y.set(Math.min(e.clientY - H / 2, window.innerHeight - H - 16));
  }

  return (
    <section id="more" className="scroll-mt-24 px-5 pt-24 sm:px-10">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex items-center justify-between rounded-[18px] bg-orange px-6 py-5 text-paper sm:px-8">
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">More projects</h3>
            <span className="font-display text-3xl" aria-hidden>
              ↘
            </span>
          </div>
        </Reveal>

        <ul className="mt-2" onPointerMove={move} onPointerLeave={() => setActive(null)}>
          {moreProjects.map((m, i) => (
            <li key={m.name} className="border-b border-line">
              <a
                href={m.url}
                target="_blank"
                rel="noreferrer"
                onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                className={`group grid grid-cols-[3.5rem_1fr_auto] items-center gap-x-4 gap-y-1 py-5 transition-colors hover:bg-sand/60 sm:grid-cols-[12rem_1fr_7rem_11rem] sm:items-baseline sm:gap-x-6 sm:px-3 ${active !== null && active !== i ? "sm:opacity-45" : ""}`}
              >
                {/* Touch screens can't hover, so phones get a small inline thumbnail. */}
                <span className="relative row-span-2 aspect-[16/10] w-14 overflow-hidden rounded-md ring-1 ring-ink/10 sm:hidden">
                  <Image src={m.preview} alt="" fill sizes="56px" className="object-cover object-top" />
                </span>
                <span className="font-display text-xl font-bold tracking-tight">{m.name}</span>
                <span className="text-right text-[12px] text-muted sm:hidden">{m.category}</span>
                <span className="col-span-2 col-start-2 text-[14px] text-muted sm:col-span-1 sm:col-start-auto">{m.description}</span>
                <span className="hidden text-[13px] text-muted sm:block">{m.category}</span>
                <span className="col-span-3 text-[13px] font-medium text-orange sm:col-span-1 sm:text-right">
                  {m.live ? hostOf(m.url).replace(".vercel.app", "") : "GitHub"}{" "}
                  <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Floating preview that follows the cursor. Every image stays mounted so switching rows is instant. */}
      <motion.div
        aria-hidden
        style={{ x: reduce ? x : sx, y: reduce ? y : sy, width: W, height: H }}
        animate={{ opacity: active === null ? 0 : 1, scale: active === null ? 0.92 : 1 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed top-0 left-0 z-40 hidden overflow-hidden rounded-[12px] border border-ink/15 bg-paper shadow-[0_24px_50px_-20px_rgba(22,23,20,0.5)] md:block"
      >
        {moreProjects.map((m, i) => (
          <Image
            key={m.name}
            src={m.preview}
            alt=""
            fill
            sizes={`${W}px`}
            className={`object-cover object-top transition-opacity duration-150 ${active === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </motion.div>
    </section>
  );
}
