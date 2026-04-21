"use client";

import {
  CircleChevronDown,
  Link2,
  MessageCircle,
  Sprout,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Flexible architecture",
    description:
      "We use the best integration methodology to get data into the right fields – including APIs, RPA, HL7, and more.",
  },
  {
    icon: MessageCircle,
    title: "Faster value",
    description:
      "Our agile methodology allows partners to experience rapid value realization—achieving significant gains in weeks, not years.",
  },
  {
    icon: TrendingUp,
    title: "Seamless scalability",
    description:
      "Our platform is designed to grow with your organization, ensuring your workflows remain efficient and effective, no matter the size of your operations.",
  },
];

const partners = [
  { name: "ORACLE", style: "font-bold tracking-wide" },
  { name: "Epic", style: "font-bold italic" },
  { name: "MEDITECH", style: "font-bold tracking-wider" },
  {
    name: "athenahealth",
    style: "font-normal",
    prefix: <Sprout className="w-5 h-5 text-blue-default" />,
  },
];

export default function IntegrationsFeatures() {
  return (
    <section className="relative w-full bg-[#060639]">
      {/* Eliminate manual work section */}
      <div className="relative py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-text43 font-light text-white leading-tight">
            Eliminate manual work for your staff
          </h2>
          <p className="mt-6 text-base text-gray-lightGrey max-w-[740px] mx-auto leading-normal ">
            Notable&apos;s deep integrations, cutting-edge AI, and
            easily-configurable workflows empower teams to quickly capitalize on
            opportunities and solve business challenges.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mx-auto max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {features.map((feature, index) => (
            <div key={index} className="relative rounded-3xl p-[1px]">
              <div className="relative rounded-3xl bg-[#060639] border border-[#afbef3] px-10 py-8 h-full">
                {/* Icon */}
                <div className="mb-6">
                  <feature.icon
                    className="w-8 h-8 text-[#afbef3]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-light text-white mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 font-normal leading-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bi-directional sync section */}
      <div className="relative py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-text43 font-light text-white leading-normal mb-0.5">
            Bi-directional sync with your
            <br />
            EHR, payer portals, and more
          </h2>
          <p className="mt-6 text-base text-gray-lightGrey font-normal max-w-3xl mx-auto leading-tight">
            Supercharge staff productivity with intelligent virtual assistance
            that enables staff to work smarter and faster in existing systems,
            while personalizing engagement across the patient journey.
          </p>
        </div>

        {/* Partner logos */}
        <div className="mx-auto max-w-5xl mt-12 flex justify-center gap-4">
          {partners.map((partner, index) => (
            <button
              key={index}
              className="group flex items-center justify-between gap-3 rounded-xl w-72 px-4 py-4 bg-white transition-all duration-300"
            >
              <span className={`text-blue-default text-lg flex gap-0 items-center ${partner.style}`}>
                {partner.prefix && (
                  <span className="">
                    {/* <Sprout className="w-5 h-5 text-blue-default" /> */}
                    {partner.prefix}
                  </span>
                )}
                {partner.name}
              </span>
              <CircleChevronDown className="w-5 h-5 text-blue-default" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
