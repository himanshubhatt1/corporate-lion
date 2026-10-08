import { featuredBlog } from "./blog";

export const siteNav = [
  { label: "Our Services", href: "/our-services" },
  { label: "Projects", href: "/projects" },
  { label: "Commercial Leasing", href: "/commercial-leasing" },
  { label: "Co-Working", href: "/co-working" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: featuredBlog.href },
  { label: "About", href: "/contact" }
];

export const footerNavigation = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/our-services" },
  { label: "Projects", href: "/projects" },
  { label: "Co-working", href: "/co-working" },
  { label: "Commercial Leasing", href: "/commercial-leasing" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: featuredBlog.href }
];

export const advisoryPractice = [
  "Corporate Real Estate",
  "Tenant Representation",
  "Landowner Advisory",
  "Developer Underwriting",
  "Institutional Capital & REITs",
  "ESG Workspace Strategy"
];

export const legalLinks = ["Privacy Policy", "Terms of Engagement", "RERA Compliance"];

export const interestOptions = [
  "Office Leasing",
  "Retail Leasing",
  "Pre-Leased Investment",
  "Luxurious Residential",
  "Co-Working / Managed Spaces",
  "Plots / Land Owner Advisory",
  "Industrial"
];

export const contactDetails = [
  {
    icon: "pin",
    title: "Corporate Headquarters",
    lines: ["1102–1103, Binori Bsquare 3, Sindhu Bhavan Road,", "Bodakdev, Ahmedabad, Gujarat 380054"]
  },
  {
    icon: "phone",
    title: "Direct Advisory Desk",
    lines: ["+91 (22) 6800 9000 / +91 98200 00000"]
  },
  {
    icon: "mail",
    title: "Electronic Mail",
    lines: ["info@corporatelion.com"]
  }
];
