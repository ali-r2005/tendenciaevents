import type { Metadata } from "next";
import { Hammersmith_One, Inter } from "next/font/google";
import { getDictionary } from "../../i18n";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
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

const dictionary = getDictionary();

export const metadata: Metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hammersmithOne.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
