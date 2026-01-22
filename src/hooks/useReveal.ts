import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type RevealDirection = 'left' | 'right' | 'up';

interface UseRevealOptions {
    direction?: RevealDirection;
    delay?: number;
    duration?: number;
    stagger?: number;
    threshold?: number; // 0 to 1, how much of element needs to be visible
}

export const useReveal = (options: UseRevealOptions = {}) => {
    const elementRef = useRef<HTMLDivElement>(null); // To be attached to the container
    const { direction = 'up', delay = 0, duration = 1.2, stagger = 0.1, threshold = 0.1 } = options;

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Initial State
        let xValue = 0;
        let yValue = 0;

        if (direction === 'left') xValue = -50;
        if (direction === 'right') xValue = 50;
        if (direction === 'up') yValue = 50;

        // Use GSAP context for easy cleanup
        const ctx = gsap.context(() => {
            // Select all direct children or specific marked elements if needed
            // For now, we'll animate the container itself or its children if it has a specific class
            const targets = element.querySelectorAll('.reveal-text, .reveal-item');
            const target = targets.length > 0 ? targets : element;

            gsap.fromTo(
                target,
                {
                    opacity: 0,
                    x: xValue,
                    y: yValue,
                    filter: 'blur(10px)', // Premium blur effect
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    filter: 'blur(0px)',
                    duration: duration,
                    delay: delay,
                    stagger: stagger,
                    ease: 'power3.out', // Smooth ease
                    scrollTrigger: {
                        trigger: element,
                        start: `top ${100 - (threshold * 100)}%`, // e.g., "top 90%"
                        toggleActions: 'play none none reverse', // Replays on re-entry? Or just play? User said "reveal itself". usually play none none none is standard but let's allow reverse for that "alive" feel or stick to play to avoid annoyance. Let's stick to play only for premium feel, prevent jitter.
                        // Actually user said "as I scroll down", often implies once. but re-revealing is nice.
                        // Let's use 'play none none reverse' to keep it fluid.
                    },
                }
            );
        }, elementRef);

        return () => ctx.revert();
    }, [direction, delay, duration, stagger, threshold]);

    return elementRef;
};
