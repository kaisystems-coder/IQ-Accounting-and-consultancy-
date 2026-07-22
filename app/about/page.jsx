import PageHero from "@/components/PageHero";
import AboutStory from "@/components/about/AboutStory";
import Timeline from "@/components/about/Timeline";
import Values from "@/components/about/Values";
import StatsBand from "@/components/home/StatsBand";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata = {
  title: "About | IQ Accounting and Consulting Limited",
  description:
    "How IQ Accounting and Consulting became Trinidad & Tobago's partner for setting up accounting systems, training staff, and teaching accounting & taxation to professionals.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About IQ"
        title="We teach you to run"
        accent="your own numbers."
        intro="IQ Accounting and Consulting Limited helps new businesses set up their accounting the right way, trains their staff to run it, and teaches accounting & taxation to professionals across Trinidad & Tobago."
      />
      <AboutStory />
      <Timeline />
      <Values />
      <StatsBand />
      <ContactCTA />
    </>
  );
}
