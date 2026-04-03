"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  { src: "/brands/Clip path group-1.svg", alt: "Brand 1" },
  { src: "/brands/Clip path group.svg", alt: "Brand 2" },
  { src: "/brands/Group 39931.svg", alt: "Brand 3" },
  { src: "/brands/Group 39932.svg", alt: "Brand 4" },
  { src: "/brands/Group-1.svg", alt: "Brand 5" },
  { src: "/brands/Group.svg", alt: "Brand 6" },
  { src: "/brands/layer1.svg", alt: "Brand 7" },
];

const allLogos = [...logos, ...logos, ...logos];

export default function Brands() {
  return (
    <section className="py-6  bg-white border-t border-gray-100">
      <p className="text-center text-[20px] font-semibold text-black mb-7 mt-[40px]">
        Trusted by leaders in 50+ industries
      </p>
      <Marquee gradient={false} speed={50} className="bg-[#F6F6F6] py-5">
        {allLogos.map((logo, i) => (
          <div key={i} className="mx-10 flex items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
             className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
