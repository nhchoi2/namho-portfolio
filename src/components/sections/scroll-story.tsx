"use client";

import { useEffect, useRef, useState } from "react";
import { storyItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function ScrollStorySection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [viewport, setViewport] = useState({ height: 800, width: 1200 });

  useEffect(() => {
    let frame = 0;

    const syncViewport = () => {
      setViewport({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    const update = () => {
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const scrollable = Math.max(1, node.offsetHeight - window.innerHeight);
      const nextProgress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const nextActive = Math.min(
        storyItems.length - 1,
        Math.max(0, Math.floor(nextProgress * storyItems.length))
      );

      setProgress(nextProgress);
      setActive(nextActive);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    const onResize = () => {
      syncViewport();
      onScroll();
    };

    syncViewport();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const startRadius = Math.min(viewport.width, viewport.height) * 0.42;
  const endRadius = Math.hypot(viewport.width, viewport.height) / 2 + 80;
  const fillRadius = startRadius + (endRadius - startRadius) * progress;
  const fillClip = `circle(${fillRadius}px at 50% 50%)`;

  return (
    <section id="story" ref={ref} className="relative h-[400svh] bg-white">
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <div
          style={{
            clipPath: fillClip,
            WebkitClipPath: fillClip
          }}
          className="absolute inset-0 bg-brand-blue will-change-[clip-path]"
          aria-hidden="true"
        />
        <div className="section-shell relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <p
              className={cn(
                "mb-5 text-sm font-semibold uppercase transition-colors duration-500",
                active >= 0 ? "text-blue-100" : "text-brand-blue"
              )}
            >
              Scroll Story
            </p>
            <div className="relative min-h-[230px]">
              {storyItems.map((item, index) => (
                <div
                  key={item.keyword}
                  className={cn(
                    "absolute inset-0 flex flex-col items-center justify-center transition-all duration-500",
                    active === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  )}
                >
                  <h2
                    className={cn(
                      "text-5xl font-semibold leading-none transition-colors duration-500 sm:text-7xl",
                      active >= 0 ? "text-white" : "text-ink"
                    )}
                  >
                    {item.keyword}
                  </h2>
                  <p
                    className={cn(
                      "mt-7 max-w-xl text-balance text-xl font-medium leading-9 transition-colors duration-500 sm:text-2xl",
                      active >= 0 ? "text-blue-50" : "text-neutral-700"
                    )}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-10 flex max-w-xs items-center justify-center gap-2">
              {storyItems.map((item, index) => (
                <span
                  key={item.keyword}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    active === index
                      ? "w-10 bg-white"
                      : active >= 0
                        ? "w-4 bg-white/35"
                        : "w-4 bg-neutral-300"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
