import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { ContactEcosystem } from "../../components/ContactEcosystem";
import { contactDetails } from "../../data/site";
import { metrics } from "../../data/home";
import { asset } from "../../lib/assets";

export const metadata: Metadata = {
  title: "About & Contact | Corporate Lion",
  description: "Discover Corporate Lion’s vision, mission, and real estate advisory ecosystem. Connect with our team in Ahmedabad to discuss your next opportunity.",
};

const headquarters = contactDetails.find((detail) => detail.icon === "pin")!;
const email = contactDetails.find((detail) => detail.icon === "mail")!.lines[0];
const phones = contactDetails.find((detail) => detail.icon === "phone")!.lines[0].split(" / ");
const mapQuery = encodeURIComponent(headquarters.lines.join(" "));
const directions = "https://www.google.com/maps/search/?api=1&query=" + mapQuery;
const inquiry = "mailto:" + email + "?subject=Real%20estate%20advisory%20inquiry";
const phoneHref = (phone: string) => "tel:" + phone.replace(/[^+\d]/g, "");

const values = [
  { title: "Vision", strapline: "Greater potential begins with the right connection.", description: "To create an integrated Real Estate Advisory Ecosystem that connects businesses, investors, and property owners with opportunities, enabling each to achieve greater potential through the right real estate decisions.", image: "vission.svg", alt: "A city skyline seen through a picture frame", icon: "vision" },
  { title: "Mission", strapline: "Every real estate journey begins with an objective.", description: "Our mission is to understand that objective and bring together the right market intelligence, property opportunities, industry relationships and transaction expertise to turn it into a successful real estate outcome.", image: "mission.svg", alt: "A target held between city towers", icon: "mission" },
];

