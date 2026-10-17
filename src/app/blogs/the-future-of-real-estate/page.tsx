import { permanentRedirect } from "next/navigation";

export default function LegacyBlogDetailPage() {
  permanentRedirect("/insights/the-future-of-real-estate");
}
