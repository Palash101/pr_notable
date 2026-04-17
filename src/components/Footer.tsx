import Link from "next/link";
import { Mail, Linkedin, Youtube } from "lucide-react";
import Button from "./ui/button";

const Footer = () => {
  const footerLinks = {
    "AI Platform": [
      { label: "Overview", href: "/ai-platform/overview" },
      { label: "Integrations", href: "/ai-platform/integrations" },
      { label: "Sidekick", href: "/ai-platform/sidekick" },
      { label: "Flow Builder", href: "/ai-platform/flow-builder" },
      { label: "Security Center", href: "https://trust.PrimumAihealth.com" },
    ],
    Customers: [{ label: "Customer Stories", href: "/customer-stories" }],
    Solutions: [
      { label: "AI Agent Workforce", href: "/ai-agent-workforce/overview" },
      { label: "Patient Access", href: "/use-cases/access" },
      { label: "Revenue Cycle Management", href: "/use-cases/rcm" },
      { label: "Care Operations", href: "/use-cases/care-ops" },
    ],
    Resources: [
      { label: "Resource Center", href: "/resource-center" },
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-[#e5e7f4] text-white animate-fade-in">
      {/* Newsletter Section */}
      <div className="section-padding animate-fade-in">
        <div className="container">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"> */}
          <div className="flex flex-col justify-center items-center w-full">
            {/* Newsletter Info */}
            <div className="space-y-4">
              <h3 className="text-3xl md:text-3xl font-serif font-light text-blue-default">
                Transform your organization with AI-powered automation
              </h3>
              <p className="text-normalGray leading-relaxed">
                Join thousands of healthcare organizations leveraging PrimumAi's
                AI to drive efficiency and improve patient care.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="rounded-xl p-6 md:p-8">
              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="flex-1 px-4 py-3 bg-white border border-navy-600 rounded-lg text-white placeholder-navy-400 focus:outline-none focus:border-purple transition-colors"
                  />
                  <Button variant="default" className="text-white py-2.5">
                    Submit
                  </Button>
                </div>
                <p className="text-xs text-navy-400">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from PrimumAi.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* Main Footer Content */}
      <div className="">
        <div className="container-large">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 bg-white px-8 py-8 rounded-xl">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="text-2xl font-normal text-blue-default transition-colors inline-block mb-4"
              >
                PrimumAi
              </Link>
              <p className="text-blue-default text-sm leading-relaxed">
                The AI Platform purpose-built for healthcare. Automate workflows
                across access, revenue cycle, and care operations.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.linkedin.com/company/PrimumAihealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-navy-800 hover:bg-purple rounded-lg transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.youtube.com/c/PrimumAihealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-navy-800 hover:bg-purple rounded-lg transition-colors"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="mailto:info@PrimumAihealth.com"
                  className="p-2 bg-navy-800 hover:bg-purple rounded-lg transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-2xl font-normal text-blue-default mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-blue-default transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-navy-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-navy-400 text-sm">
                © 2024 PrimumAi Health. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link
                  href="/privacy"
                  className="text-navy-400 hover:text-purple transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-navy-400 hover:text-purple transition-colors text-sm"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-navy-400 hover:text-purple transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
