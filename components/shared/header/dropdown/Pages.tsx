"use client";
import Link from "next/link";
import React from "react";

const pagesSections = [
  { title: "Articles", href: "/blogs" },
  { title: "Privacy Policy", href: "/privacy-policy" },

  { title: "Deliver", href: "deliver" },
  { title: "Return and Refund", href: "/return-and-refund" },
  { title: "FAQs", href: "/frequently-asked-questions" },

  { title: "Testimonials", href: "/testimonials" },
];

const Pages = () => {
  return (
    <section className="relative top-0 z-50">
      <div className="grid grid-cols-1 gap-5 w-80 bg-white border shadow-sm px-6 py-8">
        {/* Displaying each title with link */}
        {pagesSections.map((section, index) => (
          <div key={index} className="flex flex-col">
            <div className="p-x py-1 ">
              <Link href={section.href} className="text-md  hover:underline">
                {section.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pages;
