// hooks/useScrollReveal.ts

'use client';

import { useEffect } from 'react';

export const useScrollReveal = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.reveal, .reveal-l, .reveal-r').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
};