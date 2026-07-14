import PageHero from "@/components/PageHero";
import AboutStory from "@/components/about/AboutStory";
import Timeline from "@/components/about/Timeline";
import Values from "@/components/about/Values";
import StatsBand from "@/components/home/StatsBand";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata = {
  title: "About | IQ Accounting and Consulting Limited",
  description:
    "How IQ Accounting and Consulting became the accountant Trinidad & Tobago businesses trust with their books, tax and advice.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About IQ"
        title="We clear the pile so you can"
        accent="run the business."
        intro="IQ Accounting and Consulting Limited was built for the small and medium businesses the big firms overlook — the ones drowning in paper who just need their numbers to make sense."
      />
      <AboutStory />
      <Timeline />
      <Values />
      <StatsBand />
      <ContactCTA />
    </>
  );
}
