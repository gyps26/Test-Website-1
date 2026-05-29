"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 bg-brand-green relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Ready To Transform Your Outdoor Space?
        </h2>
        <p className="text-xl md:text-2xl text-brand-beige mb-10 max-w-3xl mx-auto font-medium">
          Get a free quote today and let's build something beautiful together. Our team is ready to bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-brand-green hover:bg-brand-beige text-lg font-bold shadow-xl border-none">
            <Link href="/contact">Get Free Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white text-lg font-bold">
            <a href="tel:+15551234567">Call Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
