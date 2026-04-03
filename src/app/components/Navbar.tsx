"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = ["Home", "About", "Services", "Pricing", "Blog", "Resources"];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <div
      className="bg-white"
      style={{ boxShadow: "0px 4px 62px 0px rgba(250, 196, 210, 0.63)" }}
    >
      <nav className="w-full container mx-auto flex items-center justify-between py-4  ">
        <Link href="/">
          <Image
            src="/google.png"
            alt="Logo"
            width={100}
            height={36}
            priority
          />
        </Link>

        <ul className="flex items-center gap-[25px]">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={`text-lg transition-colors ${
                  active === link
                    ? "text-[#ED3C6A] font-bold border-b-2 border-[#ED3C6A] pb-0.5"
                    : "text-[#1E1E1E] hover:text-[#ED3C6A]"
                }`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#schedule"
          className="bg-[#ED3C6A] text-white text-sm font-semibold px-[22px] py-[18px] rounded-[5px] hover:bg-[#d4305a] transition-colors flex items-center gap-2"
        >
          Schedule A Meeting <span>→</span>
        </Link>
      </nav>
    </div>
  );
}
