// components/Services.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';
import { services } from '@/data/services';

export default function Services() {
    return (
        <>
            <section className="services-section" id="services">
                <Container>
                    <SectionHeader
                        eyebrow="Our Services"
                        title="What Can I "
                        titleEm="Order?"
                        subtitle="Every portrait is hand-drawn with love and attention to detail, capturing the essence of your most treasured memories."
                        centered
                    />

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className="service-card reveal"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="service-image">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                        loading={index < 3 ? 'eager' : 'lazy'}
                                    />
                                    <div className="image-overlay"></div>
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                    <Link href="#contact" className="service-link">
                                        Order Now
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <style jsx>{`
                .services-section {
                    padding: var(--space-section) 0;
                    background: var(--parchment);
                    position: relative;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2rem;
                }

                .service-card {
                    position: relative;
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 24px rgba(28, 24, 20, 0.08);
                    transition: all 0.4s var(--ease-out);
                }

                .service-card:hover {
                    transform: translateY(-12px);
                    box-shadow: 0 16px 48px rgba(28, 24, 20, 0.16);
                }

                .service-image {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 4/3;
                    overflow: hidden;
                    background: var(--linen);
                }

                .service-image :global(img) {
                    transition: transform 0.6s var(--ease-out);
                }

                .service-card:hover .service-image :global(img) {
                    transform: scale(1.08);
                }

                .image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent 0%, rgba(28, 24, 20, 0.3) 100%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                .service-card:hover .image-overlay {
                    opacity: 1;
                }

                .service-content {
                    padding: var(--space-6);
                }

                .service-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: clamp(1.5rem, 2vw, 1.75rem);
                    font-weight: 600;
                    color: var(--charcoal);
                    margin-bottom: var(--space-3);
                    letter-spacing: -0.01em;
                }

                .service-description {
                    font-size: var(--text-sm);
                    line-height: 1.7;
                    color: var(--text-secondary);
                    margin-bottom: var(--space-5);
                }

                .service-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: var(--text-xs);
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: var(--burgundy);
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .service-link:hover {
                    gap: 0.75rem;
                    color: var(--sienna);
                }

                .service-link i {
                    transition: transform 0.3s ease;
                }

                .service-link:hover i {
                    transform: translateX(3px);
                }

                @media (max-width: 768px) {
                    .services-section {
                        padding: var(--space-section-mobile) 0;
                    }

                    .services-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }

                    .service-content {
                        padding: var(--space-5);
                    }
                }
            `}</style>
        </>
    );
}