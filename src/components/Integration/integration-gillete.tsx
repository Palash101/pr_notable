"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

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
    logo: "/images/logo.svg",
    quote:
      "The Cerner integration has been very smooth. We haven’t had to engage Cerner much at all. It’s all been direct through Gillette and Notable.",
    name: "Tim Getsay",
    role: "EVP, Performance and Integration",
  },
  {
    id: 2,
    logo: "/images/logo.svg",
    quote:
      "Another testimonial example. You can add multiple slides here and it will rotate.",
    name: "John Doe",
    role: "VP, Operations",
  },
];

export default function IntegrationGillete() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const item = testimonials[index];

  return (
    <div className="w-full py-20 px-0 flex flex-col items-start justify-start text-start relative bg-gray-cream">
      <div className="container-large">
        {/* Logo */}
        <div className="mb-10 ml-10">
          <Image src={item.logo} alt="logo" width={200} height={100} />
        </div>

        {/* Quote */}
        <p className="text-blue-default text-xl md:text-3xl max-w-max font-normal">
          “{item.quote}”
        </p>

        {/* Author */}
        <div className="mt-10">
          <h3 className="font-normal text-blue-default text-base">
            {item.name}
          </h3>
          <p className="text-blue-default text-sm mt-1 font-normal">
            {item.role}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-6 items-center justify-center w-full mt-12">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-darkBlue flex items-center justify-center text-darkBlue hover:bg-darkBlue hover:text-white transition cursor-pointer"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-darkBlue flex items-center justify-center text-white hover:opacity-90 transition cursor-pointer"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
