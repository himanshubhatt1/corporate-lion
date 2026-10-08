"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import type { CareerPosition } from "../data/careers";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;

export function CareerApplicationForm({ position }: { position: CareerPosition }) {
  const [resumeName, setResumeName] = useState("");
  const [resumeError, setResumeError] = useState("");
  const [checkingResume, setCheckingResume] = useState(false);
  const [emailDraft, setEmailDraft] = useState("");
  const selectionVersion = useRef(0);

  async function selectResume(event: ChangeEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const file = input.files?.[0];
    const version = ++selectionVersion.current;
    input.setCustomValidity("");
    setResumeName(""); setResumeError(""); setEmailDraft("");
    if (!file) { setCheckingResume(false); return; }
    setCheckingResume(true);
    let error = "";
    if (file.size > MAX_RESUME_BYTES) error = "Your resume must be 5 MB or smaller.";
    else if (!/\.pdf$/i.test(file.name) || (file.type && file.type !== "application/pdf")) error = "Please select a PDF resume.";
    else {
      try {
        const header = new TextDecoder().decode(await file.slice(0, 5).arrayBuffer());
        if (header !== "%PDF-") error = "This file is not a valid PDF. Please choose another resume.";
      } catch { error = "This file could not be read. Please select it again."; }
    }
    if (version !== selectionVersion.current) return;
    setCheckingResume(false);
    setResumeError(error);
    input.setCustomValidity(error);
    if (error) input.value = "";
    else setResumeName(file.name);
  }

  function prepareApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (checkingResume || !resumeName || resumeError) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const field = (name: string) => String(data.get(name) ?? "").trim();
    const body = [
      `Hello Corporate Lion team,`, "",
      `I would like to apply for the ${position.title} role.`, "",
      `Full name: ${field("fullName")}`,
      `Contact number: ${field("phone")}`,
      `Email: ${field("email")}`,
      `LinkedIn: ${field("linkedin")}`,
      `Department: ${position.department}`,
      `Location: ${position.location}`, "",
      `Resume to attach before sending: ${resumeName}`,
    ].join("\n");
    // Mail links cannot attach local files. Show that remaining step explicitly;
    // never report an application as submitted without a delivery service.
    setEmailDraft(`mailto:info@corporatelion.com?subject=${encodeURIComponent(`Career application: ${position.title}`)}&body=${encodeURIComponent(body)}`);
  }

  return (
    <form className="career-application" onSubmit={prepareApplication} onChange={() => setEmailDraft("")}>
      <h3>Apply for this role</h3>
      <div className="career-application__fields">
        <label>Full Name *<input name="fullName" autoComplete="name" required maxLength={120} pattern=".*\S.*" title="Enter your full name." /></label>
        <label>Contact Number *<input name="phone" type="tel" autoComplete="tel" required maxLength={25} onInput={(event) => {
          const input = event.currentTarget;
          const digits = input.value.replace(/\D/g, "");
          input.setCustomValidity(/^[+\d\s().-]+$/.test(input.value) && digits.length >= 7 && digits.length <= 15 ? "" : "Enter a valid contact number (7–15 digits).");
        }} /></label>
        <label>Email *<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
        <label>LinkedIn ID / URL *<input name="linkedin" type="text" autoCapitalize="none" spellCheck={false} placeholder="https://linkedin.com/in/your-profile" required maxLength={200} pattern=".*\S.*" /></label>
      </div>
      <div className="career-application__resume">
        <label htmlFor="career-resume">Resume *</label>
        <div className={`career-upload${resumeError ? " career-upload--error" : ""}`}>
          <input id="career-resume" name="resume" type="file" accept=".pdf,application/pdf" required onChange={selectResume} aria-describedby="career-resume-help career-resume-status" aria-invalid={Boolean(resumeError)} />
          <svg viewBox="0 0 24 28" aria-hidden="true"><path d="M4 0h10l6 7v19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Z" fill="currentColor" /><path d="M14 0v8h6M11 22V13m-4 4 4-4 4 4" fill="none" stroke="#fffaf2" strokeWidth="2" strokeLinejoin="round" /></svg>
          <span id="career-resume-help">Select PDF Resume (Maximum 5 MB)</span>
          <span id="career-resume-status" className="career-upload__status" aria-live="polite">{checkingResume ? "Checking resume…" : resumeError || resumeName || "No file selected"}</span>
        </div>
      </div>
      <button className="career-application__submit" type="submit" disabled={checkingResume}>Submit Application <span aria-hidden="true">→</span></button>
      {emailDraft && <div className="career-application__handoff" role="status">
        <p>Your application is ready to email. Open your draft, attach <strong>{resumeName}</strong>, and send it to complete your application.</p>
        <a href={emailDraft}>Open email draft <span aria-hidden="true">↗</span></a>
      </div>}
    </form>
  );
}
