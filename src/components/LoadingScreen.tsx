import React, { useLayoutEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate progress counter
            const counter = { val: 0 };
            gsap.to(counter, {
                val: 100,
                duration: 2,
                ease: "power2.inOut",
                onUpdate: () => setProgress(Math.floor(counter.val)),
            });

            // Staggered Text Reveal
            gsap.from(textRef.current?.children || [], {
                y: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                delay: 0.5,
                ease: "power3.out"
            });

            // Exit Animation (Optional hook for parent, but visually handled here)
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden">
            <div className="w-full max-w-sm px-8">

                {/* Minimal Progress Bar Line */}
                <div className="w-full h-[1px] bg-white/10 mb-8 relative overflow-hidden">
                    <div
                        className="absolute inset-y-0 left-0 bg-white transition-all duration-75 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div ref={textRef} className="flex justify-between font-mono text-xs tracking-widest uppercase opacity-80">
                    <span>Loading System</span>
                    <span>{progress}%</span>
                </div>

                <div className="absolute bottom-12 left-0 w-full text-center">
                    <span className="font-mono text-[10px] opacity-30 tracking-[0.2em] animate-pulse">
                        INITIALIZING ZUWOS_OS
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
