"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useRef } from "react";
import { useSectionReveal } from "./useSectionReveal";

const reviews = [
  {
    name: "Jenny Wilson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 4,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Esther Howard",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 4,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Robert Fox",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 4,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Sarah Johnson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Mark Davis",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 4,
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 16 16"
          fill={i < count ? "#F59E0B" : "#E5E7EB"}
        >
          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  featured,
}: {
  review: (typeof reviews)[0];
  featured?: boolean;
}) {
  return (
    <div
      className="mx-3 flex flex-col gap-4 p-6 rounded-2xl bg-white w-[240px] sm:w-[280px] shrink-0"
      style={{
        boxShadow: featured
          ? "0px 8px 40px 0px rgba(237,60,106,0.12)"
          : "0px 4px 24px 0px rgba(215,205,207,0.4)",
      }}
    >
      <div className="flex items-center gap-3">
        <Image
          src={review.img}
          alt={review.name}
          width={52}
          height={52}
          className="rounded-full object-cover w-[52px] h-[52px]"
        />
        <p className="font-bold text-[#1E1E1E] text-base">{review.name}</p>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed flex-1">
        {review.text}
      </p>

      <StarRating count={review.stars} />
    </div>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useSectionReveal(sectionRef);

  return (
    <section id="blog" ref={sectionRef} className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="text-center mb-12 px-6">
        <h2 data-gsap="heading" className="text-3xl sm:text-4xl font-bold text-[#1E1E1E]">
          Check Our Clients <span className="text-[#ED3C6A]">Review</span>
        </h2>
        <p
          data-gsap="copy"
          className="text-sm sm:text-base text-black max-w-2xl mx-auto mt-4"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div data-gsap="item">
        <Marquee gradient={false} speed={40} pauseOnHover className="">
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={i} review={review} featured={i % 2 === 1} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
