import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

interface SocialIcon {
  href: string;
  icon: React.ReactNode;
}

const socialIcons: SocialIcon[] = [
  {
    href: "https://facebook.com",
    icon: <FaFacebookF className="text-md " />,
  },
  {
    href: "https://twitter.com",
    icon: <FaTwitter className="text-md " />,
  },
  {
    href: "https://instagram.com",
    icon: <FaInstagram className="text-md" />,
  },
  {
    href: "https://linkedin.com",
    icon: <FaLinkedinIn className="text-md" />,
  },
];

const Contact = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-5 mb-5">
        <p className="text-gray-700">
          Call Us:{" "}
          <a href="tel:+123456789" className="text-blue-500">
            +123-456-789
          </a>
        </p>
        <p className="text-gray-700">
          Email:{" "}
          <a href="mailto:info@example.com" className="text-blue-500">
            info@example.com
          </a>
        </p>
      </div>
      <div className="flex space-x-4">
        {socialIcons.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center transition-colors duration-300 hover:bg-black hover:text-white"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