export default function ContactPage() {
  return (
    <main className="contact-page" id="top">
      <section className="contact-hero" id="about">
        <img className="contact-hero__image" src={asset("contant-banner.png")} alt="" fetchPriority="high" />
        <SiteHeader />
        <div className="contact-wide contact-hero__content">
          <span className="contact-eyebrow">About Corporate Lion</span>
          <h1>What You Need Shapes What We Find.</h1>
          <p>Flexible workspaces are evolving from cost-effective shared spaces to strategic hubs of<br className="contact-desktop-break" /> agility, scalability, and operational efficiency across every stage of growth.</p>
        </div>
      </section>

      <section className="contact-values contact-container" aria-label="Our vision and mission">
        {values.map((value) => <article className="contact-value" key={value.title} data-reveal="up">
          <div className="contact-value__heading"><h2>{value.title}</h2><span className="contact-value__icon"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {value.icon === "vision" ? <><path d="M2 16S7 7 16 7s14 9 14 9-5 9-14 9S2 16 2 16Z" /><circle cx="16" cy="16" r="5" /></> : <><circle cx="15" cy="17" r="12" /><circle cx="15" cy="17" r="7" /><path d="m15 17 13-13m-6-2v7h7" strokeLinecap="round" strokeLinejoin="round" /></>}
          </svg></span></div>
          <span className="contact-value__strapline">{value.strapline}</span>
          <p>{value.description}</p>
          <img className="contact-value__image" src={asset(value.image)} alt={value.alt} width={545} height={410} loading="lazy" />
        </article>)}
      </section>

      <section className="contact-results" aria-labelledby="contact-results-title">
        <div className="contact-section-heading" data-reveal="up"><span className="contact-eyebrow">Proven Excellence</span><h2 id="contact-results-title">Built on Trust<br /><span>Measured by Results</span></h2></div>
        <div className="contact-wide contact-results__panel" data-reveal="panel">
          {metrics.map((metric) => {
            const [, count, suffix] = metric.value.match(/^([\d.]+)(.*)$/)!;
            return <div className="contact-result" key={metric.label}>
              <img src={asset(metric.icon)} alt="" width={80} height={58} />
              <strong data-count={count} data-suffix={suffix} data-decimals={count.includes(".") ? "1" : "0"} aria-label={metric.value}>{metric.value}</strong>
              <span>{metric.label === "Years of Experience" ? <>Years of<br />Experience</> : metric.label}</span>
            </div>;
          })}
        </div>
      </section>

      <section className="contact-ecosystem" aria-labelledby="contact-ecosystem-title">
        <div className="contact-wide">
          <div className="contact-section-heading" data-reveal="up"><span className="contact-eyebrow">Synergistic Growth</span><h2 id="contact-ecosystem-title">Connecting Real Estate <span>Ecosystem</span></h2><p>A great workspace should make business easier. From finding the right location to managing everyday<br className="contact-desktop-break" /> essentials, we help you work without the usual office overheads.</p></div>
          <ContactEcosystem />
        </div>
      </section>

      <section className="contact-founder-section" aria-labelledby="contact-founder-title">
        <div className="contact-wide contact-founder" data-reveal="up">
          <div className="contact-founder__copy"><h2 id="contact-founder-title">Founder’s Note</h2>
            <p>With over 15 years of industry experience in the real estate sector, Shaktisingh Rao, Founder of Corporate Lion, established the firm on a premise of simplicity: real estate advisory services should begin with understanding the client, not just the property.</p>
            <p>His customer-centric approach is centred on acknowledging each client’s objectives, evaluating the best opportunities, and providing a planned strategy that fulfills both immediate requirements and long-term value.</p>
            <p>Under his leadership, Corporate Lion has developed expertise across commercial, residential, industrial, and strategic real estate opportunities, serving businesses, investors, developers, and individuals with solutions tailored to their specific requirements.</p>
            <p>More than merely facilitating transactions, his ambition is to position Corporate Lion as a trusted strategic real estate advisor, integrating market knowledge, industry connections, and opportunity-centered thinking to support clients in making informed property decisions.</p>
            <a className="contact-button" href="https://in.linkedin.com/in/shaktisinghrao" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">→</span></a>
          </div>
          <figure className="contact-founder__portrait"><img src={asset("SHAKTISINGH RAO.svg")} alt="Shaktisingh Rao, founder of Corporate Lion" width={470} height={540} loading="lazy" /><figcaption><strong>Shaktisingh Rao</strong><span>Co-Founder and Managing Director</span></figcaption></figure>
        </div>
      </section>

      <section className="contact-conversation" aria-labelledby="contact-conversation-title">
        <img className="contact-conversation__image" src={asset("advisory.svg")} alt="" loading="lazy" />
        <div className="contact-wide contact-conversation__content" data-reveal="up"><span className="contact-eyebrow">Private Advisory Desk</span><h2 id="contact-conversation-title">Every Great Opportunity<br />Begins with a Conversation.</h2><p>Every significant real estate decision begins with a precise brief, trusted<br className="contact-desktop-break" /> counsel, and a clear path to action.</p><div className="contact-conversation__actions"><a className="contact-button" href={inquiry}>Submit Inquiry <span aria-hidden="true">→</span></a><a className="contact-button contact-button--outline" href={phoneHref(phones[0])}>Call the Desk <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6a1 1 0 0 0-1 .25l-2.2 2.2a15 15 0 0 1-6.6-6.6l2.2-2.2a1 1 0 0 0 .25-1A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1Z" /></svg></a></div></div>
      </section>

      <section className="contact-desk" id="contact-desk" aria-labelledby="contact-desk-title">
        <div className="contact-container"><div className="contact-section-heading" data-reveal="up"><h2 id="contact-desk-title">Let’s Talk About Your<br /><span>Next Opportunity.</span></h2><p>Whether you are looking to lease Grade-A office space, acquire commercial assets, develop prime land, or unlock strategic value, our advisory desk is ready to assist.</p></div>
          <div className="contact-desk__details">
            <div className="contact-desk__item"><img src={asset("location.svg")} alt="" /><div><h3>Corporate Headquarters</h3><a href={directions} target="_blank" rel="noreferrer">{headquarters.lines.map((line) => <span key={line}>{line}</span>)}</a></div></div>
            <div className="contact-desk__item"><img src={asset("phone.svg")} alt="" /><div><h3>Direct Advisory Desk</h3><div className="contact-desk__phones">{phones.map((phone, index) => <span key={phone}>{index > 0 && " / "}<a href={phoneHref(phone)}>{phone}</a></span>)}</div></div></div>
            <div className="contact-desk__item"><img src={asset("mail.svg")} alt="" /><div><h3>Electronic Mail</h3><a href={"mailto:" + email}>{email}</a></div></div>
          </div>
        </div>
      </section>

      <section className="contact-location" id="location" aria-labelledby="contact-location-title">
        <div className="contact-container">
          <div className="contact-location__heading"><div><span className="contact-eyebrow">Google Maps / Location</span><h2 id="contact-location-title">At the heart of <span>Gujarat.</span></h2></div><p>Meetings are by appointment, allowing our team to prepare around your objectives before you arrive.</p></div>
          <div className="contact-location__panel" data-reveal="up">
            <article className="contact-office"><div className="contact-office__frame"><span className="contact-eyebrow">Corporate Headquarters</span><h3>Gujarat Advisory<br />Office</h3><p>{headquarters.lines.map((line) => <span key={line}>{line}</span>)}</p><div className="contact-office__hours"><div><span>Weekdays</span><strong>9:30 AM–6:30 PM</strong></div><div><span>Saturday</span><strong>By Appointment</strong></div></div></div></article>
            <div className="contact-map"><div className="contact-map__heading"><span>Office Location</span><a href={directions} target="_blank" rel="noreferrer">Get Directions <span aria-hidden="true">→</span></a></div><a className="contact-map__frame" href={directions} target="_blank" rel="noreferrer" aria-label="Open the interactive map and office directions in Google Maps"><img src={asset("contact/ahmedabad-map.webp")} alt="Map preview of Ahmedabad" width={680} height={430} loading="lazy" /></a></div>
          </div>
        </div>
      </section>

      <section className="contact-clarity" aria-labelledby="contact-clarity-title"><div className="contact-container"><h2 id="contact-clarity-title">Ready to move with <span>clarity?</span></h2><p>For confidential property conversations, our advisory desk is structured to<br className="contact-desktop-break" /> respond with discretion, context, and a senior point of view.</p><a className="contact-button" href={inquiry}>Begin the Conversation <span aria-hidden="true">→</span></a></div></section>
      <SiteFooter />
    </main>
  );
}
