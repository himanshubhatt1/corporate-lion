export const videoCategories = ["All", "Project Walkthroughs", "Workspace Solutions", "Expert Insights", "Client Stories"] as const;
export type VideoCategory = typeof videoCategories[number];
export type LibraryVideo = {
  id: string;
  category: Exclude<VideoCategory, "All">;
  title: string;
  description: string;
  poster: string;
  source: string;
  duration?: string;
};

// Add the client's MP4/WebM URLs to source when delivered. Empty sources stay as posters.
export const categoryVideos: LibraryVideo[] = [
  { id: "city-towers", category: "Project Walkthroughs", title: "See the spaces. Feel the possibilities.", description: "Step inside thoughtfully selected workspaces and discover the locations, environments.", poster: "residential/apartments.webp", source: "" },
  { id: "office-tour", category: "Project Walkthroughs", title: "See the spaces. Feel the possibilities.", description: "Step inside thoughtfully selected workspaces and discover the locations, environments.", poster: "insights/video-workspaces.webp", source: "" },
  { id: "city-living", category: "Project Walkthroughs", title: "See the spaces. Feel the possibilities.", description: "Step inside thoughtfully selected workspaces and discover the locations, environments.", poster: "blog/hero.webp", source: "" },
  { id: "skyline-tour", category: "Project Walkthroughs", title: "See the spaces. Feel the possibilities.", description: "Step inside thoughtfully selected workspaces and discover the locations, environments.", poster: "insights/market-skyline.webp", source: "" },
  { id: "managed-workspaces", category: "Workspace Solutions", title: "More than just an office.", description: "Explore spaces designed for focused work, collaboration, and growing teams.", poster: "insights/video-workplace.webp", source: "" },
  { id: "connected-locations", category: "Workspace Solutions", title: "Where business meets opportunity.", description: "Discover connected locations and thoughtfully managed workplaces.", poster: "insights/video-locations.webp", source: "" },
  { id: "market-perspectives", category: "Expert Insights", title: "A fresh perspective on real estate.", description: "Conversations on locations, opportunities, and the decisions that shape your next move.", poster: "sez/millions-minds.webp", source: "" },
  { id: "client-experiences", category: "Client Stories", title: "Stories built on trust.", description: "Hear the experiences behind our property partnerships.", poster: "home/client-apex.webp", source: "" },
];

export const latestVideos: LibraryVideo[] = [
  { id: "ahmedabad-business", category: "Project Walkthroughs", title: "Why Ahmedabad is the Next Big Business Hub", description: "Key factors driving commercial growth in Ahmedabad.", poster: "videos/office-campus.webp", source: "" },
  { id: "gift-city-tour", category: "Project Walkthroughs", title: "A Closer Look at GIFT City", description: "Opportunities, infrastructure and what makes GIFT City a global business destination.", poster: "sez/dholera.webp", source: "" },
  { id: "workspace-solutions", category: "Workspace Solutions", title: "Workspaces That Grow With You", description: "Explore flexible spaces for the way your team works.", poster: "coworking/workspace-2.webp", source: "" },
  { id: "expert-perspectives", category: "Expert Insights", title: "The Next Chapter in Real Estate", description: "A closer look at emerging locations and business opportunities.", poster: "blog/emerging-destinations.webp", source: "" },
  { id: "client-partnerships", category: "Client Stories", title: "The People Behind Every Partnership", description: "Client experiences and the spaces that support their ambitions.", poster: "home/client-chauhan.webp", source: "" },
];
