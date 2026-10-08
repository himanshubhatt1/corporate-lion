import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { ResidentialFeatureIcon } from "../../components/ResidentialFeatureIcon";
import { industrialServices } from "../../data/industrial";
import { asset } from "../../lib/assets";
import "../residential.css";
import "../luxury-industrial.css";

export const metadata: Metadata = {
  title: "Industrial | Corporate Lion",
  description: "Find industrial land, warehousing and distribution facilities, cold storage, and manufacturing spaces with Corporate Lion.",
};

export default function LuxuryIndustrialPage() {
  return <main className="residential-page luxury-industrial-page">
    <section className="residential-hero" aria-labelledby="industrial-title">
      <img className="residential-hero__image" src={asset("industrial/hero.webp")} alt="" fetchPriority="high" />
      <SiteHeader />
      <div className="residential-container residential-hero__content">
        <span className="residential-eyebrow">Industrial</span>
        <h1 id="industrial-title">Find a facility that keeps<br />your business moving</h1>
        <p>Whether you need land to build, space to manufacture, or infrastructure to move goods, we connect your requirement with the right industrial opportunity.</p>
      </div>
    </section>
    <section className="residential-collection" id="industrial-services" aria-labelledby="industrial-collection-title">
      <div className="residential-container">
        <div className="residential-heading">
          <h2 id="industrial-collection-title">Residences, <span>Curated around you.</span></h2>
          <p>Discover exceptional apartments, penthouses, villas, and residential plots selected for their distinction, location, privacy, and long-term value.</p>
        </div>
        <div className="residential-card-list">
          {industrialServices.map((service, index) => <article className={`residential-card${index % 2 ? " residential-card--reversed" : ""}`} key={service.number} tabIndex={0} aria-labelledby={`industrial-service-${service.number}`}>
            <div className="residential-card__copy">
              <div className="residential-card__heading">
                <span className="residential-card__number" aria-hidden="true">{service.number}</span>
                <h3 id={`industrial-service-${service.number}`}>{service.title}</h3>
                <span className="residential-card__tagline">{service.tagline}</span>
              </div>
              <div className="residential-card__description">{service.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
              <div className="residential-card__footer">
                <p className="residential-card__closing">{service.closing}</p>
                <ul className="residential-card__features">{service.features.map(feature => <li key={feature.lines[0]}><ResidentialFeatureIcon name={feature.icon} /><span>{feature.lines[0]}<br />{feature.lines[1]}</span></li>)}</ul>
              </div>
            </div>
            <div className="residential-card__visual"><img src={asset(service.image)} alt={service.alt} width={484} height={640} loading="lazy" /></div>
          </article>)}
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
