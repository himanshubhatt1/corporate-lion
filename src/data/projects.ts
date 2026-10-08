export const projectCategories = ["All", "Luxury Residential", "Luxury Commercial", "Industrial", "Special Economic Zone"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  location: string;
  description: string;
  configuration: string;
  image: string;
  imageAlt: string;
  badge?: string;
};

// Residential imagery and copy follow the supplied project collection.
const residentialImages = [
  ["villa-pool", "Contemporary villa overlooking a private swimming pool"],
  ["waterfront", "Waterfront villa and swimming pool illuminated at dusk"],
  ["poolside", "Tropical pool terrace with palm trees and loungers"],
  ["residences", "Curved residential development with landscaped grounds"],
  ["courtyard", "Mediterranean villas surrounding a courtyard pool"],
  ["suite", "Garden-facing luxury bedroom with full-height windows"],
  ["villa-pool", "Private pool beside a modern residence"],
  ["residences", "Contemporary residential community"],
  ["poolside", "Landscaped tropical swimming pool"],
];

export const residentialProjects: Project[] = residentialImages.map(([image, imageAlt], index) => ({
  id: `residential-${index + 1}`,
  title: "Sovereign Bay Villas",
  category: "Luxury Residential",
  location: "Vasco da Gama, Goa",
  description: "Private-pool villas inside an exclusive 5-star branded coastal master community.",
  configuration: "3 & 4 Bed Villas",
  image: `projects/${image}.webp`,
  imageAlt,
}));

// Other categories invite an inventory enquiry rather than inventing listings.
export const projectCollections: Project[] = [
  { id: "commercial-collection", title: "Commercial Opportunities", category: "Luxury Commercial", location: "Locations on request", description: "Explore premium commercial spaces with our real estate advisory team.", configuration: "Office & Retail", image: "Rectangle 31.svg", imageAlt: "Modern glass-fronted commercial buildings", badge: "Commercial Collection" },
  { id: "industrial-collection", title: "Industrial Opportunities", category: "Industrial", location: "Locations on request", description: "Discover spaces for manufacturing, warehousing, and logistics.", configuration: "Industrial Spaces", image: "home/industrial.webp", imageAlt: "Industrial processing facility", badge: "Industrial Collection" },
  { id: "sez-collection", title: "Special Economic Zones", category: "Special Economic Zone", location: "Locations on request", description: "Speak with our team about business-ready spaces in Special Economic Zones.", configuration: "Business Spaces", image: "home/sez.webp", imageAlt: "Aerial view of industrial and business infrastructure", badge: "SEZ Collection" },
];

export const projects = [...residentialProjects, ...projectCollections];
