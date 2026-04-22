"use client";

import { Building, Landmark } from "lucide-react";

export default function SolutionCards() {
  const cards = [
    {
      title: "Patient acquisition & retention",
      description:
        "Reduce patient leakage, while ensuring every patient receives timely care.",
      stat: "13%",
      metric: "reduction in no-show rates",
      logo: "MUSC Health",
      logoSubtext: "Medical University of South Carolina",
    },
    {
      title: "Quality & risk",
      description:
        "Accelerate value-based care with quality performance and documentation accuracy.",
      stat: "14.6%",
      metric: "reduction in no-show rates",
      logo: "MONTAGE",
      logoSubtext: "Health",
    },
    {
      title: "Patient access",
      description:
        "Scale continuity of care and deliver concierge-level access for every patient.",
      stat: "99%",
      metric: "patient and family satisfaction",
      logo: "gillette",
      logoSubtext: "CHILDREN'S",
    },
  ];

  return (
    <div className="py-16 px-24 flex items-center justify-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-[24px] p-8 transition-all duration-300 hover:shadow-sm hover:shadow-blue-700 cursor-pointer group"
          >
            {/* Title */}
            <h3 className="text-blue-default text-2xl font-light mb-3">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-normalGray text-base font-normal leading-relaxed mb-8">
              {card.description}
            </p>

            {/* Stats and Logo Row */}
            <div className="flex items-end justify-between mt-auto">
              {/* Stat */}
              <div>
                <div className="text-blue-default text-5xl font-light tracking-tight">
                  {card.stat}
                </div>
                <div className="text-black text-xs mt-1">{card.metric}</div>
              </div>

              {/* Logo */}
              <div className="text-right">
                {index === 0 && (
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="flex gap-1 mb-1">
                        <Landmark className="w-5 h-5 text-gray-700 " />
                        <div className="text-gray-700 text-sm font-semibold">
                          MUSC Health
                        </div>
                      </div>
                      <div className="text-gray-700 text-[8px]">
                        Medical University of South Carolina
                      </div>
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="flex items-center gap-2">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <rect
                        x="4"
                        y="4"
                        width="28"
                        height="28"
                        rx="4"
                        stroke="#1a237e"
                        strokeWidth="2"
                        fill="none"
                      />
                      <rect x="8" y="8" width="8" height="8" fill="#e91e63" />
                      <rect x="16" y="8" width="4" height="8" fill="#ff9800" />
                      <rect x="20" y="8" width="8" height="8" fill="#4caf50" />
                      <rect x="8" y="16" width="8" height="4" fill="#2196f3" />
                      <rect x="20" y="16" width="8" height="4" fill="#9c27b0" />
                      <rect x="8" y="20" width="8" height="8" fill="#00bcd4" />
                      <rect x="16" y="20" width="4" height="8" fill="#ffeb3b" />
                      <rect x="20" y="20" width="8" height="8" fill="#ff5722" />
                    </svg>
                    <div>
                      <div className="text-[#1a237e] text-sm font-bold">
                        MONTAGE
                      </div>
                      <div className="text-[#1a237e] text-xs">Health</div>
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div className="flex items-center gap-1">
                    <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
                      <path
                        d="M16 4C16 4 8 8 8 16C8 20 10 24 16 28C22 24 24 20 24 16C24 8 16 4 16 4Z"
                        fill="#c41e3a"
                      />
                      <circle cx="16" cy="16" r="4" fill="white" />
                    </svg>
                    <div>
                      <div className="text-[#c41e3a] text-sm font-semibold italic">
                        gillette
                      </div>
                      <div className="text-[#1a237e] text-[10px] font-semibold">
                        CHILDREN&apos;S
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
