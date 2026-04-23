"use client";

import { useState } from "react";

type Card = {
  id: number;
  title: string;
  tag: string;
  description: string;
  stat: string;
  statLabel: string;
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
  },
  {
    id: 2,
    title: "Resolve MyChart Support Issues",
    tag: "Outreach",
    description:
      "Handles common MyChart support requests and transfers complex issues using Voice AI agents.",
    stat: "66%",
    statLabel: "call deflection rate",
  },
  {
    id: 3,
    title: "Onboard and Schedule New Patients",
    tag: "Outreach",
    description:
      "Qualifies and schedules new patients with the right provider, improving conversion.",
    stat: "40%",
    statLabel: "increase in bookings",
  },
  {
    id: 4,
    title: "Schedule Outbound Visits",
    tag: "Scheduling",
    description:
      "Automatically fills schedules by contacting patients and confirming best times.",
    stat: "35%",
    statLabel: "increase in show rate",
  },
  {
    id: 5,
    title: "Verify Insurance Eligibility",
    tag: "Verification",
    description:
      "Automates insurance verification workflows and reduces manual errors.",
    stat: "50%",
    statLabel: "faster verification",
  },
  {
    id: 6,
    title: "Billing Automation",
    tag: "Billing",
    description: "Streamlines billing cycles and reduces claim denials.",
    stat: "25%",
    statLabel: "reduction in claim errors",
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
        <div className="flex items-center gap-3 justify-start mb-10">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`px-4 py-1.5 rounded-full border text-base transition
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
      </div>
    </section>
  );
}
