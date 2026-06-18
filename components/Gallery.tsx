//components/Gallery.tsx

'use client';

import { useState } from 'react';
import { galleryItems } from '@/data/gallery';
import { useLightbox } from '@/hooks/useLightbox';
import Lightbox from './Lightbox';

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('all');
    const { isOpen, currentIndex, open, close, next, prev, currentItem } = useLightbox(galleryItems);

    const filteredItems = activeFilter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    return (
        <>
            <section className="gallery-sec" id="gallery">
                <div className="gal-header reveal">
                    <div>
                        <div className="eyebrow">Curated Works</div>
                        <h2 className="sec-title">The <em>Portfolio</em></h2>
                    </div>
                    <div className="gal-filters">
                        {['all', 'portrait', 'spiritual', 'glass', 'painting', 'custom'].map(filter => (
                            <button
                                key={filter}
                                className={`f-btn ${activeFilter === filter ? 'on' : ''}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="gal-editorial">
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="ge-item reveal"
                            data-cat={item.category}
                            onClick={() => open(index)}
                            style={{
                                opacity: activeFilter === 'all' || item.category === activeFilter ? 1 : 0.12,
                                transform: activeFilter === 'all' || item.category === activeFilter ? '' : 'scale(.96)',
                                pointerEvents: activeFilter === 'all' || item.category === activeFilter ? 'auto' : 'none'
                            }}
                        >
                            <div className={`ge-art ${item.gradientClass}`} style={{ minHeight: item.minHeight }}></div>
                            <div className="ge-overlay">
                                <div>
                                    <div className="ge-cat">{item.category}</div>
                                    <div className="ge-name">{item.name}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gal-cta-row reveal">
                    <span className="gal-count">500+ Artworks Delivered Across India</span>
                    <a href="https://www.instagram.com/vivek_artline" target="_blank" className="btn-outline">
                        Full Portfolio <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </section>

            {isOpen && <Lightbox {...{ close, next, prev, currentItem }} />}

            <style jsx>{`
                /*gallery*/
                .gallery-sec {
                    padding: var(--space-16) 0 var(--space-12);
                    background: var(--parchment);
                }

                .gal-header {
                    padding: 0 max(6vw, calc((100% - var(--max-width)) / 2)) var(--space-6);
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: var(--space-6);
                    flex-wrap: wrap;
                }

                .gal-header :global(.sec-title) {
                    margin-bottom: 0;
                }

                .gal-filters {
                    display: flex;
                    gap: 1.75rem;
                    flex-wrap: wrap;
                    align-items: center;
                }

                .f-btn {
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

                .f-btn::after {
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

                .f-btn.on, .f-btn:hover {
                    color: var(--burgundy);
                }

                .f-btn.on::after {
                    transform: scaleX(1);
                }

                .gal-editorial {
                    padding: 0 max(6vw, calc((100% - var(--max-width)) / 2));
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 10px;
                }

                .ge-item {
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    background: var(--linen);
                    transition: transform 0.5s var(--ease-out);
                }

                .ge-item:hover {
                    transform: translateY(-4px);
                }

                .ge-item:nth-child(1) {
                    grid-column: 1/5;
                    grid-row: 1/3;
                }

                .ge-item:nth-child(2) {
                    grid-column: 5/8;
                    grid-row: 1/2;
                }

                .ge-item:nth-child(3) {
                    grid-column: 8/13;
                    grid-row: 1/2;
                }

                .ge-item:nth-child(4) {
                    grid-column: 5/8;
                    grid-row: 2/3;
                }

                .ge-item:nth-child(5) {
                    grid-column: 8/13;
                    grid-row: 2/3;
                }

                .ge-item:nth-child(6) {
                    grid-column: 1/4;
                    grid-row: 3/4;
                }

                .ge-item:nth-child(7) {
                    grid-column: 4/8;
                    grid-row: 3/5;
                }

                .ge-item:nth-child(8) {
                    grid-column: 8/11;
                    grid-row: 3/4;
                }

                .ge-item:nth-child(9) {
                    grid-column: 11/13;
                    grid-row: 3/4;
                }

                .ge-item:nth-child(10) {
                    grid-column: 1/4;
                    grid-row: 4/5;
                }

                .ge-item:nth-child(11) {
                    grid-column: 8/13;
                    grid-row: 4/5;
                }

                .ge-art {
                    width: 100%;
                    height: 100%;
                    min-height: 200px;
                    display: block;
                    transition: transform 0.7s var(--ease-out);
                }

                .ge-item:hover .ge-art {
                    transform: scale(1.05);
                }

                .ge-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(28, 24, 20, 0.85) 0%, rgba(28, 24, 20, 0.45) 35%, transparent 65%);
                    opacity: 0;
                    transition: opacity 0.4s;
                    display: flex;
                    align-items: flex-end;
                    padding: 1.25rem;
                }

                .ge-item:hover .ge-overlay {
                    opacity: 1;
                }

                .ge-cat {
                    font-size: 0.625rem;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: var(--burgundy);
                    margin-bottom: 0.25rem;
                    opacity: 0.9;
                }

                .ge-name {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.05rem;
                    color: var(--parchment);
                    font-weight: 500;
                }

                .gal-cta-row {
                    padding: var(--space-8) max(6vw, calc((100% - var(--max-width)) / 2)) 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-top: 1px solid var(--border-subtle);
                    margin-top: var(--space-6);
                    flex-wrap: wrap;
                    gap: var(--space-4);
                }

                .gal-count {
                    font-size: var(--text-xs);
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--text-tertiary);
                    font-weight: 500;
                }

                .btn-outline {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: var(--text-xs);
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: var(--burgundy);
                    text-decoration: none;
                    border: 1.5px solid var(--border-medium);
                    padding: 0.65rem 1.5rem;
                    transition: all 0.35s var(--ease-out);
                    font-weight: 600;
                    border-radius: 4px;
                }

                .btn-outline:hover {
                    background: var(--burgundy);
                    color: var(--parchment);
                    border-color: var(--burgundy);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px var(--shadow-warm-lg);
                }

                .btn-outline :global(i) {
                    transition: transform 0.3s;
                }

                .btn-outline:hover :global(i) {
                    transform: translateX(4px);
                }

                /*responsive*/
                @media(max-width:1100px) {
                    .gal-editorial {
                        grid-template-columns: repeat(6, 1fr);
                    }
                    .ge-item:nth-child(1) {
                        grid-column: 1/4;
                        grid-row: 1/3;
                    }
                    .ge-item:nth-child(2) {
                        grid-column: 4/7;
                        grid-row: 1/2;
                    }
                    .ge-item:nth-child(3) {
                        grid-column: 4/7;
                        grid-row: 2/3;
                    }
                    .ge-item:nth-child(4) {
                        grid-column: 1/3;
                        grid-row: 3/4;
                    }
                    .ge-item:nth-child(5) {
                        grid-column: 3/5;
                        grid-row: 3/4;
                    }
                    .ge-item:nth-child(6) {
                        grid-column: 5/7;
                        grid-row: 3/4;
                    }
                    .ge-item:nth-child(7) {
                        grid-column: 1/4;
                        grid-row: 4/5;
                    }
                    .ge-item:nth-child(8) {
                        grid-column: 4/7;
                        grid-row: 4/5;
                    }
                    .ge-item:nth-child(9) {
                        grid-column: 1/3;
                        grid-row: 5/6;
                    }
                    .ge-item:nth-child(10) {
                        grid-column: 3/5;
                        grid-row: 5/6;
                    }
                    .ge-item:nth-child(11) {
                        grid-column: 5/7;
                        grid-row: 5/6;
                    }
                }

                @media(max-width:900px) {
                    .gal-header {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .gal-cta-row {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-4);
                    }
                }

                @media(max-width:600px) {
                    .gal-editorial {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 8px;
                    }
                    .ge-item:nth-child(1) {
                        grid-column: 1/3 !important;
                        grid-row: 1/2 !important;
                    }
                    .ge-item:nth-child(2) {
                        grid-column: 1/2 !important;
                        grid-row: 2/3 !important;
                    }
                    .ge-item:nth-child(3) {
                        grid-column: 2/3 !important;
                        grid-row: 2/3 !important;
                    }
                    .ge-item:nth-child(4) {
                        grid-column: 1/2 !important;
                        grid-row: 3/4 !important;
                    }
                    .ge-item:nth-child(5) {
                        grid-column: 2/3 !important;
                        grid-row: 3/4 !important;
                    }
                    .ge-item:nth-child(6) {
                        grid-column: 1/3 !important;
                        grid-row: 4/5 !important;
                    }
                    .ge-item:nth-child(7) {
                        grid-column: 1/2 !important;
                        grid-row: 5/6 !important;
                    }
                    .ge-item:nth-child(8) {
                        grid-column: 2/3 !important;
                        grid-row: 5/6 !important;
                    }
                    .ge-item:nth-child(9) {
                        grid-column: 1/3 !important;
                        grid-row: 6/7 !important;
                    }
                    .ge-item:nth-child(10) {
                        grid-column: 1/2 !important;
                        grid-row: 7/8 !important;
                    }
                    .ge-item:nth-child(11) {
                        grid-column: 2/3 !important;
                        grid-row: 7/8 !important;
                    }
                    .ge-art {
                        min-height: 160px !important;
                    }
                }
            `}</style>
        </>
    );
}