"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "../lib/assets";

const MODAL_STORAGE_KEY = "corporate-lion-sez-modal-seen";
const MODAL_DELAY_MS = 7000;

export function HomeSezModal() {
  const [isOpen, setIsOpen] = useState(false);
  const panel = useRef<HTMLElement>(null);

  useEffect(() => {
    const isPreview = new URLSearchParams(window.location.search).has("previewSezModal");

    if (isPreview) {
      setIsOpen(true);
      return;
    }

    // Shown once per browsing session, so a later visit sees it again.
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(MODAL_STORAGE_KEY) === "true";
    } catch {
      seen = false;
    }

    if (seen) {
      return;
    }

    const timer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(MODAL_STORAGE_KEY, "true");
      } catch {
        // Storage can be unavailable in private mode; the modal still opens.
      }
      setIsOpen(true);
    }, MODAL_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
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
      previouslyFocused?.focus();
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

          <a className="sez-modal__cta" href="/commercial-leasing" onClick={() => setIsOpen(false)}>
            Explore the SEZ
          </a>
        </div>
      </section>
    </div>
  );
}
