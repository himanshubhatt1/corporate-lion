import type { Metadata } from "next";
import { ServicesContactButton } from "../../components/ServicesContactButton";
import { ProjectCollection } from "../../components/ProjectCollection";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { asset } from "../../lib/assets";

export const metadata: Metadata = {
  title: "Projects | Corporate Lion",
  description: "Explore Corporate Lion’s curated residential, commercial, industrial, and Special Economic Zone opportunities. Connect with our team about your next property.",
};

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-hero">
        <img className="projects-hero__image" src={asset("projects/hero.webp")} alt="" fetchPriority="high" />
        <SiteHeader />
        <div className="projects-container projects-hero__content">
          <h1>Opportunities worth Exploring</h1>
          <p>Discover properties across emerging and established markets with the potential to create long-term value.</p>
          <ServicesContactButton label="Explore Inventory" className="projects-button" />
        </div>
      </section>
      <ProjectCollection />
      <SiteFooter />
    </main>
  );
}
