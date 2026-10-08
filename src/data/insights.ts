import { featuredBlog } from "./blog";

export const insightCategories = [
  "Commercial Markets",
  "Gujarat Growth Corridors",
  "Industrial & Logistics",
  "Investment Strategy",
  "Luxury Living"
];

export const trendCards = [
  {
    id: "logistics-demand",
    href: "#guides",
    tag: "Industrial & Logistics",
    title: "Warehousing moves closer to consumption centres",
    text: "How last-mile demand and infrastructure upgrades are changing location strategy.",
    image: "div.news-image.svg",
    alt: "Commercial development under construction"
  },
  {
    id: "luxury-living",
    href: "#guides",
    tag: "Luxury Residential",
    title: "Privacy, space, and service reshape premium housing",
    text: "The ownership preferences influencing apartments, villas, and second homes.",
    image: "div.news-image (2).svg",
    alt: "Luxury villa overlooking a private swimming pool"
  },
  {
    id: "gift-city",
    href: "#guides",
    tag: "Gift City",
    title: "The new geography of financial services real estate",
    text: "How last-mile demand and infrastructure upgrades are changing location strategy.",
    image: "div.news-image (1).svg",
    alt: "Glass office towers viewed from street level"
  },
  {
    id: "the-future-of-real-estate",
    href: featuredBlog.href,
    tag: "Investment Strategy",
    title: featuredBlog.title,
    text: featuredBlog.summary,
    image: featuredBlog.image,
    alt: featuredBlog.imageAlt
  }
];

export const featuredVideos = [
  {
    tag: "Inside Corporate Lion",
    title: "See the spaces. Feel the possibilities.",
    titleLines: ["See the spaces.", "Feel the possibilities."],
    text: "Step inside thoughtfully selected workplaces and discover the locations, environments.",
    image: "insights/video-workspaces.webp"
  },
  {
    tag: "Prime Locations",
    title: "Where Business Meets Opportunity",
    titleLines: ["Where Business", "Meets Opportunity"],
    text: "Discover strategically located workplaces that keep your business connected.",
    image: "insights/video-locations.webp"
  },
  {
    tag: "Workspace Experience",
    title: "More Than Just an Office",
    titleLines: ["More Than", "Just an Office"],
    text: "From focused work to meaningful collaboration, experience a workspace designed around your day.",
    image: "insights/video-workplace.webp"
  }
];
