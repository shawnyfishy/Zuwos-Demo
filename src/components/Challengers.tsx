import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useReveal } from '../hooks/useReveal';

const Challengers: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerReveal = useReveal({ direction: 'left', duration: 1.2, delay: 0.2 });

  const challengers = [
    { old: "Meta for Business", new: "Community" },
    { old: "Microsoft Office", new: "Collaboration" },
    { old: "Jira / Asana", new: "Productivity" },
    { old: "Workday", new: "HR Ops" },
    { old: "Salesforce", new: "CRM" },
    { old: "Zoom", new: "Conferencing" },
    { old: "Slack", new: "Messaging" },
    { old: "Dropbox", new: "Storage" },
    { old: "Notion", new: "Knowledge" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Select all individual grid items
      const items = gsap.utils.toArray('.grid-item') as Element[];

      items.forEach((item: Element) => {
        const flipper = item.querySelector('.flipper');

        if (flipper) {
          gsap.to(flipper, {
            y: "-50%",
            duration: 1.5, // Slow transition for readability
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: item,
              start: "top 75%", // Trigger when the top of the card is 75% down the viewport
              end: "bottom top",
              toggleActions: "play none none reverse",
            }
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="challengers" ref={sectionRef} className="py-32 px-4 md:px-12 w-full max-w-[1920px] mx-auto">
      <div ref={headerReveal} className="mb-24">
        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
          Rapid Replacement.<br />
          <span className="opacity-40">Everything else is obsolete.</span>
        </h2>
        <p className="mt-8 text-sm font-mono uppercase tracking-widest opacity-60">
          [ The New Standard ]
        </p>
      </div>

      <div className="grid grid-cols-3 gap-[1px] bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10">
        {challengers.map((item, index) => (
          <div
            key={index}
            className="grid-item h-[30vh] md:h-[40vh] bg-[#FFFFFF] dark:bg-[#050505] overflow-hidden relative border border-transparent transition-colors duration-300 group"
          >
            <div className="flipper h-[200%] w-full flex flex-col">
              {/* Top Half (Old Tool - Before Flip) */}
              <div className="h-1/2 w-full flex flex-col justify-between p-6 md:p-10 border-b border-dashed border-gray-300 dark:border-gray-800 bg-[#FFFFFF] dark:bg-[#050505]">
                <span className="text-sm font-mono opacity-50 text-black dark:text-white">[00{index + 1}] OBSOLETE</span>
                <span className="text-3xl md:text-5xl font-medium tracking-tight text-gray-400 line-through decoration-2 decoration-red-500/30">
                  {item.old}
                </span>
              </div>

              {/* Bottom Half (New Tool - After Flip) - High Contrast Black BG */}
              <div className="h-1/2 w-full flex flex-col justify-between p-6 bg-black text-white">
                <div className="w-full border-b border-white/20 pb-2">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">Replaces</p>
                  <p className="text-sm font-medium text-gray-500 line-through decoration-red-500 decoration-2">
                    {item.old}
                  </p>
                </div>

                <div className="flex-1 flex items-end justify-end">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter uppercase text-white leading-[0.9] text-right">
                    ZUWOS<br />
                    <span className="text-green-500">{item.new}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Challengers;