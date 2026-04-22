"use client";
import SolutionCards from "@/components/Agents/solution";
import Button from "@/components/ui/button";
import {
  BetweenHorizontalEnd,
  Eye,
  FastForward,
  GitPullRequestArrow,
  Globe,
  GlobeLock,
  LockKeyhole,
  Users,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const features = [
  {
    icon: Users,
    title: "Pre-built AI Agents",
    description:
      "A comprehensive library of ready-made agents designed to automate common workflows, allowing organizations to deploy solutions quickly without extensive custom development.",
  },
  {
    icon: BetweenHorizontalEnd,
    title: "Data Security",
    description:
      "Our agile methodology allows partners to experience rapid value realization—achieving significant gains in weeks, not years.",
  },
  {
    icon: FastForward,
    title: "Data Privacy",
    description:
      "Our platform is designed to grow with your organization, ensuring your workflows remain efficient and effective, no matter the size of your operations.",
  },
  {
    icon: GitPullRequestArrow,
    title: "Compliance",
    description:
      "Our agile methodology allows partners to experience rapid value realization—achieving significant gains in weeks, not years.",
  },
];

const Agents = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="w-full px-0 flex flex-col items-start justify-start text-start relative bg-gray-cream">
      <div className="flex flex-col justify-center items-center w-full bg-gradient-to-tr from-white via-[#fdfdff] to-[#6e8dfb]">
        <div className="relative w-full h-[500px] overflow-hidden ">
          {/* 🔵 Half Circle Glow */}
          <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-blue-500/30 blur-3xl rounded-full" />

          {/* 🔵 Background Arc Image (your svg) */}
          <div className="absolute inset-0 flex justify-center items-end">
            <Image
              src="/images/ai-agents.svg"
              alt="background arc"
              width={1000}
              height={500}
              className="object-contain opacity-80"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/agent-card1.png"
              alt="cards"
              width={800}
              height={450}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="space-y-5 py-9 text-center">
          <h4 className="text-lg font-medium text-darkBlue leading-relaxed uppercase">
            ai agent workforce
          </h4>

          <h1 className="text-5xl font-light text-blue-default text-wrap max-w-3xl">
            Supercharge your workforce on healthcare’s proven AI platform
          </h1>

          <p className="text-base font-normal text-gray-lightGrey leading-relaxed max-w-3xl text-center">
            AI-powered Agents perform work through automated flows on behalf of
            your staff across quality improvement, risk adjustment, patient
            access, revenue cycle, and more.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="default" className="text-white">
              Request a demo
            </Button>
          </div>
        </div>
      </div>
      {/* INTELLIGENT AUTOMATION */}
      <div className="space-y-5 py-9 flex flex-col justify-center items-center w-full">
        <h4 className="text-lg font-medium text-darkBlue leading-relaxed uppercase text-center">
          INTELLIGENT AUTOMATION
        </h4>

        <h1 className="text-text43 text-center font-light text-blue-default leading-tight text-wrap max-w-xl">
          Support every job with tailored AI Agents
        </h1>

        <p className="text-base font-normal text-gray-medium leading-relaxed max-w-2xl text-center">
          Deploy AI Agents across the enterprise to manage increased workloads
          without additional staffing, enabling patient volume growth while
          controlling costs
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto pt-10">
        {/* LEFT TEXT */}
        <div
          className={`transition-all duration-700 ease-out ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-light text-blue-default leading-snug text-wrap max-w-md">
            End-to-end workflow orchestration automation
          </h2>

          <p className="mt-4 text-gray-medium text-base font-normal max-w-md">
            Automate routine workflows from start to finish, removing manual
            intervention and reducing operational complexity.
          </p>
        </div>

        {/* RIGHT FLOW CARDS */}
        <div className="relative flex items-end justify-end">
          <Image
            src="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/676040011118d519e640dd92_workflow.svg"
            alt="doctor"
            className="relative rounded-xl"
            width={500}
            height={400}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto pt-20">
        {/* LEFT TEXT */}
        <div
          className={`transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-light text-blue-default leading-snug text-wrap max-w-md">
            Workflow efficiency drives time savings and better patient care
          </h2>

          <p className="mt-4 text-gray-medium text-base font-normal max-w-md">
            Eliminates manual tasks like faxes, phone calls, and data entry,
            freeing staff to focus on higher-value care.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={`transition-all duration-700 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#e9ecf5] rounded-3xl blur-xl opacity-60"></div>
            <Image
              src="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/67603fedc6bb4ca68a6c5fd4_patient_care.avif"
              alt="doctor"
              className="relative rounded-xl"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
      {/* CUSTOMIZATION */}
      <div className="space-y-5 py-9 flex flex-col justify-center items-center w-full">
        <h4 className="text-lg font-medium text-darkBlue leading-relaxed uppercase text-center">
          CUSTOMIZATION
        </h4>

        <h1 className="text-text43 text-center font-light text-blue-default leading-tight text-wrap max-w-2xl">
          Easily develop and deploy pre-built and custom AI Agents
        </h1>

        <p className="text-base font-normal text-gray-medium leading-relaxed max-w-3xl text-center">
          The flexibility of a low-code interface with pre-built skills ensures
          rapid implementation and enterprise-wide scalability to stay ahead of
          the evolving needs of your organization.
        </p>
      </div>
      {/* SECTION 1 */}
      <div className="grid md:grid-cols-2 gap-16 items-center justify-between w-full max-w-7xl mx-auto pt-10">
        <div className="relative flex items-end justify-start">
          <Image
            src="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/67603fa826f822fe84348a3c_pre-build_skills.svg"
            alt="doctor"
            className="relative rounded-xl"
            width={500}
            height={400}
          />
        </div>

        <div
          className={`transition-all duration-700 ease-out  ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-light text-blue-default leading-snug text-wrap max-w-md">
            Streamline workflow deployment with a library of pre-built skills
          </h2>

          <p className="mt-4 text-gray-medium text-base font-normal max-w-md">
            A robust library of ready-made skills for common workflows, enabling
            rapid deployment without custom development.
          </p>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="grid md:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto pt-20">
        <div
          className={`transition-all duration-700 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            {/* <div className="absolute inset-0 bg-[#e9ecf5] rounded-3xl blur-xl opacity-60"></div> */}
            <Image
              src="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/67603f923c93dc0ff68e8c17_low-code.svg"
              alt="doctor"
              className="relative rounded-xl"
              width={500}
              height={400}
            />
          </div>
        </div>

        <div
          className={`transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-light text-blue-default leading-snug text-wrap max-w-md">
            Low-code interface enables staff to own customization
          </h2>

          <p className="mt-4 text-gray-medium text-base font-normal max-w-md">
            Allows healthcare organizations to create, train, and monitor custom
            AI Agents using Flow Builder’s intuitive drag-and-drop interface.
          </p>
        </div>
      </div>
      {/* SECTION 3 */}
      <div className="grid md:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto pt-20">
        <div
          className={`transition-all duration-700 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            {/* <div className="absolute inset-0 bg-[#e9ecf5] rounded-3xl blur-xl opacity-60"></div> */}
            <Image
              src="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/67603f46c610801a3819d2c3_customization.svg"
              alt="doctor"
              className="relative rounded-xl"
              width={500}
              height={400}
            />
          </div>
        </div>

        <div
          className={`transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-light text-blue-default leading-snug text-wrap max-w-md">
            Dynamically adapt workflows to evolve with your organization
          </h2>

          <p className="mt-4 text-gray-medium text-base font-normal max-w-md">
            Tailor workflows to specific needs, such as unique patient pathways
            or operational challenges, while ensuring responsible use of
            resources.
          </p>
        </div>
      </div>

      {/* REAL-TIME MONITORING AND ROI */}
      <div className="space-y-5 flex flex-col justify-center items-center w-full pt-20">
        <h4 className="text-lg font-medium text-darkBlue leading-relaxed uppercase text-center">
          REAL-TIME MONITORING AND ROI
        </h4>

        <h1 className="text-text43 text-center font-light text-blue-default leading-tight text-wrap max-w-2xl">
          Optimize performance through data-driven insights
        </h1>

        <p className="text-base font-normal text-gray-medium leading-relaxed max-w-2xl text-center">
          Benchmark performance, optimize workflows, and demonstrate ROI with
          real-time analytics and clear, actionable insights.
        </p>
      </div>
      {/* SECTION 1 */}
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto pt-10">
        {/* LEFT TEXT */}
        <div
          className={`transition-all duration-700 ease-out ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-light text-blue-default leading-snug text-wrap max-w-md">
            Monitor automation health through Agent-level dashboards
          </h2>

          <p className="mt-4 text-gray-medium text-base font-normal max-w-md">
            Tracks the performance of individual AI Agents and overall
            workflows.
          </p>
        </div>

        {/* RIGHT FLOW CARDS */}
        <div className="relative flex items-end justify-end">
          <Image
            src="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/676040011118d519e640dd92_workflow.svg"
            alt="doctor"
            className="relative rounded-xl"
            width={500}
            height={400}
          />
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto pt-20 pb-16">
        {/* LEFT TEXT */}
        <div
          className={`transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-light text-blue-default leading-snug text-wrap max-w-md">
            Gain business insights and optimize performance
          </h2>

          <p className="mt-4 text-gray-medium text-base font-normal max-w-md">
            Monitors workflow efficiency, success rates, and business outcomes.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={`transition-all duration-700 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#e9ecf5] rounded-3xl blur-xl opacity-60"></div>
            <Image
              src="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/67603e73ef15d844fd03cb64_business-insights.svg"
              alt="doctor"
              className="relative rounded-xl"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* SolutionCards */}
      <div className="flex items-center justify-center">
        <SolutionCards />
      </div>

      {/* SCALABILITY & SPEED */}
      <div className="w-full h-full section-padding  bg-white">
        <div className="container-large">
          <div className="space-y-6 animate-fade-in">
            <h4 className="text-lg font-medium text-darkBlue leading-relaxed">
              SCALABILITY & SPEED
            </h4>

            <h1 className="text-text43 font-light text-blue-default">
              Drive impact with a deployment-
              <br />
              ready AI workforce
            </h1>

            <p className="text-base font-normal text-gray-medium leading-relaxed max-w-2xl">
              Drive fast ROI through our agile implementation approach, which
              enables quality assurance and resource utilization through
              continuous iteration.
            </p>
          </div>

          <div className="mx-auto max-w-7xl mt-16 grid grid-cols-1 md:grid-cols-4 gap-4 px-0">
            {features.map((feature, index) => (
              <div key={index} className="relative rounded-3xl p-[1px]">
                <div className="relative rounded-3xl bg-white shadow-lg shadow-gray-300 px-6 py-8 h-full">
                  <div className="mb-6">
                    <feature.icon
                      className="w-8 h-8 text-black"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="text-xl font-light text-gray-700 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-medium font-normal leading-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-gray-cream py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT SIDE */}
          <div>
            <div className="mb-8">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={220}
                height={80}
              />
            </div>

            {/* Quote */}
            <p className="text-blue-default text-xl md:text-3xl leading-relaxed">
              “It’s just easy. All the information is in one place, and it’s
              concise and accurate. We have a few different tools for addressing
              HCCs, but Notable’s Chronic Condition review is a one–stop shop.”
            </p>

            {/* Author */}
            <div className="mt-8">
              <h3 className="text-blue-default font-medium text-lg">
                Timothy Golembeski, MD
              </h3>
              <p className="text-blue-default text-sm mt-1">Family Medicine</p>
            </div>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative rounded-2xl overflow-hidden h-full">
            {/* Image */}
            <Image
              src="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/675f0e40ea96bdc676214fc4_635840407603485954-IMG-4720.webp"
              alt="case study"
              width={600}
              height={600}
              className="object-cover h-full"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-900/80" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white">
              <h3 className="text-2xl md:text-3xl leading-snug max-w-sm">
                Improving accurate documentation of disease burden with AI chart
                review
              </h3>

              <Button
                variant="outline"
                className="mt-6 py-3 rounded-lg border-none font-medium transition"
              >
                Read case study
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
