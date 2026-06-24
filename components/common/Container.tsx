// components/common/Container.tsx
'use client';

import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
    return (
        <>
            <div className={`container ${className}`}>
                {children}
            </div>
            <style jsx>{`
                .container {
                    max-width: 1600px;
                    margin: 0 auto;
                    padding: 0 clamp(1.5rem, 5vw, 4rem);
                    width: 100%;
                }
            `}</style>
        </>
    );
}