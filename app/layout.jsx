import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    "We set up accounting systems and procedures manuals for new businesses and train their staff to run them — and teach accounting & taxation e-courses, workshops and private one-on-one training across Trinidad & Tobago.",
  openGraph: {
    title: "IQ Accounting and Consulting Limited",
    description:
      "Accounting system setup, staff training, and professional accounting & taxation e-courses, workshops and one-on-one training for Trinidad & Tobago.",
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
