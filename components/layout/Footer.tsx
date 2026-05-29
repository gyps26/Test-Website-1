import Link from "next/link";
import { Leaf, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Clock } from "lucide-react";

const navigation = {
  services: [
    { name: "Landscape Design", href: "/services" },
    { name: "Lawn Maintenance", href: "/services" },
    { name: "Patio Installation", href: "/services" },
    { name: "Retaining Walls", href: "/services" },
    { name: "Hardscaping", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Project Gallery", href: "/gallery" },
    { name: "Customer Reviews", href: "/reviews" },
    { name: "Contact Us", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-gray-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-brand-green p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Stages <span className="text-brand-green-light">Landscape</span>
              </span>
            </Link>
            <p className="text-sm leading-6 text-gray-400 max-w-xs">
              Professional landscaping services design, build, and maintain beautiful outdoor spaces for homeowners who want lasting curb appeal.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Contact Info</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-sm">123 Landscape Way<br />Columbus, OH 43215</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-brand-green shrink-0" />
                    <a href="tel:+15551234567" className="text-sm hover:text-white hover:underline">(555) 123-4567</a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-brand-green shrink-0" />
                    <a href="mailto:hello@stageslandscape.com" className="text-sm hover:text-white hover:underline">hello@stageslandscape.com</a>
                  </li>
                  <li className="flex items-start space-x-3 pt-2">
                    <Clock className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-sm">Mon-Fri: 7am - 6pm<br />Sat: 8am - 2pm<br />Sun: Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {navigation.legal.map((item) => (
              <a key={item.name} href={item.href} className="text-xs leading-5 text-gray-400 hover:text-white">
                {item.name}
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} Stages Lawn and Landscape. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
