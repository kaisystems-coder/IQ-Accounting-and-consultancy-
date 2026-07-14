import PageHero from "@/components/PageHero";
import ContactBody from "@/components/contact/ContactBody";

export const metadata = {
  title: "Contact | IQ Accounting and Consulting Limited",
  description:
    "Book a free consult with IQ Accounting and Consulting. Call, WhatsApp or send a message — we'll help you clear the pile.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get in touch"
        title="Bring the box."
        accent="Let's clear it together."
        intro="Whatever state your books are in, one conversation gets IQ on your side. Reach out and we'll take it from there."
      />
      <ContactBody />
    </>
  );
}
