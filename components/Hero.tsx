// components/Hero.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { usePolaroidTilt } from '@/hooks/usePolaroidTilt';
import { CONTACT } from '@/lib/constants';

export default function Hero() {
    usePolaroidTilt();

    const polaroids = [
        { src: '/assets/1.jpg', label: 'Couple Portrait', alt: 'Couple Portrait Artwork' },
        { src: '/assets/2.jpg', label: 'Pet Portrait', alt: 'Pet Portrait Artwork' },
        { src: '/assets/3.jpg', label: 'Memorial Art', alt: 'Memorial Portrait Artwork' }
    ];

    return (
        <>
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-eyebrow">Vivek Artline</div>
                        <h1 className="hero-title">
                            Where <em>Memories</em> Take Shape
                        </h1>
                        <p className="hero-tagline">
                            Hand-Drawn Portraits That Preserve Your Most Precious Memories
                        </p>
                        <p className="hero-subtitle">
                            Custom Pencil Portraits • Couple Sketches • Pet Portraits • Memorial Artworks
                        </p>
                        <div className="hero-buttons">
                            <a
                                href="https://www.instagram.com/your_handle/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                <i className="bi bi-instagram"></i> Order Now
                            </a>
                            <a href="#gallery" className="btn-secondary">
                                View Portfolio
                                <span className="play-icon">
                                    <i className="bi bi-arrow-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="polaroid-stack" id="polStack">
                            {polaroids.map((polaroid, index) => (
                                <div className="polaroid" key={index}>
                                    <div className="polaroid-image">
                                        <Image
                                            src={polaroid.src}
                                            alt={polaroid.alt}
                                            width={300}
                                            height={400}
                                            priority={index === 0}
                                        />
                                    </div>
                                    <div className="polaroid-label">{polaroid.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

                <style jsx>{`
                    .hero {
                        position: relative;
                        min-height: 100vh;
                        background: var(--parchment);
                        overflow: hidden;
                    }

                    .hero::before,
                    .hero::after {
                        content: '';
                        position: absolute;
                        border-radius: 50%;
                        filter: blur(60px);
                        pointer-events: none;
                    }

                    .hero::before {
                        top: -20%;
                        left: -10%;
                        width: 600px;
                        height: 600px;
                        background: radial-gradient(ellipse at center, rgba(125, 37, 53, 0.06) 0%, rgba(125, 37, 53, 0.03) 35%, transparent 70%);
                        animation: float 20s ease-in-out infinite;
                    }

                    .hero::after {
                        bottom: -15%;
                        right: -8%;
                        width: 500px;
                        height: 500px;
                        background: radial-gradient(ellipse at center, rgba(184, 92, 42, 0.08) 0%, rgba(184, 92, 42, 0.04) 40%, transparent 75%);
                        animation: float 25s ease-in-out infinite reverse;
                    }

                    .hero-container {
                        max-width: var(--max-width);
                        margin: 0 auto;
                        padding: 0 clamp(1.5rem, 5vw, 4rem);
                        min-height: 100vh;
                        display: grid;
                        grid-template-columns: 1.1fr 0.9fr;
                        align-items: center;
                        position: relative;
                        z-index: 2;
                    }

                    .hero-content {
                        padding: 10rem 3vw 6rem 0;
                    }

                    .hero-eyebrow {
                        font-size: var(--text-xs);
                        letter-spacing: 0.24em;
                        text-transform: uppercase;
                        color: var(--burgundy);
                        margin-bottom: var(--space-6);
                        display: flex;
                        align-items: center;
                        gap: 0.75rem;
                        opacity: 0;
                        animation: fadeUp 0.8s 0.3s ease forwards;
                        font-weight: 500;
                    }

                    .hero-eyebrow::before {
                        content: '';
                        width: 32px;
                        height: 1.5px;
                        background: var(--burgundy);
                        opacity: 0.5;
                    }

                    .hero-title {
                        font-family: 'Cormorant Garamond', serif;
                        font-size: clamp(3.25rem, 6vw, 6.5rem);
                        font-weight: 600;
                        line-height: 1.05;
                        color: var(--charcoal);
                        margin-bottom: var(--space-5);
                        opacity: 0;
                        animation: fadeUp 0.9s 0.45s ease forwards;
                        letter-spacing: -0.02em;
                    }

                    .hero-title em {
                        color: var(--burgundy);
                        font-style: italic;
                        font-weight: 600;
                    }

                    .hero-tagline {
                        font-family: 'Cormorant Garamond', serif;
                        font-style: italic;
                        font-size: clamp(1.1rem, 1.6vw, 1.4rem);
                        font-weight: 500;
                        color: var(--burgundy);
                        margin-bottom: var(--space-4);
                        letter-spacing: 0.01em;
                        opacity: 0;
                        animation: fadeUp 0.9s 0.55s ease forwards;
                    }

                    .hero-subtitle {
                        font-size: var(--text-base);
                        line-height: 1.8;
                        color: var(--text-secondary);
                        max-width: 460px;
                        margin-bottom: var(--space-8);
                        font-weight: 400;
                        opacity: 0;
                        animation: fadeUp 0.9s 0.68s ease forwards;
                    }

                    .hero-buttons {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                        flex-wrap: wrap;
                        opacity: 0;
                        animation: fadeUp 0.9s 0.82s ease forwards;
                    }

                    .btn-primary {
                        background: var(--sienna);
                        color: var(--parchment);
                        font-size: var(--text-xs);
                        letter-spacing: 0.12em;
                        text-transform: uppercase;
                        padding: 0.9rem 2rem;
                        text-decoration: none;
                        font-weight: 600;
                        display: inline-flex;
                        align-items: center;
                        gap: 0.5rem;
                        transition: all 0.35s var(--ease-out);
                        border-radius: 50px;
                        box-shadow: 0 2px 8px rgba(184, 92, 42, 0.2);
                        font-family: 'Jost', sans-serif;
                    }

                    .btn-primary:hover {
                        background: var(--burgundy);
                        transform: translateY(-2px);
                        box-shadow: 0 8px 24px rgba(125, 37, 53, 0.24);
                    }

                    .btn-secondary {
                        display: inline-flex;
                        align-items: center;
                        gap: 0.85rem;
                        font-size: var(--text-xs);
                        letter-spacing: 0.12em;
                        text-transform: uppercase;
                        color: var(--charcoal);
                        text-decoration: none;
                        font-weight: 600;
                        padding: 0.85rem 0.85rem 0.85rem 1.75rem;
                        border: 1.5px solid var(--border-medium, rgba(28, 24, 20, 0.18));
                        border-radius: 50px;
                        background: var(--parchment, #FEFDFB);
                        box-shadow: 0 2px 8px rgba(28, 24, 20, 0.06);
                        transition: all 0.35s var(--ease-out);
                        font-family: 'Jost', sans-serif;
                    }

                    .btn-secondary:hover {
                        color: var(--burgundy);
                        border-color: var(--burgundy);
                        background: rgba(125, 37, 53, 0.05);
                        transform: translateY(-2px);
                        box-shadow: 0 8px 24px rgba(125, 37, 53, 0.12);
                    }

                    .play-icon {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        background: var(--burgundy);
                        color: var(--parchment);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 0.7rem;
                        transition: all 0.35s var(--ease-out);
                    }

                    .btn-secondary:hover .play-icon {
                        background: var(--sienna);
                        transform: translateX(3px);
                    }

                    .hero-visual {
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 6rem 0;
                    }

                    .polaroid-stack {
                        position: relative;
                        width: 420px;
                        height: 520px;
                        opacity: 0;
                        animation: fadeIn 1s 0.9s ease forwards;
                    }

                    .polaroid {
                        position: absolute;
                        width: 300px;
                        background: #FEFDFB;
                        padding: 14px 14px 50px;
                        box-shadow: 0 12px 48px rgba(28, 24, 20, 0.1), 0 2px 8px rgba(28, 24, 20, 0.06);
                        transition: transform 0.7s var(--ease-out);
                        border: 1px solid rgba(28, 24, 20, 0.04);
                    }

                    .polaroid-image {
                        width: 100%;
                        aspect-ratio: 3/4;
                        overflow: hidden;
                        background: var(--linen);
                    }

                    .polaroid-image :global(img) {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .polaroid-label {
                        font-family: 'Cormorant Garamond', serif;
                        font-size: 0.9rem;
                        font-style: italic;
                        color: var(--text-secondary);
                        text-align: center;
                        margin-top: 0.625rem;
                    }

                    .polaroid:nth-child(1) {
                        transform: rotate(-8deg) translate(-70px, 35px);
                        z-index: 1;
                    }

                    .polaroid:nth-child(2) {
                        transform: rotate(5deg) translate(70px, -35px);
                        z-index: 2;
                    }

                    .polaroid:nth-child(3) {
                        transform: rotate(-1.5deg) translate(0, 0);
                        z-index: 3;
                    }

                    .polaroid:hover {
                        transform: rotate(0deg) translate(0, -16px) scale(1.05) !important;
                        z-index: 10;
                        box-shadow: 0 24px 64px rgba(28, 24, 20, 0.16);
                    }

                    @media (max-width: 1100px) {
                        .polaroid-stack {
                            width: 360px;
                            height: 460px;
                        }

                        .polaroid {
                            width: 260px;
                        }

                        .polaroid:nth-child(1) {
                            transform: rotate(-8deg) translate(-60px, 30px);
                        }

                        .polaroid:nth-child(2) {
                            transform: rotate(5deg) translate(60px, -30px);
                        }
                    }

                    @media (max-width: 900px) {
                        .hero-container {
                            grid-template-columns: 1fr;
                            min-height: auto;
                        }

                        .hero-visual {
                            order: -1;
                            min-height: 62vw;
                            padding: 6.5rem 0 3rem;
                        }

                        .hero-content {
                            padding: 3.5rem 0 5rem;
                        }

                        .polaroid-stack {
                            width: 260px;
                            height: 340px;
                        }

                        .polaroid {
                            width: 190px;
                            padding: 12px 12px 44px;
                        }

                        .polaroid:nth-child(1) {
                            transform: rotate(-8deg) translate(-42px, 24px);
                        }

                        .polaroid:nth-child(2) {
                            transform: rotate(5deg) translate(42px, -20px);
                        }
                    }

                    @media (max-width: 768px) {
                        .hero-container {
                            padding: 0 var(--space-section-x);
                        }
                    }

                    @media (max-width: 640px) {
                        .hero-buttons {
                            flex-wrap: nowrap;
                            gap: clamp(0.4rem, 2.5vw, 0.6rem);
                            width: 100%;
                        }

                        .btn-primary,
                        .btn-secondary {
                            flex: 1 1 0;
                            min-width: 0;
                            justify-center;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            padding: 0.7rem 0.5rem;
                            font-size: clamp(0.5rem, 2.6vw, 0.62rem);
                            letter-spacing: 0.04em;
                        }

                        .btn-primary i,
                        .btn-secondary .play-icon {
                            flex-shrink: 0;
                        }

                        .btn-secondary {
                            gap: 0.4rem;
                            padding: 0.65rem 0.5rem 0.65rem 0.75rem;
                        }

                        .play-icon {
                            width: 18px;
                            height: 18px;
                            font-size: 0.5rem;
                        }
                    }

                    @media (max-width: 600px) {
                        .hero-content {
                            padding: 3rem 0 4rem;
                        }

                        .hero-visual {
                            padding: 5.5rem 0 2.5rem;
                            min-height: 68vw;
                        }

                        .polaroid-stack {
                            width: 220px;
                            height: 290px;
                        }

                        .polaroid {
                            width: 165px;
                        }

                        .polaroid:nth-child(1) {
                            transform: rotate(-8deg) translate(-36px, 20px);
                        }

                        .polaroid:nth-child(2) {
                            transform: rotate(5deg) translate(36px, -16px);
                        }
                    }

                    @media (max-width: 400px) {
                        .hero-visual {
                            padding: 5rem 0 2rem;
                        }

                        .polaroid-stack {
                            width: 195px;
                            height: 260px;
                        }

                        .polaroid {
                            width: 150px;
                        }

                        .polaroid:nth-child(1) {
                            transform: rotate(-7deg) translate(-30px, 18px);
                        }

                        .polaroid:nth-child(2) {
                            transform: rotate(4deg) translate(30px, -14px);
                        }
                    }

                `}</style>
        </>
    );
}