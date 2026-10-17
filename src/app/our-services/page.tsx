import type { Metadata } from "next";
import { PartnerLogoMarquee } from "../../components/PartnerLogoMarquee";
import { SegmentStack } from "../../components/SegmentStack";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { ServicesContactButton } from "../../components/ServicesContactButton";
import { ServicesFilm } from "../../components/ServicesFilm";
import { servicesIntroduction } from "../../data/services";
import { asset } from "../../lib/assets";

export const metadata: Metadata = {
  title: "Our Services | Corporate Lion",
  description: "Explore Corporate Lion’s luxury residential, commercial, industrial and SEZ real estate advisory services."
};

export default function OurServicesPage() {
  return <main className="services-page">
    <section className="services-hero" id="top">
      <img className="services-hero__image" src={asset("home/hero.webp")} alt="" fetchPriority="high" />
      <SiteHeader />
      <div className="services-container services-hero__content">
        <span className="services-eyebrow">Our Services</span>
        <h1>Solutions for<br />Every <span>Real Estate Ambition</span></h1>
        <p>With 15+ years of market experience, Corporate Lion combines real estate intelligence, strategic advisory and transaction expertise to navigate opportunities with precision and purpose.</p>
        <ServicesContactButton />
      </div>
    </section>
    <SegmentStack />
    <section className="services-partners" id="services-clients" aria-label="Our clients and developers">
      <div className="services-partner-collections">
        {["Clients", "Developers"].map(group => <div className="services-partner-group" key={group}>
          <div className="services-container services-section-heading"><h2>Our <span>{group}</span></h2><p>{servicesIntroduction}</p></div>
          <PartnerLogoMarquee label={group} />
        </div>)}
      </div>
    </section>
    <section className="services-story" aria-labelledby="services-story-title">
      <div className="services-container">
        <div className="services-section-heading"><h2 id="services-story-title">Our Real <span>Estate Services</span></h2><p>{servicesIntroduction}</p></div>
        <ServicesFilm />
      </div>
    </section>
    <SiteFooter />
  </main>;
}
