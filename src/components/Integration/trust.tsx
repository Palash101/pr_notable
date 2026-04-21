import React from "react";
import Button from "../ui/button";
import { Eye, Globe, GlobeLock, LockKeyhole } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Product Security",
    description:
      "We use the best integration methodology to get data into the right fields – including APIs, RPA, HL7, and more.",
  },
  {
    icon: LockKeyhole,
    title: "Data Security",
    description:
      "Our agile methodology allows partners to experience rapid value realization—achieving significant gains in weeks, not years.",
  },
  {
    icon: GlobeLock,
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   stroke-width="2"
    //   stroke-linecap="round"
    //   stroke-linejoin="round"
    //   className="lucide lucide-fingerprint-pattern-icon lucide-fingerprint-pattern"
    // >
    //   <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
    //   <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
    //   <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
    //   <path d="M2 12a10 10 0 0 1 18-6" />
    //   <path d="M2 16h.01" />
    //   <path d="M21.8 16c.2-2 .131-5.354 0-6" />
    //   <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
    //   <path d="M8.65 22c.21-.66.45-1.32.57-2" />
    //   <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
    // </svg>
    title: "Data Privacy",
    description:
      "Our platform is designed to grow with your organization, ensuring your workflows remain efficient and effective, no matter the size of your operations.",
  },
  {
    icon: Globe,
    title: "Compliance",
    description:
      "Our agile methodology allows partners to experience rapid value realization—achieving significant gains in weeks, not years.",
  },
];

const IntegrationTrust = () => {
  return (
    <div className="h-full section-padding bg-gray-cream">
      <div className="container-large">
        <div className="space-y-6 animate-fade-in">
          <h4 className="text-lg font-medium text-darkBlue leading-relaxed">
            TRUST & SECURITY
          </h4>

          <h1 className="text-text43 font-light text-blue-default">
            Trust and security are embedded
            <br /> across the platform
          </h1>

          <p className="text-base font-normal text-gray-medium leading-relaxed max-w-xl">
            Millions of patients that use the PrimumAI platform expect their
            information to be safeguarded. That's why security is a core tenet
            of our platform.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex items-center gap-4">
            <Button variant="outline" className="py-1 text-gradient-primary">
              Visit Our Trust Center
            </Button>
          </div>
        </div>

        <div className="mx-auto max-w-7xl mt-16 grid grid-cols-1 md:grid-cols-4 gap-4 px-0">
          {features.map((feature, index) => (
            <div key={index} className="relative rounded-3xl p-[1px]">
              <div className="relative rounded-3xl bg-white shadow-lg shadow-gray-300 px-6 py-8 h-full">
                {/* Icon */}
                <div className="mb-6">
                  <feature.icon
                    className="w-8 h-8 text-black"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-light text-gray-700 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-medium font-normal leading-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationTrust;
