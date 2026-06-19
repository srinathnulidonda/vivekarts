// components/CustomerReactions.tsx
'use client';

import Image from 'next/image';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';
import Button from './common/Button';
import { customerReactions } from '@/data/customer-reactions';

export default function CustomerReactions() {
    return (
        <>
            <section className="reactions-section" id="reactions">
                <Container>
                    <SectionHeader
                        eyebrow="Happy Customers"
                        title="Real Reactions, Real Joy"
                        subtitle="See the smiles, tears of joy, and heartfelt moments when our customers receive their custom portraits."
                        centered
                    />

                    <div className="reactions-grid">
                        {customerReactions.map((reaction, index) => (
                            <div
                                key={index}
                                className={`reaction-card ${reaction.type} reveal`}
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="reaction-image">
                                    <Image
                                        src={reaction.image}
                                        alt={reaction.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                    />

                                    <div className="type-badge">
                                        {reaction.type === 'delivered' && <i className="bi bi-box-seam"></i>}
                                        {reaction.type === 'holding' && <i className="bi bi-person-heart"></i>}
                                        {reaction.type === 'story' && <i className="bi bi-instagram"></i>}
                                        {reaction.type === 'whatsapp' && <i className="bi bi-whatsapp"></i>}
                                    </div>
                                </div>

                                {reaction.caption && (
                                    <div className="reaction-caption">
                                        <p className="caption-text">"{reaction.caption}"</p>
                                        {reaction.customer && (
                                            <p className="customer-name">— {reaction.customer}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="reactions-cta">
                        <p className="cta-text">Want to be our next happy customer?</p>
                        <Button href="#contact" variant="primary" icon="arrow-right">
                            Order Your Portrait
                        </Button>
                    </div>
                </Container>
            </section>

            <style jsx>{`
                .reactions-section {
                    padding: var(--space-section) 0;
                    background: var(--parchment);
                    position: relative;
                    overflow: hidden;
                }

                .reactions-section::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 800px;
                    height: 800px;
                    background: radial-gradient(ellipse at center, rgba(125, 37, 53, 0.06) 0%, rgba(125, 37, 53, 0.03) 40%, transparent 70%);
                    filter: blur(100px);
                    pointer-events: none;
                }

                .reactions-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-bottom: var(--space-12);
                }

                .reaction-card {
                    position: relative;
                    background: white;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 8px 32px rgba(28, 24, 20, 0.08);
                    transition: all 0.4s var(--ease-out);
                }

                .reaction-card:hover {
                    transform: translateY(-12px) rotate(-1deg);
                    box-shadow: 0 20px 60px rgba(28, 24, 20, 0.16);
                }

                .reaction-image {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 3/4;
                    overflow: hidden;
                    background: var(--linen);
                }

                .reaction-image :global(img) {
                    transition: transform 0.6s var(--ease-out);
                }

                .reaction-card:hover .reaction-image :global(img) {
                    transform: scale(1.05);
                }

                .type-badge {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(8px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 16px rgba(28, 24, 20, 0.1);
                    z-index: 2;
                }

                .type-badge i {
                    font-size: 1.1rem;
                }

                .reaction-card.delivered .type-badge i {
                    color: var(--sienna);
                }

                .reaction-card.holding .type-badge i {
                    color: var(--burgundy);
                }

                .reaction-card.story .type-badge i {
                    color: #E1306C;
                }

                .reaction-card.whatsapp .type-badge i {
                    color: #25D366;
                }

                .reaction-caption {
                    padding: var(--space-5);
                    background: white;
                }

                .caption-text {
                    font-size: var(--text-sm);
                    font-style: italic;
                    line-height: 1.7;
                    color: var(--text-secondary);
                    margin-bottom: var(--space-2);
                }

                .customer-name {
                    font-size: var(--text-xs);
                    font-weight: 600;
                    color: var(--burgundy);
                    letter-spacing: 0.05em;
                }

                .reactions-cta {
                    text-align: center;
                }

                .cta-text {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: clamp(1.25rem, 2vw, 1.5rem);
                    font-style: italic;
                    color: var(--charcoal);
                    margin-bottom: var(--space-5);
                }

                @media (max-width: 768px) {
                    .reactions-section {
                        padding: var(--space-section-mobile) 0;
                    }

                    .reactions-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                        margin-bottom: var(--space-10);
                    }

                    .reaction-card:hover {
                        transform: translateY(-8px) rotate(0);
                    }

                    .reaction-caption {
                        padding: var(--space-4);
                    }
                }
            `}</style>
        </>
    );
}