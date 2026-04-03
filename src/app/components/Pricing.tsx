"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useSectionReveal } from "./useSectionReveal";

const plans = [
  {
    name: "Freebie",
    desc: "Ideal for individuals who need quick access to basic features.",
    monthly: 0,
    yearly: 0,
    highlight: false,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: false },
      { text: "Unlimited Sharing", included: false },
      { text: "Upload graphics & video in up to 4k", included: false },
      { text: "Unlimited Projects", included: false },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Professional",
    desc: "Ideal for individuals who need advanced features and tools for client work.",
    monthly: 25,
    yearly: 19,
    highlight: true,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Enterprise",
    desc: "Ideal for businesses who need personalized services and security for large teams.",
    monthly: 100,
    yearly: 75,
    highlight: false,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: true },
      { text: "Create teams to collaborate on designs", included: true },
    ],
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const [yearly, setYearly] = useState(false);

  useSectionReveal(sectionRef);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="text-center mb-4">
        <h2
          data-gsap="heading"
          className="text-[40px] font-bold text-[#1E1E1E]"
        >
          Airbnb Assistant <span className="text-[#ED3C6A]">pricing</span>
        </h2>
        <p data-gsap="copy" className="text-xl text-black mt-3">
          Choose a plan that&apos;s right for you
        </p>
      </div>

      <div
        data-gsap="item"
        className="flex items-center justify-center gap-6 mt-8 mb-20 relative"
      >
        <span
          className={`text-lg font-semibold transition-colors duration-300 ${!yearly ? "text-[#1E1E1E]" : "text-gray-400"}`}
        >
          Pay Monthly
        </span>
        <button
          onClick={() => setYearly(!yearly)}
          className={`relative w-[56px] h-[30px] rounded-full transition-colors duration-300 ${yearly ? "bg-[#ED3C6A]" : "bg-[#E5E7EB]"}`}
        >
          <span
            className={`absolute top-[3px] w-[24px] h-[24px] bg-white rounded-full shadow-md transition-all duration-300 ${yearly ? "left-[29px]" : "left-[3px]"}`}
          />
        </button>
        <span
          className={`text-sm font-medium ${yearly ? "text-[#1E1E1E]" : "text-gray-400"}`}
        >
          Pay Yearly
        </span>

        <div className="absolute top-full mt-1 left-[52%] flex flex-row items-end">
          <Image
            src="/arrow.png"
            alt="arrow"
            width={78}
            height={50}
            className="object-contain"
          />
          <span className="text-[#ED3C6A] text-sm pb-3 font-medium ">
            Save 25%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            data-gsap="item"
            className={`relative rounded-2xl p-8 flex flex-col gap-5 group transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden ${
              plan.highlight
                ? "bg-[#ED3C6A] text-white"
                : "bg-white border border-gray-100 text-[#1E1E1E]"
            }`}
            style={
              !plan.highlight
                ? { boxShadow: "0px 4px 40px 0px rgba(215,205,207,0.4)" }
                : {}
            }
          >
            {!plan.highlight && (
              <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#ED3C6A] transition-all duration-500 pointer-events-none z-10" />
            )}

            <h3
              className={`relative z-10 text-xl font-bold transition-colors duration-300 ${plan.highlight ? "text-white" : "text-[#1E1E1E] group-hover:text-[#ED3C6A]"}`}
            >
              {plan.name}
            </h3>
            <p
              className={`relative z-10 text-sm ${plan.highlight ? "text-white/80" : "text-gray-500"}`}
            >
              {plan.desc}
            </p>

            <div className="relative z-10 flex items-end gap-1">
              <span
                className={`text-5xl font-bold ${plan.highlight ? "text-white" : "text-[#1E1E1E]"}`}
              >
                ${yearly ? plan.yearly : plan.monthly}
              </span>
              <span
                className={`text-sm mb-2 ${plan.highlight ? "text-white/70" : "text-gray-400"}`}
              >
                / Month
              </span>
            </div>

            <button
              className={`relative z-10 w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                plan.highlight
                  ? "bg-white text-[#ED3C6A] hover:bg-gray-100"
                  : "border border-[#ED3C6A] text-[#ED3C6A] hover:bg-[#ED3C6A] hover:text-white"
              }`}
            >
              Get Started Now
            </button>

            <ul className="relative z-10 flex flex-col gap-3 mt-2">
              {plan.features.map((f) => (
                <li key={f.text} className="flex items-center gap-3">
                  <span
                    className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                      f.included
                        ? plan.highlight
                          ? "bg-white/20 text-white"
                          : "bg-[#fde8ee] text-[#ED3C6A]"
                        : plan.highlight
                          ? "bg-white/10 text-white/50"
                          : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {f.included ? "✓" : "✕"}
                  </span>
                  <span
                    className={`text-sm ${
                      f.included
                        ? plan.highlight
                          ? "text-white"
                          : "text-[#1E1E1E]"
                        : plan.highlight
                          ? "text-white/50"
                          : "text-gray-400"
                    }`}
                  >
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
