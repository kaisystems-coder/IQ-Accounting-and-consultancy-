import HomeHero from "@/components/HomeHero";
import ServicesOverview from "@/components/home/ServicesOverview";
import StatsBand from "@/components/home/StatsBand";
import WhyChoose from "@/components/home/WhyChoose";
import Testimonials from "@/components/home/Testimonials";
import GalleryPreview from "@/components/home/GalleryPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesOverview />
      <StatsBand />
      <WhyChoose />
      <Testimonials />
      <GalleryPreview />
      <ContactCTA />
    </>
  );
}
