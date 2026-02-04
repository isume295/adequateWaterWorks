import React from "react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: "/icon_marine_1765906681366.png",
      title: "Marine Construction",
      description:
        "Expert construction of docks, piers, harbors, and marine structures. We provide comprehensive solutions for waterfront development with a focus on durability and environmental sustainability.",
      features: [
        "Dock & Pier Construction",
        "Harbor Development",
        "Marine Infrastructure",
        "Waterfront Solutions",
      ],
    },
    {
      icon: "/icon_dam_1765906699025.png",
      title: "Dam & Levee Construction",
      description:
        "Specialized in building dams, levees, and flood control systems. Our team ensures structural integrity and long-term reliability for water management and flood prevention.",
      features: [
        "Dam Construction",
        "Levee Systems",
        "Flood Control Solutions",
        "Water Management",
      ],
    },
    {
      icon: "/icon_pipeline_1765906720014.png",
      title: "Pipeline Installation",
      description:
        "Professional installation of water and sewer pipelines. We handle projects of all sizes with precision, ensuring efficient water distribution and waste management systems.",
      features: [
        "Water Pipeline Systems",
        "Sewer Infrastructure",
        "Distribution Networks",
        "Maintenance Services",
      ],
    },
    {
      icon: "/icon_marine_1765906681366.png",
      title: "Water Well Drilling",
      description:
        "Comprehensive water well drilling services for drinking and irrigation purposes. We drill wells in any ground formation, 6-14 inch diameter, up to 300m depth.",
      features: [
        "Drinking Water Wells",
        "Irrigation Wells",
        "Deep Well Drilling (up to 300m)",
        "Variable Diameter (6-14 inch)",
      ],
    },
    {
      icon: "/icon_pipeline_1765906720014.png",
      title: "Pump Installation",
      description:
        "Installation of solar and conventional water pumps at different heads and discharge rates. Energy-efficient solutions tailored to your specific needs.",
      features: [
        "Solar Pump Installation",
        "Conventional Pumps",
        "Custom Head & Discharge",
        "Energy Efficient Solutions",
      ],
    },
    {
      icon: "/icon_dam_1765906699025.png",
      title: "Groundwater Management",
      description:
        "Expert groundwater feasibility studies and management solutions. We provide comprehensive consulting on ground and surface water management.",
      features: [
        "Feasibility Studies",
        "Groundwater Analysis",
        "Resource Management",
        "Technical Consulting",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-black text-blue-900 mb-4">
            OUR SERVICES
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive water construction solutions tailored to meet your
            project needs. From groundwater management to infrastructure
            development.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon Header */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl font-bold text-white relative">
                  {service.title}
                </h3>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="checkmark mt-0.5"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a
                    href="#contact"
                    className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors inline-flex items-center gap-2 group/link"
                  >
                    Get a Quote
                    <span className="group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-12 shadow-2xl animate-fade-in-up">
          <h3 className="text-3xl font-black text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Every project is unique. Contact us to discuss your specific water
            construction needs and get a tailored solution.
          </p>
          <a href="#contact" className="btn btn-primary inline-block">
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
