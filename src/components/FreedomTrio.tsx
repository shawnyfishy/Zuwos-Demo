import React, { useState } from 'react';
import { ShieldCheck, Database, Flag } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const FreedomTrio: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerReveal = useReveal({ direction: 'up', duration: 1.2, stagger: 0.2 });

  const pillars = [
    {
      title: "MADE IN INDIA",
      subtitle: "Indigenous Innovation",
      desc: "Patriotic sovereignty. Built for the global south, engineered with precision to meet global excellence.",
      icon: <Flag size={32} />
    },
    {
      title: "DATA OWNERSHIP",
      subtitle: "60-70% Cost Savings",
      desc: "Freedom from big tech licenses. No license slavery. You own your data, forever.",
      icon: <Database size={32} />
    },
    {
      title: "BUILT-IN AI",
      subtitle: "Zero Leaks",
      desc: "Your team won't need ChatGPT. Privacy-first architecture reducing data leak risks. Complete confidentiality.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <section ref={containerReveal} className="min-h-[80vh] w-full flex flex-row border-t border-black/10 dark:border-white/10 bg-[#FFFFFF] dark:bg-[#050505] text-[#050505] dark:text-[#FFFFFF] overflow-x-auto">
      {pillars.map((pillar, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`
            relative flex-1 border-r border-black/10 dark:border-white/10 min-w-[300px] md:min-w-0
            transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
            flex flex-col justify-end p-8 overflow-hidden group
            ${hoveredIndex === index ? 'flex-[2] bg-black !text-white dark:bg-white dark:!text-black' : 'bg-transparent group-hover:!text-opacity-50'}
          `}
        >
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="opacity-50 mb-8">{pillar.icon}</div>

            <div>
              <span className="text-xs font-mono mb-4 block opacity-60">0{index + 1}</span>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9] mb-4 break-words">
                {pillar.title}
              </h3>

              <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'max-h-60 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                <h4 className="text-xl md:text-2xl font-mono border-l-2 border-current pl-4 mb-2">
                  {pillar.subtitle}
                </h4>
                <p className="text-lg opacity-80 pl-4 max-w-md leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Background Number */}
          <div className="absolute top-0 right-0 text-[10rem] md:text-[15rem] font-bold leading-none opacity-[0.03] select-none pointer-events-none">
            {index + 1}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FreedomTrio;