"use client";
import Link from "next/link";
import React from "react";

const blogsSections = [
  { title: "Blog Left Sidebar", href: "#blog-left-sidebar" },
  { title: "Blog Right Sidebar", href: "#blog-right-sidebar" },
  { title: "Blog Without Sidebar", href: "#blog-without-sidebar" },
  { title: "Blog List View", href: "#blog-list-view" },
  { title: "Blog Column View", href: "#blog-column-view" },
  { title: "Blog Detail Left Sidebar", href: "#blog-detail-left-sidebar" },
  { title: "Blog Detail Right Sidebar", href: "#blog-detail-right-sidebar" },
  {
    title: "Blog Detail Without Sidebar",
    href: "#blog-detail-without-sidebar",
  },
];

const Blogs = () => {
  return (
    <section className="relative top-0">
      <div className="grid grid-cols-1 gap-5 w-96 bg-white border shadow-sm p-6">
        {/* Displaying each title with link */}
        {blogsSections.map((section, index) => (
          <div key={index} className="flex flex-col space-y-6">
            <div className="p-4 ">
              <Link
                href={section.href}
                className="text-lg font-semibold hover:underline"
              >
                {section.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Blogs;
