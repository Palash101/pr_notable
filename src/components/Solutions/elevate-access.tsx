"use client";

import { ChevronRight, Component, Database, Unplug } from "lucide-react";
import { useState } from "react";
import { LucideIcon } from "lucide-react";

type Integration = {
  name: string;
  icon?: LucideIcon;
};

type Card = {
  id: number;
  title: string;
  tag: string;
  description: string;
  stat: string;
  statLabel: string;
  integrations: Integration[];
  partner: string;
};

const DATA: Card[] = [
  {
    id: 1,
    title: "Transcribe Inbound Fax Orders",
    tag: "Referral",
    description:
      "Uses OCR to extract, validate, and export faxed orders directly into Epic and document systems.",
    stat: "97%",
    statLabel: "reduction in turnaround time",
    integrations: [
      { name: "Epic", icon: Database },
      { name: "HL7 MDM", icon: Unplug },
      { name: "HL7 ORU" },
    ],

    partner: "Florida Health System",
  },
  {
    id: 2,
    title: "Resolve MyChart Support Issues",
    tag: "Outreach",
    description:
      "Handles common MyChart support requests and transfers complex issues using Voice AI agents.",
    stat: "66%",
    statLabel: "call deflection rate",
    integrations: [
      { name: "Epic", icon: Database },
      { name: "HL7 MDM", icon: Unplug },
      { name: "HL7 ORU" },
    ],
    partner: "Catholic Health",
  },
  {
    id: 3,
    title: "Onboard and Schedule New Patients",
    tag: "Outreach",
    description:
      "Qualifies and schedules new patients with the right provider, improving conversion.",
    stat: "40%",
    statLabel: "increase in bookings",
    integrations: [
      { name: "Epic", icon: Database },
      { name: "HL7 MDM", icon: Unplug },
      { name: "HL7 ORU" },
    ],
    partner: "Houston Healthcare",
  },
  {
    id: 4,
    title: "Schedule Outbound Visits",
    tag: "Scheduling",
    description:
      "Automatically fills schedules by contacting patients and confirming best times.",
    stat: "35%",
    statLabel: "increase in show rate",
    integrations: [
      { name: "Epic", icon: Database },
      { name: "HL7 MDM", icon: Unplug },
      { name: "HL7 ORU" },
    ],
    partner: "Trinity Health",
  },
  {
    id: 5,
    title: "Verify Insurance Eligibility",
    tag: "Verification",
    description:
      "Automates insurance verification workflows and reduces manual errors.",
    stat: "50%",
    statLabel: "faster verification",
    integrations: [
      { name: "Epic", icon: Database },
      { name: "HL7 MDM", icon: Unplug },
      { name: "HL7 ORU" },
    ],
    partner: "United Healthcare",
  },
  {
    id: 6,
    title: "Billing Automation",
    tag: "Billing",
    description: "Streamlines billing cycles and reduces claim denials.",
    stat: "25%",
    statLabel: "reduction in claim errors",
    integrations: [
      { name: "Epic", icon: Database },
      { name: "HL7 MDM", icon: Unplug },
      { name: "HL7 ORU" },
    ],
    partner: "Mount Sinai",
  },
];

const filters = [
  "Referral",
  "Verification",
  "Outreach",
  "Scheduling",
  "Registration",
  "Billing",
];

