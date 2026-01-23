import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { soundEngine } from '../services/SoundEngine';
import { useMagnetic } from '../hooks/useMagnetic';

const FloatingCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const magneticRef = useMagnetic(0.2);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 80% of hero height
            const threshold = window.innerHeight * 0.8;
            setIsVisible(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToFooter = () => {
        soundEngine.playClick();
        const footer = document.getElementById('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    ref={magneticRef}
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleScrollToFooter}
                    onMouseEnter={() => {
                        soundEngine.init();
                        soundEngine.playHover();
                    }}
                    className="fixed bottom-10 right-10 z-[100] group flex items-center gap-4 bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white px-8 py-5 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)]"
                >
                    <span className="text-xs font-black uppercase tracking-[0.2em] group-hover:mr-2 transition-all">
                        Book Demo
                    </span>
                    <div className="bg-black dark:bg-white text-white dark:text-black rounded-full p-2 group-hover:rotate-45 transition-transform duration-500">
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
