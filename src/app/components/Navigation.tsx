"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-gradient-to-r from-blue-900/95 to-blue-800/95"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/aquabuild_logo_1765906627283.png"
                alt="Adequate Water Works Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`text-xl font-black transition-colors duration-300 ${
                isScrolled ? "text-blue-900" : "text-white"
              }`}
            >
              ADEQUATE WATER WORKS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-orange-500 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="#quote" className="btn btn-primary">
              Get A Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  isScrolled ? "bg-gray-900" : "bg-white"
                } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  isScrolled ? "bg-gray-900" : "bg-white"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  isScrolled ? "bg-gray-900" : "bg-white"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium py-2 transition-colors duration-300 hover:text-orange-500 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#quote"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-primary w-full"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
