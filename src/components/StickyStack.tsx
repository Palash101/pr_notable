import Link from 'next/link'
import { Check, CheckCircle2, SquareAsterisk } from 'lucide-react'
import Button from './ui/button';
import Image from 'next/image';

interface ColorScheme {
  borderColor: string;
  borderHoverColor: string;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
  headingColor: string;
  heading1Color: string;
  titleColor: string;
  subtitleColor: string;
  featureIconColor: string;
  labelColor: string;
  descriptionColor: string;
  checkBgColor: string;
}

interface Card {
  id: number;
  label: string;
  title: string;
  subtitle: string;
  heading: string;
  heading1: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  icon: string;
  colorScheme: ColorScheme;
}

const cards: Card[] = [
  {
    id: 1,
    label: 'Access',
    title: 'Pre-procedure instructions',
    subtitle: 'via Voice AI Agent',
    heading: 'Create capacity ',
    heading1: 'by offloading repetitive, time-intensive work across teams.',
    description: 'AI Agents intelligently streamline operations, improve patient engagement, and deliver measurable financial performance.',
    features: [
      'Unburden contact center teams',
      'Reduce referral leakage',
      'Automate intake and registration',
    ],
    ctaText: 'Learn More',
    ctaUrl: '/use-cases/access',
    icon: '/images/access-sound.svg',
    colorScheme: {
      borderColor: 'border-[#6330aa]',
      borderHoverColor: 'border-[#6330aa]',
      gradientFrom: 'from-purple-50',
      gradientTo: 'to-purple-100',
      iconColor: 'text-purple-light',
      headingColor: 'text-purple-light',
      heading1Color: 'text-gray-lightGrey',
      titleColor: 'text-purple-light',
      subtitleColor: 'text-gray-lightGrey',
      featureIconColor: 'text-purple-light',
      labelColor: 'text-purple-light',
      descriptionColor: 'text-normalGray',
      checkBgColor: 'bg-purple-superLight',
    },
  },
  {
    id: 2,
    label: 'Revenue Cycle Management',
    title: 'Automated copay estimation & collection',
    subtitle: 'with RTE verification',
    heading: 'Improve revenue ',
    heading1: 'by automating workflows to speed up reimbursement and reduce leakage.',
    description:
      'AI Agents automate repetitive tasks to prevent denials, reduce cost-to-collect, and secure revenue without adding headcount.',
    features: [
      'Provide patient estimates',
      'Streamline prior authorizations',
      'Generate appeal letters',
    ],
    ctaText: 'Learn More',
    ctaUrl: '/use-cases/rcm',
    icon: '/images/access-sound.svg',
    colorScheme: {
      borderColor: 'border-green-200',
      borderHoverColor: 'border-green-400',
      gradientFrom: 'from-green-50',
      gradientTo: 'to-green-100',
      iconColor: 'text-green-600',
      headingColor: 'text-green-800',
      heading1Color: 'text-gray-lightGrey',
      titleColor: 'text-green-800',
      subtitleColor: 'text-green-500',
      featureIconColor: 'text-green-600',
      labelColor: 'text-green-600',
      descriptionColor: 'text-normalGray',
      checkBgColor: 'bg-green-superLight',
    },
  },
  {
    id: 3,
    label: 'Care Operations',
    title: 'Care gap outreach & scheduling',
    subtitle: 'with chart scrubbing & care gap algorithm',
    heading: 'Elevate quality of care ',
    heading1: 'by unifying fragmented data and standardizing key workflows.',
    description:
      'AI Agents improve quality scores and produce better outcomes at lower costs.',
    features: [
      'Close care gaps automatically',
      'Automate chart reviews',
      'Optimize risk adjustment',
    ],
    ctaText: 'Learn More',
    ctaUrl: '/use-cases/care-ops',
    icon: '/images/access-sound.svg',
    colorScheme: {
      borderColor: 'border-pink-200',
      borderHoverColor: 'border-pink-400',
      gradientFrom: 'from-pink-50',
      gradientTo: 'to-pink-100',
      iconColor: 'text-pink-600',
      headingColor: 'text-pink-800',
      heading1Color: 'text-gray-lightGrey',
      titleColor: 'text-pink-800',
      subtitleColor: 'text-pink-500',
      featureIconColor: 'text-pink-600',
      labelColor: 'text-pink-600',
      descriptionColor: 'text-normalGray',
      checkBgColor: 'bg-pink-superLight',
    },
  },
];

