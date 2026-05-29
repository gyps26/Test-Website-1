"use client";

import { CheckCircle, ShieldCheck, Award, Star, History, ThumbsUp } from "lucide-react";
import { motion } from "motion/react";

const badges = [
  { icon: Award, text: "Locally Owned" },
  { icon: ShieldCheck, text: "Fully Licensed" },
  { icon: CheckCircle, text: "Insured" },
  { icon: History, text: "10+ Years Experience" },
  { icon: ThumbsUp, text: "Free Estimates" },
  { icon: Star, text: "5-Star Rated" },
];

export function TrustBadges() {
  return (
    <div className="bg-brand-charcoal text-white py-12 relative z-20 shadow-2xl -mt-10 mx-4 md:mx-auto max-w-7xl rounded-2xl md:rounded-full px-8 md:px-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center space-y-3 text-center"
          >
            <div className="bg-brand-green/20 p-3 rounded-full">
              <badge.icon className="w-6 h-6 text-brand-accent" />
            </div>
            <span className="text-sm font-semibold tracking-wide">{badge.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
