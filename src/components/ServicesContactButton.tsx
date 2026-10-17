"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ContactForm } from "./ContactForm";

function ServicesContactDialog({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialog.current;
    const trigger = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      trigger?.focus({ preventScroll: true });
    };
  }, []);

  return createPortal(
    <dialog ref={dialog} className="services-contact-dialog" aria-labelledby="services-contact-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}>
      <div className="services-contact-dialog__header">
        <span id="services-contact-title">Contact Our Advisory Team</span>
        <button type="button" aria-label="Close contact form" onClick={onClose} autoFocus><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </div>
      <div className="advisory-contact services-contact-dialog__body"><ContactForm reveal={false} /></div>
    </dialog>, document.body
  );
}

type ContactButtonProps = {
  label?: string;
  className?: string;
};

export function ServicesContactButton({ label = "Our Services", className = "services-button" }: ContactButtonProps) {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" className={className} aria-haspopup="dialog" onClick={() => setOpen(true)}>
      {label} <span aria-hidden="true">→</span>
    </button>
    {open && <ServicesContactDialog onClose={() => setOpen(false)} />}
  </>;
}
