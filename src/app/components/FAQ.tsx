"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "Is there a free trial available?",
    a: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    open: true,
  },
  {
    q: "Can I change my plan later?",
    a: "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
    open: false,
  },
  {
    q: "What is your cancellation policy?",
    a: "You can cancel your subscription at any time. Your plan will remain active until the end of the billing period.",
    open: false,
  },
  {
    q: "Can other info be added to an invoice?",
    a: "Yes, you can add additional information such as your company name, VAT number, and address to your invoices.",
    open: false,
  },
  {
    q: "How does billing work?",
    a: "We bill monthly or yearly depending on your chosen plan. You'll receive an invoice via email after each payment.",
    open: false,
  },
  {
    q: "How do I change my account email?",
    a: "You can change your account email from your profile settings page at any time.",
    open: false,
  },
];

const teamImgs = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto space-y-5">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-[#1E1E1E]">
            Frequently asked <span className="text-[#ED3C6A]">questions</span>
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="bg-[#F9FAFB] rounded-2xl px-8 py-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-sm text-black font-bold">{faq.q}</span>
                <span className="shrink-0 ml-4">
                  {openIndex === i ? (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle
                        cx="11"
                        cy="11"
                        r="10"
                        stroke="#ED3C6A"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="7"
                        y1="11"
                        x2="15"
                        y2="11"
                        stroke="#ED3C6A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle
                        cx="11"
                        cy="11"
                        r="10"
                        stroke="#ED3C6A"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="11"
                        y1="7"
                        x2="11"
                        y2="15"
                        stroke="#ED3C6A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="7"
                        y1="11"
                        x2="15"
                        y2="11"
                        stroke="#ED3C6A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === i && (
                <p className="text-sm text-gray-500 pb-5 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#F9FAFB] rounded-2xl py-10 px-6 flex flex-col items-center text-center gap-3">
          <div className="flex -space-x-3">
            {teamImgs.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="team"
                width={40}
                height={40}
                className="rounded-full border-2 border-white w-10 h-10 object-cover"
              />
            ))}
          </div>
          <p className="font-bold text-[#1E1E1E] text-base">
            Still have Questions?
          </p>
          <p className="text-sm text-gray-500">
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </p>
          <button className="mt-2 bg-[#ED3C6A] text-white text-sm font-semibold px-6 py-3 rounded-[5px] hover:bg-[#d4305a] transition-colors">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
