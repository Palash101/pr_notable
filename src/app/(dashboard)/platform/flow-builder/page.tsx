"use client";

import Button from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function FlowBuilderPage() {
  return (
    <>
      {/* Header Section 1 */}
      <section>
        <header className="section overflow-hidden relative">
          <div className="flex items-center flex-col relative z-10">
            <div className="padding-global">
              <div className="container-medium">
                <div className="padding-section-large pt-24 pb-11 padding-bottom-none">
                  <div className="text-center">
                    {/* FLOW BUILDER */}
                    <div className="eyebrow text-darkBlue text-lg font-medium tracking-wider mb-3">
                      FLOW BUILDER
                    </div>

                    <div className="h-6"></div>

                    {/* Main heading */}
                    <h1 className="text-5xl font-light text-blue-default mb-6">
                      What will you build?
                    </h1>

                    {/* Description */}
                    <div className="max-w-2xl mx-auto mb-10">
                      <p className="text-gray-lightGrey text-base font-normal">
                        Notable's Flow Builder empowers healthcare organizations
                        to automate routine workflows and design AI Agents, to
                        create their workforce of future within a single
                        platform.
                      </p>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center">
                      <Button variant="default" className="text-white">
                        Demo a custom flow{" "}
                        <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                          <ChevronRight className="w-3 h-3 text-darkBlue" />
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flowbuild-hero_image-wrap relative">
              <div className="flowbuild-hero_image-bg absolute inset-0"></div>
              <div className="flowbuild-hero_lottie absolute inset-0 contents">
                <div className="bg-white rounded-2xl">
                  <img src="/images/lottie_element_23.svg" alt="image" />
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/672e622373502017f8877a25_Orb.avif"
                loading="eager"
                alt=""
                className="flowbuilder-hero_orb absolute"
              />
              <img
                src="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/67460558bb46f7acdc75c652_flowBuilder-Hero-Card.svg"
                loading="eager"
                alt="Flow trigger agent UI"
                className="flowbuild-hero_card"
              />
              <img
                src="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/67460558096cb15fddedb40f_flowBuilder-Hero-Card-1.svg"
                loading="eager"
                alt="Flow builder agent UI"
                className="flowbuild-hero_card is-right"
              />
            </div>
          </div>
          <div className="section-bg absolute inset-0">
            <img
              src="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/672e6156de6d545603d4bcce_hero-background.png"
              loading="lazy"
              sizes="(max-width: 2160px) 100vw, 2160px"
              srcSet="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/672e6156de6d545603d4bcce_hero-background-p-500.avif 500w, https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/672e6156de6d545603d4bcce_hero-background-p-1080.png 1080w, https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/672e6156de6d545603d4bcce_hero-background.png 2160w"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="flowbuilder-hero_gradient image-cover-absolute"></div>
          </div>
        </header>
      </section>
      {/* Header Section 2 */}
      <section>
        <header className="section">
          <div className="padding-global">
            <div className="container-medium">
              <div className="center-heading-wrapper flowbuilder_split-header">
                <div className="spacer-small h-4"></div>
                <h1
                  className="heading-style-h2 text-wrap-balance text-4xl font-light text-blue-default mb-6"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  Build smarter workflows in hours
                </h1>
                <div className="align-center max-width-medium">
                  <p
                    className="text-gray-lightGrey text-base font-normal"
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    With a streamlined drag-and-drop interface, IT teams rapidly
                    build and deploy and customize automated workflows, without
                    relying on multiple tools or complex systems or extensive
                    R&amp;D resources.
                  </p>
                </div>
                <div className="spacer-small h-4"></div>
              </div>
            </div>
          </div>
        </header>
      </section>

      {/* Body Section 1 */}
      <section>
        <div className="padding-global">
          <div className="container max-w-screen-xl">
            <div className="flow-split_component ">
              <div className="flex flex-col items-center">
                <div className="flow-split_content">
                  <div className="margin-bottom margin-medium">
                    <div
                      className="eyebrow is-small text-blue-default text-sm font-medium"
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      low code configurations
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                      className="heading-style-h2 text-blue-default font-light"
                    >
                      Skill library and connectors
                    </h2>
                  </div>
                  <p
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="text-gray-lightGrey text-base font-normal"
                  >
                    Flow Builder features a powerful embedded library of
                    pre-built skills and connectors tailored for healthcare
                    operations.
                  </p>
                </div>
                <div className="flow-split_content">
                  <div className="margin-bottom margin-medium">
                    <div
                      className="eyebrow is-small text-blue-default text-sm font-medium"
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      low code configurations
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                      className="heading-style-h2 text-blue-default"
                    >
                      Pre-built plus customization
                    </h2>
                  </div>
                  <p
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="text-gray-lightGrey text-base font-normal"
                  >
                    By utilizing pre-built building blocks like skills,
                    connectors and logic-based workflows, users can adapt
                    workflows to their current operational needs.
                  </p>
                </div>
                <div className="flow-split_content">
                  <div className="margin-bottom margin-medium">
                    <div
                      className="eyebrow is-small text-blue-default text-sm font-medium"
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      low code configurations
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                      className="heading-style-h2 text-blue-default"
                    >
                      Human review
                    </h2>
                  </div>
                  <p
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="text-gray-lightGrey text-base font-normal"
                  >
                    Operators can build dynamic workflows that incorporate human
                    reviewers where needed for high-complexity or high-risk
                    tasks while AI Agents handle routine processes.
                  </p>
                </div>
                <div className="flow-split_content">
                  <div className="margin-bottom margin-medium">
                    <div
                      className="eyebrow is-small text-blue-default text-sm font-medium"
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      low code configurations
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                      className="heading-style-h2 text-blue-default"
                    >
                      Performance visibility
                    </h2>
                  </div>
                  <p
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="text-gray-lightGrey text-base font-normal"
                  >
                    Each block includes plug-ins for real-time analytics,
                    monitoring, adjustments, and triaging of flow or funnel
                    optimizations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/access-sound.svg"
                  alt="image"
                  className="sticky-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Section 2 */}
      <section>
        <div className="padding-global">
          <div className="container max-w-screen-xl">
            <div className="flow-split_component ">
              <div className="flex flex-col items-center">
                <img
                  src="/images/access-sound.svg"
                  alt="image"
                  className="sticky-image"
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="flow-split_content">
                  <div className="margin-bottom margin-medium">
                    <div
                      className="eyebrow is-small text-blue-default text-sm font-medium"
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      seamless integrations
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                      className="heading-style-h2 text-blue-default"
                    >
                      Total ecosystem integration
                    </h2>
                  </div>
                  <p
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="text-gray-lightGrey text-base font-normal"
                  >
                    Flow Builder, built on Notable platform, offers embedded
                    integration capabilities, connecting effortlessly to EHRs,
                    payer portals, data warehouses, claims platforms, HIEs, and
                    more.
                  </p>
                </div>
                <div className="flow-split_content">
                  <div className="margin-bottom margin-medium">
                    <div
                      className="eyebrow is-small text-blue-default text-sm font-medium"
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      seamless integrations
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                      className="heading-style-h2 text-blue-default"
                    >
                      Robust API integrations
                    </h2>
                  </div>
                  <p
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="text-gray-lightGrey text-base font-normal"
                  >
                    Notable integrates directly with EHR systems to retrieve
                    patient data, process it through LLM prompts, and generate
                    actionable insights or outputs.
                  </p>
                </div>
                <div className="flow-split_content">
                  <div className="margin-bottom margin-medium">
                    <div
                      className="eyebrow is-small text-blue-default text-sm font-medium"
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      seamless integrations
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                      className="heading-style-h2 text-blue-default"
                    >
                      Third-party system connectivity
                    </h2>
                  </div>
                  <p
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="text-gray-lightGrey text-base font-normal"
                  >
                    Flow Builder goes beyond EHR, integrating with HIEs, CRMs,
                    and data lakes to enable comprehensive automation across
                    diverse source systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Section 3 */}
      <section>
        <header className="section overflow-hidden relative">
          <div className="flex items-center flex-col relative z-10">
            <div className="padding-global">
              <div className="container-medium">
                <div className="padding-section-large pt-36 pb-11 padding-bottom-none">
                  <div className="text-center">
                    <div className="h-6"></div>

                    {/* Main heading */}
                    <h1 className="text-4xl font-light text-blue-default mb-6">
                      Hundreds of proven use cases
                    </h1>

                    {/* Description */}
                    <div className="max-w-2xl mx-auto mb-10">
                      <p className="text-gray-lightGrey text-base leading-normal">
                        New flows are being built everyday on Notable's proven
                        AI platform. Get in touch to see how Flow Builder can
                        drive impact at your organization.
                      </p>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center">
                      <Button variant="default" className="text-white">
                        Demo a custom flow{" "}
                        <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                          <ChevronRight className="w-3 h-3 text-darkBlue" />
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative pb-12">
              <div className="flowbuild-hero_image-bg absolute inset-0"></div>
              <div className=" absolute inset-0 contents">
                <div className="bg-white rounded-2xl">
                  <img src="/images/lottie_element_23.svg" alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div className="section-bg absolute inset-0">
            <img
              src="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/672e6156de6d545603d4bcce_hero-background.png"
              loading="lazy"
              sizes="(max-width: 2160px) 100vw, 2160px"
              srcSet="https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/672e6156de6d545603d4bcce_hero-background-p-500.avif 500w, https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/672e6156de6d545603d4bcce_hero-background-p-1080.png 1080w, https://cdn.prod.website-files.com/628b58b14c93b9187d929a89/672e6156de6d545603d4bcce_hero-background.png 2160w"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="flowbuilder-hero_gradient image-cover-absolute"></div>
          </div>
        </header>
      </section>
    </>
  );
}
