import React from 'react';
import { useReveal } from '../hooks/useReveal';

const SocialProof: React.FC = () => {
    const headerReveal = useReveal({ direction: 'up', duration: 1.2 });

    return (
        <section className="py-24 bg-black text-white border-t border-white/10 overflow-hidden">
            <div ref={headerReveal} className="container mx-auto px-4 text-center mb-12">
                <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4">[ Market Validation ]</h3>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                    $166B <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Opportunity</span>
                </h2>
                <p className="mt-4 text-gray-400">Join the leaders moving towards unified workplace OS.</p>
            </div>

            {/* Scrolling Marquee */}
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex space-x-12 items-center">
                    <span className="text-2xl font-bold uppercase opacity-50 px-8">Tech Startups</span>
                    <span className="text-2xl font-bold uppercase opacity-50 px-8">Enterprises</span>
                    <span className="text-2xl font-bold uppercase opacity-50 px-8">Consulting Firms</span>
                    <span className="text-2xl font-bold uppercase opacity-50 px-8">Creative Agencies</span>
                    <span className="text-2xl font-bold uppercase opacity-50 px-8">Healthcare</span>
                    <span className="text-2xl font-bold uppercase opacity-50 px-8">Finance</span>

                    {/* Duplicate for loop */}
                    <span className="text-2xl font-bold uppercase opacity-50 px-8">Tech Startups</span>
                    <span className="text-2xl font-bold uppercase opacity-50 px-8">Enterprises</span>
                    <span className="text-2xl font-bold uppercase opacity-50 px-8">Consulting Firms</span>
                    <span className="text-2xl font-bold uppercase opacity-50 px-8">Creative Agencies</span>
                    <span className="text-2xl font-bold uppercase opacity-50 px-8">Healthcare</span>
                    <span className="text-2xl font-bold uppercase opacity-50 px-8">Finance</span>
                </div>
            </div>

            <style>{`
        .animate-marquee {
            animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        `}</style>
        </section>
    );
};

export default SocialProof;