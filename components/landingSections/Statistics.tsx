"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const STATS = [
  { value: 12, suffix: "+", label: "Years in Business" },
  { value: 850, suffix: "+", label: "Products Available" },
  { value: 320, suffix: "+", label: "Retail Partners" },
  { value: 45, suffix: "+", label: "Cities Served" },
];

function useCountUp(target: number, duration = 1800, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setCount(target);
      return;
    }

    let startTime: number | null = null;
    let frame: number;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.round(easeOut(progress) * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  start,
  showDivider,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
  showDivider: boolean;
}) {
  const count = useCountUp(value, 1800, start);

  return (
    <div
      className={cn(
        "relative flex flex-col items-center text-center px-4 py-6",
        showDivider &&
          "lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:h-16 lg:after:w-px lg:after:bg-accent/40",
      )}
    >
      <p className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-primary tabular-nums">
        {count}
        {suffix}
      </p>
      <p className="mt-3 type-eyebrow text-text-inverse/70">{label}</p>
    </div>
  );
}

export function Statistics() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-secondary section-padding"
      aria-label="Company statistics"
    >
      <div className="container-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0">
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              start={started}
              showDivider={i < STATS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
