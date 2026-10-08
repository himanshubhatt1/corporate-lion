export const commercialServices = [
  {
    number: "01", title: "Corporate Offices", tagline: "Your Office Is Part of Your Business Strategy.",
    paragraphs: ["The right workplace influences how a company operates, attracts talent, presents its brand, and plans for growth.", "We help businesses identify and secure office environments that fit their current operations while giving them room to evolve, whether through leasing or acquisition."],
    closing: "For growing companies and MNCs who need a professional address that scales.",
    image: "commercial/offices.webp", alt: "Modern corporate office with meeting rooms and a bright shared lounge",
    features: [
      { icon: "building", lines: ["Grade-A spaces in", "Prime Business Corridors"] },
      { icon: "building", lines: ["Flexible lease or outright", "purchase"] },
      { icon: "building", lines: ["Scalable floor plates for", "growing teams"] },
    ],
  },
  {
    number: "02", title: "Retail Showrooms", tagline: "Put Your Brand Where Customers Look.",
    paragraphs: ["Our penthouse portfolio comprises expansive duplex and triplex residences offering generous floor plates, panoramic views, private terraces and exceptional privacy.", "These scarce residential assets combine the scale of independent living with the prestige of a landmark high-rise address."],
    closing: "For retail brands and franchise operators who need to be seen.",
    image: "commercial/retail.webp", alt: "Illuminated multi-level retail destination surrounding a lively public plaza",
    features: [
      { icon: "building", lines: ["High-footfall,", "High-Visibility locations"] },
      { icon: "building", lines: ["Flexible Lease or", "Ownership options"] },
      { icon: "building", lines: ["Access to established", "retail corridors"] },
    ],
  },
  {
    number: "03", title: "Pre-leased Investments", tagline: "What If Your Investment Already Had a Tenant?",
    paragraphs: ["Pre-leased assets offer a different way to approach commercial real estate, acquiring an occupied property with an established lease and rental income already in place.", "We help investors evaluate the tenant, lease structure, rental yield, tenure, escalation, and underlying asset quality before making the investment decision."],
    closing: "For investors who want returns without the operational hassle.",
    image: "commercial/pre-leased.webp", alt: "Investment professional analysing financial information at a workstation",
    features: [
      { icon: "garden", lines: ["Immediate rental income", "from day one"] },
      { icon: "escape", lines: ["Tenant already in place,", "No vacancy risk"] },
      { icon: "celebrate", lines: ["Long-term lease", "agreements secured"] },
    ],
  },
  {
    number: "04", title: "Built to Suit", tagline: "Why Fit Your Business Into Someone Else’s Building?",
    paragraphs: ["Purpose-built commercial environments created around specific operational requirements, from hotels and hospitals to corporate houses, co-working, dark stores, service centres and data centres."],
    closing: "For specialized operators whose business model needs a purpose-built space.",
    image: "commercial/built-to-suit.webp", alt: "Custom-designed high-rise terrace overlooking an urban waterfront",
    features: [
      { icon: "building", lines: ["Fully customized to your", "operational model"] },
      { icon: "building", lines: ["No retrofitting or", "compromise on layout"] },
      { icon: "building", lines: ["Faster go-live for", "specialized businesses"] },
    ],
  },
  {
    number: "05", title: "Corporate House Leasing", tagline: "One Building. One Brand. One Address.",
    paragraphs: ["Standalone buildings leased exclusively to a single organisation, offering greater control over workplace design, branding, security and corporate identity."],
    closing: "For established enterprises that want an entire building to reflect their brand.",
    image: "commercial/corporate-house.webp", alt: "Business colleagues reviewing plans together in a corporate office",
    features: [
      { icon: "garden", lines: ["Full-building exclusivity", "for one company"] },
      { icon: "escape", lines: ["Unified brand identity", "across the property"] },
      { icon: "celebrate", lines: ["Consolidated operations", "under one roof"] },
    ],
  },
  {
    number: "06", title: "Commercial Plots", tagline: "Start with the Location. Build the Opportunity",
    paragraphs: ["Strategically positioned commercial land offering the flexibility to develop assets around specific business, investment and development objectives."],
    closing: "For developers and businesses ready to build their own commercial footprint.",
    image: "commercial/plots.webp", alt: "Aerial view of commercial land and road networks in an expanding city",
    features: [
      { icon: "building", lines: ["Zoned and positioned", "for commercial development"] },
      { icon: "building", lines: ["No retrofitting or", "compromise on layout"] },
      { icon: "building", lines: ["Faster go-live for", "specialized businesses"] },
    ],
  },
] as const;
