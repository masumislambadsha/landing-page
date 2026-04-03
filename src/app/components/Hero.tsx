import Image from "next/image";
import Link from "next/link";

const iconShadow = { filter: "drop-shadow(0px -2px 6.3px rgba(0,0,0,0.25))" };

export default function Hero() {
  return (
    <section
      className="relative w-full bg-white"
      style={{ minHeight: "520px" }}
    >
      <div className="absolute inset-0 bg-grid opacity-40" />

      <span className="absolute top-[30%] left-[2%] w-3 h-3 rounded-full bg-[#4F46E5]" />
      <span className="absolute top-[50%] left-[10%] w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
      <span className="absolute bottom-[8%] left-[4%] w-2.5 h-2.5 rounded-full bg-[#EAB308]" />
      <span className="absolute top-[8%] left-[49%] w-2.5 h-2.5 rounded-full bg-[#10B981]" />
      <span className="absolute bottom-[6%] left-[48%] w-2.5 h-2.5 rounded-full bg-[#5AF9FF]" />
      <span className="absolute top-[35%] right-[2%] w-2.5 h-2.5 rounded-full bg-[#EAB308]" />
      <span className="absolute top-[62%] right-[1.5%] w-2 h-2 rounded-full bg-[#1E1E1E]" />

      <div className="absolute top-[10%] left-[24%] " style={iconShadow}>
        <Image
          src="/hero-logo/left-top.png"
          alt="left top logo"
          width={100}
          height={100}
        />
      </div>
      <div
        className="absolute top-[10%] right-[24%] rotate-15"
        style={iconShadow}
      >
        <Image
          src="/hero-logo/right-top.png"
          alt="right top logo"
          width={100}
          height={100}
        />
      </div>
      <div
        className="absolute bottom-[18%] left-[26%] -rotate-12"
        style={iconShadow}
      >
        <Image
          src="/hero-logo/V-logo.png"
          alt="left bottom logo"
          width={90}
          height={90}
        />
      </div>
      <div
        className="absolute bottom-[14%] right-[26%] rotate-12"
        style={iconShadow}
      >
        <Image
          src="/hero-logo/right-bottom.png"
          alt="right bottom logo"
          width={100}
          height={100}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24">
        <h1 className="text-5xl font-bold text-black leading-[1.1] mb-4">
          Airbnb Assistants For <br />
          <span className="text-[38px] font-medium">Property Management</span>
        </h1>
        <p className="text-sm text-gray-500 md:max-w-[700px] font-medium mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link
          href="#schedule"
          className="bg-[#ED3C6A] text-white font-semibold px-8 py-4 rounded-[5px] hover:bg-[#d4305a] transition-colors flex items-center gap-2 mb-4"
        >
          Schedule A Meeting →
        </Link>
        <Link
          href="#pricing"
          className="text-sm font-medium text-black underline underline-offset-4 hover:text-[#ED3C6A]"
        >
          See Pricing
        </Link>
      </div>
    </section>
  );
}
