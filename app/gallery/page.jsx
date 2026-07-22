import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata = {
  title: "Portfolio | IQ Accounting and Consulting Limited",
  description:
    "The work: real Trinidad & Tobago businesses and professionals IQ set up with accounting systems, trained in-house, and taught through courses and one-on-one sessions.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="The work"
        title="People and businesses we"
        accent="set up to stand on their own."
        intro="We don't shoot glossy photos — our portfolio is the outcomes. Filter by the kind of work to see how IQ has set up systems, trained staff and taught professionals across Trinidad & Tobago."
      />
      <GalleryGrid />
      <ContactCTA />
    </>
  );
}
