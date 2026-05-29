import { MapPin, Phone, Clock } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-brand-charcoal text-white/90 py-2 hidden md:block text-sm">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-brand-accent" />
            <span>Serving Greater Ohio Area</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-brand-accent" />
            <span>Mon-Sat: 7am - 6pm</span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="font-semibold text-brand-accent uppercase tracking-wider text-xs">
            Free Estimates
          </div>
          <a href="tel:+15551234567" className="flex items-center space-x-2 font-medium hover:text-white transition-colors">
            <Phone className="w-4 h-4 text-brand-accent" />
            <span>(555) 123-4567</span>
          </a>
        </div>
      </div>
    </div>
  );
}
