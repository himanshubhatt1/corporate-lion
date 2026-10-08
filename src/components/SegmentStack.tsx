"use client";

import { useEffect, useRef, useState } from "react";
import { serviceSegments, servicesIntroduction } from "../data/services";
import { asset } from "../lib/assets";

/** Native sticky positioning keeps wheel, touch and keyboard scrolling reversible. */
export function SegmentStack() {
  const section = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const deck = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = section.current!;
    const sticky = panel.current!;
    const stack = deck.current!;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let step = 0;
    let hold = 0;
    let top = 0;
    let current = -1;

    function render() {
      frame = 0;
      const distance = Math.max(0, top - root.getBoundingClientRect().top);
      const progress = Math.max(0, (distance - hold) / step);
      let next = 0;
      const travel = stack.clientHeight + 40;
      cards.current.forEach((card, index) => {
        if (!card) return;
        const portion = index === 0 ? 1 : Math.min(1, Math.max(0, progress - index + 1));
        // Ease the final part of each arrival without detaching motion from scroll.
        const eased = motion.matches ? (portion >= .55 ? 1 : 0) : 1 - Math.pow(1 - portion, 3);
        card.style.setProperty("--arrival", String((1 - eased) * travel));
        card.style.visibility = eased > 0 ? "visible" : "hidden";
        if (portion >= .55) next = index;
      });
      if (next !== current) { current = next; setActive(next); }
    }

    function measure() {
      const headerSpace = Math.max(64, Math.min(96, window.innerWidth * .05));
      // Short windows keep the deck pinned too; its heading can scroll above the viewport.
      // Reduced motion changes how cards arrive, never whether they are stacked.
      top = Math.min(headerSpace, window.innerHeight - sticky.offsetHeight);
      sticky.style.top = `${top}px`;
      step = Math.max(420, window.innerHeight * .8);
      hold = window.innerHeight * .2;
      root.style.height = `${sticky.offsetHeight + step * (serviceSegments.length - 1) + hold * 2}px`;
      render();
    }

    function schedule() { if (!frame) frame = requestAnimationFrame(render); }
    // Recalculate pinning when responsive content changes the deck's natural height.
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure);
    motion.addEventListener("change", measure);
    const observer = new ResizeObserver(measure);
    observer.observe(sticky);
    document.fonts.ready.then(measure);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      motion.removeEventListener("change", measure);
    };
  }, []);

  return <section className="services-scroll" id="service-segments" data-enhanced="true" ref={section} aria-labelledby="services-segments-title">
    <div className="services-scroll__panel" ref={panel}>
      <div className="services-section-heading">
        <h2 id="services-segments-title">Our Real <span>Estate Services</span></h2>
        <p>{servicesIntroduction}</p>
      </div>
      <a className="services-skip" href="#services-clients">Skip to our clients</a>
      <div className="segment-stack" ref={deck}>
        {serviceSegments.map((segment, index) => <article
          key={segment.number}
          ref={node => { cards.current[index] = node; }}
          className="segment-card"
          style={{ "--card-index": index } as React.CSSProperties}
          aria-hidden={active !== index ? true : undefined}
          inert={active !== index}
        >
          <div className="segment-card__copy">
            <strong>{segment.number}</strong>
            <h3>{segment.title}</h3>
            <span>{segment.tagline}</span>
            <p>{segment.text}</p>
            <a className="services-button" href={segment.href}>{segment.action} <span aria-hidden="true">→</span></a>
          </div>
          <div className="segment-card__visual">
            <img className="segment-card__image" src={asset(segment.image)} alt={segment.alt} width={624} height={420} />
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
