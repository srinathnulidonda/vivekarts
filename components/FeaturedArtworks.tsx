// components/FeaturedArtworks.tsx
'use client';

import Image from 'next/image';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';
import { featuredArtworks } from '@/data/featured-artworks';

export default function FeaturedArtworks() {
    return (
        <>
            <section className="featured-section" id="featured">
                <Container>
                    <SectionHeader
                        eyebrow="Featured Works"
                        title="Our Finest Creations"
                        subtitle="A curated selection of our most cherished artworks, each telling a unique story of love, memory, and artistry."
                        centered
                    />

                    <div className="featured-grid">
                        {featuredArtworks.map((artwork, index) => {
                            const sizeClass =
                                index === 0 ? 'large' :
                                    index <= 2 ? 'medium' :
                                        'small';

                            return (
                                <div
                                    key={artwork.title}
                                    className={`featured-item ${sizeClass} reveal`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="artwork-image">
                                        <Image
                                            src={artwork.image}
                                            alt={artwork.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                            style={{ objectFit: 'cover' }}
                                            priority={index === 0}
                                        />
                                    </div>
                                    <div className="artwork-overlay">
                                        <div className="artwork-info">
                                            <span className="artwork-category">{artwork.category}</span>
                                            <h3 className="artwork-title">{artwork.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            <style jsx>{`
                .featured-section {
                    padding: var(--space-section) 0;
                    background: linear-gradient(to bottom, var(--linen) 0%, var(--parchment) 100%);
                    position: relative;
                }

                .featured-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-auto-rows: 200px;
                    gap: 1.5rem;
                }

                .featured-item {
                    position: relative;
                    overflow: hidden;
                    border-radius: 12px;
                    cursor: pointer;
                    box-shadow: 0 8px 32px rgba(28, 24, 20, 0.1);
                    transition: all 0.4s var(--ease-out);
                }

                .featured-item:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 16px 48px rgba(28, 24, 20, 0.2);
                    z-index: 2;
                }

                .featured-item.large {
                    grid-column: span 2;
                    grid-row: span 2;
                }

                .featured-item.medium {
                    grid-column: span 2;
                    grid-row: span 1;
                }

                .featured-item.small {
                    grid-column: span 1;
                    grid-row: span 1;
                }

                .artwork-image {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background: var(--linen);
                }

                .artwork-image :global(img) {
                    transition: transform 0.6s var(--ease-out);
                }

                .featured-item:hover .artwork-image :global(img) {
                    transform: scale(1.1);
                }

                .artwork-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(28, 24, 20, 0.85) 0%, rgba(28, 24, 20, 0.4) 40%, transparent 100%);
                    display: flex;
                    align-items: flex-end;
                    padding: var(--space-6);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                .featured-item:hover .artwork-overlay {
                    opacity: 1;
                }

                .artwork-info {
                    transform: translateY(20px);
                    transition: transform 0.4s var(--ease-out);
                }

                .featured-item:hover .artwork-info {
                    transform: translateY(0);
                }

                .artwork-category {
                    display: inline-block;
                    font-size: var(--text-xs);
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--sienna);
                    background: rgba(184, 92, 42, 0.2);
                    padding: 0.35rem 0.85rem;
                    border-radius: 50px;
                    margin-bottom: var(--space-2);
                    backdrop-filter: blur(8px);
                }

                .artwork-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: clamp(1.25rem, 2vw, 1.75rem);
                    font-weight: 600;
                    color: white;
                    letter-spacing: -0.01em;
                    line-height: 1.3;
                }

                @media (max-width: 1024px) {
                    .featured-grid {
                        grid-template-columns: repeat(3, 1fr);
                        grid-auto-rows: 180px;
                    }

                    .featured-item.large {
                        grid-column: span 2;
                        grid-row: span 2;
                    }

                    .featured-item.medium {
                        grid-column: span 1;
                        grid-row: span 1;
                    }
                }

                @media (max-width: 768px) {
                    .featured-section {
                        padding: var(--space-section-mobile) 0;
                    }

                    .featured-grid {
                        grid-template-columns: repeat(2, 1fr);
                        grid-auto-rows: 160px;
                        gap: 1rem;
                    }

                    .featured-item.large {
                        grid-column: span 2;
                        grid-row: span 2;
                    }

                    .featured-item.medium,
                    .featured-item.small {
                        grid-column: span 1;
                        grid-row: span 1;
                    }

                    .artwork-overlay {
                        padding: var(--space-4);
                    }
                }

                @media (max-width: 480px) {
                    .featured-grid {
                        grid-template-columns: 1fr;
                        grid-auto-rows: 280px;
                    }

                    .featured-item.large,
                    .featured-item.medium,
                    .featured-item.small {
                        grid-column: span 1;
                        grid-row: span 1;
                    }
                }
            `}</style>
        </>
    );
}