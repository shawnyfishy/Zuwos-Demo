import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

import GridBackground from './GridBackground';
import Hero from './Hero';
import Challengers from './Challengers';
import CostRealization from './CostRealization';
import GenZReality from './GenZReality';
import Promises from './Promises';
import GameChanger from './GameChanger';
import FreedomTrio from './FreedomTrio';
import SocialProof from './SocialProof';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import { soundEngine } from '../services/SoundEngine';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initialize Sound on mount
        soundEngine.init();

        const ctx = gsap.context(() => {
            gsap.from(mainRef.current, {
                opacity: 0,
                duration: 1.5,
                ease: "power2.out"
            });
        });

        // Initialize Lenis for smooth scrolling with "insane" smoothness settings
        const lenis = new Lenis({
            duration: 2.0, // Increased from 1.2 for slower, more fluid feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 0.8, // Lower multiplier for more weight
            touchMultiplier: 1.5,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Dark Mode Triggers using GSAP
        ScrollTrigger.create({
            trigger: "#gen-z-section",
            start: "top center",
            end: "bottom center",
            onEnter: () => {
                document.body.classList.add('dark');
            },
            onLeaveBack: () => {
                document.body.classList.remove('dark');
            }
        });

        // Switch back to Light Mode after Promises
        ScrollTrigger.create({
            trigger: "#game-changer-section",
            start: "top center",
            onEnter: () => {
                document.body.classList.remove('dark');
            },
            onLeaveBack: () => {
                document.body.classList.add('dark');
            }
        });

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach(t => t.kill());
            ctx.revert();
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="antialiased min-h-screen w-full relative"
        >
            <GridBackground />
            {/* ... rest of components */}

            {/* 1. THE HOOK */}
            <Hero />

            {/* 2. THE CHALLENGERS */}
            <Challengers />

            {/* 2.5 COST REALIZATION (New) */}
            <CostRealization />

            {/* 3. GEN Z REALITY (Dark Mode Entry) */}
            <div id="gen-z-section">
                <GenZReality />
            </div>

            {/* 4. THE PROMISES */}
            <Promises />

            {/* 5. THE GAME CHANGER (Light Mode Return) */}
            <div id="game-changer-section">
                <GameChanger />
            </div>

            {/* 6. THE FREEDOM TRIO */}
            <FreedomTrio />

            {/* 6.5 SOCIAL PROOF (New) */}
            <SocialProof />

            {/* 7. CALL TO ACTION & FOOTER */}
            <Footer />
            <FloatingCTA />

            {/* Minimal Scroll to Top Footer */}
            <div className="w-full py-12 bg-black flex flex-col items-center justify-center border-t border-white/10 mt-auto">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1"
                >
                    Take me back to the top
                </button>
            </div>

            {/* Floating Badge (optional aesthetic touch) */}
            <div className="fixed bottom-8 left-8 z-50 mix-blend-difference text-[#FFFFFF] pointer-events-none hidden md:block">
                <div className="font-mono text-xs animate-spin-slow">
                    [ ZUWOS OS v1.0 ]
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
