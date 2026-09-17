"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimator() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("motion-ready");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -32px 0px"
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    // Count numbers up from zero the first time they scroll into view.
    const frames = new Set<number>();
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const renderCount = (el: HTMLElement, value: number) => {
      const decimals = Number(el.dataset.decimals ?? 0);
      el.textContent = `${value.toFixed(decimals)}${el.dataset.suffix ?? ""}`;
    };
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          countObserver.unobserve(el);
          const target = Number(el.dataset.count);
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / 1800, 1);
            renderCount(el, target * (1 - Math.pow(1 - progress, 3)));
            if (progress < 1) frames.add(requestAnimationFrame(tick));
          };
          frames.add(requestAnimationFrame(tick));
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => {
      renderCount(el, 0);
      countObserver.observe(el);
    });

    return () => {
      document.documentElement.classList.remove("motion-ready");
      observer.disconnect();
      countObserver.disconnect();
      frames.forEach((frame) => cancelAnimationFrame(frame));
      counters.forEach((el) => renderCount(el, Number(el.dataset.count)));
    };
  }, [pathname]);

  return null;
}
