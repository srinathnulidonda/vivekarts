// components/common/SectionHeader.tsx
'use client';

import type { JSX } from 'react';

interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    titleEm?: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionHeader({
    eyebrow,
    title,
    titleEm,
    subtitle,
    centered = false
}: SectionHeaderProps) {
    return (
        <>
            <div className={`section-header ${centered ? 'centered' : ''}`}>
                <div className="eyebrow">{eyebrow}</div>
                <h2 className="sec-title">
                    {title}
                    {titleEm && <em>{titleEm}</em>}
                </h2>
                {subtitle && <p className="section-subtitle">{subtitle}</p>}
            </div>

            <style jsx>{`
                .section-header {
                    margin-bottom: var(--space-section-header);
                }

                .section-header.centered {
                    text-align: center;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                    margin-bottom: var(--space-section-header);
                }

                .eyebrow {
                    font-size: var(--text-xs);
                    letter-spacing: 0.24em;
                    text-transform: uppercase;
                    color: var(--burgundy);
                    margin-bottom: var(--space-4);
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .centered .eyebrow {
                    justify-content: center;
                }

                .eyebrow::before {
                    content: '';
                    width: 24px;
                    height: 1.5px;
                    background: var(--burgundy);
                    opacity: 0.4;
                }

                .centered .eyebrow::before {
                    display: none;
                }

                .sec-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: clamp(2.5rem, 4.5vw, 4rem);
                    font-weight: 600;
                    line-height: 1.1;
                    color: var(--charcoal);
                    margin-bottom: var(--space-5);
                    letter-spacing: -0.01em;
                }

                .sec-title em {
                    font-style: italic;
                    color: var(--burgundy);
                }

                .section-subtitle {
                    font-size: var(--text-base);
                    line-height: 1.8;
                    color: var(--text-secondary);
                    max-width: 640px;
                }

                .centered .section-subtitle {
                    margin: 0 auto;
                }

                @media (max-width: 768px) {
                    .section-header {
                        margin-bottom: var(--space-10);
                    }

                    .sec-title {
                        font-size: clamp(2rem, 8vw, 2.5rem);
                    }
                }
            `}</style>
        </>
    );
}