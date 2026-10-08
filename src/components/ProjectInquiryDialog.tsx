"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { asset } from "../lib/assets";

export function ProjectInquiryDialog({ projectName, onClose }: { projectName: string; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const [emailDraft, setEmailDraft] = useState("");

  useEffect(() => {
    const element = dialog.current;
    if (!element?.open) returnFocus.current = document.activeElement as HTMLElement | null;
    element?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      returnFocus.current?.focus({ preventScroll: true });
    };
  }, []);

  function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();
    const body = ["Hello Corporate Lion team,", "", `I would like to ${field("intent").toLowerCase()} a property.`, "", `Project: ${field("project")}`, `Full name: ${field("name")}`, `Contact number: ${field("phone")}`, `Email: ${field("email")}`, "", "Please contact me with more details."].join("\n");
    setEmailDraft(`mailto:info@corporatelion.com?subject=${encodeURIComponent(`Project inquiry: ${field("project")}`)}&body=${encodeURIComponent(body)}`);
  }

  return (
    <dialog ref={dialog} className="project-dialog" aria-labelledby="project-inquiry-title" onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="project-dialog__header">
        <span>Project Inquiry</span>
        <button type="button" aria-label="Close project inquiry" onClick={onClose} autoFocus>×</button>
      </div>
      <div className="project-dialog__body">
        <div className="project-dialog__visual">
          <img src={asset("project-popup.svg")} alt="" />
          <div className="project-dialog__intro">
            <span>Let’s Talk</span>
            <h3>Your Next Opportunity<br />Starts Here.</h3>
            <p>Share a few details and our team<br />will get in touch with you shortly.</p>
          </div>
          <span className="project-dialog__caption">Premium Spaces Brighter Futures</span>
        </div>
        <div className="project-dialog__content">
          <h2 id="project-inquiry-title">Tell Us About <span>Your Interest</span></h2>
          <p>Fill in the details and we’ll connect with you soon.</p>
          <form className="project-inquiry" onSubmit={prepareInquiry} onChange={() => setEmailDraft("")}>
            <div className="project-inquiry__fields">
              <label>Full Name *<input name="name" autoComplete="name" required pattern=".*\S.*" maxLength={120} /></label>
              <label>Contact Number *<input name="phone" type="tel" autoComplete="tel" required maxLength={25} onInput={(event) => {
                const input = event.currentTarget;
                const digits = input.value.replace(/\D/g, "");
                input.setCustomValidity(/^[+\d\s().-]+$/.test(input.value) && digits.length >= 7 && digits.length <= 15 ? "" : "Enter a valid contact number (7–15 digits).");
              }} /></label>
              <label className="project-inquiry__wide">Email *<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
              <label className="project-inquiry__wide">Project Name *<input name="project" defaultValue={projectName} required pattern=".*\S.*" maxLength={160} /></label>
            </div>
            <fieldset className="project-inquiry__intent">
              <legend>What are you looking for? *</legend>
              <div>{["Buy", "Sell", "Lease"].map((intent) => <label key={intent}><input type="radio" name="intent" value={intent} defaultChecked={intent === "Buy"} required /><span>I want to {intent.toLowerCase()}</span></label>)}</div>
            </fieldset>
            <button className="project-inquiry__submit" type="submit">Submit Application <span aria-hidden="true">→</span></button>
            {emailDraft && <div className="project-inquiry__handoff" role="status"><p>Your inquiry is ready. Open the email draft and send it to contact our team.</p><a href={emailDraft}>Open email draft <span aria-hidden="true">↗</span></a></div>}
          </form>
        </div>
      </div>
    </dialog>
  );
}
