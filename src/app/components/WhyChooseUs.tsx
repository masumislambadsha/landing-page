import Image from "next/image";
import Link from "next/link";

const reasons = [
  "Brilliant Client Service",
  "Flexibility & Adaptibility",
  "We make it Personal",
  "We have expart in our team",
];

export default function WhyChooseUs() {
  return (
    <section className="py-10 px-6 bg-white">
      <div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 rounded-[33px] px-12 py-12"
        style={{ background: "#FDEBF0", border: "1px solid #F8BECD" }}
      >

        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[#1E1E1E] leading-snug">
            Few Reasons Why you
            <br />
            Choose us?
          </h2>
          <p className="text-sm text-black max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <ul className="flex flex-col gap-3">
            {reasons.map((r) => (
              <li
                key={r}
                className="flex items-center gap-3 text-sm font-medium text-[#1E1E1E]"
              >
                <span className="w-7 h-7 rounded-full bg-[#FDCDD8] flex items-center justify-center shrink-0">
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path
                      d="M1 5L4.5 8.5L11 1"
                      stroke="#ED3C6A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {r}
              </li>
            ))}
          </ul>
          <Link
            href="#schedule"
            className="w-fit bg-[#ED3C6A] text-white text-sm font-semibold px-6 py-3 rounded-[5px] hover:bg-[#d4305a] transition-colors flex items-center gap-2 mt-2"
          >
            Schedule A Meeting →
          </Link>
        </div>

      
        <div className="flex-1 flex items-end justify-center">
          <Image
            src="/why_choose.png"
            alt="Why choose us"
            width={550}
            height={420}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}
