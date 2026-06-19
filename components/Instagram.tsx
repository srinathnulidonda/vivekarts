// components/Instagram.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';
import { CONTACT } from '@/lib/constants';

const instagramPosts = [
    { id: 1, image: '/assets/insta-1.jpg', type: 'artwork', alt: 'Finished Portrait' },
    { id: 2, image: '/assets/insta-2.jpg', type: 'video', alt: 'Timelapse Video' },
    { id: 3, image: '/assets/insta-3.jpg', type: 'wip', alt: 'Work in Progress' },
    { id: 4, image: '/assets/insta-4.jpg', type: 'reel', alt: 'Behind the Scenes Reel' },
    { id: 5, image: '/assets/insta-5.jpg', type: 'sketch', alt: 'Sketch Closeup' },
    { id: 6, image: '/assets/insta-6.jpg', type: 'artwork', alt: 'Finished Artwork' },
    { id: 7, image: '/assets/insta-7.jpg', type: 'bts', alt: 'Behind the Scenes' },
    { id: 8, image: '/assets/insta-8.jpg', type: 'video', alt: 'Process Video' },
    { id: 9, image: '/assets/insta-9.jpg', type: 'artwork', alt: 'Pet Portrait' },
];

export default function Instagram() {
    const [hoveredPost, setHoveredPost] = useState<number | null>(null);

    return (
        <>
            <section className="instagram-section" id="instagram">
                <Container>
                    <div className="instagram-header">
                        <SectionHeader
                            eyebrow="Follow Us"
                            title="Follow the Journey Behind Every Portrait"
                            centered
                        />
                        <a
                            href={CONTACT.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="instagram-handle"
                        >
                            <i className="bi bi-instagram"></i>
                            @{CONTACT.instagram}
                        </a>
                    </div>

                    <div className="instagram-grid">
                        {instagramPosts.map((post, index) => (
                            <a
                                key={post.id}
                                href={CONTACT.instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="instagram-post reveal"
                                onMouseEnter={() => setHoveredPost(post.id)}
                                onMouseLeave={() => setHoveredPost(null)}
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="post-image">
                                    <Image
                                        src={post.image}
                                        alt={post.alt}
                                        fill
                                        sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 300px"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>

                                {(post.type === 'video' || post.type === 'reel') && (
                                    <div className="video-badge">
                                        <i className="bi bi-play-circle-fill"></i>
                                    </div>
                                )}

                                <div className={`post-overlay ${hoveredPost === post.id ? 'active' : ''}`}>
                                    <div className="overlay-content">
                                        <i className="bi bi-heart"></i>
                                        <i className="bi bi-chat"></i>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="instagram-cta">
                        <a
                            href={CONTACT.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-instagram"
                        >
                            <i className="bi bi-instagram"></i>
                            Follow @{CONTACT.instagram}
                        </a>
                        <p className="instagram-subtitle">
                            Daily inspiration • Work in progress • Behind the scenes
                        </p>
                    </div>
                </Container>
            </section>

            <style jsx>{`
                .instagram-section {
                    padding: var(--space-section) 0;
                    background: linear-gradient(to bottom, var(--parchment) 0%, var(--linen) 100%);
                    position: relative;
                    overflow: hidden;
                }

                .instagram-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    max-width: 800px;
                    height: 400px;
                    background: radial-gradient(ellipse at center, rgba(184, 92, 42, 0.08) 0%, rgba(184, 92, 42, 0.04) 40%, transparent 70%);
                    filter: blur(80px);
                    pointer-events: none;
                }

                .instagram-header {
                    text-align: center;
                    margin-bottom: var(--space-8);
                }

                .instagram-header :global(.section-header) {
                    margin-bottom: var(--space-4);
                }

                .instagram-handle {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: var(--text-sm);
                    font-weight: 600;
                    color: var(--burgundy);
                    text-decoration: none;
                    transition: all 0.3s ease;
                    padding: 0.5rem 1.25rem;
                    border-radius: 50px;
                    background: rgba(125, 37, 53, 0.06);
                }

                .instagram-handle:hover {
                    background: rgba(125, 37, 53, 0.12);
                    transform: translateY(-2px);
                }

                .instagram-handle i {
                    font-size: 1.2rem;
                }

                .instagram-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    margin-bottom: var(--space-10);
                }

                .instagram-post {
                    position: relative;
                    aspect-ratio: 1;
                    overflow: hidden;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: transform 0.4s var(--ease-out);
                    box-shadow: 0 4px 16px rgba(28, 24, 20, 0.08);
                }

                .instagram-post:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 32px rgba(28, 24, 20, 0.16);
                    z-index: 2;
                }

                .post-image {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background: var(--linen);
                }

                .post-image :global(img) {
                    transition: transform 0.4s var(--ease-out);
                }

                .instagram-post:hover .post-image :global(img) {
                    transform: scale(1.08);
                }

                .video-badge {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    z-index: 2;
                    color: white;
                    font-size: 1.5rem;
                    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
                    pointer-events: none;
                }

                .post-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(125, 37, 53, 0.92) 0%, rgba(184, 92, 42, 0.88) 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.35s ease;
                }

                .post-overlay.active {
                    opacity: 1;
                }

                .overlay-content {
                    display: flex;
                    gap: 2rem;
                    color: white;
                    font-size: 1.8rem;
                }

                .overlay-content i {
                    transition: transform 0.3s ease;
                }

                .post-overlay.active .overlay-content i:hover {
                    transform: scale(1.2);
                }

                .instagram-cta {
                    text-align: center;
                }

                .btn-instagram {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: var(--text-sm);
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: white;
                    text-decoration: none;
                    padding: 1rem 2.5rem;
                    border-radius: 50px;
                    background: linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F56040 100%);
                    box-shadow: 0 8px 24px rgba(225, 48, 108, 0.25);
                    transition: all 0.35s var(--ease-out);
                }

                .btn-instagram:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 12px 32px rgba(225, 48, 108, 0.35);
                }

                .btn-instagram i {
                    font-size: 1.3rem;
                }

                .instagram-subtitle {
                    margin-top: var(--space-4);
                    font-size: var(--text-sm);
                    color: var(--text-secondary);
                    font-style: italic;
                }

                @media (max-width: 900px) {
                    .instagram-grid {
                        gap: 1rem;
                    }
                }

                @media (max-width: 768px) {
                    .instagram-section {
                        padding: var(--space-section-mobile) 0;
                    }

                    .instagram-grid {
                        gap: 0.75rem;
                    }

                    .instagram-post {
                        border-radius: 6px;
                    }

                    .instagram-post:hover {
                        transform: translateY(-4px);
                    }

                    .video-badge {
                        top: 0.5rem;
                        right: 0.5rem;
                        font-size: 1.2rem;
                    }

                    .overlay-content {
                        gap: 1.5rem;
                        font-size: 1.5rem;
                    }

                    .btn-instagram {
                        font-size: 0.8rem;
                        padding: 0.9rem 2rem;
                    }
                }

                @media (max-width: 400px) {
                    .instagram-grid {
                        gap: 0.5rem;
                    }
                }
            `}</style>
        </>
    );
}