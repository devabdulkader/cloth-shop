import React from "react";
import MotionTransition from "../motion/MotionTransition";

const Statement = () => {
  return (
    <MotionTransition initialY={50} duration={3}>
      <section className="bg-gray-100 p-8 md:p-12 rounded-lg shadow-sm">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-lg md:text-xl xl:text-2xl font-serif italic text-gray-800">
            “Fashion is not simply the clothes we wear but also the stories they
            tell, the emotions they evoke and the confidence they instill. They
            are vivid expressions of our personality, aspirations and connection
            to the world around us.”
          </blockquote>
          <footer className="mt-6">
            <p className="text-gray-600 font-semibold">- Minas Store -</p>
          </footer>
        </div>
      </section>
    </MotionTransition>
  );
};

export default Statement;
