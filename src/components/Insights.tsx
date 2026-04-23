import { useCallback, useEffect, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./ui/button";

interface StatItem {
  value: string;
  label: string;
}

interface StatCard {
  id: number;
  stats: StatItem[];
  company: string;
  companyLogo: React.ReactNode;
}

type InsightsProps = {
  analyticsData?: boolean;
};

const CatholicHealthLogo = () => (
  <div className="flex items-center gap-2">
    <svg
      width="40"
      height="48"
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="6" r="5" fill="#4F46E5" />
      <circle cx="12" cy="14" r="3" fill="#4F46E5" />
      <circle cx="28" cy="14" r="3" fill="#4F46E5" />
      <path
        d="M8 48L20 20L32 48"
        stroke="#E5C07B"
        strokeWidth="4"
        fill="none"
      />
      <path d="M12 40H28" stroke="#4F46E5" strokeWidth="3" />
    </svg>
    <div className="text-left">
      <p className="text-[#4F46E5] font-semibold text-lg leading-tight">
        Catholic
      </p>
      <p className="text-[#E5C07B] font-semibold text-lg leading-tight">
        Health
      </p>
    </div>
  </div>
);

const NYHealthLogo = () => (
  <div className="flex flex-col items-start">
    <p className="text-[#1a1a2e] font-bold text-sm tracking-wide">NEW YORK</p>
    <p className="text-[#1a1a2e] font-bold text-sm tracking-wide">
      HEALTH SYSTEM
    </p>
    <div className="w-full h-16 mt-2 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg"></div>
  </div>
);

const PresenceLogo = () => (
  <div className="flex flex-col items-center">
    <p className="text-[#4F46E5] font-bold text-xl">Presence Health</p>
  </div>
);

const statCards: StatCard[] = [
  {
    id: 1,
    stats: [
      { value: "$350k+", label: "annual cost savings" },
      { value: "57%", label: "reduction in manual work" },
      { value: "25k+", label: "documents processed" },
    ],
    company: "Catholic Health",
    companyLogo: <CatholicHealthLogo />,
  },
  {
    id: 2,
    stats: [
      { value: "50k+", label: "charts reviewed system-wide" },
      { value: "7%", label: "care gap closure rate increase" },
      { value: "95%", label: "accuracy rate" },
    ],
    company: "NEW YORK HEALTH SYSTEM",
    companyLogo: <NYHealthLogo />,
  },
  {
    id: 3,
    stats: [
      { value: "14 → 3", label: "days reduced in referral processing" },
      { value: "97%", label: "in-scope referrals automated" },
      { value: "12k+", label: "referrals processed monthly" },
    ],
    company: "Presence Health",
    companyLogo: <PresenceLogo />,
  },
  {
    id: 4,
    stats: [
      { value: "85%", label: "automation rate achieved" },
      { value: "8k", label: "hours saved annually" },
      { value: "4 FTEs", label: "equivalent workload handled" },
    ],
    company: "Optum",
    companyLogo: <div className="text-[#FF6B00] font-bold text-2xl">Optum</div>,
  },
  {
    id: 5,
    stats: [
      { value: "$3.3M", label: "revenue recovered" },
      { value: "15%", label: "denial rate reduction" },
      { value: "14k+", label: "claims processed" },
    ],
    company: "CityMD",
    companyLogo: (
      <div className="text-[#4F46E5] font-bold text-2xl">CityMD</div>
    ),
  },
];

const AUTO_SLIDE_INTERVAL = 3000;

const Insights = ({ analyticsData = false }: InsightsProps) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [progress, setProgress] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? statCards.length - 1 : prev - 1));
  };
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === statCards.length - 1 ? 0 : prev + 1));
    setProgress(0);
  }, [statCards.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Auto-slide with progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 100 / (AUTO_SLIDE_INTERVAL / 50);
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [handleNext]);

  // Get visible cards (prev, current, next)
  const getCardIndex = (offset: number) => {
    const index = currentIndex + offset;
    if (index < 0) return statCards.length + index;
    if (index >= statCards.length) return index - statCards.length;
    return index;
  };

  const prevCard = statCards[getCardIndex(-1)];
  const currentCard = statCards[currentIndex];
  const nextCard = statCards[getCardIndex(1)];

  return (
    <section className="py-4 pb-11 animate-fade-in">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col items-center justify-between gap-1 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-poppins font-extralight text-normalGray leading-tight">
            There's no shortage of vendors,
          </h2>
          <h2 className="text-2xl md:text-3xl font-poppins font-light text-blue-default leading-tight">
            just a shortage of results.
          </h2>
        </div>
        <div className="flex justify-center items-center gap-4 pt-1">
          <Button variant="default" className="text-white py-2.5">
            Watch video
          </Button>
          <Button variant="outline" className="py-1.5 font-medium">
            See all success stories
          </Button>
        </div>

        {/* Carousel Container */}
        <div className="relative py-8">
          <div className="h-full flex flex-col gap-5">
            <div className="flex items-center justify-center gap-4 md:gap-6">
              {/* Left Card (Previous) */}
              <div className="w-full md:max-w-2xl flex-shrink-0 opacity-40 scale-95 transition-all duration-500">
                <div className="flex gap-5 h-96 justify-between items-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="space-y-4 mb-6">
                    {prevCard.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="flex items-baseline gap-4 pb-3 border-b border-gray-100 last:border-0"
                      >
                        <p className="text-2xl font-light text-[#4F46E5] min-w-[80px]">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">{prevCard.companyLogo}</div>
                </div>
              </div>

              {/* Center Card (Current) */}
              <div className="w-full md:max-w-2xl flex-shrink-0 z-10 transition-all duration-500">
                <div className="flex gap-5 h-96 justify-between items-center bg-white rounded-2xl px-8 py-10 shadow-lg border border-gray-100">
                  <div className="space-y-5 mb-8">
                    {currentCard.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="flex items-baseline gap-6 pb-4 border-b border-gray-100 last:border-0"
                      >
                        <p className="text-3xl md:text-3xl font-normal text-gradient-primary min-w-[150px]">
                          {stat.value}
                        </p>
                        <p className="text-base text-normalGray font-normal">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="">{currentCard.companyLogo}</div>
                </div>
              </div>

              {/* Right Card (Next) */}
              <div className="w-full md:max-w-2xl flex-shrink-0 opacity-40 scale-95 transition-all duration-500">
                <div className="flex gap-5 h-96 justify-between items-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="space-y-4 mb-6">
                    {nextCard.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="flex items-baseline gap-4 pb-3 border-b border-gray-100 last:border-0"
                      >
                        <p className="text-2xl font-light text-[#4F46E5] min-w-[80px]">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">{nextCard.companyLogo}</div>
                </div>
              </div>
            </div>

            {/* Gradient Stepper Indicator */}
            <div className="flex justify-center items-center gap-2 mt-5">
              {statCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                  style={{
                    width: index === currentIndex ? "48px" : "32px",
                  }}
                >
                  {/* Background */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        index === currentIndex
                          ? "linear-gradient(90deg, #a5b4fc 0%, #818cf8 50%, #6366f1 100%)"
                          : "#e0e7ff",
                    }}
                  />
                  {/* Progress overlay for current */}
                  {index === currentIndex && (
                    <div
                      className="absolute inset-0 rounded-full progressGradient"
                      style={{
                        background:
                          "linear-gradient(90deg, #63eaf1 0%, #619ce0 50%, #4031e8 100%)",
                        // width: `${progress}%`,
                        // transition: "width 50ms linear",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {analyticsData && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
            {[
              { value: "12K", label: "sites of care" },
              { value: "38M", label: "Total patients served" },
              { value: "97%", label: "patient satisfaction" },
              { value: "1.5M", label: "tasks automated daily" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-5xl font-normal text-blue-default mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-lightGrey uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="divider-gradient my-12" />
    </section>
  );
};

export default Insights;
