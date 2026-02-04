"use client";
import React from "react";

export const ContactUs = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Office Location",
      details: ["Addis Ababa, Ethiopia"],
    },
    {
      icon: "📞",
      title: "Phone Number",
      details: ["+251 11 XXX XXXX", "+251 9XX XXX XXX"],
    },
    {
      icon: "✉️",
      title: "Email Address",
      details: ["info@adequatewaterworks.com", "contact@adequatewaterworks.com"],
    },
    {
      icon: "🕒",
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"],
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-black text-blue-900 mb-4">
            GET IN TOUCH
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to start your water construction project? Contact us today for
            a free consultation and quote.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Information */}
          <div className="order-2 lg:order-1 animate-slide-left">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Contact Information
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-8">
                  We're here to answer any questions you may have about our
                  services. Reach out to us and we'll respond as soon as
                  possible.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-900"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{info.icon}</div>
                      <div>
                        <h4 className="text-lg font-bold text-blue-900 mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="order-1 lg:order-2 animate-slide-right">
            <div className="card bg-white">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Send Us a Message
              </h3>
              <form className="flex flex-col gap-5">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      name="first-name"
                      autoComplete="given-name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-blue-900 focus:outline-none transition-colors text-gray-800"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      name="last-name"
                      autoComplete="family-name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-blue-900 focus:outline-none transition-colors text-gray-800"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-blue-900 focus:outline-none transition-colors text-gray-800"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-blue-900 focus:outline-none transition-colors text-gray-800"
                    placeholder="+251 9XX XXX XXX"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Company (Optional)
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    autoComplete="organization"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-blue-900 focus:outline-none transition-colors text-gray-800"
                    placeholder="Your Company Name"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-blue-900 focus:outline-none transition-colors resize-none text-gray-800"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
