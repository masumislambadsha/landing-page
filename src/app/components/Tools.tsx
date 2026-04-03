"use client";

import Image from "next/image";
import { useState } from "react";

const tools = [
  { src: "/tools/pricelab.png", alt: "PriceLabs" },
  { src: "/tools/wheelhouse.png", alt: "Wheelhouse" },
  { src: "/tools/beyoundprice.png", alt: "Beyond Pricing" },
  { src: "/tools/hostfully.png", alt: "Hostfully" },
  { src: "/tools/guestfy.png", alt: "Guesty For Hosts" },
  { src: "/tools/lodigy.png", alt: "Lodgify" },
  { src: "/tools/hostfully.png", alt: "Hostfully 2" },
  { src: "/tools/guestfy.png", alt: "Guesty 2" },
  { src: "/tools/lodigy.png", alt: "Lodgify 2" },
];

const defaultShadow = "0px 2px 20px 0px rgba(215,205,207,0.3)";
const hoverShadow = "0px 4px 30.3px 0px rgba(255,138,168,0.28)";

function ToolCard({ src, alt }: { src: string; alt: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-white rounded-xl flex items-center justify-center p-10 transition-all duration-300 cursor-pointer border-2 ${hovered ? "border-[#ED3C6A] -translate-y-1" : "border-transparent"}`}
      style={{ boxShadow: hovered ? hoverShadow : defaultShadow }}
    >
      <Image
        src={src}
        alt={alt}
        width={160}
        height={50}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

export default function Tools() {
  return (
    <section className="py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1E1E1E]">
          Our <span className="text-[#ED3C6A]">Tools</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="bg-[#F5F5F5] py-5">
        <div className="grid grid-cols-3 gap-5 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <ToolCard key={tool.alt} src={tool.src} alt={tool.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
