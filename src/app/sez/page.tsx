import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { sezBenefits, sezLocations } from "../../data/sez";
import { contactDetails } from "../../data/site";
import { asset } from "../../lib/assets";
import "../residential.css";
import "../sez.css";

export const metadata: Metadata = {
  title: "SEZ | Corporate Lion",
  description: "Explore business spaces and property opportunities in GIFT City, Dholera and Million Minds with Corporate Lion.",
};

function LocationIcon() {
  return <span className="sez-benefit__icon"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 4a12 12 0 1 0 10 16M5 11l5 2 1 5 5 3 1 5m-8-4 3-2m6 8 3-5 5-1M16 5l-3 5-5-1" /><path d="M28 11c0 5-6 10-6 10s-6-5-6-10a6 6 0 1 1 12 0Z" /><circle cx="22" cy="11" r="2" /></svg></span>;
}

export default function SezPage() {
  const email = contactDetails.find(detail => detail.icon === "mail")!.lines[0];
  const listingHref = `mailto:${email}?subject=${encodeURIComponent("SEZ property listing inquiry")}&body=${encodeURIComponent("Hello Corporate Lion team,\n\nI would like to list my property.\n\nName:\nContact number:\nProperty name:\nLocation:\nArea / size:\nAvailability:\nLeasing preferences:\nAdditional details:\n\nPlease contact me to discuss the property.")}`;

  return <main className="residential-page sez-page">
    <section className="residential-hero" aria-labelledby="sez-title">
      <img className="residential-hero__image" src={asset("sez/hero.webp")} alt="" fetchPriority="high" />
      <SiteHeader />
      <div className="residential-container residential-hero__content">
        <span className="residential-eyebrow">Luxury Residential</span>
        <h1 id="sez-title">Homes that match<br />the life you’ve built.</h1>
        <p>A home should reflect more than where you live; it should reflect how you choose to live. We bring together exceptional apartments, penthouses, villas, weekend retreats, and residential plots, each offering a distinct opportunity to create a lifestyle defined by comfort, privacy, space, and individuality.</p>
        <a className="residential-button" href="#sez-locations">Explore Workspaces <span aria-hidden="true">→</span></a>
      </div>
    </section>

    <div className="sez-locations residential-container" id="sez-locations">
      {sezLocations.map((location, index) => <section className="sez-location" key={location.id} aria-labelledby={`${location.id}-title`}>
        <div className={`sez-location__overview${index > 0 ? " sez-location__overview--reversed" : ""}`}>
          <div className="sez-location__copy">
            <h2 id={`${location.id}-title`}>{location.title}</h2>
            <span className="sez-location__tagline">{location.tagline}</span>
            {location.introduction && <p className="sez-location__introduction">{location.introduction}</p>}
            {location.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <img className="sez-location__image" src={asset(location.image)} alt={location.alt} width={554} height={490} loading="lazy" />
        </div>
        <div className="sez-benefits" aria-labelledby={`${location.id}-benefits-title`}>
          <h3 id={`${location.id}-benefits-title`}>Why Invest Here</h3>
          <div className="sez-benefits__grid">
            {sezBenefits.map((benefit, benefitIndex) => <article className="sez-benefit" key={benefit.title} tabIndex={0} aria-labelledby={`${location.id}-benefit-${benefitIndex}`}>
              <LocationIcon />
              <h4 id={`${location.id}-benefit-${benefitIndex}`}>{benefit.title}</h4>
              <p>{benefit.text}</p>
            </article>)}
          </div>
        </div>
      </section>)}
    </div>

    <section className="sez-listing" aria-labelledby="sez-listing-title">
      <div className="sez-listing__inner">
        <span className="residential-eyebrow">List Your Property</span>
        <h2 id="sez-listing-title">Your property deserves more than a listing.<br /><span>It deserves the right tenant.</span></h2>
        <p>Share your property details, location, availability, and leasing preferences. Our<br className="sez-desktop-break" /> team will connect you with suitable businesses looking for the right space.</p>
        <a className="residential-button" href={listingHref}>Submit Property Details <span aria-hidden="true">→</span></a>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
