import React, { useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

const GenZReality: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerReveal = useReveal({ direction: 'up', duration: 1.0 });
  const statsReveal = useReveal({ direction: 'up', duration: 1.2, stagger: 0.2 });

  return (
    <section ref={sectionRef} className="min-h-screen w-full relative flex items-center justify-center bg-[#050505] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#050505] py-24">

      {/* Gen Z Reality Content - Now Full Width */}
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center px-6 md:px-12 z-10">
        <div ref={headerReveal}>
          <h3 className="text-xl font-mono opacity-100 mb-16 text-green-400 dark:text-green-600 animate-pulse">
            [GENERATIONAL INSIGHT]
          </h3>
        </div>

        <div ref={statsReveal} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-16 reveal-item">
          <div>
            <div className="text-6xl md:text-8xl font-bold mb-4">30%</div>
            <p className="text-xl opacity-70">Workforce by 2030</p>
          </div>

          <div className="hidden md:block w-[1px] bg-current opacity-20 h-full"></div>

          <div>
            <div className="text-6xl md:text-8xl font-bold text-red-500 mb-4">1.1 yrs</div>
            <p className="text-xl opacity-70">Average Working Tenure</p>
          </div>

          <div className="hidden md:block w-[1px] bg-current opacity-20 h-full"></div>

          <div>
            <div className="text-6xl md:text-8xl font-bold text-green-500 mb-4">94%</div>
            <p className="text-xl opacity-70">Want Feedback <span className="underline decoration-2">Right Now</span></p>
          </div>
        </div>


      </div>
    </section>
  );
};


export default GenZReality;