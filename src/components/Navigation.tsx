"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Button from "./ui/button";

// Icons for Platform features
const GlobeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const FlowBuilderIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <path d="M10 6.5h4" />
    <path d="M6.5 10v4" />
    <path d="M17.5 10v4" />
    <path d="M10 17.5h4" />
  </svg>
);

const SidekickIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 9h0.01" />
    <path d="M15 9h0.01" />
    <path d="M9 15h6" />
  </svg>
);

const IntegrationsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const SecurityIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);

const CustomerStoriesIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BuildIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState(null);
  console.log("activeMenu", activeMenu);

  const navItems = [
    { label: "Platform", key: "platform" },
    { label: "Solutions", key: "solutions" },
    { label: "Customers", key: "customers" },
    { label: "Resources", key: "resources" },
  ];

  // Platform dropdown content
  const PlatformDropdown = () => (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-8 py-10">
      <div className="flex items-center justify-center gap-12">
        {/* Left side - Hero section */}
        <div className="w-[400px]">
          <div className="rounded-xl overflow-hidden mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ksG7tg39ZTLNhDLJM4QK5OIO0UtT4A.png"
              alt="Platform visualization"
              className="w-full h-[180px] object-cover object-top"
            />
          </div>
          <h3 className="text-3xl font-normal text-blue-default mb-2">
            Build tomorrow&apos;s
            <br />
            workforce <span className="text-darkBlue">today</span>
          </h3>
          <p className="text-gray-lightGrey text-normal text-sm mb-4 leading-relaxed">
            Empower your organization with intelligent automation that delivers
            proven ROI, enhances productivity, and supports sustainable growth.
          </p>
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 text-darkBlue font-medium text-sm hover:gap-3 transition-all"
          >
            Learn more about our Platform <ChevronRight size={16} />
          </Link>
        </div>

        <div className="w-px bg-gray-300 self-stretch"></div>

        {/* Right side - Features */}
        <div className="flex flex-col">
          <p className="text-sm font-normal text-gray-lightGrey tracking-wider mb-6">
            FEATURES
          </p>
          <div className="space-y-5">
            <Link
              href="/platform/ai-agents"
              className="flex items-center justify-start gap-4 group/item"
            >
              <div className="text-blue-default">
                <GlobeIcon />
              </div>
              <div>
                <p className="font-normal text-normalGray group-hover/item:underline">
                  AI Agents
                </p>
                <p className="text-sm text-gray-lightGrey font-light">
                  Automate workflows with intelligent agents
                </p>
              </div>
            </Link>
            <Link
              href="/ai-platform/flow-builder"
              className="flex items-center justify-start gap-4 group/item"
            >
              <div className="text-blue-default">
                <FlowBuilderIcon />
              </div>
              <div>
                <p className="font-normal text-normalGray group-hover/item:underline">
                  Flow Builder
                </p>
                <p className="text-sm text-gray-lightGrey font-light">
                  Design and launch custom automations
                </p>
              </div>
            </Link>
            <Link
              href="/platform/sidekick"
              className="flex items-center justify-start gap-4 group/item"
            >
              <div className="text-blue-default">
                <SidekickIcon />
              </div>
              <div>
                <p className="font-normal text-normalGray group-hover/item:underline">
                  Sidekick
                </p>
                <p className="text-sm text-gray-lightGrey font-light">
                  Use natural language AI to streamline workflows
                </p>
              </div>
            </Link>
            <Link
              href="/ai-platform/integrations"
              className="flex items-center justify-start gap-4 group/item"
            >
              <div className="text-blue-default">
                <IntegrationsIcon />
              </div>
              <div>
                <p className="font-normal text-normalGray group-hover/item:underline">
                  Integrations
                </p>
                <p className="text-sm text-gray-lightGrey font-light">
                  Customize workflows at scale with robust AI skills
                </p>
              </div>
            </Link>
            <Link
              href="/platform/security"
              className="flex items-center justify-start gap-4 group/item"
            >
              <div className="text-blue-default">
                <SecurityIcon />
              </div>
              <div>
                <p className="font-normal text-normalGray group-hover/item:underline">
                  Trust & Security
                </p>
                <p className="text-sm text-gray-lightGrey ">
                  Enterprise-grade security across the platform
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  // Customers dropdown content
  const CustomersDropdown = () => (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-8 py-10">
      <div className="flex items-start justify-center gap-12">
        {/* Left side - Featured Customer Stories */}
        <div className="flex flex-col w-full max-w-xl">
          <p className="text-sm font-normal text-gray-lightGrey tracking-wider mb-6">
            FEATURED CUSTOMER STORIES
          </p>
          <div className="space-y-5">
            {/* Story 1 */}
            <Link
              href="/customers/security-health-plan"
              className="flex items-center justify-start gap-4 group/item"
            >
              <div className="w-[220px] h-[110px] rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-default to-[#2a4090]">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/80 text-xs">
                    Security Health Plan
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-blue-default mb-1 group-hover/item:text-blue">
                  Improving Disease Burden Documentation with AI Chart Review
                </h4>
                <span className="inline-flex items-center gap-1 text-darkBlue text-sm font-normal">
                  Read the full story <ChevronRight size={14} />
                </span>
              </div>
            </Link>
            {/* Story 2 */}
            <Link
              href="/customers/montage-health"
              className="flex items-center justify-start gap-4 group/item"
            >
              <div className="w-[220px] h-[110px] rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#c67b2f] to-[#e8a54b]">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/80 text-xs">Montage Health</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-blue-default mb-1 group-hover/item:text-blue">
                  Unlocking the triple threat in healthcare
                </h4>
                <span className="inline-flex items-center gap-1 text-darkBlue text-sm font-normal">
                  Read the full story <ChevronRight size={14} />
                </span>
              </div>
            </Link>
            {/* Story 3 */}
            <Link
              href="/customers/musc-health"
              className="flex gap-4 group/item"
            >
              <div className="w-[220px] h-[110px] rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-default to-[#3355aa]">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/80 text-xs">MUSC Health</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-blue-default mb-1 group-hover/item:text-blue">
                  Meeting patients where they are
                </h4>
                <span className="inline-flex items-center gap-1 text-darkBlue text-sm font-normal">
                  Read the full story <ChevronRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-px bg-gray-300 self-stretch"></div>

        {/* Right side - Partnerships */}
        <div className="w-[220px] flex flex-col gap-6">
          <p className="text-sm font-normal text-gray-lightGrey tracking-wider mb-6">
            PARTNERSHIPS
          </p>
          <div className="space-y-10 ml-4">
            <Link
              href="/customer-stories"
              className="flex items-center gap-6 group/item"
            >
              <div className="text-blue-default">
                <CustomerStoriesIcon />
              </div>
              <p className="font-normal text-gray-lightGrey group-hover/item:underline">
                Customer Stories
              </p>
            </Link>
            <Link
              href="/build-with-PrimumAi"
              className="flex items-center gap-6 group/item"
            >
              <div className="text-blue-default">
                <BuildIcon />
              </div>
              <p className="font-normal text-gray-lightGrey group-hover/item:underline">
                Build with PrimumAi
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  // Solutions dropdown content
  const SolutionsDropdown = () => (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-8 py-10">
      <div className="flex items-start justify-center gap-12">
        {/* Left side - Hero section */}
        <div className="w-[400px]">
          <div className="rounded-xl overflow-hidden mb-6">
            <img
              src="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/6876baa01c0df520fea814b4_50813364210fb7935bf403afc27d7008_Frame%20427321821%201.avif"
              alt="Platform visualization"
              className="w-full h-[180px] object-cover object-top"
            />
          </div>
          <h3 className="text-3xl font-normal text-blue-default mb-2">
            Empower every
            <br />
            role with <span className="text-darkBlue">AI Agents</span>
          </h3>
          <p className="text-gray-lightGrey font-normal text-sm mb-4 leading-relaxed">
            Deploy AI Agents across the enterprise to manage increased workloads
            without additional staffing, enabling patient volume growth while
            controlling costs.
          </p>
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 text-darkBlue font-medium text-sm hover:gap-3 transition-all"
          >
            Learn more about our AI Agents <ChevronRight size={16} />
          </Link>
        </div>

        <div className="w-px bg-gray-300 self-stretch"></div>

        {/* Right side - Features */}
        <div className="flex flex-col gap-5">
          <p className="text-sm font-normal text-gray-lightGrey tracking-wider mb-6">
            USE CASES
          </p>
          <div className="space-y-10 mx-5">
            <Link
              href="/platform/ai-agents"
              className="flex items-center justify-start gap-4 group/item"
            >
              <div className="text-blue-default">
                <GlobeIcon />
              </div>
              <div>
                <p className="font-normal text-normalGray group-hover/item:underline">
                  Patient Access
                </p>
              </div>
            </Link>
            <Link
              href="/ai-platform/flow-builder"
              className="flex items-center justify-start gap-4 group/item"
            >
              <div className="text-blue-default">
                <FlowBuilderIcon />
              </div>
              <div>
                <p className="font-normal text-normalGray group-hover/item:underline">
                  Revenue Cycle Management
                </p>
              </div>
            </Link>
            <Link
              href="/platform/sidekick"
              className="flex items-center justify-start gap-4 group/item"
            >
              <div className="text-blue-default">
                <SidekickIcon />
              </div>
              <div>
                <p className="font-normal text-normalGray group-hover/item:underline">
                  Care Operations
                </p>
              </div>
            </Link>
            <Link
              href="/ai-platform/integrations"
              className="flex items-center justify-start gap-4 group/item"
            >
              <div className="text-blue-default">
                <IntegrationsIcon />
              </div>
              <div>
                <p className="font-normal text-normalGray group-hover/item:underline">
                  Contact Center
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  // Resources dropdown content
  const ResourcesDropdown = () => (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-8 py-10">
      <div className="flex items-start justify-center gap-12">
        {/* Left side - Featured Customer Stories */}
        <div className="flex flex-col w-full max-w-xl">
          <p className="text-sm font-normal text-gray-lightGrey tracking-wider mb-6 capitalize">
            Latest Resources
          </p>
          <div className="space-y-5">
            {/* Story 1 */}
            <Link
              href="/customers/security-health-plan"
              className="flex items-center justify-start gap-4 group/item"
            >
              <div className="w-[220px] h-[110px] rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-default to-[#2a4090]">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/80 text-xs">
                    Security Health Plan
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-blue-default mb-1 group-hover/item:text-blue">
                  How optimized referral management stops revenue drain
                </h4>
                <span className="inline-flex items-center gap-1 text-darkBlue text-sm font-normal">
                  Read the full blog <ChevronRight size={14} />
                </span>
              </div>
            </Link>
            {/* Story 2 */}
            <Link
              href="/customers/montage-health"
              className="flex items-center justify-start gap-4 group/item"
            >
              <div className="w-[220px] h-[110px] rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#c67b2f] to-[#e8a54b]">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/80 text-xs">Montage Health</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-blue-default mb-1 group-hover/item:text-blue">
                  Unlocking the triple threat in healthcare
                </h4>
                <span className="inline-flex items-center gap-1 text-darkBlue text-sm font-normal">
                  Read the full blog <ChevronRight size={14} />
                </span>
              </div>
            </Link>
            {/* Story 3 */}
            <Link
              href="/customers/musc-health"
              className="flex gap-4 group/item"
            >
              <div className="w-[220px] h-[110px] rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-default to-[#3355aa]">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/80 text-xs">MUSC Health</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-blue-default mb-1 group-hover/item:text-blue">
                  Meeting patients where they are
                </h4>
                <span className="inline-flex items-center gap-1 text-darkBlue text-sm font-normal">
                  Read the full blog <ChevronRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-px bg-gray-300 self-stretch"></div>

        {/* Right side - Partnerships */}
        <div className="w-[220px] flex flex-col gap-6">
          <p className="text-sm font-normal text-gray-lightGrey tracking-wider mb-6 uppercase">
            Resources
          </p>
          <div className="space-y-10 ">
            <Link
              href="/customer-stories"
              className="flex items-center gap-6 group/item ml-4"
            >
              <div className="text-blue-default">
                <CustomerStoriesIcon />
              </div>
              <p className="font-normal text-gray-lightGrey group-hover/item:underline uppercase">
                Resources Hub
              </p>
            </Link>
            <h4 className="font-medium text-blue-default mb-1 group-hover/item:text-blue capitalize">
              Noteworthy to You
            </h4>

            <div className="space-y-5">
              <p className="font-normal text-gray-lightGrey group-hover/item:underline uppercase">
                Company
              </p>
              <Link
                href="/about-us"
                className="flex items-center gap-6 group/item"
              >
                <p className="font-normal text-blue-default group-hover/item:underline">
                  About us
                </p>
              </Link>
              <Link
                href="/about-us"
                className="flex items-center gap-6 group/item"
              >
                <p className="font-normal text-blue-default group-hover/item:underline">
                  Careers
                </p>
              </Link>
              <Link
                href="/about-us"
                className="flex items-center gap-6 group/item"
              >
                <p className="font-normal text-blue-default group-hover/item:underline">
                  Builing Program
                </p>
              </Link>
              <Link
                href="/about-us"
                className="flex items-center gap-6 group/item"
              >
                <p className="font-normal text-blue-default group-hover/item:underline">
                  Contact us
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const getDropdown = (key: string) => {
    switch (key) {
      case "platform":
        return <PlatformDropdown />;
      case "customers":
        return <CustomersDropdown />;
      case "solutions":
        return <SolutionsDropdown />;
      case "resources":
        return <ResourcesDropdown />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block sticky top-0 z-50 bg-white animate-fade-in">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <Image
              alt="logo"
              src={"/images/logo.svg"}
              width={160}
              height={160}
            />

            {/* Center Navigation */}
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                // <div key={item.key} className="relative group">
                <div
                  key={item.key}
                  onMouseEnter={() => setActiveMenu(item.key)}
                  className="relative"
                >
                  <button className="px-2 py-2 text-navyBlue font-normal text-sm transition-colors flex items-center gap-2 group relative">
                    {item.label}
                    {/* Underline animation */}
                    <span className="absolute top-12 bottom-0 left-0 w-0 h-0.5 bg-darkBlue group-hover:w-full transition-all duration-200" />
                  </button>
                </div>
              ))}
            </div>

            <Button variant="outline">Request a demo</Button>
          </div>

          {activeMenu && (
            <div
              onMouseLeave={() => setActiveMenu(null)}
              className="absolute left-0 top-full w-full transition-all duration-200 animate-fade-in-down"
            >
              <div className="container">{getDropdown(activeMenu)}</div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden sticky top-0 z-50 bg-white border-b border-navy-100">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Image alt="logo" src={"/images/logo.svg"} width={100} height={100} />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-navy-50 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-navy-100 bg-white animate-fade-in-down">
            {/* <div className="px-4 py-4 space-y-2">
              Platform
              <div>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "platform" ? null : "platform",
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-3 text-navy-800 font-medium hover:bg-navy-50 rounded-lg transition-colors"
                >
                  Platform
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${activeDropdown === "platform" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "platform" && (
                  <div className="pl-4 py-2 space-y-2 border-l-2 border-purple">
                    <Link
                      href="/ai-agent-workforce/overview"
                      className="block px-4 py-2 text-navy-600 hover:text-purple text-sm font-medium"
                    >
                      AI Agents
                    </Link>
                    <Link
                      href="/ai-platform/flow-builder"
                      className="block px-4 py-2 text-navy-600 hover:text-purple text-sm font-medium"
                    >
                      Flow Builder
                    </Link>
                    <Link
                      href="/ai-platform/sidekick"
                      className="block px-4 py-2 text-navy-600 hover:text-purple text-sm font-medium"
                    >
                      Sidekick
                    </Link>
                    <Link
                      href="/ai-platform/integrations"
                      className="block px-4 py-2 text-navy-600 hover:text-purple text-sm font-medium"
                    >
                      Integrations
                    </Link>
                  </div>
                )}
              </div>

              Solutions
              <div>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "solutions" ? null : "solutions",
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-3 text-navy-800 font-medium hover:bg-navy-50 rounded-lg transition-colors"
                >
                  Solutions
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "solutions" && (
                  <div className="pl-4 py-2 space-y-2 border-l-2 border-purple">
                    <Link
                      href="/use-cases/access"
                      className="block px-4 py-2 text-navy-600 hover:text-purple text-sm font-medium"
                    >
                      Patient Access
                    </Link>
                    <Link
                      href="/use-cases/rcm"
                      className="block px-4 py-2 text-navy-600 hover:text-purple text-sm font-medium"
                    >
                      Revenue Cycle Management
                    </Link>
                    <Link
                      href="/use-cases/care-ops"
                      className="block px-4 py-2 text-navy-600 hover:text-purple text-sm font-medium"
                    >
                      Care Operations
                    </Link>
                  </div>
                )}
              </div>

              Customers
              <div>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "customers" ? null : "customers",
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-3 text-navy-800 font-medium hover:bg-navy-50 rounded-lg transition-colors"
                >
                  Customers
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${activeDropdown === "customers" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "customers" && (
                  <div className="pl-4 py-2 space-y-2 border-l-2 border-purple">
                    <Link
                      href="/customer-stories"
                      className="block px-4 py-2 text-navy-600 hover:text-purple text-sm font-medium"
                    >
                      Customer Stories
                    </Link>
                  </div>
                )}
              </div>

              Resources
              <div>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "resources" ? null : "resources",
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-3 text-navy-800 font-medium hover:bg-navy-50 rounded-lg transition-colors"
                >
                  Resources
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${activeDropdown === "resources" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "resources" && (
                  <div className="pl-4 py-2 space-y-2 border-l-2 border-purple">
                    <Link
                      href="/resource-center"
                      className="block px-4 py-2 text-navy-600 hover:text-purple text-sm font-medium"
                    >
                      Resource Hub
                    </Link>
                    <Link
                      href="/about-us"
                      className="block px-4 py-2 text-navy-600 hover:text-purple text-sm font-medium"
                    >
                      About us
                    </Link>
                    <Link
                      href="/careers"
                      className="block px-4 py-2 text-navy-600 hover:text-purple text-sm font-medium"
                    >
                      Careers
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/request-demo"
                className="block w-full text-center btn-primary mt-4"
              >
                Request a demo
              </Link>
            </div> */}

            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.key}>
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.key ? null : item.key,
                      )
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-blue-default font-medium hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${activeDropdown === item.key ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeDropdown === item.key && (
                    <div className="pl-4 py-2 space-y-2 border-l-2 border-blue ml-4">
                      {item.key === "platform" && (
                        <>
                          <Link
                            href="/platform/ai-agents"
                            className="block px-4 py-2 text-gray-600 hover:text-blue text-sm font-medium"
                          >
                            AI Agents
                          </Link>
                          <Link
                            href="/ai-platform/flow-builder"
                            className="block px-4 py-2 text-gray-600 hover:text-blue text-sm font-medium"
                          >
                            Flow Builder
                          </Link>
                          <Link
                            href="/platform/sidekick"
                            className="block px-4 py-2 text-gray-600 hover:text-blue text-sm font-medium"
                          >
                            Sidekick
                          </Link>
                          <Link
                            href="/ai-platform/integrations"
                            className="block px-4 py-2 text-gray-600 hover:text-blue text-sm font-medium"
                          >
                            Integrations
                          </Link>
                        </>
                      )}
                      {item.key === "solutions" && (
                        <>
                          <Link
                            href="/solutions/patient-access"
                            className="block px-4 py-2 text-gray-600 hover:text-blue text-sm font-medium"
                          >
                            Patient Access
                          </Link>
                          <Link
                            href="/solutions/revenue-cycle"
                            className="block px-4 py-2 text-gray-600 hover:text-blue text-sm font-medium"
                          >
                            Revenue Cycle
                          </Link>
                          <Link
                            href="/solutions/care-operations"
                            className="block px-4 py-2 text-gray-600 hover:text-blue text-sm font-medium"
                          >
                            Care Operations
                          </Link>
                        </>
                      )}
                      {item.key === "customers" && (
                        <>
                          <Link
                            href="/customer-stories"
                            className="block px-4 py-2 text-gray-600 hover:text-blue text-sm font-medium"
                          >
                            Customer Stories
                          </Link>
                          <Link
                            href="/build-with-PrimumAi"
                            className="block px-4 py-2 text-gray-600 hover:text-blue text-sm font-medium"
                          >
                            Build with PrimumAi
                          </Link>
                        </>
                      )}
                      {item.key === "resources" && (
                        <>
                          <Link
                            href="/resources/hub"
                            className="block px-4 py-2 text-gray-600 hover:text-blue text-sm font-medium"
                          >
                            Resource Hub
                          </Link>
                          <Link
                            href="/about"
                            className="block px-4 py-2 text-gray-600 hover:text-blue text-sm font-medium"
                          >
                            About Us
                          </Link>
                          <Link
                            href="/careers"
                            className="block px-4 py-2 text-gray-600 hover:text-blue text-sm font-medium"
                          >
                            Careers
                          </Link>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}

              <Button variant="outline">Request a demo</Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
