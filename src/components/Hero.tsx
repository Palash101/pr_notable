import { useState } from "react";
import Link from "next/link";
import { CircleX, Play, X } from "lucide-react";
import Image from "next/image";
import Button from "./ui/button";

const Hero = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-white p-3">
        <div className="container">
          <div className="flex flex-col gap-20">
            <div className="top-banner hidden md:flex">
              <span className="pl-10">
                Join PrimumAi in Chicago at Becker’s Annual Meeting 2026
                <span className="date"> April 13–16 | Booth 237</span>
              </span>

              <div className="right space-x-2">
                <a href="#" className="text-blue-700 font-poppins">
                  Learn more
                </a>
                <button className="close bg-white px-1 py-1 rounded-full ">
                  <X className="w-3 h-3 text-blue" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 animate-fade-in order-2 lg:order-1">
                <h1 className="text-text43">
                  <span className="text-gradient-primary font-poppins font-light">
                    The AI Platform
                  </span>
                  <br />
                  <span className="text-blue font-poppins font-extralight">
                    purpose-built for healthcare
                  </span>
                </h1>

                <p className="text-base font-normal text-normalGray leading-relaxed max-w-xl">
                  Eliminate manual work and activate scalable change across
                  Access, Revenue Cycle Management, Care Operations, and more.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <Button variant="default" className="text-white w-full sm:w-auto">
                    Request a demo
                  </Button>

                  <Button
                    variant="outline"
                    className="py-1 text-gradient-primary w-full sm:w-auto"
                  >
                    Watch video
                  </Button>
                </div>
              </div>

              {/* Right Content - Placeholder for animation */}
              <div
                className={`group-hover:scale-125 transition-transform duration-500 animate-pulse-hard order-1 lg:order-2`}
              >
                <Image
                  src="/images/ai-platform.svg"
                  alt="AI Platform"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-4xl mx-4 bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 p-2 hover:bg-navy-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
            <div className="aspect-video bg-navy-800 flex items-center justify-center">
              <div className="text-center">
                <Play size={64} className="text-white mx-auto mb-4" />
                <p className="text-white text-lg">Video Player</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
