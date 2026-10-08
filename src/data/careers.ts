export const careerTabs = ["All", "Marketing", "Operations", "Sales"] as const;
export type CareerTab = (typeof careerTabs)[number];

export const careerPositions = [
  { id: "01", title: "Senior Manager - Corporate Leasing", department: "Advisory", location: "Ahmedabad" },
  { id: "02", title: "Manager-Industrial & Logistics", department: "Advisory", location: "Ahmedabad" },
  { id: "03", title: "Investment Analyst", department: "Research", location: "Gift City" },
  { id: "04", title: "Market Research Associate", department: "Research", location: "Gandhinagar" },
  { id: "05", title: "Digital Marketing Executive", department: "Marketing", location: "Ahmedabad" },
  { id: "06", title: "Transaction Coordinator", department: "Operations", location: "Ahmedabad" },
] as const;
export type CareerPosition = (typeof careerPositions)[number];

export const careerBenefits = [
  { step: "01", action: "Explore", title: "Industry Exposure", icon: "industry", description: "Gain hands-on experience across the real estate industry, including market trends, properties, business opportunities, and the wider real estate ecosystem." },
  { step: "02", action: "Connect", title: "Professional Network", icon: "network", description: "Connect with developers, investors, businesses, and real estate professionals while building a strong and valuable professional network." },
  { step: "03", action: "Grow", title: "Career Growth", icon: "growth", description: "Take on meaningful responsibilities, develop industry-relevant skills, and gain experience that supports long-term growth in real estate." },
  { step: "04", action: "Achieve", title: "Merit-Based Growth", icon: "award", description: "Grow through your performance, initiative, and potential while earning meaningful opportunities to contribute and advance." },
  { step: "05", action: "Expand", title: "Cross-Functional Experience", icon: "expand", description: "Explore different areas of the real estate ecosystem and develop broader business, industry, and professional experience." },
] as const;
