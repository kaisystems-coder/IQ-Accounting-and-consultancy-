import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://iqaccounting.tt"),
  title: "IQ Accounting and Consulting Limited | Trinidad & Tobago",
  description:
    "Accounting, tax, audit and advisory for Trinidad & Tobago businesses. Precise books, sharper decisions, a partner who moves at the speed of your business.",
  openGraph: {
    title: "IQ Accounting and Consulting Limited",
    description:
      "Accounting, tax, audit and advisory for Trinidad & Tobago businesses.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0A2540",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <ScrollToTop />
        <div className="grain-layer" aria-hidden="true" />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
