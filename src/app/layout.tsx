import type { Metadata } from "next";
import { ScrollAnimator } from "../components/ScrollAnimator";
import "./globals.css";
import "./fonts.css";
import "./home.css";
import "./site.css";
import "./leasing.css";
import "./services.css";
import "./advisory.css";
import "./contact.css";
import "./coworking.css";
import "./home-reference.css";
import "./insights.css";
import "./careers.css";
import "./projects.css";

export const metadata: Metadata = {
  title: "Corporate Lion | Strategic Real Estate Advisory",
  description:
    "Corporate Lion provides strategic real estate advisory for occupiers, developers, investors, and landowners."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ScrollAnimator />
        {children}
      </body>
    </html>
  );
}
