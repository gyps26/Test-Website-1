"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  { imgSeed: "patio1", title: "Custom Paver Patio", span: "col-span-1 row-span-1 md:col-span-2 md:row-span-2" },
  { imgSeed: "lawn1", title: "Lawn Transformation", span: "col-span-1 row-span-1" },
  { imgSeed: "wall1", title: "Retaining Wall Install", span: "col-span-1 row-span-1" },
  { imgSeed: "landscape1", title: "Front Yard Makeover", span: "col-span-1 row-span-1" },
  { imgSeed: "living1", title: "Outdoor Living Area", span: "col-span-1 row-span-1 md:col-span-2" },
];

export function GalleryPreview() {
  return (
    <section className="py-24 bg-brand-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h3 className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-4">Our Work</h3>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal">
              Project Gallery
            </h2>
          </div>
          <Button asChild variant="outline" className="mt-6 md:mt-0 lg:w-auto w-full">
            <Link href="/gallery">View Full Portfolio</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[600px] md:h-[800px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${project.span}`}
            >
              <Image
                src={`https://picsum.photos/seed/${project.imgSeed}/800/800`}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h4 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
