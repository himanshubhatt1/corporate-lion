import type { Metadata } from "next";
import { CareerOpportunities } from "../../components/CareerOpportunities";
import { CareerTimeline } from "../../components/CareerTimeline";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { asset } from "../../lib/assets";

export const metadata: Metadata = {
  title: "Careers | Corporate Lion",
  description: "Find your next opportunity at Corporate Lion. Explore careers in real estate advisory, research, marketing, and operations.",
};

export default function CareersPage() {
  return (
    <main className="careers-page">
      <section className="careers-hero">
        <img className="careers-hero__image" src={asset("careers-banner.svg")} alt="" fetchPriority="high" />
        <SiteHeader />
        <div className="careers-container careers-hero__content">
          <span className="careers-eyebrow">Careers at Corporate Lion</span>
          <h1>We Don’t Just Hire Experience.<br /><span>We Hire Potential.</span></h1>
          <p>Whether you’re starting your real estate career or taking the next step,<br className="careers-desktop-break" /> Corporate Lion offers a dynamic environment to learn, contribute, and grow.</p>
        </div>
      </section>
      <CareerOpportunities />
      <CareerTimeline />
      <SiteFooter />
    </main>
  );
}
