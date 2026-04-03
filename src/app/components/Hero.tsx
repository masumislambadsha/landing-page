"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HiArrowRight } from "react-icons/hi";

const iconShadow = { filter: "drop-shadow(0px -2px 6.3px rgba(0,0,0,0.25))" };

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9 },
    )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5",
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4",
      )
      .fromTo(
        iconsRef.current?.children ?? [],
        { opacity: 0, scale: 0.6, rotation: -20 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.8, stagger: 0.15 },
        "-=0.6",
      );
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white"
      style={{ minHeight: "560px" }}
    >
      <div className="absolute inset-0 bg-grid opacity-70" />

      <span className="absolute left-[4%] top-[26%] z-20 hidden h-3 w-3 rounded-full bg-[#4F46E5] sm:block" />
      <span className="absolute left-[10%] top-[50%] z-20 hidden h-2.5 w-2.5 rounded-full bg-[#EF4444] sm:block" />
      <span className="absolute bottom-[8%] left-[4%] z-20 hidden h-2.5 w-2.5 rounded-full bg-[#EAB308] md:block" />
      <span className="absolute left-[49%] top-[8%] z-20 h-2.5 w-2.5 rounded-full bg-[#10B981]" />
      <span className="absolute bottom-[6%] left-[48%] z-20 hidden h-2.5 w-2.5 rounded-full bg-[#5AF9FF] sm:block" />
      <span className="absolute right-[2%] top-[35%] z-20 hidden h-2.5 w-2.5 rounded-full bg-[#EAB308] sm:block" />
      <span className="absolute right-[1.5%] top-[62%] z-20 hidden h-2 w-2 rounded-full bg-[#1E1E1E] sm:block" />

      <div ref={iconsRef} className="pointer-events-none">
        <div
          className="absolute left-[2%] top-[10%] z-0 sm:left-[15%] md:left-[18%] lg:left-[24%] sm:top-[12%]"
          style={iconShadow}
        >
          <Image
            src="/hero-logo/left-top.png"
            alt="left top logo"
            width={100}
            height={100}
            className="h-auto w-10 sm:w-16 lg:w-[100px] opacity-90"
          />
        </div>
        <div
          className="absolute right-[2%] top-[12%] z-0 rotate-15 sm:right-[15%] md:right-[18%] lg:right-[24%] sm:top-[12%]"
          style={iconShadow}
        >
          <Image
            src="/hero-logo/right-top.png"
            alt="right top logo"
            width={100}
            height={100}
            className="h-auto w-10 sm:w-16 lg:w-[100px] opacity-90"
          />
        </div>
        {/* Hiding bottom icons on small mobile to reduce clutter */}
        <div
          className="absolute bottom-[20%] left-[8%] z-0 hidden -rotate-12 md:block lg:left-[26%] lg:bottom-[15%]"
          style={iconShadow}
        >
          <Image
            src="/hero-logo/V-logo.png"
            alt="left bottom logo"
            width={90}
            height={90}
            className="h-auto w-16 lg:w-[90px] opacity-80"
          />
        </div>
        <div
          className="absolute bottom-[16%] right-[8%] z-0 hidden rotate-12 md:block lg:right-[26%] lg:bottom-[14%]"
          style={iconShadow}
        >
          <Image
            src="/hero-logo/right-bottom.png"
            alt="right bottom logo"
            width={100}
            height={100}
            className="h-auto w-16 lg:w-[100px] opacity-80"
          />
        </div>
      </div>

      <div
        className="relative z-10 flex flex-col items-center justify-center px-5 py-24 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-28"
        style={{ background: "transparent" }}
      >
        <h1
          ref={headingRef}
          className="mb-6 text-[1.75rem] leading-[1.2] font-bold text-black sm:text-5xl lg:text-7xl tracking-tighter"
        >
          Airbnb Assistants For <br className="hidden sm:block" />
          <span className="text-[1.35rem] font-medium sm:text-[36px] lg:text-[48px] text-[#ED3C6A] block mt-1">
            Property Management
          </span>
        </h1>
        <p
          ref={subRef}
          className="mb-10 max-w-xl text-sm font-medium text-slate-800 sm:text-base lg:text-lg lg:max-w-[700px] leading-relaxed mx-auto"
        >
          Streamline your short-term rental business with intelligent AI that handles bookings, guest inquiries, and operations 24/7.
        </p>
        <div
          ref={ctaRef}
          className="flex w-full max-w-xs flex-col items-center gap-4 sm:w-auto sm:max-w-none"
        >
          <Link
            href="#schedule"
            className="flex w-full items-center justify-center gap-2 rounded-[5px] bg-[#ED3C6A] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#d4305a] sm:w-auto"
          >
            Schedule A Meeting <HiArrowRight size={20} />
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-black underline underline-offset-4 hover:text-[#ED3C6A]"
          >
            See Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
