// hooks/usePolaroidTilt.ts
'use client';

import { useEffect } from 'react';

export const usePolaroidTilt = (): void => {
    useEffect(() => {
        const stack = document.getElementById('polStack');
        if (!stack) return;

        const bases: [number, number, number][] = [
            [-8, -70, 35],
            [5, 70, -35],
            [-1.5, 0, 0]
        ];

        const handleMouseMove = (e: MouseEvent) => {
            const rect = stack.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
            const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

            const pols = stack.querySelectorAll('.pol');
            const limit = Math.min(pols.length, bases.length);
            for (let i = 0; i < limit; i++) {
                const pol = pols[i] as HTMLElement;
                const base = bases[i]!;
                const [baseRotate, baseX, baseY] = base;
                pol.style.transform = `rotate(${baseRotate + x * 4}deg) translate(${baseX + x * 18}px, ${baseY + y * 12}px)`;
            }
        };

        const handleMouseLeave = () => {
            const transforms: string[] = [
                'rotate(-8deg) translate(-70px, 35px)',
                'rotate(5deg) translate(70px, -35px)',
                'rotate(-1.5deg) translate(0, 0)'
            ];

            const pols = stack.querySelectorAll('.pol');
            const limit = Math.min(pols.length, transforms.length);
            for (let i = 0; i < limit; i++) {
                const pol = pols[i] as HTMLElement;
                const transform = transforms[i]!;
                pol.style.transform = transform;
            }
        };

        stack.addEventListener('mousemove', handleMouseMove);
        stack.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            stack.removeEventListener('mousemove', handleMouseMove);
            stack.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
};