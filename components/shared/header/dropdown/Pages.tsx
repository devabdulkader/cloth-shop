"use client";
import React from "react";

const pagesSections = [
  { title: "404 Error", href: "#404-error" },
  { title: "About Us", href: "/about-us" },
  { title: "Contact Us", href: "/contact-us" },
  { title: "Blogs", href: "/blogs" },

  { title: "FAQs Page", href: "/frequently-asked-questions" },
  { title: "Store Direction Page", href: "#store-direction-page" },
  { title: "Store Locations Page", href: "#store-locations-page" },
  { title: "Testimonials Page", href: "#testimonials-page" },
];

const Pages = () => {
  return (
    <section className="relative top-0">
      <div className="grid grid-cols-1 gap-5 w-96 bg-white border shadow-sm p-6">
        {/* Displaying each title with link */}
        {pagesSections.map((section, index) => (
          <div key={index} className="flex flex-col space-y-6">
            <div className="p-4 ">
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
