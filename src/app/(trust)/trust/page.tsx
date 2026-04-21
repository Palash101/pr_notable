"use client";

import { useState } from "react";
import {
  Search,
  Maximize2,
  Shield,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Scale,
  Lock,
  Key,
  Globe,
  ClipboardList,
  ChevronRight,
  Check,
  ShieldAlert,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/button";

// Notable Logo for Trust Center
const NotableLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M12 4L4 12L12 20L20 12L12 4Z" fill="#1a2b6b" />
    <path d="M12 4L20 12L12 20" fill="#4361ee" />
  </svg>
);

// Modal item types
type ModalItemType = "large-button" | "text" | "text-with-button";

interface ModalItem {
  title: string;
  description?: string;
  type: ModalItemType;
  value?: string;
  buttonText?: string;
}

interface ModalData {
  title: string;
  icon: React.ReactNode;
  items: ModalItem[];
}

// Modal data for each card
const modalDataMap: Record<string, ModalData> = {
  riskProfile: {
    title: "Risk Profile",
    icon: <AlertTriangle className="w-5 h-5 text-gray-700" />,
    items: [
      {
        title: "Data Access Level",
        description:
          "As a SaaS vendor selling to an enterprise customer, what type of data do you need access to?",
        type: "large-button",
        value: "Restricted",
      },
      {
        title: "Impact Level",
        description:
          "What is the potential impact to your enterprise customer if the data and/or functionality you, as the vendor, are supposed to manage, is compromised?",
        type: "large-button",
        value: "Substantial",
      },
      {
        title: "Recovery Time Objective",
        description:
          "What is your recovery time objective in case of critical failure?",
        type: "large-button",
        value: "48 hours",
      },
      {
        title: "Recovery Point Objective",
        description:
          "What is your recovery point objective in case of critical failure?",
        type: "large-button",
        value: "24 hours",
      },
    ],
  },
  productSecurity: {
    title: "Product Security",
    icon: <FileText className="w-5 h-5 text-gray-700" />,
    items: [
      {
        title: "Audit Logging",
        description:
          "All access to information within the Notable platform is subject to thorough and immutable audit logs. All access is traceable to individual users and undergo regular review.",
        type: "text",
      },
      {
        title: "Data Security",
        description:
          "Please review Notable's statement on Information Handling.",
        type: "text-with-button",
        buttonText: "Get access",
      },
      {
        title: "SSO Support",
        description:
          "Our platform supports using SSO. Please contact our security team directly if you would like to set-up or need support with SSO.",
        type: "text",
      },
    ],
  },
  reports: {
    title: "Reports",
    icon: <FileText className="w-5 h-5 text-gray-700" />,
    items: [
      {
        title: "CORL Clear",
        description: "View our CORL Clear security assessment report.",
        type: "text-with-button",
        buttonText: "Get access",
      },
      {
        title: "HITRUST Report",
        description: "Access our HITRUST certification report.",
        type: "text-with-button",
        buttonText: "Get access",
      },
      {
        title: "Network Diagram",
        description: "View our network architecture diagram.",
        type: "text-with-button",
        buttonText: "Get access",
      },
    ],
  },
  selfAssessments: {
    title: "Self-Assessments",
    icon: <ClipboardList className="w-5 h-5 text-gray-700" />,
    items: [
      {
        title: "CAIQ",
        description:
          "Consensus Assessments Initiative Questionnaire (CAIQ) self-assessment.",
        type: "text-with-button",
        buttonText: "Get access",
      },
    ],
  },
  legal: {
    title: "Legal",
    icon: <Scale className="w-5 h-5 text-gray-700" />,
    items: [
      {
        title: "Cyber Insurance",
        description:
          "Notable maintains comprehensive cyber insurance coverage.",
        type: "text-with-button",
        buttonText: "Get access",
      },
      {
        title: "Master Services Agreement",
        description: "View our standard Master Services Agreement template.",
        type: "text-with-button",
        buttonText: "Get access",
      },
      {
        title: "Privacy Policy",
        description: "Read our complete privacy policy.",
        type: "text-with-button",
        buttonText: "Get access",
      },
    ],
  },
};

// Compliance badges
const complianceBadges = [
  {
    name: "HITRUST",
    image:
      "https://cdn.safebase.io/public/9130a3a894777853249f14970de3b343080cf9b8/images/certifications/hitrust.png",
    label: "HITRUST",
  },
  {
    name: "SOC 2 Type 2",
    image:
      "https://cdn.safebase.io/public/9130a3a894777853249f14970de3b343080cf9b8/images/certifications/soc.png",
    label: "SOC 2 Type 2",
  },
  {
    name: "PCI DSS",
    image:
      "https://cdn.safebase.io/public/9130a3a894777853249f14970de3b343080cf9b8/images/certifications/pci.png",
    label: "PCI DSS",
  },
  {
    name: "ISO/IEC 27001:2022",
    image:
      "https://cdn.safebase.io/public/9130a3a894777853249f14970de3b343080cf9b8/images/certifications/iso.png",
    label: "ISO/IEC 27001:2022",
  },
];

