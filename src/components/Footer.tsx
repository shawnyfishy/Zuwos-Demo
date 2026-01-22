import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMagnetic } from '../hooks/useMagnetic';
import { soundEngine } from '../services/SoundEngine';

const Footer: React.FC = () => {
  const magneticRef = useMagnetic(0.15); // Subtle magnetic pull

  return (
    <footer className="w-full bg-[#050505] text-[#FFFFFF] py-32 px-4 md:px-12 flex flex-col min-h-screen justify-between">
      <div>
        <div className="flex justify-between items-start border-b border-white/20 pb-8 mb-24">
          <span className="font-mono text-sm">[START DOMINATING]</span>
          <span className="font-mono text-sm text-right">ZUWOS &copy; {new Date().getFullYear()}<br />All Rights Reserved</span>
        </div>

        <h2 className="text-[8vw] md:text-[10vw] leading-[0.9] font-bold tracking-tighter uppercase mb-12">
          Your Workplace.<br />
          Your Data.<br />
          <span className="text-gray-600">All Aligned.</span>
        </h2>
      </div>

      <div className="flex flex-col w-full">
        <div className="mb-12">
          <p className="text-xl font-light opacity-60 max-w-md">
            Don&apos;t let legacy tools slow you down. Join the revolution of the unified workplace OS today.
          </p>
        </div>

        {/* Massive CTA */}
        <Link
          to="/book-demo"
          ref={magneticRef}
          onMouseEnter={() => {
            soundEngine.init();
            soundEngine.playHover();
          }}
          onClick={() => soundEngine.playClick()}
          className="group relative flex items-center justify-between w-full border-t border-white/20 pt-12 mt-12 hover:border-white transition-colors duration-500"
        >
          <span className="text-[10vw] md:text-[14vw] font-bold tracking-tighter leading-none group-hover:italic transition-all duration-500 text-white">
            BOOK DEMO
          </span>

          {/* Reveal Button */}
          <div className="hidden md:flex bg-white text-black rounded-full p-8 md:p-12 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 -translate-x-20 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] items-center justify-center">
            <ArrowUpRight size={64} strokeWidth={1.5} />
          </div>
          {/* Mobile Arrow (Always visible) */}
          <div className="md:hidden text-white">
            <ArrowUpRight size={48} />
          </div>
        </Link>

        <div className="mt-24 flex gap-8 font-mono text-sm opacity-50">
          <a href="#" className="hover:opacity-100 hover:underline">LINKEDIN</a>
          <a href="#" className="hover:opacity-100 hover:underline">TWITTER</a>
          <a href="#" className="hover:opacity-100 hover:underline">INSTAGRAM</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;