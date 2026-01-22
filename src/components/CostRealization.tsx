import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReveal } from '../hooks/useReveal';

const CostRealization: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftReveal = useReveal({ direction: 'left', duration: 1.5 });
  const rightReveal = useReveal({ direction: 'right', duration: 1.5 });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      });

      // (Removed manual fade in favor of useReveal on elements)

      // Count up animation for savings
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 70%",
        onEnter: () => {
          gsap.fromTo(".savings-counter",
            { innerText: 0 },
            {
              innerText: 70,
              duration: 2,
              snap: { innerText: 1 },
              ease: "power2.out",
              onUpdate: function () {
                const targets = this.targets() as HTMLElement[];
                if (targets[0]) targets[0].innerText = Math.ceil(Number(targets[0].innerText)) + "%";
              }
            }
          );
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 w-full bg-[#050505] text-[#FFFFFF] overflow-hidden flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 grid-lines opacity-10"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

        <div ref={leftReveal} className="text-center md:text-left">
          <h3 className="text-sm font-mono text-red-500 mb-2 uppercase tracking-widest">[ The Problem ]</h3>
          <div className="text-6xl md:text-8xl font-bold text-gray-600 line-through decoration-red-500 decoration-4">
            $21M
          </div>
          <p className="text-xl mt-4 opacity-60">Wasted in fragmented subscriptions</p>
        </div>

        <div className="hidden md:block h-32 w-[1px] bg-white/20"></div>

        <div ref={rightReveal} className="text-center md:text-right">
          <h3 className="text-sm font-mono text-green-500 mb-2 uppercase tracking-widest">[ The ZUWOS ROI ]</h3>
          <div className="text-6xl md:text-8xl font-bold text-white savings-counter">
            0%
          </div>
          <p className="text-xl mt-4 opacity-60 font-bold text-green-400">Pure Cost Savings</p>
        </div>

      </div>
    </section>
  );
};

export default CostRealization;