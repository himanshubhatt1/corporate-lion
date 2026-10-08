export const workspaceOptions = [
  { id: "01", tag: "Dedicated", title: "Co-working Spaces", text: "Plug into a professional shared workspace with ready-to-use desks, private cabins, and essential amenities. Ideal for freelancers, startups, and small teams looking for flexibility without long-term commitments.", image: "coworking/workspace-1.webp", alt: "A collaborative team working together around laptops" },
  { id: "02", tag: "Team-Ready", title: "Managed Spaces", text: "A workspace planned, customised, and operated around your organisation’s requirements, from layout and branding to technology and facility management. Designed for growing businesses and enterprises seeking a dedicated office without managing it themselves.", image: "coworking/workspace-2.webp", alt: "Professionals working in a fully managed office" },
  { id: "03", tag: "Private", title: "Enterprise Suite", text: "A dedicated private office, floor or wing within a professionally managed workspace. Get the privacy, security, and brand presence of an independent office with the convenience and flexibility of a managed facility.", image: "coworking/workspace-3.webp", alt: "Business professionals meeting in a private workspace" },
] as const;

export type WorkspaceService = (typeof workspaceOptions)[number]["title"];
export type CoworkingInquiry = { mode: "listing" } | { mode: "requirement"; service: WorkspaceService };
export const workspaceCities = ["Ahmedabad", "Gandhinagar", "GIFT City", "Vadodara", "Surat", "Mumbai", "Other"] as const;

export const workspaceBenefits = [
  { title: "Zero Capex", text: "Eliminate upfront capital expenditure on office interiors, furniture, IT infrastructure, and workspace setup.", icon: "capex" },
  { title: "Single OPEX Invoice", text: "Consolidate rent, utilities, maintenance, internet, housekeeping, and facility services into one streamlined operating expense.", icon: "invoice" },
  { title: "Ready-to-Operate Workspace", text: "Move into fully equipped office spaces with furniture, high-speed connectivity, meeting rooms, and essential workplace facilities.", icon: "door" },
  { title: "Flexible Leasing", text: "Choose flexible workspace plans that adapt to your team size, business needs, and evolving office requirements.", icon: "location" },
  { title: "Prime Business Locations", text: "Establish your office at strategic commercial locations with strong connectivity, accessibility, and business visibility.", icon: "location" },
  { title: "Operational Convenience", text: "Simplify daily operations with professionally managed maintenance, utilities, housekeeping, security, and facility management.", icon: "people" },
  { title: "Scalability", text: "Expand or optimize your workspace seamlessly as your team and business requirements grow.", icon: "clock" },
  { title: "Faster Market Entry", text: "Set up operations in a new city or business market quickly without the cost and complexity of a traditional office setup.", icon: "business" },
  { title: "For Multiple Business Models", text: "Flexible office spaces designed for startups, SMEs, enterprises, project teams, satellite offices, and growing businesses.", icon: "business" },
] as const;
