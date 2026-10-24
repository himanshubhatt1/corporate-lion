"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "../lib/assets";

const MODAL_DELAY_MS = 60 * 1000;

export function HomeSezModal() {
  const [isOpen, setIsOpen] = useState(false);
  const panel = useRef<HTMLElement>(null);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("previewSezModal")) setIsOpen(true);
  }, []);

  useEffect(() => {
    if (isOpen) return;
    // Start a fresh 60-second wait on arrival and after each dismissal.
    const timer = window.setInterval(() => {
      if (!document.hidden && !document.querySelector("dialog[open]")) setIsOpen(true);
    }, MODAL_DELAY_MS);
    return () => window.clearInterval(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        const focusable = panel.current?.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex="0"]');
        const first = focusable?.[0];
        const last = focusable?.[focusable.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === panel.current)) {
          event.preventDefault(); last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first?.focus();
        }
      }
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    panel.current?.focus();

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="sez-modal" role="presentation" onMouseDown={() => setIsOpen(false)}>
      <section
        className="sez-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sez-modal-title"
        ref={panel}
        tabIndex={-1}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="sez-modal__close" type="button" aria-label="Close modal" onClick={() => setIsOpen(false)}>
          <span />
          <span />
        </button>

        <div className="sez-modal__image-wrap">
          <img src={asset("Rectangle 49.svg")} alt="Aerial view of a special economic zone district" />
        </div>

        <div className="sez-modal__content">
          <span className="sez-modal__eyebrow">Special Economic Zone</span>
          <h2 id="sez-modal-title">
            Built for Business.
            <br />
            Positioned for <em>Growth.</em>
          </h2>
          <p>
            Discover strategic commercial opportunities within a Special Economic Zone designed to
            support businesses, investment, and long-term growth.
          </p>

          <div className="sez-modal__features">
            <article>
              <span className="sez-modal__feature-icon sez-modal__feature-icon--pin" aria-hidden="true" />
              <h3>Strategic Location</h3>
              <p>Prime connectivity & accessibility</p>
            </article>
            <article>
              <span className="sez-modal__feature-icon sez-modal__feature-icon--briefcase" aria-hidden="true" />
              <h3>Business Ready</h3>
              <p>Enterprise-focused infrastructure</p>
            </article>
          </div>

          <a className="sez-modal__cta" href="/sez" onClick={() => setIsOpen(false)}>
            Explore the SEZ
          </a>
        </div>
      </section>
    </div>
  );
}