// Trusted partners
const trustedPartners = [
  {
    name: "Good Shepherd Rehabilitation",
    image:
      "https://cdn.brandfetch.io/goodshepherdrehab.org/icon/theme/dark/fallback/lettermark/h/112/w/112?c=1exidygWc8decNy-iB-R2",
  },
  {
    name: "Fort HealthCare",
    image:
      "https://cdn.brandfetch.io/forthealthcare.com/icon/theme/dark/fallback/lettermark/h/112/w/112?c=1exidygWc8decNy-iB-R2",
  },
  {
    name: "ThedaCare",
    image:
      "https://cdn.brandfetch.io/thedacare.org/icon/theme/dark/fallback/lettermark/h/112/w/112?c=1exidygWc8decNy-iB-R2",
  },
  {
    name: "NKC Health",
    image:
      "https://cdn.brandfetch.io/nkch.org/icon/theme/dark/fallback/lettermark/h/112/w/112?c=1exidygWc8decNy-iB-R2",
  },
  {
    name: "Security Health Plan",
    image:
      "https://cdn.brandfetch.io/securityhealth.org/icon/theme/dark/fallback/lettermark/h/112/w/112?c=1exidygWc8decNy-iB-R2",
  },
  {
    name: "Presbyterian",
    image:
      "https://cdn.brandfetch.io/phs.org/icon/theme/dark/fallback/lettermark/h/112/w/112?c=1exidygWc8decNy-iB-R2",
  },
  {
    name: "Gillette Children&apos;s",
    image:
      "https://cdn.brandfetch.io/humansofgillette.com/icon/theme/dark/fallback/lettermark/h/112/w/112?c=1exidygWc8decNy-iB-R2",
  },
  {
    name: "Montage Health",
    image:
      "https://cdn.brandfetch.io/montagehealth.org/icon/theme/dark/fallback/lettermark/h/112/w/112?c=1exidygWc8decNy-iB-R2",
  },
  {
    name: "CityMD",
    image:
      "https://cdn.brandfetch.io/citymd.com/icon/theme/dark/fallback/lettermark/h/112/w/112?c=1exidygWc8decNy-iB-R2",
  },
  {
    name: "UC San Diego",
    image:
      "https://cdn.brandfetch.io/mexicanpharmacy.store/icon/theme/dark/fallback/lettermark/h/112/w/112?c=1exidygWc8decNy-iB-R2",
  },
  {
    name: "CommonSpirit",
    image:
      "https://cdn.brandfetch.io/stlukeshealth.org/icon/theme/dark/fallback/lettermark/h/112/w/112?c=1exidygWc8decNy-iB-R2",
  },
  {
    name: "Medical University",
    image:
      "https://cdn.brandfetch.io/mexicanpharmi.com/icon/theme/dark/fallback/lettermark/h/112/w/112?c=1exidygWc8decNy-iB-R2",
  },
];

// Card component for info sections
const InfoCard = ({
  icon: Icon,
  title,
  children,
  hasExpand = true,
  hasViewMore = false,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  hasExpand?: boolean;
  hasViewMore?: boolean;
}) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 relative">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-black" />
        <h3 className="font-medium text-black text-xl">{title}</h3>
      </div>
      {hasExpand && (
        <button className="text-gray-400 hover:text-gray-600">
          <Maximize2 className="w-4 h-4" />
        </button>
      )}
    </div>
    {children}
    {hasViewMore && (
      <div className="mt-4 pt-4 flex items-center justify-center">
        <button className="flex items-center justify-center gap-1 text-sm font-semibold text-gray-900">
          View more <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    )}
  </div>
);

// Checkmark item
const CheckItem = ({
  children,
  highlighted = false,
}: {
  children: React.ReactNode;
  highlighted?: boolean;
}) => (
  <div className={`flex items-center gap-2 py-1 rounded px-2 `}>
    <div className="bg-green-600 px-0.5 py-0.5 rounded-full">
      <Check className="w-3 h-3 text-white" />
    </div>
    <span className="text-sm text-gray-700">{children}</span>
  </div>
);

// Risk profile row
const RiskRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
    <span className="text-sm text-black">{label}</span>
    <span className="text-sm font-semibold text-gray-900">{value}</span>
  </div>
);

