"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { useRef } from "react";
import { useSectionReveal } from "./useSectionReveal";

const links = {
  Company: ["About", "Features", "Works", "Career"],
  Help: [
    "Customer Support",
    "Delivery Details",
    "Terms & Conditions",
    "Privacy Policy",
  ],
  Resources: [
    "Free eBooks",
    "Development Tutorial",
    "How to – Blog",
    "Youtube Playlist",
  ],
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useSectionReveal(footerRef);

  return (
    <footer ref={footerRef} className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
        <div data-gsap="item" className="flex flex-col gap-5">
          <Image
            src="/google.png"
            alt="Logo"
            width={100}
            height={36}
            style={{ objectFit: "contain" }}
            className="self-start"
          />
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
            sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>
          <div className="flex items-center gap-4 mt-1">
            {[FaTwitter, FaFacebookF, FaInstagram, FaGithub].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="text-[#1E1E1E] hover:text-[#ED3C6A] transition-colors text-lg"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title} data-gsap="item" className="flex flex-col gap-4">
            <h4 className="font-bold text-[#1E1E1E] text-base">{title}</h4>
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm sm:text-base text-gray-500 hover:text-[#ED3C6A] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div data-gsap="item" className="bg-[#1E1B3A] py-4 px-10 text-center">
        <p className="text-sm text-white/80">
          © Copyright 2024, All Rights Reserved by XYz
        </p>
      </div>
    </footer>
  );
}
