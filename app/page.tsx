import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import CoursesSection from "@/components/CoursesSection";
import Categories from "@/components/Categories";
import ProfessionalGrowth from "@/components/ProfessionalGrowth";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <CoursesSection />
      <Categories />
      <ProfessionalGrowth />
      <CTABanner />
      <Testimonials />
      <Footer />
    </main>
  );
}
