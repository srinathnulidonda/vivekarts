// hooks/useScrollReveal.ts
'use client';

import { useEffect } from 'react';

export const useScrollReveal = () => {
    useEffect(() => {
        // Only run on client side
        if (typeof window === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        // Optionally unobserve after animation
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is in view
            }
        );

        // Observe all reveal elements
        const elements = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};