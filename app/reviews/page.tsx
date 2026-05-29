import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function ReviewsPage() {
  return (
    <>
      <div className="bg-brand-charcoal py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Reviews</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">See what our customers are saying about our work.</p>
      </div>
      <Testimonials />
      <FinalCTA />
    </>
  );
}
