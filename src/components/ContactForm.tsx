"use client";

import { useState } from "react";
import { interestOptions } from "../data/site";

export function ContactForm() {
  const [interest, setInterest] = useState(interestOptions[0]);

  return (
    <form className="inquiry-form" data-reveal="right">
      <h3>Start a Conversation</h3>
      <div className="form-grid">
        <label>
          Full Name *
          <input name="name" autoComplete="name" placeholder="e.g. Vikramaditya Singhania" />
        </label>
        <label>
          Company / Organization Name
          <input name="company" autoComplete="organization" placeholder="e.g. Apex Holdings Ltd." />
        </label>
        <label>
          Email Address *
          <input name="email" type="email" autoComplete="email" placeholder="vikram@apexholdings.com" />
        </label>
        <label>
          Phone Number *
          <input name="phone" type="tel" autoComplete="tel" placeholder="+91 98000 00000" />
        </label>
      </div>

      <fieldset className="interest-chips">
        <legend>I am interested in: *</legend>
        <div>
          {interestOptions.map((option) => (
            <button
              type="button"
              className={option === interest ? "is-active" : undefined}
              aria-pressed={option === interest}
              onClick={() => setInterest(option)}
              key={option}
            >
              {option}
            </button>
          ))}
        </div>
        <input type="hidden" name="interest" value={interest} />
      </fieldset>

      <label>
        Strategic Objectives / Message
        <textarea
          name="message"
          placeholder="Provide brief details regarding your real estate requirements, location preferences, or asset size..."
        />
      </label>

      <button className="button button--primary" type="button">
        Submit Confidential Inquiry
      </button>
      <p className="inquiry-form__note">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10V7a5 5 0 0 1 10 0v3h1.5A1.5 1.5 0 0 1 20 11.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20.5v-9A1.5 1.5 0 0 1 5.5 10Zm2 0h6V7a3 3 0 0 0-6 0Z" /></svg>
        All consultations are strictly NDA-protected and confidential.
      </p>
    </form>
  );
}
