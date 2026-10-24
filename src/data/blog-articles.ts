export type BlogArticle = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  introduction: string[];
  sections: { title: string; paragraphs: string[]; points?: string[] }[];
  sources?: { title: string; href: string }[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "logistics-demand", category: "Industrial & Logistics",
    title: "Warehousing moves closer to consumption centres",
    summary: "How delivery requirements, transport access, and operational fit shape a warehouse shortlist.",
    image: "industrial/warehousing.webp", imageAlt: "Warehouse operations and storage aisles",
    introduction: ["A warehouse is part of a delivery network, not simply a building with storage capacity. Its location influences how goods arrive, how teams work, and how reliably orders reach their destination. A facility that looks economical in isolation can be expensive to operate if every journey involves delays or difficult access.", "For businesses serving a city, the property search should begin with the customers, suppliers, and delivery commitments the warehouse needs to support. This creates a clearer brief than selecting a location on the basis of rent alone."],
    sections: [
      { title: "Start with the movement of goods", paragraphs: ["Map inbound suppliers and outbound destinations before comparing properties. Separate bulk deliveries from smaller, frequent dispatches: the two may need different locations and vehicle access. Test routes at the times trucks will actually travel, including the final approach to the site.", "A central facility and a smaller local distribution point may solve different problems. Compare the whole network rather than assuming that every operation benefits from the closest possible address."] },
      { title: "Look beyond the advertised area", paragraphs: ["Usable storage depends on the layout, clear height, loading arrangements, and internal circulation. Columns, ramps, staging areas, and fire-access routes affect how much of the quoted area can support the operation."], points: ["Check turning space and loading access with the intended vehicle size.", "Confirm the floor and racking requirements with the operations team.", "Allow room for receiving, returns, packing, and dispatch.", "Review staff access, utilities, and expansion space."] },
      { title: "Compare the full operating cost", paragraphs: ["Put rent alongside transport, staffing, maintenance, utilities, and the cost of adapting the building. A lower headline rent should not hide recurring operational workarounds. Ask each shortlisted facility for the same information so the comparison stays consistent."] },
      { title: "Build a shortlist around performance", paragraphs: ["Agree on the non-negotiable requirements before site visits. Record what is already operational and what depends on future work, together with the party responsible for delivery. The stronger warehouse choice is the one that supports a dependable operation on the business's actual timetable."] },
    ],
  },
  {
    slug: "luxury-living", category: "Residential",
    title: "Privacy, space, and service reshape premium housing",
    summary: "A practical way to compare homes through everyday comfort, privacy, and maintenance.",
    image: "div.news-image (2).svg", imageAlt: "Residence with a landscaped garden and swimming pool",
    introduction: ["The appeal of a home is often easiest to see during a short viewing. Its suitability becomes clearer when you imagine an ordinary week there: working, entertaining, resting, and managing the daily routine. A beautiful entrance cannot substitute for a layout that suits the people who will use it.", "Apartments, villas, and second homes offer different forms of space and privacy. Comparing them starts with how you want to live, rather than a single measure of size or a long amenities list."],
    sections: [
      { title: "Choose a layout around daily life", paragraphs: ["Consider which rooms need to be quiet, how visitors move through the home, and whether working from home requires a separate space. Storage, utility areas, and circulation deserve the same attention as the living room.", "Furniture plans can reveal constraints that an empty room hides. Check the dimensions of the spaces you will use most, and distinguish useful internal space from terraces, balconies, and shared facilities."] },
      { title: "Experience privacy during a visit", paragraphs: ["Privacy is influenced by sightlines, neighbouring windows, shared corridors, and the position of outdoor spaces. Visit at more than one time of day where possible, and listen for road noise and activity in adjoining areas."], points: ["Check daylight and ventilation in bedrooms and work areas.", "Consider the route from parking to the home.", "Look at overlooking from neighbouring buildings.", "Ask how visitors, deliveries, and maintenance access are managed."] },
      { title: "Understand the service behind the amenities", paragraphs: ["A pool, gym, or landscaped garden needs ongoing care. Ask about maintenance arrangements, staffing, access rules, and the costs owners are expected to share. For a second home, clarify who handles inspections and repairs while you are away."] },
      { title: "Compare long-term suitability", paragraphs: ["Allow for changing family needs and the practical work of maintaining the property. The right shortlist balances the address, the experience of living there, and the responsibilities of ownership. A home should remain useful after the excitement of the first viewing has passed."] },
    ],
  },
  {
    slug: "gift-city", category: "Gift City",
    title: "The new geography of financial services real estate",
    summary: "How to evaluate a financial-services workspace through people, infrastructure, and operational needs.",
    image: "sez/gift-city.webp", imageAlt: "Business towers and city skyline",
    introduction: ["For a financial-services business considering GIFT City, a property decision is also an operating decision. The office needs to support teams, client interactions, technology, and the particular activities the organisation intends to carry out.", "An address can help position a business, but it does not replace a detailed requirements exercise. A useful search connects the location to the organisation's daily work and the conditions required to begin operations."],
    sections: [
      { title: "Define the intended operation first", paragraphs: ["Describe the teams that will occupy the office, their working hours, and the activities that need dedicated space. Client meeting rooms, confidential discussions, technology equipment, and secure storage can have very different demands.", "Ask the business's compliance and legal advisers to confirm the requirements for its proposed activities before making a property commitment. Treat those requirements as inputs to the shortlist, rather than assumptions about a building or district."] },
      { title: "Examine the building's operational readiness", paragraphs: ["Check what is available on the handover date. Separate an installed system from a proposed upgrade, and identify the responsibilities of the landlord, occupier, and facilities operator."], points: ["Confirm connectivity options and provision for business continuity.", "Review access arrangements for staff, clients, and vendors.", "Check the suitability of the floor layout for secure and shared areas.", "Establish fit-out access and the sequence of handover activities."] },
      { title: "Include the employee journey", paragraphs: ["Study realistic commuting routes, transport options, nearby services, and the needs of staff relocating to the area. An office works best when the experience beyond the reception desk supports the people expected to use it."] },
      { title: "Plan for more than the opening day", paragraphs: ["Consider how the team could expand and what changes the space can accommodate. Document dependencies, costs, and target dates in a single plan. A coordinated assessment helps the property decision serve the business rather than becoming a separate, disconnected project."] },
    ],
  },
  {
    slug: "indias-next-office-cycle", category: "Commercial Real Estate",
    title: "India's next office cycle: why quality, flexibility, and talent access are defining demand",
    summary: "Three questions that help businesses build a more useful office brief.",
    image: "insights/market-skyline.webp", imageAlt: "City skyline at sunset",
    introduction: ["Office decisions bring together priorities that are often considered separately: cost, employee experience, operating reliability, and room to grow. A shortlist based only on rent or an impressive building entrance misses much of what determines whether the office will work for the organisation.", "Quality, flexibility, and talent access provide a useful framework for comparing alternatives. Each needs to be defined in terms of the business, rather than accepted as a broad promise in a brochure."],
    sections: [
      { title: "Turn quality into a clear brief", paragraphs: ["An effective brief describes the outcomes a building must deliver. These may include dependable utilities, comfortable shared spaces, efficient lifts, workable parking, and responsive maintenance. Ask how those services are managed and what evidence supports the claims.", "A site visit should include the spaces staff and suppliers actually use, not just the reception and sample floor. Document practical constraints early so they can be reflected in the comparison."] },
      { title: "Make flexibility specific", paragraphs: ["Flexibility can mean additional seats, reconfigurable rooms, a shorter commitment, or a phased fit-out. Decide which matters to the business before seeking proposals. A flexible layout cannot solve a lease commitment that conflicts with the operating plan."], points: ["Model a base team size and a plausible growth scenario.", "Check meeting-room and collaboration needs alongside desk counts.", "Compare the cost of adapting each shortlisted space.", "Identify which expansion options are actually available."] },
      { title: "Put talent access on the map", paragraphs: ["Review travel patterns for the current team and likely recruitment areas. Visit during working-day arrival and departure periods. Nearby services, public transport, and the last part of the journey can influence how convenient the office feels in practice."] },
      { title: "Bring the decision-makers together", paragraphs: ["Facilities, finance, HR, and business leaders should agree on the evaluation criteria before negotiations begin. A shared scorecard makes trade-offs visible and reduces the risk of choosing an office that satisfies one department while creating problems for another."] },
    ],
  },
  {
    slug: "flight-to-quality-office-spaces", category: "Market Outlook",
    title: "The Flight to Quality: Why Grade-A+ ESG Office Spaces Are Dominating Absorption in 2026",
    summary: "A workplace perspective on building performance, employee comfort, and the meaning of quality.",
    image: "Office Absorption Trends 2026.svg", imageAlt: "Modern glass office towers viewed from below",
    introduction: ["The phrase 'flight to quality' describes an office search that prioritises how a building performs as well as where it stands. For an occupier, the practical question is what a better building will contribute to the working day and to the organisation's operating requirements.", "Grade-A and ESG language can help frame a conversation, but labels alone are not enough to compare buildings. A useful assessment translates them into observable features, documented performance, and clear responsibilities. This article takes that occupier perspective rather than presenting a market-wide absorption forecast."],
    sections: [
      { title: "Ask what the quality label includes", paragraphs: ["Look for detail behind a general description: the floor configuration, lift provision, services, maintenance arrangements, and the condition of shared areas. Different organisations will place different weights on each feature.", "Compare the same specifications across the shortlist. A feature that is available in one building should not be treated as equivalent to a future proposal in another."] },
      { title: "Review performance evidence", paragraphs: ["Discuss how energy, water, and indoor conditions are measured and managed. If a building advertises certification, ask for the relevant documentation and understand its scope. The ability to share useful operating information can matter as much as a marketing claim."], points: ["Request clear information about building services and operating hours.", "Clarify which consumption data an occupier can access.", "Review maintenance and service-response arrangements.", "Understand the split between building and tenant responsibilities."] },
      { title: "Connect the building to workplace design", paragraphs: ["A good base building still needs an appropriate fit-out. Test the floor plate against the intended mix of focused work, meetings, and collaboration. Daylight, acoustics, and circulation should be considered alongside seat capacity."] },
      { title: "Evaluate the whole occupation period", paragraphs: ["Compare fit-out work, operating charges, future alterations, and the transition from the current office. A well-documented evaluation helps a business distinguish features that support its needs from features that merely photograph well."] },
    ],
  },
  {
    slug: "commercial-reits-india", category: "Capital Markets",
    title: "Institutional Capital Influx: The Next Wave of Commercial REITs in India",
    summary: "An introduction to the structure of REITs and the property information behind them.",
    image: "REIT Expansion.svg", imageAlt: "Commercial real estate buildings",
    introduction: ["Commercial property can be discussed at two levels: an individual building and a portfolio held through an investment structure. Real Estate Investment Trusts, or REITs, bring the portfolio perspective into focus. Understanding the structure is a useful starting point before considering any particular offer.", "SEBI's investor education material explains that REITs pool investment in real estate and that listed units can be traded on stock exchanges. Owning units is different from directly owning and controlling a particular office or retail space."],
    sections: [
      { title: "Understand the roles", paragraphs: ["SEBI describes a structure involving a sponsor, a management company, and a trust. The properties are held for unit-holders, while management responsibilities sit within that structure. These roles are worth understanding before reading the details of a portfolio."] },
      { title: "Read the property story behind the structure", paragraphs: ["A portfolio's presentation can contain many different measures. Read the definitions and reporting periods rather than comparing figures by their labels alone. The underlying properties, occupier mix, lease profile, and operating arrangements provide context for the headline information."], points: ["Identify the properties and sectors represented in the portfolio.", "Read the published financial and operating disclosures together.", "Understand the management structure and stated responsibilities.", "Review the offer documents and risk disclosures for the specific investment."] },
      { title: "Separate access from certainty", paragraphs: ["A tradable structure should not be confused with a promise about future outcomes. Assessing whether an investment suits a person or organisation requires a separate review of its objectives, circumstances, and the product's risks. A familiar building name is not a substitute for that assessment."] },
      { title: "Use primary information", paragraphs: ["Start with the regulator's educational material and the issuer's own disclosures. Keep notes on the dates and definitions used in any comparison. For a decision involving your own capital, discuss the specific documents and your circumstances with an appropriately qualified adviser."] },
    ],
    sources: [{ title: "SEBI Investor: Understanding REITs and InvITs", href: "https://investor.sebi.gov.in/understanding_reit_invit.html" }],
  },
  {
    slug: "joint-development-agreements", category: "Landowner Advisory",
    title: "Unlocking Urban Land: Structuring High-Yield Joint Development Agreements (JDAs)",
    summary: "Questions landowners and developers can use to prepare a clearer development discussion.",
    image: "Land Valuation.svg", imageAlt: "Land and development planning",
    introduction: ["A joint development discussion brings together a land asset and the ability to deliver a project. The commercial headline is only one part of that relationship. Timing, responsibilities, funding, and the process for resolving disagreements also need careful attention.", "A proposed yield or revenue share is a projection, not a guaranteed outcome. Before comparing proposals, the parties need a common understanding of the property, the intended project, and the assumptions on which each offer depends."],
    sections: [
      { title: "Prepare the property information", paragraphs: ["Organise the documents and site information that professional advisers will need to assess the opportunity. Record known constraints, access arrangements, existing occupation, and the questions that remain unresolved. Keep confirmed information separate from expectations about future development.", "Legal, planning, and tax requirements depend on the transaction and location. Have the relevant advisers review them before treating a commercial proposal as ready to proceed."] },
      { title: "Compare proposals on a common basis", paragraphs: ["Two attractive headline offers may rely on very different assumptions. Ask each prospective partner to explain the proposed product, programme, responsibilities, and basis of its commercial calculation."], points: ["Record which party is expected to fund each stage.", "Clarify the proposed milestones and their dependencies.", "Ask how progress and project information will be reported.", "Identify the assumptions that could change the commercial outcome."] },
      { title: "Consider the working relationship", paragraphs: ["A development project needs decisions throughout its life. Discuss how those decisions will be made, how changes will be evaluated, and who will represent each party. Consider the delivery team's relevant experience alongside the proposal itself."] },
      { title: "Document before committing", paragraphs: ["Use the agreed commercial brief as a starting point for qualified advisers to prepare and review the transaction documents. The aim is a relationship in which responsibilities and uncertainties are understood, rather than one built around an attractive number that means different things to each party."] },
    ],
  },
  {
    slug: "gcc-commercial-leasing", category: "Workplace Strategy",
    title: "Global Capability Centers (GCCs): The Primary Engine of Commercial Leasing",
    summary: "How the requirements of a capability centre translate into an office brief.",
    image: "GCC Growth.svg", imageAlt: "Corporate workplace and commercial offices",
    introduction: ["A global capability centre brings together people, systems, and business functions in one operating location. Its property requirements can extend beyond the initial desk count, particularly where teams expect to grow or support colleagues across time zones.", "For a property search, the useful question is what the centre needs to deliver. A detailed operating brief connects the office to recruitment, technology, security, and the experience of the people who will work there."],
    sections: [
      { title: "Build the brief with the operating teams", paragraphs: ["Ask business leaders, technology teams, HR, and facilities to describe their needs together. Distinguish requirements for opening day from potential future phases. An early agreement on priorities makes it easier to compare locations without repeatedly changing the brief.", "Model different patterns of attendance and collaboration. A simple ratio of employees to desks may overlook training, confidential work, specialist rooms, and visiting colleagues."] },
      { title: "Test the location through the employee journey", paragraphs: ["Review commuting routes and the practical experience of reaching the building. Consider access to everyday services and how the office will support different working schedules. Site visits should reflect the times the centre is expected to operate."], points: ["Assess the travel patterns of existing and prospective teams.", "Review building access and support outside standard hours.", "Allow for meeting, training, and collaboration spaces.", "Check the path from initial occupation to later expansion."] },
      { title: "Coordinate technology and fit-out", paragraphs: ["Connect the property timetable with the technology and fit-out programme. Identify what the building provides, what the occupier must install, and which activities depend on approvals or handover. Assign ownership to each dependency so it can be monitored."] },
      { title: "Plan the transition, not only the lease", paragraphs: ["The signing date is one milestone in a longer process. Readiness checks, staff communication, supplier access, and a staged move may all affect the first working day. A property that supports this programme can be more useful than one that simply offers the largest floor area."] },
    ],
  },
  {
    slug: "data-centres-logistics", category: "Alternative Assets",
    title: "Data Centers & Logistics: Diversifying Commercial Real Estate Portfolios",
    summary: "Why specialised operational property needs a brief of its own.",
    image: "Data Centers.svg", imageAlt: "Technology infrastructure and data centre facilities",
    introduction: ["Data centres and logistics facilities are often discussed alongside traditional commercial property, but they serve different operational needs. A location that suits a conventional office may be unsuitable for a facility whose operation depends on specialist infrastructure or the movement of goods.", "The starting point is to understand what the building must do. This article considers the property questions behind these assets rather than suggesting that combining them automatically improves an investment portfolio."],
    sections: [
      { title: "Define the operation before the site", paragraphs: ["A data-centre brief may prioritise power, connectivity, cooling, and continuity requirements. A logistics brief may prioritise transport access, loading, storage, and the sequence of receiving and dispatch. Specialist teams should define and assess those requirements.", "Separate features that already exist from those that depend on upgrades. Infrastructure availability should be established through the relevant providers and technical advisers, rather than inferred from proximity to other facilities."] },
      { title: "Treat infrastructure as part of the property", paragraphs: ["The ability to operate can depend on assets and services beyond the building boundary. Ask which dependencies could affect delivery and which party is responsible for resolving them."], points: ["Map utility, access, and connectivity dependencies.", "Confirm the programme for any required infrastructure work.", "Review the building against the intended operating specification.", "Assess the scope for adaptation if the occupier's needs change."] },
      { title: "Understand the role of the operator", paragraphs: ["Specialised property is closely connected to the way it is run. Technical requirements, maintenance, and changes to equipment can shape the building's useful life. Include the operating team in the evaluation rather than treating property and operations as separate decisions."] },
      { title: "Compare risks as carefully as opportunities", paragraphs: ["An asset in a different sector is not automatically a solution to concentration. Consider how the properties depend on occupiers, infrastructure, and operating conditions. Any portfolio decision needs its own financial and technical assessment, informed by the actual asset rather than the appeal of a sector label."] },
    ],
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find(article => article.slug === slug);
}

export function blogReadingTime(article: BlogArticle) {
  const text = [...article.introduction, ...article.sections.flatMap(section => [...section.paragraphs, ...(section.points ?? [])])].join(" ");
  return `${Math.max(1, Math.ceil(text.split(/\s+/).length / 200))} min read`;
}
