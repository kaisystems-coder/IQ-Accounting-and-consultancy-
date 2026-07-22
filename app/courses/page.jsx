import PageHero from "@/components/PageHero";
import CoursesGrid from "@/components/courses/CoursesGrid";
import CourseReview from "@/components/courses/CourseReview";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata = {
  title: "Short Courses | IQ Accounting and Consulting Limited",
  description:
    "Practical short e-courses for Trinidad & Tobago — debits & credits, TD4s, PAYE, NIS, Peachtree (Sage 50), income & corporation tax, payroll and more.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        kicker="E-courses & workshops"
        title="Learn the essentials,"
        accent="taught the way you'll actually use them."
        intro="Practical accounting & taxation e-courses and workshops for professionals across T&T — PAYE, NIS, TD4s, VAT, Peachtree and more. Take them online, in a workshop, or one-on-one, without the jargon or the semester-long commitment."
      />
      <CoursesGrid />
      <CourseReview />
      <ContactCTA />
    </>
  );
}
