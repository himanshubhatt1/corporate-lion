// Investment benefits specific to each location.
export const sezBenefits = [
  { title: "India’s First & Only IFSC", text: "A globally benchmarked financial ecosystem connecting Indian and international markets." },
  { title: "20-Year Tax Holiday*", text: "Eligible IFSC units can claim a 100% tax deduction for 20 consecutive years within a prescribed period." },
  { title: "Global Institutional Presence", text: "International banks, insurers, fund managers, fintech firms and global enterprises are building their presence here." },
  { title: "World-Class Business Infrastructure", text: "Plug-and-play infrastructure, global connectivity, business incentives and a streamlined regulatory ecosystem designed for international operations." },
  { title: "29+ Million Sq. Ft. Allotted", text: "Large-scale commercial development supporting continued business and institutional expansion." },
  { title: "Long-Term Occupier Demand", text: "Growing institutional presence supports demand for quality office and commercial real estate." },
] as const;

const dholeraBenefits = [
  { title: "920 Sq. Km. Planned Development", text: "One of India’s largest planned industrial smart city developments." },
  { title: "Multi-Sector Growth", text: "Planned across industrial, logistics, technology, residential and commercial ecosystems." },
  { title: "Major Infrastructure Connectivity", text: "Supported by the Ahmedabad–Dholera Expressway, upcoming international airport, and expanding freight connectivity." },
  { title: "80,000+ Projected Jobs", text: "Employment generation can strengthen future residential, commercial, and supporting infrastructure demand." },
  { title: "Early-Stage Investment Potential", text: "Large-scale infrastructure and industrial development offer opportunities to participate in Dholera’s long-term growth cycle." },
] as const;

const millionMindsBenefits = [
  { title: "18 Million Sq. Ft. Integrated Development", text: "A 65-acre ecosystem combining 10+ Mn. sq. ft. tech park, 6+ Mn. sq. ft. residential development and 2+ Mn. sq. ft. mixed-use development." },
  { title: "IT/ITeS SEZ Ecosystem", text: "Designed for international and domestic companies, with a focus on IT, ITeS and Global Capability Centres (GCCs)." },
  { title: "70,000+ Expected Jobs", text: "A growing professional workforce can generate interconnected demand across offices, housing, retail and services." },
  { title: "GCC & Technology-Led Growth", text: "Positioned to capture Ahmedabad’s expanding demand from GCCs, technology companies and next-generation enterprises." },
  { title: "Sustainable Business Infrastructure", text: "The project highlights IGBC Platinum-rated/targeted infrastructure, EV charging, energy-efficient air conditioning, solar power and sustainable utilities." },
  { title: "Integrated Work–Live–Lifestyle Ecosystem", text: "Offices, residences, co-living, hotel, retail, club and lifestyle amenities are planned within a single development, supporting a walk-to-work environment." },
] as const;

export const sezLocations = [
  {
    benefits: sezBenefits,
    id: "gift-city", title: "Gift City", tagline: "What if your business had a global address in Gujarat?",
    introduction: "That's exactly what GIFT City was created for",
    paragraphs: [
      "Home to India's only International Financial Services Centre (IFSC), GIFT City has become the destination for global banks, fintech companies, insurance firms, fund managers, international universities, and multinational corporations, all operating within a world-class smart business ecosystem.",
      "With tax incentives, world-class infrastructure, and a unified regulatory framework, it offers businesses an environment designed for international growth. At Corporate Lion, we help you identify the right office, investment, or commercial opportunity that aligns with your long-term vision.",
    ],
    image: "sez/gift-city.webp", alt: "High-rise city skyline illuminated by warm evening sunlight",
  },
  {
    benefits: dholeraBenefits,
    id: "dholera", title: "Dholera", tagline: "India's largest planned smart city", introduction: "",
    paragraphs: [
      "Dholera spans 920 sq. km., purpose-planned across industrial, residential, IT, and logistics use, so growth here isn't tied to one industry's fortunes. Infrastructure is moving in step: the Ahmedabad–Dholera Expressway is already operational, the international airport is targeted for around 2026, and the Dedicated Freight Corridor is expected by 2027–28.",
      "Early-phase zones alone are projected to support 80,000+ jobs, a demand that typically drives real estate values up fastest in a region's early-industrialisation phase.",
    ],
    image: "sez/dholera.webp", alt: "Aerial view of an extensive planned urban district with green corridors and modern buildings",
  },
  {
    benefits: millionMindsBenefits,
    id: "millions-minds", title: "Million Minds Tech City", tagline: "Looking for Ahmedabad's next high-growth commercial address?", introduction: "",
    paragraphs: [
      "Million Minds exists to give Ahmedabad a dedicated home for the technology and GCC wave, built at a scale few Indian tech parks can match. It's an 18-million-sq.-ft. \"city within a city,\" with roughly 10 million sq. ft. of Grade-A office space,",
      "6 million sq. ft. of residential, and 2 million sq. ft. of retail and lifestyle infrastructure, rolled out across seven phases and a planned ₹15,000 crore investment.",
    ],
    image: "sez/millions-minds.webp", alt: "Contemporary commercial towers surrounding a landscaped business plaza at dusk",
  },
] as const;
