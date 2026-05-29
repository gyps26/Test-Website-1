import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function AboutPage() {
  return (
    <>
      <div className="bg-brand-charcoal py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Learn more about our company, our values, and our commitment to excellence.</p>
      </div>
      <AboutSection />
      <WhyChooseUs />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
