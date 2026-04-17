"use client";

import Link from "next/link";
import Image from "next/image";
import { CircleChevronRight } from "lucide-react";

const resources = [
  {
    image:
      "/images/more4.png",
    title:
      "Turn integration uncertainty into AI execution with PrimumAi's Connector Hub",
    linkText: "Read the blog",
    href: "https://www.PrimumAihealth.com/resources/connector-hub",
    alt: "1",
  },
  {
    image:
      "/images/more1.png",
    title:
      "How to supercharge staff with AI-powered assistance using PrimumAi Sidekick",
    linkText: "Watch the replay",
    href: "https://www.PrimumAihealth.com/resources/sidekick",
    alt: "2",
  },
  {
    image:
      "/images/more3.png",
    title:
      "Stop wrestling with agentic workflow complexity – Meet PrimumAi's Flow AI",
    linkText: "Watch the replay",
    href: "https://www.PrimumAihealth.com/resources/flow-ai",
    alt: "3",
  },
];

export default function MoreResources() {
  return (
    <section className="py-10 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-3xl font-light text-blue-default mb-12">
          More resources to explore
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {resources.map((resource, index) => (
            <div key={index} className="flex flex-col">
              {/* Image Card */}
              <div className="relative aspect-[6/3] rounded-2xl overflow-hidden shadow-lg mb-6 ">
                <Image
                  src={resource.image}
                  alt={resource.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-normal text-normalGray mb-3 leading-tight">
                {resource.title}
              </h3>

              {/* Link */}
              <Link
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-darkBlue font-medium transition-colors group hover:opacity-80 group-hover:text-blue-default"
              >
                {resource.linkText}
                <CircleChevronRight className="text-current" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import { ExternalLink } from 'lucide-react'

// interface Resource {
//   id: number;
//   title: string;
//   type: string;
//   icon: string;
//   url: string;
// }

// const resources: Resource[] = [
//   {
//     id: 1,
//     title: 'Turn integration uncertainty into AI execution with PrimumAi\'s Connector Hub',
//     type: 'Read the blog',
//     icon: '?',
//     url: 'https://www.PrimumAihealth.com/blog/turn-integration-uncertainty-into-ai-execution-with-PrimumAis-connector-hub',
//   },
//   {
//     id: 2,
//     title: 'How to supercharge staff with AI-powered assistance using PrimumAi Sidekick',
//     type: 'Watch the replay',
//     icon: '?',
//     url: 'https://www.PrimumAihealth.com/sidekick',
//   },
//   {
//     id: 3,
//     title: 'Stop wrestling with agentic workflow complexity ? Meet PrimumAi\'s Flow AI',
//     type: 'Read the blog',
//     icon: '??',
//     url: 'https://www.PrimumAihealth.com/blog/flow-ai',
//   },
// ];

// const Resources = () => {
//   return (
//     <section className="bg-white section-padding animate-fade-in">
//       <div className="container-large">
//         {/* Section Header */}
//         <h2 className="text-4xl md:text-5xl font-serif font-semibold text-navy-800 mb-12 leading-tight animate-fade-in">
//           More resources to explore
//         </h2>

//         {/* Resources Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {resources.map((resource, idx) => (
//             <a
//               key={resource.id}
//               href={resource.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group h-full rounded-xl border border-navy-200 overflow-hidden hover:border-purple hover:shadow-lg transition-all duration-300 flex flex-col transform hover:scale-105 animate-fade-in"
//               style={{
//                 transitionDelay: `${idx * 100}ms`,
//               }}
//             >
//               {/* Image placeholder */}
//               <div className="bg-gradient-to-br from-navy-50 to-navy-100 h-48 flex items-center justify-center group-hover:from-purple/10 group-hover:to-cyan-400/10 transition-all">
//                 <span className="text-6xl">{resource.icon}</span>
//               </div>

//               {/* Content */}
//               <div className="p-6 flex flex-col flex-1">
//                 <h3 className="text-lg font-semibold text-navy-800 mb-4 line-clamp-2 group-hover:text-purple transition-colors">
//                   {resource.title}
//                 </h3>

//                 {/* CTA Row */}
//                 <div className="mt-auto flex items-center gap-2 text-purple font-semibold group-hover:text-navy-800 transition-colors">
//                   <span className="text-sm">{resource.type}</span>
//                   <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resources;
