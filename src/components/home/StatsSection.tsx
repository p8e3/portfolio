"use client";

import { useEffect, useState, useCallback } from "react";
import { animate, AnimationPlaybackControls } from "framer-motion";

function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const [node, setNode] = useState<T | null>(null);
  const [inView, setInView] = useState(false);
  const ref = useCallback((el: T | null) => {
    setNode(el);
  }, []);

  useEffect(() => {
    if (!node) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      });
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, options]);

  return { ref, inView } as const;
}

function CountUp({ end, duration = 1.5, repeatDelay = 3, suffix = "+" }: { end: number; duration?: number; repeatDelay?: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView<HTMLSpanElement>({ rootMargin: "-15% 0px" });

  useEffect(() => {
    if (!inView) return;
    let controls: AnimationPlaybackControls | null = null;
    let stopped = false;

    const run = () => {
      if (stopped) return;
      // Animate from 0 to end
      controls = animate(0, end, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setValue(Math.round(latest)),
        onComplete: () => {
          // Small pause, then restart
          setTimeout(() => {
            setValue(0);
            run();
          }, repeatDelay * 1000);
        },
      });
    };

    run();
    return () => {
      stopped = true;
      controls?.stop();
    };
  }, [inView, duration, end, repeatDelay]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    { label: "Projects", value: 60, icon: "fas fa-check-circle" },
    { label: "Happy Clients", value: 30, icon: "fas fa-smile" },
    { label: "Years Experience", value: 12, icon: "fas fa-briefcase" },
    { label: "Automations", value: 120, icon: "fas fa-robot" },
  ];

  return (
    <section aria-labelledby="stats-heading" className="space-y-6">
      <h2 id="stats-heading" className="sr-only">Stats</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-mixed rounded-xl border border-black/10 dark:border-white/10 p-4 text-center"
          >
            <div className="flex items-center justify-center gap-2 text-[color:var(--foreground)]">
              <i className={`${s.icon} text-lg opacity-80`}></i>
              <span className="text-sm opacity-80">{s.label}</span>
            </div>
            <div className="mt-2 text-3xl font-extrabold text-[color:var(--foreground)]">
              <CountUp end={s.value} duration={1.4} repeatDelay={3.2} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
