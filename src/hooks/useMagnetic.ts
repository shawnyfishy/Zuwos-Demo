import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useMagnetic = (strength: number = 0.3) => {
    const ref = useRef<HTMLButtonElement | HTMLAnchorElement | any>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = el.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const x = (clientX - centerX) * strength;
            const y = (clientY - centerY) * strength;

            gsap.to(el, {
                x: x,
                y: y,
                duration: 0.6,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.3)"
            });
        };

        window.addEventListener('mousemove', (e) => {
            // Only track if mouse is somewhat close (e.g. within 100px)
            const { clientX, clientY } = e;
            const { left, top, width, height } = el.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const dist = Math.hypot(clientX - centerX, clientY - centerY);

            if (dist < 150) {
                handleMouseMove(e);
            } else {
                handleMouseLeave();
            }
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [strength]);

    return ref;
};
