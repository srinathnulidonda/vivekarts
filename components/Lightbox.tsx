//components/Lightbox.tsx
'use client';

import React from 'react';
import { GalleryItem } from '@/types';

interface Props {
    close: () => void;
    next: () => void;
    prev: () => void;
    currentItem: GalleryItem | undefined;
}

export default function Lightbox({ close, next, prev, currentItem }: Props): React.ReactNode {
    if (!currentItem) return null;
    return (
        <>
            <div id="lb" className="open" onClick={close}>
                <button id="lb-close" onClick={close}>
                    <i className="bi bi-x-lg"></i>
                </button>
                <button id="lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>
                    <i className="bi bi-chevron-left"></i>
                </button>
                <div id="lb-content" onClick={(e) => e.stopPropagation()}>
                    <div className={currentItem.gradientClass} style={{ width: '340px', height: '440px', maxWidth: '90vw', maxHeight: '80vh' }}></div>
                </div>
                <button id="lb-next" onClick={(e) => { e.stopPropagation(); next(); }}>
                    <i className="bi bi-chevron-right"></i>
                </button>
                <div id="lb-cap">
                    <div className="lc-name">{currentItem.name}</div>
                    <div className="lc-cat">{currentItem.category}</div>
                </div>
            </div>

            <style jsx>{`
                /*lightbox*/
                #lb {
                    position: fixed;
                    inset: 0;
                    z-index: 900;
                    background: rgba(28, 24, 20, 0.96);
                    backdrop-filter: blur(12px);
                    display: none;
                    align-items: center;
                    justify-content: center;
                }

                #lb.open {
                    display: flex;
                }

                #lb-close {
                    position: absolute;
                    top: var(--space-6);
                    right: var(--space-6);
                    background: rgba(240, 232, 220, 0.1);
                    border: 1px solid rgba(240, 232, 220, 0.2);
                    border-radius: 50%;
                    width: 44px;
                    height: 44px;
                    color: rgba(240, 232, 220, 0.7);
                    font-size: 1.25rem;
                    cursor: pointer;
                    transition: all 0.3s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                #lb-close:hover {
                    background: var(--parchment);
                    color: var(--charcoal);
                }

                #lb-prev, #lb-next {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(240, 232, 220, 0.08);
                    border: 1px solid rgba(240, 232, 220, 0.15);
                    border-radius: 4px;
                    color: rgba(240, 232, 220, 0.7);
                    width: 48px;
                    height: 48px;
                    cursor: pointer;
                    transition: all 0.3s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.125rem;
                }

                #lb-prev {
                    left: var(--space-6);
                }

                #lb-next {
                    right: var(--space-6);
                }

                #lb-prev:hover, #lb-next:hover {
                    background: rgba(240, 232, 220, 0.2);
                    color: var(--parchment);
                }

                #lb-content {
                    max-width: 90vw;
                    max-height: 85vh;
                }

                #lb-cap {
                    position: absolute;
                    bottom: var(--space-6);
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                }

                .lc-name {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.25rem;
                    color: var(--parchment);
                    font-weight: 500;
                }

                .lc-cat {
                    font-size: 0.625rem;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--sienna);
                    margin-top: var(--space-1);
                }
            `}</style>
        </>
    );
}