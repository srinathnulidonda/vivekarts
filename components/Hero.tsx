//components/Hero.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePolaroidTilt } from '@/hooks/usePolaroidTilt';

export default function Hero() {
    usePolaroidTilt();

    return (
        <>
            <section className="hero">
                <div className="hero-l">
                    <div className="hero-eyebrow">Hyderabad Fine Art Studio</div>
                    <h1 className="hero-title">
                        Every Face<br />Tells a <em>Story.</em><br />We Paint It.
                    </h1>
                    <p className="hero-sub">
                        Museum-quality portraits, spiritual paintings, and custom artworks — created from emotion, crafted with obsessive precision.
                    </p>
                    <div className="hero-btns">
                        <Link href="#gallery" className="btn-primary">
                            <i className="bi bi-grid-3x3-gap"></i> View Gallery
                        </Link>
                        <a href="#" className="btn-secondary">
                            <div className="play-icon"><i className="bi bi-play-fill"></i></div>
                            See Process
                        </a>
                    </div>
                </div>

                <div className="hero-r">
                    <div className="pol-stack" id="polStack">
                        {['Portrait Study', 'Glass Engraving', 'Spiritual Art'].map((label, i) => (
                            <div className="pol" key={i}>
                                <div className="art">
                                    <Image src={`/assets/${i + 1}.jpg`} alt={label} width={300} height={400} />
                                </div>
                                <div className="pol-lbl">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="scroll-hint"></div>
            </section>

            <style jsx>{`
                /* ── Hero ── */
                .hero {
                    position: relative;
                    min-height: 100vh;
                    display: grid;
                    grid-template-columns: 1.1fr 0.9fr;
                    overflow: hidden;
                    background: var(--parchment);
                    max-width: var(--max-width);
                    margin: 0 auto;
                }

                .hero::before {
                    content: '';
                    position: absolute;
                    top: -20%;
                    left: -10%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(ellipse at center, rgba(125, 37, 53, 0.06) 0%, rgba(125, 37, 53, 0.03) 35%, transparent 70%);
                    filter: blur(60px);
                    animation: float 20s ease-in-out infinite;
                    pointer-events: none;
                }

                .hero::after {
                    content: '';
                    position: absolute;
                    bottom: -15%;
                    right: -8%;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(ellipse at center, rgba(184, 92, 42, 0.08) 0%, rgba(184, 92, 42, 0.04) 40%, transparent 75%);
                    filter: blur(70px);
                    animation: float 25s ease-in-out infinite reverse;
                    pointer-events: none;
                }

                .hero-l {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 10rem 3vw 6rem 10vw;
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
                    line-height: 0.95;
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

                .hero-sub {
                    font-size: var(--text-base);
                    line-height: 1.8;
                    color: var(--text-secondary);
                    max-width: 420px;
                    margin-bottom: var(--space-8);
                    font-weight: 400;
                    opacity: 0;
                    animation: fadeUp 0.9s 0.6s ease forwards;
                }

                .hero-btns {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                    opacity: 0;
                    animation: fadeUp 0.9s 0.75s ease forwards;
                }

                .hero-btns :global(.btn-primary) {
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
                    border-radius: 4px;
                    box-shadow: 0 2px 8px rgba(184, 92, 42, 0.2);
                }

                .hero-btns :global(.btn-primary):hover {
                    background: var(--burgundy);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(125, 37, 53, 0.24);
                }

                .btn-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.65rem;
                    font-size: var(--text-xs);
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--text-secondary);
                    text-decoration: none;
                    transition: color 0.3s;
                    font-weight: 500;
                }

                .btn-secondary:hover { color: var(--burgundy); }

                .play-icon {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    border: 1.5px solid var(--border-medium);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.75rem;
                    color: var(--burgundy);
                    transition: all 0.3s var(--ease-out);
                }

                .btn-secondary:hover .play-icon {
                    background: rgba(125, 37, 53, 0.06);
                    transform: scale(1.1);
                }

                .scroll-hint {
                    position: absolute;
                    left: 2.5rem;
                    bottom: 2.5rem;
                    z-index: 3;
                    writing-mode: vertical-rl;
                    font-size: 0.625rem;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: var(--text-tertiary);
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    opacity: 0;
                    animation: fadeIn 1s 1.5s ease forwards;
                }

                .scroll-hint::after {
                    content: '';
                    width: 1px;
                    height: 48px;
                    background: linear-gradient(to bottom, var(--border-medium), transparent);
                }

                /* ── Polaroid stack ── */
                .hero-r {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 6rem 6vw 6rem 2vw;
                }

                .pol-stack {
                    position: relative;
                    width: 420px;
                    height: 520px;
                    opacity: 0;
                    animation: fadeIn 1s 0.9s ease forwards;
                }

                .pol {
                    position: absolute;
                    width: 300px;
                    background: #FEFDFB;
                    padding: 14px 14px 50px;
                    box-shadow: 0 12px 48px rgba(28, 24, 20, 0.1),
                                0 2px 8px rgba(28, 24, 20, 0.06);
                    transition: transform 0.7s var(--ease-out);
                    border: 1px solid rgba(28, 24, 20, 0.04);
                }

                .pol .art {
                    width: 100%;
                    aspect-ratio: 3/4;
                    overflow: hidden;
                    background: var(--linen);
                }

                .pol .art :global(img) {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .pol .pol-lbl {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 0.9rem;
                    font-style: italic;
                    color: var(--text-secondary);
                    text-align: center;
                    margin-top: 0.625rem;
                }

                .pol:nth-child(1) {
                    transform: rotate(-8deg) translate(-70px, 35px);
                    z-index: 1;
                }
                .pol:nth-child(2) {
                    transform: rotate(5deg) translate(70px, -35px);
                    z-index: 2;
                }
                .pol:nth-child(3) {
                    transform: rotate(-1.5deg) translate(0, 0);
                    z-index: 3;
                }

                .pol:hover {
                    transform: rotate(0deg) translate(0, -16px) scale(1.05) !important;
                    z-index: 10;
                    box-shadow: 0 24px 64px rgba(28, 24, 20, 0.16);
                }

                /* ── Responsive ── */

                @media (max-width: 1100px) {
                    .pol-stack { width: 360px; height: 460px; }
                    .pol { width: 260px; }
                    .pol:nth-child(1) { transform: rotate(-8deg) translate(-60px, 30px); }
                    .pol:nth-child(2) { transform: rotate(5deg) translate(60px, -30px); }
                }

                @media (max-width: 900px) {
                    .hero {
                        grid-template-columns: 1fr;
                        min-height: auto;
                    }

                    /* Cards appear above text on mobile */
                    .hero-r {
                        order: -1;
                        min-height: 62vw;
                        /*
                         * KEY FIX: enough top padding so the tallest card
                         * (which can translate -26px upward) clears the navbar (~64px).
                         * 6rem ≈ 96px gives comfortable breathing room.
                         */
                        padding: 6.5rem 6vw 3rem;
                    }

                    .hero-l {
                        padding: 3.5rem 6vw 5rem;
                    }

                    .scroll-hint { display: none; }

                    .pol-stack {
                        width: 260px;
                        height: 340px;
                    }
                    .pol {
                        width: 190px;
                        padding: 12px 12px 44px;
                    }
                    /*
                     * Tighten card translations on mobile so they stay
                     * within the padded hero-r zone and never poke above
                     * the navbar — translate values are proportionally reduced.
                     */
                    .pol:nth-child(1) { transform: rotate(-8deg) translate(-42px, 24px); }
                    .pol:nth-child(2) { transform: rotate(5deg)  translate(42px, -20px); }
                }

                @media (max-width: 600px) {
                    .hero-title { font-size: 2.75rem; }
                    .hero-l { padding: 3rem 5vw 4rem; }
                    .hero-r {
                        padding: 5.5rem 5vw 2.5rem;
                        min-height: 68vw;
                    }
                    .pol-stack { width: 220px; height: 290px; }
                    .pol { width: 165px; }
                    .pol:nth-child(1) { transform: rotate(-8deg) translate(-36px, 20px); }
                    .pol:nth-child(2) { transform: rotate(5deg)  translate(36px, -16px); }
                }

                @media (max-width: 400px) {
                    .hero-title { font-size: 2.25rem; }
                    .hero-r { padding: 5rem 5vw 2rem; }
                    .pol-stack { width: 195px; height: 260px; }
                    .pol { width: 150px; }
                    .pol:nth-child(1) { transform: rotate(-7deg) translate(-30px, 18px); }
                    .pol:nth-child(2) { transform: rotate(4deg)  translate(30px, -14px); }
                }
            `}</style>
        </>
    );
}