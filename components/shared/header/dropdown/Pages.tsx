"use client";
import React from "react";

const pagesSections = [
  { title: "404 Error", href: "#404-error" },
  { title: "About Us", href: "#about-us" },
  { title: "Contact Us", href: "#contact-us" },
  { title: "FAQs Page", href: "#faqs-page" },
  { title: "Store Direction Page", href: "#store-direction-page" },
  { title: "Store Locations Page", href: "#store-locations-page" },
  { title: "Testimonials Page", href: "#testimonials-page" },
];

const Pages = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 gap-5 w-96 bg-gray-300">
        {/* Displaying each title with link */}
        {pagesSections.map((section, index) => (
          <div key={index} className="flex flex-col space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <a
                href={section.href}
                className="text-lg font-semibold hover:underline"
              >
                {section.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pages;
