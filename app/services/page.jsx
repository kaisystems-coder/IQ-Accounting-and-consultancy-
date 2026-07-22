import PageHero from "@/components/PageHero";
import ServicesList from "@/components/services/ServicesList";
import Process from "@/components/services/Process";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata = {
  title: "Services | IQ Accounting and Consulting Limited",
  description:
    "IQ sets up accounting systems and procedures manuals for new businesses and trains their staff to run them, and teaches accounting & taxation e-courses, workshops and private one-on-one sessions across Trinidad & Tobago.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="What we do"
        title="Two focuses,"
        accent="both built to make you self-sufficient."
        intro="We set up the accounting system for your new business — procedures manuals and all — and train your staff to run it. And we teach accounting & taxation to professionals through e-courses, workshops and private one-on-one sessions."
      />
      <ServicesList />
      <Process />
      <ContactCTA />
    </>
  );
}
