export const projectCategories = ["All", "Residential", "Commercial", "Industrial", "Special Economic Zone"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  location: string;
  description?: string;
  configuration?: string;
  highlights?: string[];
  image: string;
  imageAlt: string;
  badge?: string;
};

// Project details supplied by the client; existing imagery is representative.
export const residentialProjects: Project[] = [
  {
    "id": "kavisha-the-masterpiece",
    "title": "Kavisha The Masterpiece",
    "category": "Residential",
    "location": "South Bopal, Gala Gymkhana Road",
    "highlights": [
      "21 Storeys",
      "7 Towers",
      "4 & 5 BHK",
      "Possession in 2030"
    ],
    "image": "projects/residences.webp",
    "imageAlt": "Representative residential development with landscaped grounds"
  },
  {
    "id": "venus-the-universe",
    "title": "Venus The Universe",
    "category": "Residential",
    "location": "Nehrungar, Near Shivranjini Cross Road",
    "highlights": [
      "22 Storeys",
      "10 Towers",
      "4 BHK",
      "Possession in December 2030"
    ],
    "image": "projects/residential-towers-illustration.webp",
    "imageAlt": "AI-generated illustration of residential towers with balconies and landscaped gardens"
  }
];

export const commercialProjects: Project[] = [
  {
    "id": "mondeal-one",
    "title": "Mondeal One by HN Safal",
    "category": "Commercial",
    "location": "SG Highway, Ahmedabad",
    "highlights": [
      "35 Storeys",
      "1 Tower",
      "Retail & Offices",
      "Possession in December 2026"
    ],
    "image": "Rectangle 31.svg",
    "imageAlt": "Representative modern glass-fronted commercial buildings"
  },
  {
    "id": "mondeal-two",
    "title": "Mondeal Two by HN Safal",
    "category": "Commercial",
    "location": "Iscon Ambli, Near Double Tree Hilton",
    "highlights": [
      "12 Storeys",
      "1 Tower",
      "Retail & Offices",
      "Possession in December 2026"
    ],
    "image": "projects/commercial-offices-illustration.webp",
    "imageAlt": "AI-generated illustration of a glass-fronted office and retail building at dusk"
  }
];

// Other categories invite an inventory enquiry rather than inventing listings.
export const projectCollections: Project[] = [
  { id: "industrial-collection", title: "Industrial Opportunities", category: "Industrial", location: "Locations on request", description: "Discover spaces for manufacturing, warehousing, and logistics.", configuration: "Industrial Spaces", image: "home/industrial.webp", imageAlt: "Industrial processing facility", badge: "Industrial Collection" },
  { id: "sez-collection", title: "Special Economic Zones", category: "Special Economic Zone", location: "Locations on request", description: "Speak with our team about business-ready spaces in Special Economic Zones.", configuration: "Business Spaces", image: "home/sez.webp", imageAlt: "Aerial view of industrial and business infrastructure", badge: "SEZ Collection" },
];

export const projects = [...residentialProjects, ...commercialProjects, ...projectCollections];

