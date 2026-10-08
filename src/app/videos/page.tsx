import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { VideoMarquee } from "../../components/VideoMarquee";
import { categoryVideos, latestVideos } from "../../data/video-library";
import { asset } from "../../lib/assets";
import "../residential.css";
import "../videos.css";

export const metadata: Metadata = { title: "Videos | Corporate Lion", description: "Explore project walkthroughs, workspace solutions, expert insights and client stories from Corporate Lion." };

export default function VideosPage() {
  return <main className="residential-page videos-page">
    <section className="residential-hero" aria-labelledby="videos-title">
      <img className="residential-hero__image" src={asset("videos/hero.webp")} alt="" fetchPriority="high" />
      <SiteHeader />
      <div className="residential-container residential-hero__content">
        <span className="residential-eyebrow">Our Videos</span>
        <h1 id="videos-title">Insights, Stories<br />and Opportunities</h1>
        <p>Explore our video library for project tours, market insights, client stories and the latest opportunities in real estate.</p>
      </div>
    </section>
    <VideoMarquee id="video-categories" title="Videos by" accent="Category" videos={categoryVideos} variant="portrait" />
    <VideoMarquee id="latest-videos" title="Latest" accent="Videos" videos={latestVideos} variant="landscape" />
    <SiteFooter />
  </main>;
}