export default function TrustCenter() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-3">
          <Image alt="logo" src={"/images/logo.svg"} width={160} height={160} />
          <span className="text-xl text-gray-700">Trust Center</span>
        </div>
      </header>

      {/* Blue top line */}

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Security Review Banner */}
        <div className="bg-white border border-gray-200 rounded-lg mb-6">
          <div className="h-1 bg-blue-default" />
          <div className="flex items-center justify-between px-6 py-5">
            <div>
              <h2 className="text-xl font-semibold text-black mb-1">
                Start your security review
              </h2>
              <p className="text-gray-700 text-sm font-normal">
                View & download sensitive information • Ask for information
              </p>
            </div>
            <Button className="bg-gradient-to-r from-blue-default to-darkBlue text-white rounded-lg px-6">
              <Lock className="w-4 h-4 mr-2" />
              Get access
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 mb-6 flex items-center">
          <Search className="w-5 h-5 text-gray-600 mr-3" />
          <input
            type="text"
            placeholder="Search content"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 outline-none text-gray-700 placeholder-gray-600 text-sm font-normal"
          />
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <span className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">
              ctrl
            </span>
            <span className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">K</span>
          </div>
        </div>

        {/* Overview and Compliance */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <InfoCard icon={FileText} title="Overview">
            <p className="text-sm font-normal text-gray-700 mb-2">
              Welcome to Notable&apos;s Trust Center.
            </p>
            <p className="text-sm text-gray-700">
              Our commitment to data privacy and security is embedded in every
              part of our business. Use this Trust Center to learn about our
              security posture, request access to our security documentation,
              and learn more about our product.
            </p>
          </InfoCard>

          <InfoCard icon={Shield} title="Compliance">
            <div className="grid grid-cols-4 gap-4">
              {complianceBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 mb-2 relative">
                    <Image
                      src={badge.image}
                      alt={badge.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="bg-green-600 px-0.5 py-0.5 rounded-full">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs text-black">{badge.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>

        {/* Trusted By Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-6">
            Notable is reviewed and trusted by
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {trustedPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-2 relative">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span className="text-sm font-normal text-gray-700">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Profile, Product Security, Reports */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <InfoCard icon={AlertTriangle} title="Risk Profile" hasViewMore>
            <div className="space-y-1">
              <RiskRow label="Data Access Level" value="Restricted" />
              <RiskRow label="Impact Level" value="Substantial" />
              <RiskRow label="Recovery Time Objective" value="48 hours" />
            </div>
          </InfoCard>

          <InfoCard icon={FileText} title="Product Security">
            <div className="space-y-2">
              <CheckItem>Audit Logging</CheckItem>
              <CheckItem>Data Security</CheckItem>
              <CheckItem>SSO Support</CheckItem>
            </div>
          </InfoCard>

          <InfoCard icon={FileText} title="Reports" hasViewMore>
            <div className="space-y-2">
              <CheckItem>CORL Clear</CheckItem>
              <CheckItem>HITRUST Report</CheckItem>
              <CheckItem highlighted>Network Diagram</CheckItem>
            </div>
          </InfoCard>
        </div>

        {/* Self-Assessments, Data Security, App Security */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <InfoCard icon={ClipboardList} title="Self-Assessments">
            <div className="space-y-2">
              <CheckItem>CAIQ</CheckItem>
            </div>
          </InfoCard>

          <InfoCard icon={Lock} title="Data Security" hasExpand={false}>
            <p className="text-sm text-gray-600 leading-relaxed">
              We follow industry best practices for data security. We are happy
              to provide more details about our data security practices upon
              request.
            </p>
          </InfoCard>

          <InfoCard icon={Globe} title="App Security" hasExpand={false}>
            <p className="text-sm text-gray-600 leading-relaxed">
              We take application security seriously and are putting together a
              program to monitor internal apps.
            </p>
          </InfoCard>
        </div>

        {/* Legal, Data Privacy, Access Control */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <InfoCard icon={Scale} title="Legal" hasViewMore>
            <div className="space-y-2">
              <CheckItem>Cyber Insurance</CheckItem>
              <CheckItem>Master Services Agreement</CheckItem>
              <CheckItem>Privacy Policy</CheckItem>
            </div>
          </InfoCard>

          <InfoCard icon={Shield} title="Data Privacy" hasExpand={false}>
            <p className="text-sm text-gray-600 leading-relaxed">
              Privacy of customer data is top of mind. We follow industry best
              practices and follow all applicable privacy regulations.
            </p>
          </InfoCard>

          <InfoCard icon={Key} title="Access Control" hasExpand={false}>
            <p className="text-sm text-gray-600 leading-relaxed">
              Access is tightly monitored and controlled at our company. We are
              happy to provide more details about our access control practices
              upon request.
            </p>
          </InfoCard>
        </div>
      </main>

      {/* Card */}
      <div className="flex items-center justify-center pb-8">
        <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-3 ">
          {/* Row 1 */}
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <p className="text-gray-800 text-sm font-normal">
              If you need help using this Trust Center, please contact us.
            </p>

            <button className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 text-gray-700 hover:text-blue-500 transition text-sm font-normal">
              <MessageCircle className="w-5 h-5" />
              Contact support
            </button>
          </div>

          {/* Divider spacing */}
          <div className="my-4" />

          {/* Row 2 */}
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <p className="text-gray-800 text-sm font-normal">
              If you think you may have discovered a vulnerability, please send
              us a note.
            </p>

            <button className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 text-gray-700 hover:text-blue-500 transition text-sm font-normal">
              <ShieldAlert className="w-5 h-5" />
              Report issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
