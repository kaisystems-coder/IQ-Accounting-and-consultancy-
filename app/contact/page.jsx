import PageHero from "@/components/PageHero";
import ContactBody from "@/components/contact/ContactBody";

export const metadata = {
  title: "Contact | IQ Accounting and Consulting Limited",
  description:
    "Get in touch with IQ Accounting and Consulting. Call, WhatsApp or send a message about a system setup, staff training, a course, a workshop or private one-on-one training.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get in touch"
        title="Let's get you set up"
        accent="to run your own numbers."
        intro="Setting up a new business, training your staff, or developing your own skills — tell us where you are and we'll point you to the right setup, course or one-on-one session."
      />
      <ContactBody />
    </>
  );
}
