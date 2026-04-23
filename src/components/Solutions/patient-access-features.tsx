"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "../ui/button";

const sections = [
  {
    id: "capture-demand",
    navLabel: "Capture demand",
    image: {
      type: "referral-form" as const,
    },
    heading: "Turn every referral into a booked visit in under 10 minutes",
    description:
      "Automate fax intake and outreach, reduce waits and no shows, and schedule in real-time so care starts sooner and revenue stays in your system.",
    buttonText: "View all Access flows",
    testimonial: {
      quote:
        "Referrals that used to take weeks are now taking less than two days to schedule.",
      logo: "MONTAGE",
      logoSub: "Health",
      personImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    },
  },
  {
    id: "scale-staff",
    navLabel: "Scale staff capacity",
    image: {
      type: "voice-ai" as const,
    },
    heading:
      "Supercharge your team with automation that clears workqueues and calls",
    description:
      "Free up your staff for the tough calls with omni-channel voice and SMS agents that handle inquiries, scheduling, and billing.",
    buttonText: "View all Access flows",
    stat: {
      value: "25,000+",
      label: "Calls handled since launch",
    },
    testimonial: {
      logo: "Catholic",
      logoSub: "Health",
      personImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    },
  },
  {
    id: "close-trust-gap",
    navLabel: "Close patient trust gap",
    image: {
      type: "patient-portal" as const,
    },
    heading: "Build lasting relationships with personalized patient engagement",
    description:
      "Connect with patients through their preferred channels with intelligent outreach that feels personal, not automated.",
    buttonText: "View all Access flows",
    stat: {
      value: "99%",
      label: "Patient satisfaction rate",
    },
    testimonial: {
      logo: "Gillette",
      logoSub: "Children's",
      personImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
  },
];

// Referral Form Mockup
const ReferralFormMockup = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-[#f0f4ff] to-[#e8e0f0] rounded-2xl p-8 flex items-center justify-center">
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      <div className="space-y-4">
        <div className="flex items-center gap-2 h-4 bg-gray-100 rounded w-1/3" />
        <div className="flex items-center gap-2 h-4 bg-gray-100 rounded w-2/3" />

        <div className="flex items-center gap-3">
          <span className="bg-[#4361ee] text-white text-xs px-3 py-1.5 rounded-full font-medium">
            PATIENT NAME
          </span>
          <span className="border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full">
            Roger Johnson
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="bg-[#4361ee] text-white text-xs px-3 py-1.5 rounded-full font-medium">
            REFERRING PHYSICIAN
          </span>
          <span className="border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full">
            Dr. Jane Smith
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="bg-[#4361ee] text-white text-xs px-3 py-1.5 rounded-full font-medium">
            SPECIALTY
          </span>
          <span className="border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full">
            Orthopedics
          </span>
        </div>

        <div className="flex items-center gap-3 ml-24">
          <span className="border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full">
            Imaging
          </span>
        </div>

        <div className="space-y-2 mt-4">
          <div className="h-2 bg-gray-100 rounded w-full" />
          <div className="h-2 bg-gray-100 rounded w-4/5" />
          <div className="h-2 bg-gray-100 rounded w-3/5" />
        </div>
      </div>
    </div>
  </div>
);

// Voice AI Mockup
const VoiceAIMockup = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-[#f0f4ff] to-[#e8e0f0] rounded-2xl p-8 flex items-center justify-center">
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md space-y-6">
      {/* Message bubble */}
      <div className="flex justify-center">
        <div className="bg-[#f0f4ff] border border-[#c7d2fe] text-[#4361ee] text-sm px-4 py-2 rounded-full">
          &quot;I need to activate MyChart&quot;
        </div>
      </div>

      {/* Waveform */}
      <div className="border-2 border-dashed border-[#c7d2fe] rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-[#f0f4ff] flex items-center justify-center">
            <svg
              className="w-4 h-4 text-[#4361ee]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
        </div>

        {/* Waveform visualization */}
        <div className="flex items-center justify-center gap-0.5 h-16">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-[#c7d2fe] rounded-full"
              style={{ height: `${Math.random() * 100}%`, minHeight: "4px" }}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Cindy Rodriguez
        </div>
      </div>

      {/* Response */}
      <div className="flex items-start gap-2">
        <div className="bg-[#4361ee] text-white text-sm px-4 py-3 rounded-xl flex-1">
          Your MyChart account has been successfully activated.
        </div>
        <div className="w-6 h-6 rounded-full bg-[#4361ee] flex items-center justify-center flex-shrink-0">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center gap-2 pt-2">
        <div className="w-8 h-8 rounded-full bg-[#4361ee] flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <span className="text-sm text-gray-600">Voice AI call</span>
      </div>
    </div>
  </div>
);

// Patient Portal Mockup
const PatientPortalMockup = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-[#f0f4ff] to-[#e8e0f0] rounded-lg p-8 flex items-center justify-center">
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="h-4 bg-gray-100 rounded w-1/4" />
          <div className="px-3 py-1 rounded-full border border-[#4361ee] text-[#4361ee] text-xs">
            Active
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-[#f0f4ff] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-[#4361ee]">12</div>
            <div className="text-xs text-gray-500">Appointments</div>
          </div>
          <div className="bg-[#f0f4ff] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-[#4361ee]">8</div>
            <div className="text-xs text-gray-500">Messages</div>
          </div>
        </div>

        <div className="space-y-3 mt-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-[#4361ee] flex items-center justify-center text-white text-sm">
              DR
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">Dr. Smith</div>
              <div className="text-xs text-gray-500">Follow-up scheduled</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ImageMockup = ({
  type,
}: {
  type: "referral-form" | "voice-ai" | "patient-portal";
}) => {
  switch (type) {
    case "referral-form":
      return <ReferralFormMockup />;
    case "voice-ai":
      return <VoiceAIMockup />;
    case "patient-portal":
      return <PatientPortalMockup />;
  }
};

export default function PatientAccessFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target,
            );
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div ref={containerRef} className="relative py-6">
      <div className="container-large mx-auto px-0">
        <div className="flex gap-12 lg:gap-20">
          {/* Left Sticky Navigation */}
          <div className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-32">
              <nav className="space-y-4">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(index)}
                    className={`flex items-center gap-3 text-left  transition-all duration-300 ${
                      activeSection === index
                        ? "text-blue-default font-normal"
                        : "text-navy-300 hover:text-gray-600"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeSection === index
                          ? "bg-purple-light"
                          : "bg-transparent"
                      }`}
                    />
                    <span className="text-base">{section.navLabel}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content Sections */}
          <div className="flex-1 space-y-32 py-0">
            {sections.map((section, index) => (
              <div
                key={section.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="scroll-mt-32"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Image Column */}
                  <div className="h-[500px] border border-gray-lightGrey rounded-lg">
                    <ImageMockup type={section.image.type} />
                  </div>

                  {/* Content Column */}
                  <div className="flex flex-col justify-center space-y-6 pt-8">
                    <h2 className="text-2xl font-light text-blue-default leading-tight">
                      {section.heading}
                    </h2>

                    <p className="text-blue-default text-sm  font-normal leading-relaxed">
                      {section.description}
                    </p>

                    <Button variant="outline" className="w-fit">
                      {section.buttonText}
                    </Button>

                    {/* Divider */}
                    <div className="border-t border-gray-300 pt-6 mt-6" />

                    {/* Stat or Quote */}
                    {section.stat && (
                      <div className="flex items-start gap-6">
                        <div>
                          <div className="text-4xl font-light text-gradient-primary">
                            {section.stat.value}
                          </div>
                          <div className="text-sm font-normal text-blue-default mt-1">
                            {section.stat.label}
                          </div>
                        </div>
                      </div>
                    )}

                    {section.testimonial.quote && (
                      <p className="text-blue-default italic text-lg leading-relaxed">
                        &ldquo;{section.testimonial.quote}&rdquo;
                      </p>
                    )}

                    {/* Logo and Read Story */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                          <span className="text-xs font-bold text-blue-default">
                            {section.testimonial.logo.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-blue-default">
                            {section.testimonial.logo}
                          </div>
                          <div className="text-[10px] text-blue-default">
                            {section.testimonial.logoSub}
                          </div>
                        </div>
                      </div>

                      <button className="text-darkBlue text-sm font-normal underline underline-offset-4 hover:no-underline">
                        Read story
                      </button>

                      {/* Person Image */}
                      <div className="relative w-24 h-32 rounded-xl overflow-hidden bg-blue-default">
                        <Image
                          src={section.testimonial.personImage}
                          alt="Testimonial"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
