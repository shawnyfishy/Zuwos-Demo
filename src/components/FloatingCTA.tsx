import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { soundEngine } from '../services/SoundEngine';
import { useMagnetic } from '../hooks/useMagnetic';

const FloatingCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const magneticRef = useMagnetic(0.2);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.8;
            setIsVisible(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        soundEngine.playClick();
        navigate('/book-demo');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    ref={magneticRef}
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClick}
                    onMouseEnter={() => {
                        soundEngine.init();
                        soundEngine.playHover();
                    }}
                    className="fixed bottom-8 right-8 z-[100] group flex items-center justify-center bg-white dark:bg-black text-black dark:text-white border border-black/10 dark:border-white/20 w-12 h-12 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300"
                    title="Book Demo"
                >
                    <ArrowUpRight size={20} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
