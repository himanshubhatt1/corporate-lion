"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { workspaceCities, workspaceOptions, type CoworkingInquiry } from "../data/coworking";
import { contactDetails } from "../data/site";
import { asset } from "../lib/assets";

export function CoworkingDialog({ inquiry, onClose }: { inquiry: CoworkingInquiry; onClose: () => void }) {
  const listing = inquiry.mode === "listing";
  const dialog = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const [city, setCity] = useState("");
  const [emailDraft, setEmailDraft] = useState("");

  useEffect(() => {
    const element = dialog.current;
    if (!element?.open) returnFocus.current = document.activeElement as HTMLElement | null;
    element?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; returnFocus.current?.focus({ preventScroll: true }); };
  }, []);

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (key: string) => String(data.get(key) ?? "").trim();
    const subject = listing ? `Co-working property listing: ${field("space")}` : `Workspace requirement: ${field("organisation")}`;
    const body = ["Hello Corporate Lion team,", "", ...(listing ? ["I would like to list my co-working space.", `Space name: ${field("space")}`, `Contact person: ${field("contact")}`] : ["I would like to discuss a workspace and arrange a tour.", `Organisation: ${field("organisation")}`, `Workspace service: ${field("service")}`, `Desks / sq. ft. range: ${field("capacity") || "To be discussed"}`]), `Email: ${field("email")}`, `Phone: ${field("phone")}`, `Location: ${field("location") === "Other" ? field("otherCity") : field("location")}`, "", `Other details: ${field("details") || "None provided"}`].join("\n");
    const email = contactDetails.find((detail) => detail.icon === "mail")!.lines[0];
    setEmailDraft(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }

  return <dialog ref={dialog} className={`coworking-dialog coworking-dialog--${inquiry.mode}`} aria-labelledby="coworking-dialog-title" onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="coworking-dialog__header"><span>{listing ? "List Your Space" : "Share Your Requirement"}</span><button type="button" aria-label="Close workspace form" onClick={onClose} autoFocus>×</button></div>
    <div className="coworking-dialog__body">
      <div className="coworking-dialog__visual">
        <img src={asset(listing ? "coworking/popup-1.webp" : "coworking/popup-2.webp")} alt="" />
        <div className="coworking-dialog__intro"><span>{listing ? "Grow Together" : "Work Better Together"}</span><h3>{listing ? <>List Your<br />Co-working Space</> : <>Find Your<br />Ideal Workspace.</>}</h3><p>{listing ? "Get your co-working space in front of businesses, startups and professionals looking for the perfect workspace." : "Share your requirements and our team will help you find the right co-working solution."}</p></div>
        <span className="coworking-dialog__caption">Spaces for a Brighter Tomorrow</span>
      </div>
      <div className="coworking-dialog__content">
        <h2 id="coworking-dialog-title">{listing ? <>Let’s Get Your <span>Space Listed</span></> : <>Let’s Find the Right<br /><span>Workspace for You.</span></>}</h2>
        <p>{listing ? "Share the details below and our team will get in touch with you shortly." : "Tell us a bit about your requirement and our team will get in touch shortly."}</p>
        <form className="coworking-form" onSubmit={prepareEmail} onChange={() => setEmailDraft("")}>
          <div className="coworking-form__fields">
            {listing ? <><label>Name of Co-working Space *<input name="space" required pattern=".*\S.*" maxLength={160} /></label><label>Name of SPOC *<input name="contact" autoComplete="name" title="Single point of contact" required pattern=".*\S.*" maxLength={120} /></label></> : <label>Name of Organisation *<input name="organisation" autoComplete="organization" required pattern=".*\S.*" maxLength={160} /></label>}
            <label>Email *<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
            <label className={listing ? undefined : "coworking-form__wide"}>Phone No. *<input name="phone" type="tel" autoComplete="tel" required maxLength={25} onInput={(event) => {
              const input = event.currentTarget;
              const digits = input.value.replace(/\D/g, "");
              input.setCustomValidity(/^[+\d\s().-]+$/.test(input.value) && digits.length >= 7 && digits.length <= 15 ? "" : "Enter a valid phone number (7–15 digits).");
            }} /></label>
            {listing ? <label className="coworking-form__wide">Location *<input name="location" autoComplete="address-level2" required pattern=".*\S.*" maxLength={200} /></label> : <>
              <fieldset className="coworking-form__services coworking-form__wide"><legend>Which coworking services are you interested in? *</legend><div>{workspaceOptions.map((option) => <label key={option.id}><input type="radio" name="service" value={option.title} defaultChecked={inquiry.service === option.title} required /><span>{option.title}</span></label>)}</div></fieldset>
              <label>Location *<span className="coworking-form__select"><select name="location" value={city} onChange={(event) => setCity(event.target.value)} required><option value="" disabled>Select City</option>{workspaceCities.map((location) => <option key={location}>{location}</option>)}</select><svg viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m2 2 6 6 6-6" /></svg></span></label>
              <label>No. of Desks or Sq. Ft. Range.<input name="capacity" maxLength={80} /></label>
              {city === "Other" && <label className="coworking-form__wide">Preferred City *<input name="otherCity" autoComplete="address-level2" required pattern=".*\S.*" maxLength={100} /></label>}
            </>}
            <label className="coworking-form__wide coworking-form__details">Any Other Details<textarea name="details" rows={3} maxLength={2000} /></label>
          </div>
          <button className="coworking-form__submit" type="submit">Submit Listing <span aria-hidden="true">→</span></button>
          {emailDraft && <div className="coworking-form__handoff" role="status"><p>Your {listing ? "listing details are" : "workspace request is"} ready. Open the email draft and send it to contact our team.</p><a href={emailDraft}>Open email draft <span aria-hidden="true">↗</span></a></div>}
        </form>
      </div>
    </div>
  </dialog>;
}
