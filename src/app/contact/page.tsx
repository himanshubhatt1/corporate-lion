import type { Metadata } from "next";
import { AdvisoryContact } from "../../components/AdvisoryContact";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { asset } from "../../lib/assets";

export const metadata: Metadata = {
  title: "Contact Us | Corporate Lion",
  description:
    "Start a confidential conversation with Corporate Lion's real estate advisory desk."
};

const proofItems = [
  { value: "4h", count: "4", suffix: "h", label: "Priority Response" },
  { value: "100%", count: "100", suffix: "%", label: "Confidential Briefs" },
  { value: "Gujrat", label: "Headquarters" }
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero" id="top">
        <img className="contact-hero__image" src={asset("contact-hero-support.svg")} alt="" aria-hidden="true" />
        <SiteHeader tone="light" />

        <div className="contact-hero__content">
          <span className="eyebrow">Private Advisory Desk</span>
          <h1>
            Let&apos;s start a
            <br />
            conversation.
          </h1>
          <p>
            Every significant real estate decision begins with a precise brief, trusted counsel,
            and a clear path to action.
          </p>
          <div className="contact-hero__actions">
            <a className="button button--primary" href="#contact-desk">
              Submit Inquiry <span aria-hidden="true">→</span>
            </a>
            <a className="button button--outline" href="tel:+912268009000">
              Call the Desk
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6a1 1 0 0 0-1 .25l-2.2 2.2a15 15 0 0 1-6.6-6.6l2.2-2.2a1 1 0 0 0 .25-1A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1Z" /></svg>
            </a>
          </div>
          <div className="contact-proof" aria-label="Advisory proof points">
            {proofItems.map((item) => (
              <div key={item.label}>
                {item.count ? (
                  <strong data-count={item.count} data-suffix={item.suffix} aria-label={item.value}>
                    {item.value}
                  </strong>
                ) : (
                  <strong>{item.value}</strong>
                )}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdvisoryContact id="contact-desk" />

      <section className="contact-location" id="location">
        <img className="contact-location__texture" src={asset("contact-map-lines.png")} alt="" aria-hidden="true" />
        <div className="contact-container">
          <div className="contact-location__heading">
            <div className="contact-title contact-title--left" data-reveal="up">
              <span className="eyebrow">Google Maps / Location</span>
              <h2>
                At the heart of <em>Gujrat.</em>
              </h2>
            </div>
            <p data-reveal="right">
              Meetings are by appointment, allowing our team to prepare around your objectives
              before you arrive.
            </p>
          </div>

          <div className="location-panel" data-reveal="panel">
            <article className="location-office">
              <div className="location-office__frame">
                <span className="location-office__eyebrow">Corporate Headquarters</span>
                <h3>
                  Gujrat Advisory
                  <br />
                  Office
                </h3>
                <p>
                  Level 18, Express Towers Nariman Point
                  <br />
                  Gujrat, Maharashtra 400021 India
                </p>
                <div className="office-hours">
                  <div>
                    <small>Weekdays</small>
                    <strong>9:30 AM-6:30 PM</strong>
                  </div>
                  <div>
                    <small>Saturday</small>
                    <strong>By Appointment</strong>
                  </div>
                </div>
              </div>
            </article>

            <article className="location-map">
              <div className="location-map__top">
                <span className="location-map__label">Interactive Location</span>
                <a href="https://www.google.com/maps/search/?api=1&query=Ahmedabad%2C%20Gujarat" target="_blank" rel="noreferrer">
                  Get Directions <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="location-map__frame">
                <iframe
                  title="Corporate Lion office location in Ahmedabad"
                  src="https://maps.google.com/maps?q=Ahmedabad%2C%20Gujarat&z=12&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <img className="contact-cta__image" src={asset("contact-cta-people.svg")} alt="" aria-hidden="true" />
        <div className="contact-container contact-title" data-reveal="up">
          <span className="eyebrow">Strategic Mandates Welcome</span>
          <h2>
            Ready to move with{" "}
            <br />
            <em>clarity?</em>
          </h2>
          <p>
            For confidential property conversations, our advisory desk is structured to respond
            with discretion, context, and a senior point of view.
          </p>
          <a className="button button--primary" href="#contact-desk">
            Begin the Conversation <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
