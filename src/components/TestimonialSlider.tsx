"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { testimonials } from "../data/home";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);

  const move = useCallback((direction: number) => {
    if (!track.current || animation.current) return;
    const updateIndex = () => setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      updateIndex();
      return;
    }
    const card = track.current.firstElementChild as HTMLElement;
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(track.current).columnGap);
    const slide = track.current.animate(
      [{ transform: `translateX(${-step}px)` }, { transform: `translateX(${-step * (1 + direction)}px)` }],
      { duration: 750, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" }
    );
    animation.current = slide;
    slide.onfinish = () => {
      flushSync(updateIndex);
      slide.cancel();
      animation.current = null;
    };
  }, []);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 700px)");
    const update = () => {
      setReducedMotion(motion.matches);
      setVisibleCards(mobile.matches ? 1 : 3);
      animation.current?.cancel();
      animation.current = null;
    };
    update();
    motion.addEventListener("change", update);
    mobile.addEventListener("change", update);
    return () => {
      motion.removeEventListener("change", update);
      mobile.removeEventListener("change", update);
      animation.current?.cancel();
    };
  }, []);

  const autoPlaying = !hovered && !focused && !reducedMotion;
  useEffect(() => {
    if (!autoPlaying) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) move(1);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [autoPlaying, move]);

  return (
    <div className="review-slider" role="region" aria-roledescription="carousel" aria-label="Client reviews"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}>
      <div className="review-slider__controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous review" aria-controls="review-slides">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 5-7 7 7 7" /></svg>
        </button>
        <button type="button" onClick={() => move(1)} aria-label="Next review" aria-controls="review-slides">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 5 7 7-7 7" /></svg>
        </button>
      </div>
      <div className="review-slider__viewport">
        <div className="testimonial-grid" id="review-slides" ref={track}>
          {Array.from({ length: testimonials.length + 2 }, (_, slot) => {
            const offset = slot - 1;
            const item = testimonials[(index + offset + testimonials.length) % testimonials.length];
            return (
              <article className="testimonial" key={slot} aria-hidden={offset < 0 || offset >= visibleCards}>
                <span>{item.initials}</span>
                <h3>{item.name}</h3>
                <small>{item.role}</small>
                <p>&ldquo;{item.quote}&rdquo;</p>
                <div className="rating" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, star) => <span key={star} />)}
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <span className="review-slider__status" aria-live={autoPlaying ? "off" : "polite"} aria-atomic="true">Review {index + 1} of {testimonials.length}: {testimonials[index].name}</span>
    </div>
  );
}
