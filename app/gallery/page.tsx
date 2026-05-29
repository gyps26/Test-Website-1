import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function GalleryPage() {
  return (
    <>
      <div className="bg-brand-charcoal py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Gallery</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Browse our recent projects and get inspired for your own outdoor space.</p>
      </div>
      <GalleryPreview />
      <FinalCTA />
    </>
  );
}
