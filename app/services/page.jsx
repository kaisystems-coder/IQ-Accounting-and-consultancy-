import PageHero from "@/components/PageHero";
import ServicesList from "@/components/services/ServicesList";
import Process from "@/components/services/Process";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata = {
  title: "Services | IQ Accounting and Consulting Limited",
  description:
    "Accounting & payroll, taxation, computerized systems, certified financial statements, advisory and short e-courses for Trinidad & Tobago businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="What we do"
        title="Six services,"
        accent="one steady hand on your books."
        intro="From the everyday bookkeeping to the certified statements your bank asks for, IQ covers the whole compliance picture — plus the advice and training to go with it."
      />
      <ServicesList />
      <Process />
      <ContactCTA />
    </>
  );
}
