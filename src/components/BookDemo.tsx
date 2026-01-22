import React, { useLayoutEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { LiquidMetal, liquidMetalPresets } from '@paper-design/shaders-react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const BookDemo: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(containerRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.2
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 z-10 bg-white"
        >
            {/* Liquid Metal Background (Consistent Look) */}
            <LiquidMetal
                {...liquidMetalPresets[2]}
                colorBack="#FFFFFF"
                colorTint="#E5E5E5"
                style={{ position: "absolute", inset: 0, zIndex: -10 }}
            />

            <div ref={containerRef} className="z-10 w-full max-w-md opacity-100">
                <a href="/" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-[#050505] opacity-60 hover:opacity-100 mb-12 transition-opacity">
                    <ArrowLeft size={16} /> Back to Home
                </a>

                <div className="bg-white/30 backdrop-blur-2xl backdrop-saturate-150 rounded-3xl p-8 border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] ring-1 ring-white/50">
                    <h2 className="text-3xl font-bold tracking-tighter mb-2 text-[#050505]">Book a Demo</h2>
                    <p className="text-sm opacity-60 mb-8 text-[#050505]">See how ZUWOS works for your team.</p>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-xs font-mono uppercase tracking-widest mb-2 text-[#050505]">Name</label>
                            <input
                                type="text"
                                className="w-full bg-white/50 border-b border-[#050505]/20 focus:border-[#050505] outline-none py-2 text-[#050505] placeholder-[#050505]/30 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono uppercase tracking-widest mb-2 text-[#050505]">Email</label>
                            <input
                                type="email"
                                className="w-full bg-white/50 border-b border-[#050505]/20 focus:border-[#050505] outline-none py-2 text-[#050505] placeholder-[#050505]/30 transition-colors"
                                placeholder="john@company.com"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono uppercase tracking-widest mb-2 text-[#050505]">Phone Number</label>
                            <input
                                type="tel"
                                className="w-full bg-white/50 border-b border-[#050505]/20 focus:border-[#050505] outline-none py-2 text-[#050505] placeholder-[#050505]/30 transition-colors"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>

                        <button className="w-full bg-[#050505] text-white font-mono uppercase tracking-widest text-xs py-4 rounded-full hover:bg-black transition-colors mt-4">
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </motion.section>
    );
};

export default BookDemo;
