export const industrialServices = [
  {
    number: "01", title: "Industrial Land & Plots", tagline: "The right ground for the operation you're building.",
    paragraphs: ["We identify and verify industrial land and plots with clean titles, confirmed zoning, and dependable access to power, water, and transport.", "Whether you're setting up a new plant or expanding an existing one, we make sure the ground beneath your business can actually support what you're building on it."],
    closing: "For manufacturers and developers who need verified land to build exactly to spec.",
    image: "industrial/land.webp", alt: "Expansive open land beside a river and established agricultural fields",
    features: [
      { icon: "building", lines: ["Strategic Location near", "industrial corridors"] },
      { icon: "building", lines: ["Verified zoning and", "clean land titles"] },
      { icon: "building", lines: ["Utility and access due", "diligence completed"] },
    ],
  },
  {
    number: "02", title: "Warehousing & Distribution", tagline: "Move faster. Store smarter.",
    paragraphs: ["From last-mile fulfillment to bulk distribution, we source warehousing spaces along key highways and transit corridors. High-clearance structures, strong load-bearing capacity, and easy vehicle access—built to keep storage and logistics from becoming bottlenecks.", "We assess location, access, height, and strength before we show you anything."],
    closing: "For logistics and e-commerce operators who need speed and reach.",
    image: "industrial/warehousing.webp", alt: "Warehouse professional reviewing inventory in a spacious distribution facility",
    features: [
      { icon: "building", lines: ["Proximity to highways", "and transit corridors"] },
      { icon: "building", lines: ["High-clearance, load-", "bearing structures"] },
      { icon: "building", lines: ["Faster last-mile", "turnaround"] },
    ],
  },
  {
    number: "03", title: "Cold Storage", tagline: "Preservation isn't optional. Neither is the right facility.",
    paragraphs: ["For food, pharma, and perishables businesses, we find temperature-controlled storage that meets regulatory and compliance standards, reducing spoilage risk and keeping your supply chain dependable from source to shelf."],
    closing: "For food, pharma, and perishables businesses that can't compromise on preservation.",
    image: "industrial/cold-storage.webp", alt: "Tall storage racks and a clear loading aisle inside a modern logistics warehouse",
    features: [
      { icon: "garden", lines: ["Temperature-controlled", "infrastructure"] },
      { icon: "escape", lines: ["Compliance-ready", "facilities"] },
      { icon: "celebrate", lines: ["Reduced spoilage and", "wastage risk"] },
    ],
  },
  {
    number: "04", title: "Manufacturing Spaces", tagline: "Space built to produce, not just occupy.",
    paragraphs: ["We help manufacturers find ready-to-operate or build-to-suit facilities with the power, utility, and compliance infrastructure production needs, with room to scale as your output grows."],
    closing: "For production businesses that need infrastructure built for consistent, scalable output.",
    image: "industrial/manufacturing.webp", alt: "Large manufacturing and distribution complex with loading areas and freight vehicles",
    features: [
      { icon: "building", lines: ["Ready-to-operate or", "build-to-suit options"] },
      { icon: "building", lines: ["Power and utility", "infrastructure in place"] },
      { icon: "building", lines: ["Full compliance with", "industrial zoning norms"] },
    ],
  },
] as const;
