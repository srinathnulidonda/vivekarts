// components/Gallery.tsx
'use client';

import { useState, useMemo } from 'react';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';
import Button from './common/Button';
import { galleryItems } from '@/data/gallery';
import { useLightbox } from '@/hooks/useLightbox';
import Lightbox from './Lightbox';

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('all');
    const { isOpen, currentIndex, open, close, next, prev, currentItem } = useLightbox(galleryItems);

    const filteredItems = useMemo(() =>
        activeFilter === 'all'
            ? galleryItems
            : galleryItems.filter(item => item.category === activeFilter),
        [activeFilter]
    );

    const filters = [
        { key: 'all', label: 'All' },
        { key: 'portrait', label: 'Portraits' },
        { key: 'couple', label: 'Couples' },
        { key: 'family', label: 'Families' },
        { key: 'pet', label: 'Pets' },
        { key: 'memorial', label: 'Memorial' },
    ];

    return (
        <>
            <section className="gallery-section" id="gallery">
                <Container>
                    <div className="gallery-header reveal">
                        <SectionHeader
                            eyebrow="Our Work"
                            title="Portrait "
                            titleEm="Gallery"
                        />
                        <div className="gallery-filters">
                            {filters.map(filter => (
                                <button
                                    key={filter.key}
                                    className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(filter.key)}
                                    aria-pressed={activeFilter === filter.key}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </Container>

                <div className="gallery-grid-wrapper">
                    <Container>
                        <div className="gallery-grid">
                            {galleryItems.map((item, index) => {
                                const isVisible = activeFilter === 'all' || item.category === activeFilter;
                                return (
                                    <div
                                        key={item.id}
                                        className={`gallery-item reveal ${isVisible ? 'visible' : 'hidden'}`}
                                        data-cat={item.category}
                                        onClick={() => isVisible && open(index)}
                                        style={{
                                            animationDelay: `${index * 0.05}s`
                                        }}
                                    >
                                        <div className={`gallery-art ${item.gradientClass}`} style={{ minHeight: item.minHeight }}></div>
                                        <div className="gallery-overlay">
                                            <div className="gallery-info">
                                                <div className="gallery-cat">{item.category}</div>
                                                <div className="gallery-name">{item.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                </div>

                <Container>
                    <div className="gallery-footer reveal">
                        <p className="gallery-tagline">Portraits That Last a Lifetime</p>
                        <div className="gallery-cta">
                            <Button
                                href="https://www.instagram.com/vivek_artline"
                                variant="outline"
                                icon="arrow-right"
                                external
                            >
                                More on Instagram
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {isOpen && <Lightbox {...{ close, next, prev, currentItem }} />}

            <style jsx>{`
                .gallery-section {
                    padding: var(--space-section) 0 var(--space-12);
                    background: var(--parchment);
                }

                .gallery-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: var(--space-6);
                    flex-wrap: wrap;
                    margin-bottom: var(--space-8);
                }

                .gallery-header :global(.section-header) {
                    margin-bottom: 0;
                }

                .gallery-filters {
                    display: flex;
                    gap: 1.75rem;
                    flex-wrap: nowrap;
                    align-items: center;
                }

                .filter-btn {
                    font-size: var(--text-xs);
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    border: none;
                    background: transparent;
                    color: var(--text-tertiary);
                    padding: 0;
                    cursor: pointer;
                    font-family: 'Jost', sans-serif;
                    transition: color 0.3s;
                    position: relative;
                    font-weight: 500;
                }

                .filter-btn::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    right: 0;
                    height: 1.5px;
                    background: var(--burgundy);
                    transform: scaleX(0);
                    transition: transform 0.3s var(--ease-out);
                }

                .filter-btn.active, 
                .filter-btn:hover {
                    color: var(--burgundy);
                }

                .filter-btn.active::after {
                    transform: scaleX(1);
                }

                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 10px;
                }

                .gallery-item {
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    background: var(--linen);
                    transition: all 0.5s var(--ease-out);
                }

                .gallery-item.hidden {
                    opacity: 0.12;
                    transform: scale(0.96);
                    pointer-events: none;
                }

                .gallery-item.visible {
                    opacity: 1;
                    transform: scale(1);
                    pointer-events: auto;
                }

                .gallery-item:hover {
                    transform: translateY(-4px);
                }

                .gallery-item:nth-child(1) { grid-column: 1/5; grid-row: 1/3; }
                .gallery-item:nth-child(2) { grid-column: 5/8; grid-row: 1/2; }
                .gallery-item:nth-child(3) { grid-column: 8/13; grid-row: 1/2; }
                .gallery-item:nth-child(4) { grid-column: 5/8; grid-row: 2/3; }
                .gallery-item:nth-child(5) { grid-column: 8/13; grid-row: 2/3; }
                .gallery-item:nth-child(6) { grid-column: 1/4; grid-row: 3/4; }
                .gallery-item:nth-child(7) { grid-column: 4/8; grid-row: 3/5; }
                .gallery-item:nth-child(8) { grid-column: 8/11; grid-row: 3/4; }
                .gallery-item:nth-child(9) { grid-column: 11/13; grid-row: 3/4; }
                .gallery-item:nth-child(10) { grid-column: 1/4; grid-row: 4/5; }
                .gallery-item:nth-child(11) { grid-column: 8/13; grid-row: 4/5; }

                .gallery-art {
                    width: 100%;
                    height: 100%;
                    min-height: 200px;
                    transition: transform 0.7s var(--ease-out);
                }

                .gallery-item:hover .gallery-art {
                    transform: scale(1.05);
                }

                .gallery-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(28, 24, 20, 0.85) 0%, rgba(28, 24, 20, 0.45) 35%, transparent 65%);
                    opacity: 0;
                    transition: opacity 0.4s;
                    display: flex;
                    align-items: flex-end;
                    padding: 1.25rem;
                }

                .gallery-item:hover .gallery-overlay {
                    opacity: 1;
                }

                .gallery-cat {
                    font-size: 0.625rem;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: var(--burgundy);
                    margin-bottom: 0.25rem;
                    opacity: 0.9;
                }

                .gallery-name {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.05rem;
                    color: var(--parchment);
                    font-weight: 500;
                }

                .gallery-footer {
                    padding: var(--space-8) 0 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-top: 1px solid var(--border-subtle);
                    margin-top: var(--space-8);
                    gap: var(--space-6);
                }

                .gallery-tagline {
                    font-family: 'Cormorant Garamond', serif;
                    font-style: italic;
                    font-size: 1.375rem;
                    font-weight: 500;
                    color: var(--burgundy);
                    margin: 0;
                    line-height: 1.3;
                }

                .gallery-cta {
                    flex-shrink: 0;
                }

                @media(max-width: 1100px) {
                    .gallery-grid {
                        grid-template-columns: repeat(6, 1fr);
                    }
                    .gallery-item:nth-child(1) { grid-column: 1/4; grid-row: 1/3; }
                    .gallery-item:nth-child(2) { grid-column: 4/7; grid-row: 1/2; }
                    .gallery-item:nth-child(3) { grid-column: 4/7; grid-row: 2/3; }
                    .gallery-item:nth-child(4) { grid-column: 1/3; grid-row: 3/4; }
                    .gallery-item:nth-child(5) { grid-column: 3/5; grid-row: 3/4; }
                    .gallery-item:nth-child(6) { grid-column: 5/7; grid-row: 3/4; }
                    .gallery-item:nth-child(7) { grid-column: 1/4; grid-row: 4/5; }
                    .gallery-item:nth-child(8) { grid-column: 4/7; grid-row: 4/5; }
                    .gallery-item:nth-child(9) { grid-column: 1/3; grid-row: 5/6; }
                    .gallery-item:nth-child(10) { grid-column: 3/5; grid-row: 5/6; }
                    .gallery-item:nth-child(11) { grid-column: 5/7; grid-row: 5/6; }
                }

                @media(max-width: 900px) {
                    .gallery-header {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .gallery-filters {
                        width: 100%;
                        overflow-x: auto;
                        flex-wrap: nowrap;
                        gap: 1.25rem;
                        padding-bottom: 2px;
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: none;
                    }
                    .gallery-filters::-webkit-scrollbar {
                        display: none;
                    }
                    .filter-btn {
                        flex: 0 0 auto;
                        white-space: nowrap;
                    }
                    .gallery-footer {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-5);
                    }
                }

                @media(max-width: 768px) {
                    .gallery-section {
                        padding: var(--space-section-mobile) 0 var(--space-10);
                    }
                }

                @media(max-width: 600px) {
                    .gallery-grid {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 8px;
                    }
                    .gallery-item:nth-child(1) { grid-column: 1/3 !important; grid-row: 1/2 !important; }
                    .gallery-item:nth-child(2) { grid-column: 1/2 !important; grid-row: 2/3 !important; }
                    .gallery-item:nth-child(3) { grid-column: 2/3 !important; grid-row: 2/3 !important; }
                    .gallery-item:nth-child(4) { grid-column: 1/2 !important; grid-row: 3/4 !important; }
                    .gallery-item:nth-child(5) { grid-column: 2/3 !important; grid-row: 3/4 !important; }
                    .gallery-item:nth-child(6) { grid-column: 1/3 !important; grid-row: 4/5 !important; }
                    .gallery-item:nth-child(7) { grid-column: 1/2 !important; grid-row: 5/6 !important; }
                    .gallery-item:nth-child(8) { grid-column: 2/3 !important; grid-row: 5/6 !important; }
                    .gallery-item:nth-child(9) { grid-column: 1/3 !important; grid-row: 6/7 !important; }
                    .gallery-item:nth-child(10) { grid-column: 1/2 !important; grid-row: 7/8 !important; }
                    .gallery-item:nth-child(11) { grid-column: 2/3 !important; grid-row: 7/8 !important; }
                    .gallery-art {
                        min-height: 160px !important;
                    }

                    .gallery-footer {
                        padding-top: var(--space-6);
                        margin-top: var(--space-6);
                        gap: var(--space-4);
                    }

                    .gallery-tagline {
                        font-size: 1.125rem;
                    }

                    .gallery-cta {
                        width: 100%;
                    }

                    .gallery-cta :global(a) {
                        width: 100%;
                        min-height: 48px;
                        justify-content: center;
                    }
                }

                @media(max-width: 480px) {
                    .gallery-filters {
                        gap: 1rem;
                    }
                    .filter-btn {
                        font-size: 0.6875rem;
                    }
                }
            `}</style>
        </>
    );
}