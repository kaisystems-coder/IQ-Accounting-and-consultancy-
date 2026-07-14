import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata = {
  title: "Portfolio | IQ Accounting and Consulting Limited",
  description:
    "The work: real Trinidad & Tobago businesses IQ moved from boxes of paper to clean books, filed taxes and bank-ready statements.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="The work"
        title="Businesses we took"
        accent="from the box to the bank."
        intro="We don't shoot glossy photos — our portfolio is the outcomes. Filter by service to see how IQ has helped businesses across Trinidad & Tobago."
      />
      <GalleryGrid />
      <ContactCTA />
    </>
  );
}
