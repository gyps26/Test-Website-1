"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trees, Shovel, Droplets, Grid3x3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Landscape Design",
    description: "Custom 3D designs that transform your vision into an actionable plan for your ideal outdoor living space.",
    icon: Trees,
    imgSeed: "landscape-design",
  },
  {
    title: "Hardscaping & Patios",
    description: "Premium paver patios, walkways, and retaining walls built with structural integrity and elegant aesthetics.",
    icon: Grid3x3,
    imgSeed: "patio",
  },
  {
    title: "Lawn Maintenance",
    description: "Comprehensive care plans including mowing, fertilization, aeration, and weed control for a lush green lawn.",
    icon: Shovel,
    imgSeed: "lawn-care",
  },
  {
    title: "Drainage Solutions",
    description: "Effective French drains, grading, and water management to protect your property from water damage.",
    icon: Droplets,
    imgSeed: "drainage",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-brand-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-4">Our Services</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
            Comprehensive Landscaping Solutions
          </h2>
          <p className="text-lg text-gray-600">
            We offer end-to-end services to keep your property looking its absolute best year-round, from initial design concepts to weekly maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group flex flex-col h-full"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/${service.imgSeed}/600/400`}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-2xl shadow-md">
                  <service.icon className="w-6 h-6 text-brand-green" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-brand-charcoal mb-3 group-hover:text-brand-green transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-light transition-colors mt-auto"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
