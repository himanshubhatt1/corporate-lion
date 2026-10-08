export type ResidentialFeatureIcon = "building" | "garden" | "escape" | "celebrate";

type Residence = {
  number: string;
  title: string;
  tagline: string;
  paragraphs: string[];
  closing: string;
  image: string;
  alt: string;
  features: { icon: ResidentialFeatureIcon; lines: [string, string] }[];
};

export const residences: Residence[] = [
  {
    number: "01",
    title: "High-Rise Apartments",
    tagline: "Elevated Living, Strategically Positioned.",
    paragraphs: ["We curate premium high-rise residences across sought-after residential corridors, selected for their location, architecture, views, amenities, connectivity, and long-term value.", "Each residence is evaluated to deliver a balance of lifestyle, exclusivity and capital appreciation potential."],
    closing: "For those who want the city at their feet and the sky as their backdrop.",
    image: "residential/apartments.webp",
    alt: "Illuminated high-rise apartment towers against a deep blue evening sky",
    features: [
      { icon: "building", lines: ["Uninterrupted Skyline", "and City Views"] },
      { icon: "building", lines: ["Premium Building", "Amenities"] },
      { icon: "building", lines: ["Enhanced Security and", "Gated Access"] },
    ],
  },
  {
    number: "02",
    title: "Luxury Penthouses",
    tagline: "The Freedom of a Villa, Elevated.",
    paragraphs: ["Our penthouse portfolio comprises expansive duplex and triplex residences offering generous floor plates, panoramic views, private terraces and exceptional privacy.", "These scarce residential assets combine the scale of independent living with the prestige of a landmark high-rise address."],
    closing: "The rare combination of a bungalow’s scale with a flat’s convenience.",
    image: "residential/penthouses.webp",
    alt: "Penthouse terrace with a fire pit and panoramic views of the Dubai skyline",
    features: [
      { icon: "building", lines: ["Duplex/triplex layouts", "with Private Terraces"] },
      { icon: "building", lines: ["Panoramic", "360° Skyline Views"] },
      { icon: "building", lines: ["Enhanced Security and", "Gated Access"] },
    ],
  },
  {
    number: "03",
    title: "Weekend Homes / Villas",
    tagline: "Your Escape, Your Own Space",
    paragraphs: ["Discover private villas and weekend retreats designed for those who value space, privacy, and unhurried living, offering a seamless escape from the city without compromising on comfort or connectivity."],
    closing: "A retreat close enough to reach, far enough to feel like an escape.",
    image: "residential/villas.webp",
    alt: "Sunlit villa with arched verandas reflected in a private swimming pool",
    features: [
      { icon: "garden", lines: ["Private outdoor space", "(Garden, Pool, Terrace)"] },
      { icon: "escape", lines: ["Escape from", "City Noise and Density"] },
      { icon: "celebrate", lines: ["Ideal for family", "Gatherings and hosting"] },
    ],
  },
  {
    number: "04",
    title: "Residential Plots",
    tagline: "Build It Your Way",
    paragraphs: ["Our residential land opportunities offer clients the flexibility to create a home from the ground up. We focus on strategically located plots with strong connectivity, surrounding development, residential appeal, and long-term appreciation potential."],
    closing: "For buyers who want to design their homes around their life, not the other way around.",
    image: "residential/plots.webp",
    alt: "Green residential land with scattered homes surrounded by trees and hills",
    features: [
      { icon: "building", lines: ["Full Control over design", "and Layout"] },
      { icon: "building", lines: ["Build in phases, on your", "own Timeline"] },
      { icon: "building", lines: ["Typically Higher Long-", "term Appreciation"] },
    ],
  },
];
