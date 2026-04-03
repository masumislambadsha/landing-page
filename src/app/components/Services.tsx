import Image from "next/image";

const services = [
  { icon: "/services/task.png", title: "Manage Property Listings" },
  { icon: "/services/calenderrrr.png", title: "Manage Customer Bookings" },
  { icon: "/services/tools.png", title: "Schedule House Cleaning" },
  { icon: "/services/like.png", title: "Monitor Guest Reviews" },
  { icon: "/services/progress.png", title: "Track & Report Expenses" },
  { icon: "/services/contact.png", title: "Guest Inquiry & Support" },
];

const desc =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export default function Services() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-[36px] font-bold text-black">
          Our <span className="text-[#ED3C6A]">Service</span>
        </h2>
        <p className="text-sm font-medium text-black max-w-[700px] mx-auto mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((s) => (
          <div
            key={s.title}
            className="relative bg-white rounded-[13px] p-8 flex flex-col gap-6 group transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden"
            style={{
              boxShadow: "0px 4px 90.3px 0px rgba(215, 205, 207, 0.47)",
            }}
          >

            <span className="absolute inset-0 rounded-[13px] border-2 border-transparent group-hover:border-[#ED3C6A] transition-all duration-500 pointer-events-none z-10" />

            <div className="relative z-10 w-fit transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
              <Image
                src={s.icon}
                alt={s.title}
                width={70}
                height={70}
                style={{ objectFit: "contain" }}
              />
            </div>

            <h3 className="relative z-10 text-2xl font-bold max-w-[270px] text-[#1E1E1E] transition-colors duration-300 group-hover:text-[#ED3C6A]">
              {s.title}
            </h3>
            <p className="relative z-10 text-sm text-black font-medium flex-1">
              {desc}
            </p>
            <button className="relative z-10 w-fit px-6 py-2 rounded-full border border-[#ED3C6A] text-[#ED3C6A] text-sm font-medium transition-all duration-300 hover:bg-[#ED3C6A] hover:text-white">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
