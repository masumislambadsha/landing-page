"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },

  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
  { href: "#resources", label: "Resources" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (label: string) => {
    setActive(label);
    setMobileOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#F8DAE2] bg-white/95 backdrop-blur-xl"
      style={{ boxShadow: "0px 4px 62px 0px rgba(250, 196, 210, 0.4)" }}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" onClick={() => handleNavClick("Home")}>
          <Image
            src="/google.png"
            alt="Logo"
            width={100}
            height={36}
            priority
            className="h-auto w-[90px] sm:w-[100px]"
          />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-[25px]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className={`text-base transition-colors xl:text-lg ${
                  active === link.label
                    ? "border-b border-[#ED3C6A] pb-0.5 font-bold text-[#ED3C6A]"
                    : "text-[#1E1E1E] hover:text-[#ED3C6A]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex">
          <Link
            href="#schedule"
            className="flex items-center gap-2 rounded-[5px] bg-[#ED3C6A] px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-[#d4305a]"
          >
            Schedule A Meeting <HiArrowRight size={18} />
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            data-open={mobileOpen ? "true" : "false"}
            className="hamburger rounded-full  bg-white p-1 text-[#1E1E1E] shadow-[0px_8px_26px_rgba(250,196,210,0.2)] transition-colors hover:bg-[#FFF4F7]"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line" d="M7 16 27 16" />
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full z-40 border-b border-[#F8DAE2] bg-white/98 shadow-[0px_24px_50px_rgba(250,196,210,0.24)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-6 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-h-[calc(100dvh-76px)] w-full max-w-7xl flex-col overflow-y-auto px-4 pb-6 pt-4 sm:px-6">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className={`border-b border-[#F7DCE3] py-4 text-2xl font-semibold transition-all duration-300 ${
                  active === link.label
                    ? "text-[#ED3C6A]"
                    : "text-[#1E1E1E] fontme hover:text-[#ED3C6A]"
                } ${index === navLinks.length - 1 ? "border-b-0" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 border-t border-[#F7DCE3] pt-5">
            <Link
              href="#schedule"
              onClick={() => setMobileOpen(false)}
              className="rounded-[5px] bg-[#ED3C6A] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#d4305a]"
            >
              Schedule A Meeting
            </Link>
            <Link
              href="#pricing"
              onClick={() => handleNavClick("Pricing")}
              className="rounded-[5px] border border-[#ED3C6A] px-5 py-3 text-center text-sm font-semibold text-[#ED3C6A] transition-colors hover:bg-[#FFF1F5]"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
