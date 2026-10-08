import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { ResidentialFeatureIcon } from "../../components/ResidentialFeatureIcon";
import { residences } from "../../data/residential";
import { asset } from "../../lib/assets";
import "../residential.css";

export const metadata: Metadata = {
  title: "Luxury Residential | Corporate Lion",
  description: "Discover curated high-rise apartments, luxury penthouses, weekend homes, villas and residential plots with Corporate Lion.",
};

export default function LuxuryResidentialPage() {
  return <main className="residential-page">
    <section className="residential-hero" aria-labelledby="residential-title">
      <img className="residential-hero__image" src={asset("residential/hero.webp")} alt="" fetchPriority="high" />
      <SiteHeader />
      <div className="residential-container residential-hero__content">
        <span className="residential-eyebrow">Luxury Residential</span>
        <h1 id="residential-title">Homes that match<br />the life you’ve built.</h1>
        <p>A home should reflect more than where you live; it should reflect how you choose to live. We bring together exceptional apartments, penthouses, villas, weekend retreats, and residential plots, each offering a distinct opportunity to create a lifestyle defined by comfort, privacy, space, and individuality.</p>
        <a className="residential-button" href="#residences">Our Services <span aria-hidden="true">→</span></a>
      </div>
    </section>

    <section className="residential-collection" id="residences" aria-labelledby="residential-collection-title">
      <div className="residential-container">
        <div className="residential-heading">
          <h2 id="residential-collection-title">Residences, <span>Curated around you.</span></h2>
          <p>Discover exceptional apartments, penthouses, villas, and residential plots selected for their distinction, location, privacy, and long-term value.</p>
        </div>
        <div className="residential-card-list">
          {residences.map((residence, index) => <article className={`residential-card${index % 2 ? " residential-card--reversed" : ""}`} key={residence.number} tabIndex={0} aria-labelledby={`residence-${residence.number}`}>
            <div className="residential-card__copy">
              <div className="residential-card__heading">
                <span className="residential-card__number" aria-hidden="true">{residence.number}</span>
                <h3 id={`residence-${residence.number}`}>{residence.title}</h3>
                <span className="residential-card__tagline">{residence.tagline}</span>
              </div>
              <div className="residential-card__description">{residence.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
              <div className="residential-card__footer">
                <p className="residential-card__closing">{residence.closing}</p>
                <ul className="residential-card__features">{residence.features.map(feature => <li key={feature.lines[0]}><ResidentialFeatureIcon name={feature.icon} /><span>{feature.lines[0]}<br />{feature.lines[1]}</span></li>)}</ul>
              </div>
            </div>
            <div className="residential-card__visual"><img src={asset(residence.image)} alt={residence.alt} width={484} height={640} loading="lazy" /></div>
          </article>)}
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
