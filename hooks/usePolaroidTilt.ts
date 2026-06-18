// hooks/usePolaroidTilt.ts

'use client';

import { useEffect } from 'react';

export const usePolaroidTilt = () => {
    useEffect(() => {
        const stack = document.getElementById('polStack');
        if (!stack) return;

        const bases = [
            [-8, -70, 35],
            [5, 70, -35],
            [-1.5, 0, 0]
        ];

        const handleMouseMove = (e: MouseEvent) => {
            const rect = stack.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
            const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

            const pols = stack.querySelectorAll('.pol');
            pols.forEach((pol, i) => {
                const [baseRotate, baseX, baseY] = bases[i];
                (pol as HTMLElement).style.transform = `rotate(${baseRotate + x * 4}deg) translate(${baseX + x * 18}px, ${baseY + y * 12}px)`;
            });
        };

        const handleMouseLeave = () => {
            const transforms = [
                'rotate(-8deg) translate(-70px, 35px)',
                'rotate(5deg) translate(70px, -35px)',
                'rotate(-1.5deg) translate(0, 0)'
            ];

            const pols = stack.querySelectorAll('.pol');
            pols.forEach((pol, i) => {
                (pol as HTMLElement).style.transform = transforms[i];
            });
        };

        stack.addEventListener('mousemove', handleMouseMove);
        stack.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            stack.removeEventListener('mousemove', handleMouseMove);
            stack.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
};