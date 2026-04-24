"use client";
import Insights from "@/components/Insights";
import PatientsInsights from "@/components/Solutions/elevate-access";
import PatientAccessFeatures from "@/components/Solutions/patient-access-features";
import TrustedBy from "@/components/TrustedBy";
import Button from "@/components/ui/button";
import {
  BookOpenCheck,
  Box,
  BrickWallShield,
  Package2,
  ReceiptText,
  Unplug,
  SwissFranc,
} from "lucide-react";
import React from "react";

{
  /* <Form /> */
}
const HealthSystem = [
  { icon: Package2, label: "Referral" },
  { icon: BrickWallShield, label: "Verification" },
  { icon: Unplug, label: "Outreach" },
  { icon: BookOpenCheck, label: "Scheduling" },
  { icon: SwissFranc, label: "Registration" },
  { icon: ReceiptText, label: "Billing" },
];

const PatientAccess = () => {
  return (
    <div>
      <div className="space-y-5 py-9 flex flex-col justify-center items-center bg-[#f9f6fd]">
        <div className="flex items-center gap-1">
          <Box className="text-purple-light w-4 h-4" />
          <h4 className="text-base font-normal text-purple-light leading-relaxed uppercase">
            Patient Access
          </h4>
        </div>

        <h1 className="text-text43 font-light text-blue-default text-center text-wrap max-w-3xl">
          Make your health system easier to access for every patient
        </h1>

        <p className="text-base font-normal text-normalGray leading-relaxed max-w-3xl text-center">
          Reduce no-shows and waits, fill schedules, and free up staff with AI
          that transcribes faxes and documents, powers your contact center, and
          automates registration and intake.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button variant="default" className="text-white">
            Explore Access Flows
          </Button>
          <Button variant="outline" className="py-1">
            Request a demo
          </Button>
        </div>

        <div className="flex justify-center items-center container-medium py-8">
          <div className="h-0.5 w-80 bg-normalGray relative" />
          {HealthSystem.map((item, index) => (
            <>
              <div
                key={index}
                className="flex gap-3.5 flex-col justify-between items-center w-full"
              >
                <item.icon
                  className="w-8 h-8 text-normalGray"
                  strokeWidth={1.5}
                />
                <span className="text-base font-normal text-normalGray">
                  {item.label}
                </span>
              </div>
              <div className="h-[1px] w-60 bg-normalGray" />
            </>
          ))}
        </div>
      </div>

      <div className="py-6">
        <TrustedBy />
      </div>

      <PatientAccessFeatures />

      {/* <div className="section-padding bg-[#f3f3f3]"> */}
      <div className="section-padding bg-gradient-to-br from-[#f0f4ff] to-[#e8e0f0]">
        <PatientsInsights />

        <div className="divider-gradient my-12" />
        <Insights />
      </div>
    </div>
  );
};

export default PatientAccess;
