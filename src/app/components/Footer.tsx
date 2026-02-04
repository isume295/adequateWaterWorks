import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Marine Construction", href: "#services" },
      { name: "Dam & Levee Construction", href: "#services" },
      { name: "Pipeline Installation", href: "#services" },
      { name: "Water Well Drilling", href: "#services" },
      { name: "Pump Installation", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Projects", href: "#projects" },
      { name: "Certifications", href: "#certifications" },
      { name: "Careers", href: "#careers" },
    ],
    resources: [
      { name: "Contact Us", href: "#contact" },
      { name: "Request Quote", href: "#contact" },
      { name: "FAQs", href: "#faqs" },
      { name: "Privacy Policy", href: "#privacy" },
    ],
  };

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black mb-4">
              ADEQUATE WATER WORKS
            </h3>
            <div className="w-16 h-1 bg-orange-500 mb-6"></div>
            <p className="text-white/80 leading-relaxed mb-6">
              Building Ethiopia's water infrastructure since 2010. Specialized
              in groundwater management, water well drilling, and
              electromechanical equipment installation.
            </p>
            <div className="flex gap-4">
              {/* Social Media Icons - using emoji for now, can be replaced with icons */}
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <span className="text-lg">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <span className="text-lg">𝕏</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <span className="text-lg">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <span className="text-lg">📷</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <div className="w-12 h-0.5 bg-orange-500 mb-4"></div>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-orange-500 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <div className="w-12 h-0.5 bg-orange-500 mb-4"></div>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-orange-500 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
            <div className="w-12 h-0.5 bg-orange-500 mb-4"></div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl">📍</span>
                <div>
                  <p className="text-white/80 text-sm">
                    Addis Ababa
                    <br />
                    Ethiopia
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl">📞</span>
                <div>
                  <p className="text-white/80 text-sm">
                    +251 11 XXX XXXX
                    <br />
                    +251 9XX XXX XXX
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl">✉️</span>
                <div>
                  <p className="text-white/80 text-sm break-all">
                    info@adequatewaterworks.com
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Adequate Water Works Plc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#privacy"
                className="text-white/60 hover:text-orange-500 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                className="text-white/60 hover:text-orange-500 text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