export default function PatientsInsights() {
  const [visible, setVisible] = useState(4);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredData = activeFilter
    ? DATA.filter((item) => item.tag === activeFilter)
    : DATA;

  const visibleData = filteredData.slice(0, visible);

  return (
    <section className="py-16 px-6">
      {/* Heading */}
      <div className="mx-auto flex flex-col justify-center items-center mb-12">
        <h1 className="text-4xl md:text-text43 font-light text-blue-default leading-normal max-w-2xl text-center">
          Elevate access automation and eliminate bottlenecks with AI-powered
          workflows
        </h1>
        <p className="text-normalGray mt-4 text-base max-w-xl text-center">
          Automate the work behind the care to shrink turnaround, lower
          no-shows, and give patients faster, simpler entry to your system.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4 ml-1">
          <span className="text-normalGray text-xl">Filter by</span>
          <button
            onClick={() => setActiveFilter(null)}
            className="ml-4 text-darkBlue text-sm underline"
          >
            Clear
          </button>
        </div>
        <div className="flex items-center gap-3 justify-start mb-16">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`px-3 py-2 rounded-full border text-text15 transition
              ${
                activeFilter === item
                  ? "bg-darkBlue text-white border-darkBlue"
                  : "border-normalGray text-normalGray hover:border-darkBlue hover:text-darkBlue"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 cursor-pointer">
          {visibleData.map((card) => (
            <div className="bg-white p-0.5 rounded-xl">
              <div
                key={card.id}
                className="bg-purple-accessLight rounded-t-xl px-8 py-8 hover:shadow-md transition"
              >
                <h3 className="text-xl font-light text-purple-light mb-4">
                  {card.title}
                </h3>

                <span className="inline-block text-xs px-3 py-1.5 bg-white text-purple-light rounded mb-5">
                  {card.tag}
                </span>

                <p className="text-purple-light text-sm font-normal mb-6">
                  {card.description}
                </p>
              </div>

              {/* Bottom Section */}
              <div className="rounded-b-2xl p-6 ">
                <div className="grid grid-cols-2 gap-6 ">
                  <div>
                    <p className="text-sm text-normalGray mb-3">
                      Compatibility & Integrations
                    </p>

                    <div className="flex flex-wrap gap-2 w-64">
                      <div className="flex items-center bg-white border border-gray-300 rounded-md overflow-hidden text-xs">
                        {card.integrations.map((item, i) => {
                          const Icon = item.icon;

                          return (
                            <div
                              key={i}
                              className="flex items-center text-gray-lightGrey gap-2 px-0 py-0 text-xs border-r border-gray-300 last:border-r-0"
                            >
                              {Icon && (
                                <div className="border-none border-gray-200 bg-slate-200 px-2 py-1.5 rounded-l-sm last:border-r-0">
                                  <Icon
                                    size={14}
                                    className="text-gray-lightGrey"
                                  />
                                </div>
                              )}
                              <span className="px-2"> {item.name}</span>
                            </div>
                          );
                        })}
                      </div>

                      {card.integrations.length > 1 && (
                        <div className="flex items-center bg-white border border-gray-300 rounded-md overflow-hidden text-xs">
                          {card.integrations.slice(1, 3).map((item, i) => {
                            const Icon = item.icon;

                            return (
                              <div
                                key={i}
                                className="flex items-center text-gray-lightGrey gap-2 px-0 py-0 border-r border-gray-300 last:border-r-0 text-xs"
                              >
                                {Icon && (
                                  <div className="border-r border-gray-200 bg-slate-200 px-3 py-1.5 rounded-l-md last:border-r-0">
                                    <Icon
                                      className="text-gray-lightGrey"
                                      size={14}
                                    />
                                  </div>
                                )}
                                <span className="px-2"> {item.name}</span>
                              </div>
                            );
                          })}

                          {card.integrations.length > 3 && (
                            <div className="px-3 py-1 bg-gray-50 border-l border-gray-200">
                              +{card.integrations.length - 3} more
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-normalGray mb-3">
                      Deployed by partners like
                    </p>

                    <div className="bg-white border border-gray-300 rounded-md flex items-center justify-between">
                      <div className="flex items-center gap-2 px-2 py-4">
                        <Component className="w-6 h-6 text-normalGray" />
                        <span className="text-[10px] text-normalGray">
                          {card.partner}
                        </span>
                      </div>

                      <div className="text-left bg-gray-100 rounded-tr-md rounded-br-md px-2 py-4">
                        <p className="text-gradient-primary font-normal text-2xl">
                          {card.stat}
                        </p>
                        <p className="text-[10px] text-gray-500 leading-tight">
                          {card.statLabel}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visible < filteredData.length && (
          <div className="flex gap-2 items-center justify-center w-full mt-10">
            <button
              onClick={() => setVisible((prev) => prev + 2)}
              className="flex gap-2 items-center justify-between text-sm px-4 py-2 bg-white border border-darkBlue text-darkBlue rounded-md hover:text-blue-default transition"
            >
              Load more
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
