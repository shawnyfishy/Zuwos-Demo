import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Slack, Trello, Mail, Calendar, MessageCircle, FileText, Database, Users, ArrowDown } from 'lucide-react';
import { LiquidMetal, liquidMetalPresets } from '@paper-design/shaders-react';
import { useMagnetic } from '../hooks/useMagnetic';
import { soundEngine } from '../services/SoundEngine';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metalWrapperRef = useRef<HTMLDivElement>(null);

  // Apply magnetic effect to the main CTA
  const magneticBtnRef = useMagnetic(0.2);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const icons = iconsRef.current?.children;

      // Scroll Animation for Liquid Metal (Moves down & vanishes)
      gsap.to(metalWrapperRef.current, {
        yPercent: 30,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: true,
        }
      });

      // Breathing Typography (Subtle weight/tracking shift on scroll)
      gsap.to(logoRef.current, {
        letterSpacing: "0.15em",
        opacity: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
        }
      });

      if (icons) {
        // Chaos phase (previous implementation)
        gsap.set(icons, {
          x: () => (Math.random() - 0.5) * window.innerWidth * 0.8,
          y: () => (Math.random() - 0.5) * window.innerHeight * 0.8,
          rotation: () => Math.random() * 360,
          opacity: 0
        });

        tl.to(icons, {
          opacity: 0.6,
          duration: 1,
          stagger: { amount: 0.5, from: "random" },
          ease: "power2.out"
        })
          .to(icons, {
            x: (i) => Math.cos(i) * 100,
            y: (i) => Math.sin(i) * 100,
            rotation: "+=180",
            duration: 2,
            ease: "slow(0.7, 0.7, false)"
          }, "<")
          .to(icons, {
            x: 0,
            y: 0,
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "back.in(1.7)",
            stagger: 0.02
          })
          .fromTo(logoRef.current,
            { x: -100, opacity: 0, filter: 'blur(10px)' },
            { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: "power3.out" },
            "-=0.4"
          )
          .fromTo(ctaRef.current,
            { x: 50, opacity: 0, filter: 'blur(5px)' },
            { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: "power3.out" },
            "-=1.0"
          );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToContent = () => {
    // Play tactile feedback
    soundEngine.playClick();

    const nextSection = document.getElementById('challengers');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 z-10 bg-white">
      <div ref={metalWrapperRef} className="absolute inset-0 z-[-10]">
        <LiquidMetal
          {...liquidMetalPresets[2]}
          colorBack="#FFFFFF"
          colorTint="#E5E5E5"
          style={{ position: "absolute", inset: 0, zIndex: -10 }}
        />
      </div>

      <div ref={iconsRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute text-gray-400"><Slack size={48} /></div>
        <div className="absolute text-gray-400"><Trello size={52} /></div>
        <div className="absolute text-gray-400"><Mail size={40} /></div>
        <div className="absolute text-gray-400"><Calendar size={56} /></div>
        <div className="absolute text-gray-400"><MessageCircle size={44} /></div>
        <div className="absolute text-gray-400"><FileText size={60} /></div>
        <div className="absolute text-gray-400"><Database size={48} /></div>
        <div className="absolute text-gray-400"><Users size={52} /></div>
        <div className="absolute text-gray-500 opacity-50"><Slack size={32} /></div>
        <div className="absolute text-gray-500 opacity-50"><Trello size={38} /></div>
        <div className="absolute text-gray-500 opacity-50"><Mail size={28} /></div>
      </div>

      <div className="z-10 text-center text-[#050505]">
        <h1 ref={logoRef} className="text-[12vw] md:text-[15vw] leading-[0.8] font-bold tracking-tighter uppercase select-none will-change-[letter-spacing,opacity]">
          ZUWOS
        </h1>

        <div ref={ctaRef} className="mt-8 flex flex-col items-center space-y-8">
          <div className="relative bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-2xl backdrop-saturate-150 rounded-3xl px-8 py-6 border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] ring-1 ring-white/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none" />
            <p className="relative z-10 text-xl md:text-3xl tracking-[0.05em] font-medium max-w-4xl mx-auto text-[#050505] leading-relaxed mix-blend-color-burn">
              The Unified Workplace, Not Refined but <br className="hidden md:block" />
              <span className="font-bold">Made for Gen Zs</span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 opacity-80 text-[#050505]">
            <span className="text-sm font-mono uppercase tracking-widest border border-[#050505] px-3 py-1 rounded-full flex items-center gap-2">
              Made in India
            </span>
            <span className="text-xs font-mono uppercase tracking-widest">
              One Platform. 10+ Tools Replaced.
            </span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              ref={magneticBtnRef}
              onClick={handleScrollToContent}
              onMouseEnter={() => {
                soundEngine.init();
                soundEngine.playHover();
              }}
              className="group relative px-12 py-6 bg-transparent border-[1.5px] border-[#050505] text-[#050505] rounded-full uppercase tracking-[0.2em] text-xs md:text-sm font-black overflow-hidden transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-sm hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-4 transition-colors duration-500 group-hover:text-[#FFFFFF]">
                Gain Complete Control
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-[#050505] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            </button>
            <div className="flex flex-col items-center gap-1 opacity-40">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
                Join 500+ High-Performance Teams
              </span>
              <div className="h-[1px] w-12 bg-black/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;