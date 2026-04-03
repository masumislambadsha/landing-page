import Image from "next/image";

const steps = [
  {
    number: "01",
    label: "Add requirements\n& sign up today",
    icon: "/start/single_person.png",
  },
  {
    number: "02",
    label: "Connect with your CSM &\nonboarding team",
    icon: "/start/group_people.png",
  },
  {
    number: "03",
    label: "Meet your STR\nAssistant next week",
    icon: "/start/headphone.png",
  },
];

export default function GettingStarted() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-[#1E1E1E]">
          Getting Started is <span className="text-[#ED3C6A]">Easy</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-5">
            <div
              className="relative w-full"
              style={{ paddingTop: "46px", paddingLeft: "46px" }}
            >
              <div className="absolute top-0 left-0 z-10 w-[82px] h-[82px] rounded-full bg-white border-[5px] border-[#ED3C6A] flex items-center justify-center">
                <span className="text-3xl font-bold text-black">
                  {step.number}
                </span>
              </div>
              <div
                className="w-full bg-white flex items-center justify-center"
                style={{
                  height: "192px",
                  borderRadius: "9px",
                  border: "2px solid #FDEBF0",
                }}
              >
                <Image
                  src={step.icon}
                  alt={step.label}
                  width={90}
                  height={90}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <p className="text-base font-bold text-[#1E1E1E] whitespace-pre-line">
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
