import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const features = [
    "Certified & Insured:",
    "Skilled Professional Team:",
    "Commitment to Safety",
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-gray-50 to-white "
    >
      <div className="container w-full mt-[500px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full ">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 animate-slide-left ">
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-blue-900 mb-4">
                  ABOUT ADEQUATE WATER WORKS
                </h2>
                <div className="w-20 h-1 bg-orange-500 mb-6"></div>
              </div>

              <h3 className="text-xl font-bold text-blue-800 mb-6">
                Over 8 Years of Experience in Water Construction
              </h3>

              <p className="text-base text-gray-700 leading-relaxed mb-8">
                Adequate Water Works Plc has been established on December, 2010
                in Addis Ababa as a private limited company to be engaged in the
                water sector development specifically in groundwater management,
                groundwater feasibility study, electromechanical equipments
                supply and installation, water well drilling, drilling machines
                maintenance, technical specification preparation and evaluation;
                and consulting about ground and surface water management. The
                company is able to drill water wells for drinking and irrigation
                purpose in every kind of ground formation with diameter of 6 -
                14 inch up to 300m depth depending to the diameter of the well
                and install solar & conventional water pumps at different head
                and discharge.
              </p>

              {/* Features List */}
              <div className=" flex flex-col gap-2 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="checkmark"></div>
                    <span className="text-base font-semibold text-gray-800">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="#about-more"
                className="btn btn-primary max-w-[200px]"
              >
                Contact Us Now!
              </Link>
            </div>
          </div>

          {/* Right Column - Image and Info Card */}
          <div className="order-1 lg:order-2 animate-slide-right">
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/about_worker_1765906663384.png"
                  alt="Professional Construction Worker"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