const CardRow = ({ card, idx }: { card: Card; idx: number }) => {
  const { colorScheme } = card;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start transition-all duration-700 animate-fade-in">
      {/* Left - Card */}
      <div className={'lg:order-1 relative'}>
        {/* Sticky card with fixed height */}
        <div 
          className={`sticky top-24 h-[500px] rounded-2xl border ${colorScheme.borderColor} bg-white flex flex-col hover:${colorScheme.borderHoverColor} cursor-pointer transition-all duration-300`}
          style={{ zIndex: cards.length - idx }} // Higher z-index for earlier cards
        >
          {/* Card Header - Always visible */}
          <div className="absolute top-0 left-0 right-0 z-10 p-4 border-b border-gray-100 bg-white">
            <div className="flex items-center gap-3">
              <SquareAsterisk className={`w-6 h-6 ${colorScheme.iconColor}`} />
              <span className={`${colorScheme.iconColor} text-base font-normal`}>{card.label}</span>
            </div>
          </div>

          {/* Card Content - Gets hidden when overlapped */}
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <div className={`mb-6 group-hover:scale-125 transition-transform duration-600 animate-pulse-soft`}>
              <Image src={`${card.icon}`} alt={card.title} width={400} height={400} />
            </div>

            <div className="text-center">
              <p className={`font-medium text-lg ${colorScheme.titleColor} mb-2`}>{card.title}</p>
              <p className={`text-sm font-normal ${colorScheme.subtitleColor}`}>{card.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Content */}
      <div className="w-full h-full flex items-center lg:order-1">
        <div className={'lg:order-1 flex flex-col justify-center max-w-lg'}>
          <h3 className={`text-xl md:text-2xl font-serif font-medium ${colorScheme.headingColor} mb-4 leading-tight`}>
            {card.heading}<span className={`${colorScheme.heading1Color} font-light`}>{card.heading1}</span>
          </h3>

          {card.description && (
            <p className={`${colorScheme.descriptionColor} text-base font-normal mb-6 leading-relaxed`}>{card.description}</p>
          )}

          {/* Features */}
          <ul className="space-y-4 mb-8">
            {card.features.map((feature, featureIdx) => (
              <li
                key={featureIdx}
                className="flex items-start gap-3 transition-all duration-500 animate-fade-in"
                style={{
                  transitionDelay: `${featureIdx * 100}ms`,
                }}
              >
                {/* Circle Background */}
                <div
                  className={`w-5 h-5 flex items-center justify-center rounded-full ${colorScheme.checkBgColor} flex-shrink-0 mt-0.5`}
                >
                  <Check size={12} className="text-white" />
                </div>

                <span className={`${colorScheme.descriptionColor} font-normal`}>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Button variant="outline" className='w-32 text-gradient-primary'>{card.ctaText}</Button>
        </div>
      </div>
    </div>
  );
};

const StickyStack = () => {
  return (
    // <section className="section-padding">
    <section className="section-padding bg-[#faf8f7]">
      <div className="container-large">
        {/* Section Heading */}
        <div className="text-center mb-16 lg:mb-20 animate-fade-in">
          <h2 className="text-text33 flex gap-2 flex-col">
            <span className="text-blue font-poppins font-extralight">
              Automate the work behind the
            </span>

            <span className="text-blue font-poppins font-extralight">care with <span className="text-gradient-primary font-poppins font-light ml-1"> Primum AI Agents.
            </span>
            </span>
          </h2>
        </div>

        {/* Sticky Stack Cards */}
        <div className="space-y-16 lg:space-y-24">
          {cards.map((card, idx) => (
            <CardRow key={card.id} card={card} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyStack;
