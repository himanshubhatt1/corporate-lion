"use client";

import { useEffect, useRef, useState } from "react";
import { serviceSegments } from "../data/services";
import { asset } from "../lib/assets";

const AUTOPLAY_MS = 6000;

/**
 * A deck of property segments: the front card is open, the others stay layered behind it
 * with only their top edge showing. Picking a layer (or the autoplay) brings it forward.
 */
export function SegmentStack() {
  const count = serviceSegments.length;
  const [active, setActive] = useState(count - 1);
  const [inView, setInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const deck = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = deck.current;
    if (!node || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % count), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [active, count, inView, isPaused]);

  return (
    <div
      className="segment-stack"
      data-reveal="panel"
      ref={deck}
      style={{ "--layers": count - 1 } as React.CSSProperties}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {serviceSegments.map((segment, index) => {
        const depth = (active - index + count) % count;
        const isFront = depth === 0;
        return (
          <article
            className={`segment-card${isFront ? " is-front" : ""}`}
            style={{ "--depth": depth } as React.CSSProperties}
            key={segment.number}
          >
            <button className="segment-card__tab" type="button" onClick={() => setActive(index)}>
              <span>{segment.number}</span>
              {segment.title}
            </button>
            <div className="segment-card__body" aria-hidden={!isFront}>
              <div className="segment-card__copy">
                <strong>{segment.number}</strong>
                <h3>{segment.title}</h3>
                <span>{segment.tagline}</span>
                <p>{segment.text}</p>
              </div>
              <div className="segment-card__image">
                <img src={asset(segment.image)} alt={segment.alt} />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
