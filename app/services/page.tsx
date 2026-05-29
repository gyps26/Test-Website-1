import { ServicesSection } from "@/components/sections/ServicesSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function ServicesPage() {
  return (
    <>
      <div className="bg-brand-charcoal py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Comprehensive landscaping and lawn care solutions for your home.</p>
      </div>
      <ServicesSection />
      <FinalCTA />
    </>
  );
}
