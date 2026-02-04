import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const services = [
    {
      icon: "/icon_marine_1765906681366.png",
      title: "MARINE CONSTRUCTION",
      subtitle: "Docks, Piers, & Harbors",
    },
    {
      icon: "/icon_dam_1765906699025.png",
      title: "DAM & LEVEE CONSTRUCTION",
      subtitle: "Dams, Levees, & Flood Control",
    },
    {
      icon: "/icon_pipeline_1765906720014.png",
      title: "PIPELINE INSTALLATION",
      subtitle: "Water & Sewer Pipelines",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_construction_1765906644677.png"
          alt="Water Construction"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl animate-fade-in-up flex flex-col items-start gap-2 mb-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            EXPERTS IN
            <br />
            WATER CONSTRUCTION
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-8 max-w-xl">
            Building A Better Water Infrastructure
          </p>
          <Link href="#services" className="btn btn-secondary inline-block">
            Learn More
          </Link>
        </div>
      </div>
      {/* Service Cards */}
      <div className="absolute bottom-[-50px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 lg:mt-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="card flex items-start gap-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-blue-900 mb-1 leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {service.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
