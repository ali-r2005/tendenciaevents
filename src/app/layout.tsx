import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import { getDictionary } from "../../i18n";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./globals.css";

const kumbhSansDisplay = Kumbh_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const kumbhSans = Kumbh_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dictionary = getDictionary();

export const metadata: Metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${kumbhSansDisplay.variable} ${kumbhSans.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-sans"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('/bg.webp')",
          backgroundRepeat: "repeat",
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
