import type { Metadata } from "next";
import { Hammersmith_One, Inter } from "next/font/google";
import "./globals.css";

const hammersmithOne = Hammersmith_One({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Event Management & Team Building Morocco | Tendencia Events & Travel",
  description:
    "Tendencia Events & Travel is a full-service event management and team building agency based in Tangier and Marrakech, operating all over Morocco — corporate events, incentive travel, seminars, and destination management, tailored with care.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hammersmithOne.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
