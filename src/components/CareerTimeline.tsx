"use client";

import { useEffect, useRef } from "react";
import { careerBenefits } from "../data/careers";
import { CareerIcon } from "./CareerIcon";

export function CareerTimeline() {
  const timeline = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const element = timeline.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const updateProgress = () => {
      const bounds = element.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight * .7 - bounds.top) / bounds.height));
      element.style.setProperty("--timeline-progress", String(progress));
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateProgress); };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      });
    }, { threshold: .16, rootMargin: "0px 0px -5% 0px" });
    element.querySelectorAll(".career-timeline__item").forEach((item) => observer.observe(item));
    const setMotion = () => { element.classList.toggle("has-motion", !preference.matches); };
    setMotion(); updateProgress();
    preference.addEventListener("change", setMotion);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      observer.disconnect(); cancelAnimationFrame(frame);
      element.classList.remove("has-motion");
      preference.removeEventListener("change", setMotion);
      window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="career-benefits" aria-labelledby="career-benefits-title">
      <div className="careers-container">
        <div className="career-benefits__heading">
          <span className="careers-eyebrow">Careers at Corporate Lion</span>
          <h2 id="career-benefits-title">Why Choose Corporate Lion?</h2>
        </div>
        <ol ref={timeline} className="career-timeline">
          {careerBenefits.map((benefit) => (
            <li className="career-timeline__item" key={benefit.step}>
              <span className="career-timeline__dot" aria-hidden="true" />
              <span className="career-timeline__icon"><CareerIcon name={benefit.icon} /></span>
              <div className="career-timeline__copy">
                <span className="career-timeline__number" aria-hidden="true">{benefit.step}</span>
                <span className="career-timeline__action">{benefit.action}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
