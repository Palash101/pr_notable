"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  id: number;
  logo: string;
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    logo: "/gillette-logo.png", // replace with your image
    quote:
      "The Cerner integration has been very smooth. We haven’t had to engage Cerner much at all. It’s all been direct through Gillette and Notable.",
    name: "Tim Getsay",
    role: "EVP, Performance and Integration",
  },
  {
    id: 2,
    logo: "/gillette-logo.png",
    quote:
      "Another testimonial example. You can add multiple slides here and it will rotate.",
    name: "John Doe",
    role: "VP, Operations",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const item = testimonials[index];

  return (
    <div className="w-full container-large py-20 px-0 flex flex-col items-start justify-start text-start relative">
      {/* Logo */}
      <div className="mb-10">
        <img src={item.logo} alt="logo" className="h-10 mx-auto" />
      </div>

      {/* Quote */}
      <p className="text-[#1a237e] text-xl md:text-3xl max-w-4xl leading-relaxed font-medium">
        “{item.quote}”
      </p>

      {/* Author */}
      <div className="mt-10">
        <h3 className="font-semibold text-[#1a237e] text-lg">{item.name}</h3>
        <p className="text-[#1a237e]/80 text-sm mt-1">{item.role}</p>
      </div>

      {/* Navigation */}
      <div className="flex gap-6 items-center justify-center w-full bg-slate-50 mt-12">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border-2 border-darkBlue flex items-center justify-center text-darkBlue hover:bg-darkBlue hover:text-white transition"
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-darkBlue flex items-center justify-center text-white hover:opacity-90 transition"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
