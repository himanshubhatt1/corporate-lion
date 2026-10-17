export const careerTabs = ["All", "Marketing", "Operations", "Sales"] as const;
export type CareerTab = (typeof careerTabs)[number];

export const careerPositions = [
  { id: "01", title: "Senior Manager - Corporate Leasing", department: "Advisory", location: "Ahmedabad", description: "Manage corporate leasing requirements, coordinate property evaluations and client discussions, and support negotiations from initial enquiry through to lease completion." },
  { id: "02", title: "Manager-Industrial & Logistics", department: "Advisory", location: "Ahmedabad", description: "Help businesses identify suitable industrial and logistics properties, coordinate site visits, and work with owners and clients to progress leasing and acquisition requirements." },
  { id: "03", title: "Investment Analyst", department: "Research", location: "Gift City", description: "Research real estate opportunities, analyse property and market data, and prepare financial assessments that support the advisory team in evaluating investments." },
  { id: "04", title: "Market Research Associate", department: "Research", location: "Gandhinagar", description: "Gather and analyse real estate market information, track local property activity, and prepare research reports that support client advisory and business decisions." },
  { id: "05", title: "Digital Marketing Executive", department: "Marketing", location: "Ahmedabad", description: "Plan and coordinate digital campaigns, develop property-focused content, and track campaign performance to support brand visibility and enquiries." },
  { id: "06", title: "Transaction Coordinator", department: "Operations", location: "Ahmedabad", description: "Coordinate transaction documentation, maintain records and timelines, and liaise with clients and internal teams to support property transactions through to completion." },
] as const;
export type CareerPosition = (typeof careerPositions)[number];

export const careerBenefits = [
  { step: "01", action: "Explore", title: "Industry Exposure", icon: "industry", description: "Gain hands-on experience across the real estate industry, including market trends, properties, business opportunities, and the wider real estate ecosystem." },
  { step: "02", action: "Connect", title: "Professional Network", icon: "network", description: "Connect with developers, investors, businesses, and real estate professionals while building a strong and valuable professional network." },
  { step: "03", action: "Grow", title: "Career Growth", icon: "growth", description: "Take on meaningful responsibilities, develop industry-relevant skills, and gain experience that supports long-term growth in real estate." },
  { step: "04", action: "Achieve", title: "Merit-Based Growth", icon: "award", description: "Grow through your performance, initiative, and potential while earning meaningful opportunities to contribute and advance." },
  { step: "05", action: "Expand", title: "Cross-Functional Experience", icon: "expand", description: "Explore different areas of the real estate ecosystem and develop broader business, industry, and professional experience." },
] as const;
