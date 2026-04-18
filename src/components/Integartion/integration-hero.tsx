"use client";

export default function IntegrationsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#060639]">
      {/* Dark blue gradient background */}
      {/* <div className="relative bg-gradient-to-b from-[#0a0e2e] via-[#101650] to-[#1a237e] pb-32"> */}
      <div className="relative bg-gradient-to-tr from-[#060639] via-[#020341] to-[#07049b]">
        {/* Hero content with arc visualization */}
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Arc visualization container */}
          <div className="relative flex justify-center items-end h-[500px]">
            {/* Using the SVG from Notable */}
            <img
              src="/images/web.svg"
              alt="Integration visualization"
              className="w-full max-w-4xl h-auto"
            />
          </div>
        </div>
      </div>

      {/* AI Platform section - white background */}
      {/* <div className="relative bg-white py-16 text-center"> */}
      <div className="relative py-16 flex flex-col items-center justify-center">
        <span className="text-lg font-medium tracking-[0.2em] text-skyBlue uppercase">
          AI Platform
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-light text-white leading-normal text-center">
          Infinite integrations
          <br />
          <span className="mt-4 text-4xl md:text-5xl font-light text-[#afbef3] leading-normal">
            for smarter workflows
          </span>
        </h1>

        <p className="font-normal text-base text-gray-lightGrey text-wrap mt-8 w-full max-w-2xl text-center">With flexible integration capabilities, Notable streamlines workflow automation by seamlessly reading and writing data across any field in any system.</p>
      </div>
    </section>
  );
}
