import type { Metadata } from "next";
import { CoworkingContent } from "../../components/CoworkingContent";
import { SiteFooter } from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Co-Working Spaces | Corporate Lion",
  description: "Explore co-working spaces, managed offices, and private enterprise suites. Share your workspace requirements or list your property with Corporate Lion.",
};

export default function CoWorkingPage() {
  return (
    <main className="coworking-page">
      <CoworkingContent />
      <SiteFooter />
    </main>
  );
}
