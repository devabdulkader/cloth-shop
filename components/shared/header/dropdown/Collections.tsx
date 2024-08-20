"use client";
import React from "react";

const collectionSections = [
  {
    title: "First Grid Column",
    items: [
      "Best Sellers",
      "New Arrival",
      "Top Trending",
      "Top Trending",
      "Denim Collection",
    ],
  },
  {
    title: "Second Grid Column",
    items: [
      "Collection Page",
      "Collection Left Sidebar",
      "Collection Right Sidebar",
      "Collection Top Sidebar",
      "Collection Without Sidebar",
      "Collection Deals",
    ],
  },
  {
    title: "Third Grid Column",
    items: [
      "Collection Page",
      "Collection Canvas on Left",
      "Collection Canvas on Top",
      "Collection Canvas on Bottom",
      "Collection Full Width",
    ],
  },
  {
    title: "Fourth Grid Column",
    items: [
      "Collection Page",
      "Numbered Pagination",
      "Load More Button",
      "Infinity Scroll Load More",
    ],
  },
];

const Collections = () => {
  return (
    <section className="pt-10">
      <main className="bg-white border shadow-sm">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 max-w-[70vw] mx-auto w-full">
          {collectionSections.map((section, index) => (
            <div key={index} className="flex flex-col space-y-6">
              <div className=" p-4 ">
                <h2 className="text-xl font-bold">{section.title}</h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {section.items.map((item, idx) => (
                  <div key={idx} className="p-4   transition">
                    <h3 className="text-lg font-semibold">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Collections;
