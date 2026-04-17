"use client";

import Button from "./ui/button";


const PlatformFeature = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* <div className="relative bg-gradient-to-br from-[#1a1a5e] via-[#1e1e6e] to-[#0a0a3a] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden min-h-[600px]"> */}
        <div className="relative bg-gradient-to-br from-[#020084] via-[#02059d] to-[#1e1e6e] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden min-h-[600px]">
          {/* Dotted pattern overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Gradient glow effects */}
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 text-gradient-primary rounded-full blur-3xl" />
          {/* <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" /> */}

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-3xl font-light">
                <span className="text-skyBlue text-3xl">
                  PrimumAi Platform is configurable across any use
                  case{" "}
                </span>
                <span className="text-white font-light">
                  and deeply integrated into healthcare&apos;s data ecosystems.
                </span>
              </h2>

              <p className="text-white text-base font-normal leading-relaxed max-w-xl">
                With Flow Builder, our intuitive low-code design tool, and Flow
                AI, our in-platform assistant, your teams can create net-new
                automations in minutes.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="default"
                  className="text-white py-2.5"
                >
                  See Flow Builder in action
                </Button>
                <Button
                  variant="outline"
                  className="bg-white hover:bg-gray-50 text-[#1a1a5e] border-0 py-2.5 font-medium"
                >
                  Learn about Connector Hub
                </Button>
              </div>
            </div>

            {/* Right - Visual Elements */}
           <div className="relative h-full">
              {/* Template Library */}
              <div className="absolute top-0 right-0 space-y-3">
                <p className="text-[#6a7ab8] text-xs font-semibold tracking-widest mb-4 text-right">
                  TEMPLATE LIBRARY
                </p>

                {/* Template Items */}
                <div className="flex items-center gap-3 justify-end">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-sm">
                      Outstanding Balance Collection
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-end">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-sm">
                      Inbound Fax Transcription
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-end">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-pink-500/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-pink-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-sm">HCC Suspecting</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Build & Connect Central Element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl" />

                  {/* Main circle with gradient border */}
                  <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-[#2a2a7a] to-[#1a1a5e] border border-white/10 flex items-center justify-center">
                    {/* PrimumAi Logo */}
                    <svg
                      className="w-12 h-12 text-[#3b5bff]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm16 7.36l-7 3.5v-7.36l7-3.5v7.36z" />
                    </svg>

                    {/* Build label */}
                    <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 pr-4">
                      <span className="text-white/80 text-sm font-medium">
                        Build
                      </span>
                    </div>

                    {/* Connect label */}
                    <div className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 pl-4">
                      <span className="text-white/80 text-sm font-medium">
                        Connect
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector Hub */}
              <div className="absolute bottom-0 right-0 bg-[#0d0d3d] rounded-2xl p-6 border border-white/10">
                <p className="text-[#6a7ab8] text-xs font-semibold tracking-widest mb-4">
                  CONNECTOR HUB
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {/* Epic */}
                  <div className="bg-[#1a1a4a] rounded-lg px-4 py-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Epic</span>
                  </div>
                  {/* Genesys */}
                  <div className="bg-[#1a1a4a] rounded-lg px-4 py-3 flex items-center justify-center">
                    <span className="text-white font-medium text-xs">
                      GENESYS
                    </span>
                  </div>
                  {/* Oracle */}
                  <div className="bg-[#1a1a4a] rounded-lg px-4 py-3 flex items-center justify-center">
                    <span className="text-red-500 font-bold text-xs">
                      ORACLE
                    </span>
                  </div>
                  {/* Optum */}
                  <div className="bg-[#1a1a4a] rounded-lg px-4 py-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Optum</span>
                  </div>
                  {/* Stripe */}
                  <div className="bg-[#1a1a4a] rounded-lg px-4 py-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">stripe</span>
                  </div>
                  {/* OnBase */}
                  <div className="bg-[#1a1a4a] rounded-lg px-4 py-3 flex items-center justify-center">
                    <span className="text-white font-medium text-xs">
                      OnBase
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeature;
