import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';


import { useReveal } from '../hooks/useReveal';

const GameChanger: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGSVGElement>(null);
  const [activeInfo, setActiveInfo] = useState<'earn' | 'redeem' | null>(null);

  const titleReveal = useReveal({ direction: 'up', duration: 1.2 });
  const footerReveal = useReveal({ direction: 'up', duration: 1.2, delay: 0.2 });

  useLayoutEffect(() => {
    // ... (keep existing GSAP Logic) ...
    const ctx = gsap.context(() => {
      // Rotate the circle based on scroll
      // Starting from a rotation that places "EARN POINTS" near the top if possible
      gsap.to(circleRef.current, {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Reveal text
      gsap.from(".loop-text", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center 70%",
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full flex flex-col items-center justify-center py-24 relative overflow-hidden bg-[#FFFFFF] dark:bg-[#050505] text-black dark:text-[#FFFFFF] transition-colors duration-500">

      {/* 3x Bigger: w-[90vw] md:w-[800px] for massive impact */}
      <div className="relative w-[90vw] md:w-[800px] aspect-square flex items-center justify-center">
        {/* SVG Circle */}
        <svg
          ref={circleRef}
          className="w-full h-full absolute inset-0 text-black dark:text-[#FFFFFF]"
          viewBox="0 0 200 200"
        >
          {/* Reduced radius from 95 to 85 for better legibility of rotating text */}
          <path
            id="circlePath"
            d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="opacity-50"
          />
          {/* Prominent Circular Text - textLength updated for radius 85 (2 * pi * 85 approx 534) */}
          <text className="text-[14px] uppercase font-bold tracking-[0.1em]" fill="currentColor">
            <textPath
              href="#circlePath"
              startOffset="0%"
              textLength="534"
              lengthAdjust="spacing"
            >
              EARN POINTS → REDEEM REWARDS → GET MOTIVATED → REPEAT →
            </textPath>
          </text>
        </svg>

        {/* Center Content - Scaled down for elegance */}
        <div ref={titleReveal} className="text-center z-10 relative pointer-events-none">
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none opacity-90">
            DOPAMINE
          </h3>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none opacity-90">
            LOOP
          </h3>
        </div>

        {/* LEFT GROUP: Earn Points (Mathematically symmetrical offset) */}
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[calc(50%+42vw)] md:-translate-x-[calc(50%+400px)] group z-20">
          <span
            className="text-xs font-bold font-mono uppercase border-2 border-current px-4 py-2 md:px-6 md:py-3.5 rounded-full cursor-pointer bg-[#FFFFFF] dark:bg-[#050505] hover:bg-black hover:text-[#FFFFFF] dark:hover:bg-[#FFFFFF] dark:hover:text-black transition-all whitespace-nowrap shadow-xl text-[12px] md:text-sm"
            onMouseEnter={() => setActiveInfo('earn')}
            onMouseLeave={() => setActiveInfo(null)}
          >
            Earn Points
          </span>
          {/* Tooltip */}
          <div
            className={`
                    absolute top-14 w-72 p-6 
                    left-0 md:left-auto md:right-0
                    bg-white dark:bg-[#050505] 
                    border-2 border-black dark:border-[#FFFFFF]
                    transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] 
                    z-30 
                    ${activeInfo === 'earn' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}
                `}
          >
            <h5 className="font-bold mb-2 text-base uppercase tracking-wider text-black dark:text-[#FFFFFF]">Ways to Earn:</h5>
            <ul className="list-disc list-inside text-xs space-y-2 font-medium text-black dark:text-[#FFFFFF] opacity-80">
              <li>Completing assigned tasks</li>
              <li>Hitting project milestones</li>
              <li>Peer-to-peer recognition</li>
            </ul>
          </div>
        </div>

        {/* RIGHT GROUP: Redeem Rewards (Mathematically symmetrical offset) */}
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[calc(-50%+25vw)] md:translate-x-[calc(-50%+400px)] group z-20">
          <span
            className="text-xs font-bold font-mono uppercase border-2 border-current px-4 py-2 md:px-6 md:py-3.5 rounded-full cursor-pointer bg-[#FFFFFF] dark:bg-[#050505] hover:bg-black hover:text-[#FFFFFF] dark:hover:bg-[#FFFFFF] dark:hover:text-black transition-all whitespace-nowrap shadow-xl text-[12px] md:text-sm"
            onMouseEnter={() => setActiveInfo('redeem')}
            onMouseLeave={() => setActiveInfo(null)}
          >
            Redeem Rewards
          </span>
          {/* Tooltip */}
          <div
            className={`
                    absolute top-14 w-72 text-left p-6 
                    right-0 md:right-auto md:left-0
                    bg-white dark:bg-[#050505] 
                    border-2 border-black dark:border-[#FFFFFF] 
                    transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] 
                    z-30 
                    ${activeInfo === 'redeem' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}
                `}
          >
            <h5 className="font-bold mb-2 text-base uppercase tracking-wider text-black dark:text-[#FFFFFF]">Exchange For:</h5>
            <ul className="list-disc list-inside text-xs space-y-2 font-medium text-black dark:text-[#FFFFFF] opacity-80">
              <li>Amazon / Brand Vouchers</li>
              <li>Travel & Experiences</li>
              <li>Company Store Perks</li>
            </ul>
          </div>
        </div>
      </div>

      <div ref={footerReveal} className="mt-24 text-center px-4 max-w-5xl mx-auto">
        <h4 className="text-2xl md:text-5xl font-light tracking-tight mb-8 leading-tight">
          <span className="opacity-40 block mb-2 text-xl md:text-3xl">Traditional: Wait 12 months for appraisal.</span>
          <span className="font-bold border-b-4 border-green-500 text-green-600 dark:text-green-400">ZUWOS: Rewarded in real-time, every day.</span>
        </h4>
      </div>
    </section>
  );
};

export default GameChanger;