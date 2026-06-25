"use client";

import { useEffect, useRef, useState } from "react";
import { metrics } from "@/data/site";

function useCount(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const start = performance.now();
    const duration = 1100;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function MetricCard({
  value,
  suffix,
  label,
  active
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCount(value, active);

  return (
    <div className="rounded-sm border border-line bg-white p-5 shadow-[0_12px_40px_rgba(10,10,11,0.04)]">
      <div className="text-3xl font-semibold text-ink sm:text-4xl">
        {count}
        <span className="text-xl text-brand-blue sm:text-2xl">{suffix}</span>
      </div>
      <p className="mt-4 text-sm font-medium leading-6 text-neutral-600">{label}</p>
    </div>
  );
}

export function HighlightsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-neutral-50 py-24 sm:py-28">
      <div className="section-shell" ref={ref}>
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-brand-blue">
              Career Highlights
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              숫자로 남은 현장과 결과물
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-neutral-600">
            오래 버틴 현장 경험 위에 직접 만든 웹과 앱의 결과물이 하나씩 쌓이고 있습니다.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
