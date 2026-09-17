"use client";

import { useRef, useState } from "react";
import { testimonials } from "../data/home";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const track = useRef<HTMLDivElement>(null);

  function move(direction: number) {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.current?.animate(
        [{ opacity: 0.35, transform: `translateX(${direction * 32}px)` }, { opacity: 1, transform: "translateX(0)" }],
        { duration: 400, easing: "cubic-bezier(.22,1,.36,1)" }
      );
    }
  }

  return (
    <div className="review-slider" role="region" aria-roledescription="carousel" aria-label="Client reviews"
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
          {testimonials.map((_, offset) => {
            const item = testimonials[(index + offset) % testimonials.length];
            return (
              <article className="testimonial" key={item.name}>
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
      <span className="review-slider__status" aria-live="polite" aria-atomic="true">Review {index + 1} of {testimonials.length}: {testimonials[index].name}</span>
    </div>
  );
}
