// components/Navigation.tsx
'use client';

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useActiveSection } from '@/hooks/useActiveSection';
import { CONTACT } from '@/lib/constants';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const activeSection = useActiveSection();
    const indicatorRef = useRef<HTMLDivElement>(null);
    const navLinksRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 48);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!navLinksRef.current || !indicatorRef.current) return;
        const links = navLinksRef.current.querySelectorAll<HTMLAnchorElement>('a');
        links.forEach(link => {
            if (link.classList.contains('active')) {
                const { offsetLeft, offsetWidth } = link.parentElement as HTMLElement;
                indicatorRef.current!.style.transform = `translateX(${offsetLeft + offsetWidth / 2 - 12}px)`;
                indicatorRef.current!.style.opacity = '1';
            }
        });
    }, [activeSection]);

    const closeMobile = () => setMobileOpen(false);

    const navItems = [
        { href: '/', label: 'Home', id: '' },
        { href: '#services', label: 'Services', id: 'services' },
        { href: '#gallery', label: 'Portfolio', id: 'gallery' },
        { href: '#testimonials', label: 'Reviews', id: 'testimonials' },
        { href: '#contact', label: 'Contact', id: 'contact' },
    ];

    return (
        <>
            <nav id="nav" className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Main navigation">
                <Link href="/" className="nav-logo" aria-label="Vivek Artline — home">
                    <Image
                        src="/logo.png"
                        alt="Vivek Artline"
                        width={200}
                        height={70}
                        priority
                        className="logo-image"
                        sizes="(max-width: 768px) 180px, 240px"
                    />
                </Link>

                <ul className="nav-links" ref={navLinksRef} role="list">
                    {navItems.map((item) => (
                        <li key={item.id || 'home'}>
                            <Link
                                href={item.href}
                                className={activeSection === item.id ? 'active' : ''}
                                aria-current={activeSection === item.id ? 'page' : undefined}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <div className="nav-indicator" ref={indicatorRef} aria-hidden="true" />
                </ul>

                <div className="nav-actions">
                    <a
                        href={CONTACT.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-btn"
                        aria-label="Follow us on Instagram"
                    >
                        <svg className="ig-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#FED576" />
                                    <stop offset="25%" stopColor="#F47133" />
                                    <stop offset="50%" stopColor="#BC3081" />
                                    <stop offset="75%" stopColor="#4C63D2" />
                                    <stop offset="100%" stopColor="#4C63D2" />
                                </linearGradient>
                            </defs>
                            <rect className="ig-bg" x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" stroke="currentColor" strokeWidth="1.8" />
                            <circle className="ig-camera" cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
                            <circle className="ig-dot" cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                        </svg>
                        <span className="ig-tooltip">Follow on Instagram</span>
                    </a>

                    <Link href="#contact" className="order-btn" aria-label="Order your custom artwork">
                        <span className="order-text">Order Art</span>
                        <svg className="order-arrow" width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                    <button
                        className={`ham${mobileOpen ? ' open' : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-expanded={mobileOpen}
                        aria-controls="mob-nav"
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </nav>

            <div id="mob-ov" className={mobileOpen ? 'open' : ''} onClick={closeMobile} aria-hidden="true" />

            <div id="mob-nav" className={mobileOpen ? 'open' : ''} aria-label="Mobile navigation" role="dialog" aria-modal="true">
                <div className="mob-header">
                    <Image
                        src="/logo.png"
                        alt="Vivek Artline"
                        width={160}
                        height={55}
                        priority
                        className="mob-logo-image"
                        sizes="180px"
                    />
                </div>

                <ul className="mob-list" role="list">
                    {navItems.map((item, i) => (
                        <li key={item.id || 'home'} style={{ animationDelay: `${0.06 * (i + 1)}s` }}>
                            <Link
                                href={item.href}
                                onClick={closeMobile}
                                className={activeSection === item.id ? 'active' : ''}
                                aria-current={activeSection === item.id ? 'page' : undefined}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mob-footer">
                    <Link href="#contact" onClick={closeMobile} className="mob-cta">
                        Order Your Portrait
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="mob-ig">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="ig-gradient-mob" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#FED576" />
                                    <stop offset="25%" stopColor="#F47133" />
                                    <stop offset="50%" stopColor="#BC3081" />
                                    <stop offset="100%" stopColor="#4C63D2" />
                                </linearGradient>
                            </defs>
                            <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="url(#ig-gradient-mob)" strokeWidth="1.8" />
                            <circle cx="12" cy="12" r="4.5" stroke="url(#ig-gradient-mob)" strokeWidth="1.8" />
                            <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-gradient-mob)" />
                        </svg>
                        @{CONTACT.instagram}
                    </a>
                </div>
            </div>

            <style jsx>{`
                /* Navigation container */
                :global(nav#nav) {
                    position: fixed;
                    top: 0; left: 0; right: 0;
                    z-index: 800;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 max(5vw, calc((100% - 1440px) / 2));
                    height: 85px;
                    background: transparent;
                    transition: height 0.4s cubic-bezier(0.23, 1, 0.32, 1), background 0.4s ease, box-shadow 0.4s ease;
                }

                :global(nav#nav.scrolled) {
                    height: 68px;
                    background: rgba(240, 232, 220, 0.88);
                    backdrop-filter: saturate(180%) blur(28px);
                    -webkit-backdrop-filter: saturate(180%) blur(28px);
                    box-shadow: 0 1px 0 rgba(125, 37, 53, 0.09), 0 4px 24px rgba(28, 24, 20, 0.04);
                }

                /* Logo */
                :global(.nav-logo) {
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    transition: opacity 0.25s, transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);
                    flex-shrink: 0;
                }

                :global(.nav-logo:hover) {
                    opacity: 0.85;
                    transform: scale(1.02);
                }

                :global(.logo-image) {
                    width: auto !important;
                    height: 65px !important;
                    max-width: 240px;
                    display: block;
                }

                :global(nav#nav.scrolled .logo-image) {
                    height: 52px !important;
                }

                /* Navigation links */
                :global(.nav-links) {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                :global(.nav-links li) {
                    list-style: none;
                }

                :global(.nav-links a) {
                    display: flex;
                    align-items: center;
                    height: 36px;
                    padding: 0 0.875rem;
                    font-size: 0.6875rem;
                    font-weight: 500;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: var(--text-tertiary);
                    text-decoration: none;
                    border-radius: 6px;
                    transition: color 0.25s, background 0.25s;
                    white-space: nowrap;
                }

                :global(.nav-links a:hover) {
                    color: var(--text-primary);
                    background: rgba(28, 24, 20, 0.04);
                }

                :global(.nav-links a.active) {
                    color: var(--burgundy);
                    background: rgba(125, 37, 53, 0.06);
                }

                :global(.nav-indicator) {
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    width: 24px;
                    height: 3px;
                    border-radius: 2px;
                    background: var(--burgundy);
                    opacity: 0;
                    transform: translateX(0);
                    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s;
                    pointer-events: none;
                }

                /* Action buttons */
                :global(.nav-actions) {
                    display: flex;
                    align-items: center;
                    gap: 0.625rem;
                    flex-shrink: 0;
                }

                /* Instagram Button */
                :global(.instagram-btn) {
                    position: relative;
                    width: 38px;
                    height: 38px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    border: 1.5px solid rgba(125, 37, 53, 0.12);
                    background: rgba(255, 255, 255, 0.4);
                    text-decoration: none;
                    transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
                    cursor: pointer;
                    overflow: visible;
                }

                :global(.instagram-btn::before) {
                    content: '';
                    position: absolute;
                    inset: -2px;
                    border-radius: 9px;
                    padding: 2px;
                    background: linear-gradient(45deg, #FED576, #F47133, #BC3081, #4C63D2);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.35s ease;
                }

                :global(.instagram-btn:hover) {
                    transform: translateY(-2px) scale(1.05);
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.95);
                    box-shadow:
                        0 8px 24px rgba(188, 48, 129, 0.2),
                        0 4px 12px rgba(244, 113, 51, 0.15),
                        0 0 0 4px rgba(188, 48, 129, 0.08);
                }

                :global(.instagram-btn:hover::before) {
                    opacity: 1;
                }

                :global(.instagram-btn:active) {
                    transform: translateY(0) scale(1);
                }

                :global(.ig-icon) {
                    width: 18px;
                    height: 18px;
                    color: #666;
                    transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
                }

                :global(.instagram-btn:hover .ig-icon) {
                    color: transparent;
                    stroke: url(#ig-gradient);
                }

                :global(.instagram-btn:hover .ig-icon .ig-dot) {
                    fill: url(#ig-gradient);
                }

                :global(.instagram-btn:hover .ig-icon .ig-bg),
                :global(.instagram-btn:hover .ig-icon .ig-camera) {
                    stroke: url(#ig-gradient);
                }

                /* Tooltip */
                :global(.ig-tooltip) {
                    position: absolute;
                    top: calc(100% + 12px);
                    left: 50%;
                    transform: translateX(-50%) translateY(-4px);
                    background: var(--charcoal);
                    color: var(--parchment);
                    padding: 0.5rem 0.875rem;
                    border-radius: 6px;
                    font-size: 0.6875rem;
                    font-weight: 500;
                    letter-spacing: 0.02em;
                    white-space: nowrap;
                    pointer-events: none;
                    opacity: 0;
                    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
                    box-shadow: 0 4px 16px rgba(28, 24, 20, 0.2);
                    z-index: 1000;
                }

                :global(.ig-tooltip::before) {
                    content: '';
                    position: absolute;
                    bottom: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    border: 5px solid transparent;
                    border-bottom-color: var(--charcoal);
                }

                :global(.instagram-btn:hover .ig-tooltip) {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }

                /* Order Art Button */
                :global(.order-btn) {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.45rem;
                    height: 36px;
                    padding: 0 1.125rem;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    text-decoration: none;
                    color: var(--parchment);
                    background: var(--charcoal);
                    border-radius: 8px;
                    border: 1px solid transparent;
                    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
                    box-shadow: 0 1px 3px rgba(28, 24, 20, 0.16), inset 0 1px 0 rgba(255,255,255,0.07);
                    white-space: nowrap;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                }

                :global(.order-btn:hover) {
                    background: var(--burgundy);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(125, 37, 53, 0.28);
                }

                :global(.order-btn:active) {
                    transform: translateY(0);
                }

                :global(.order-btn .order-arrow) {
                    transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
                }

                :global(.order-btn:hover .order-arrow) {
                    transform: translate(2px, -2px);
                }

                :global(.order-btn::before) {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s;
                }

                :global(.order-btn:hover::before) {
                    left: 100%;
                }

                /* Hamburger menu */
                :global(.ham) {
                    display: none;
                    flex-direction: column;
                    justify-content: center;
                    gap: 5px;
                    width: 34px;
                    height: 34px;
                    background: none;
                    border: 1px solid rgba(125, 37, 53, 0.12);
                    border-radius: 7px;
                    cursor: pointer;
                    padding: 0 8px;
                    transition: border-color 0.25s, background 0.25s;
                }

                :global(.ham:hover) {
                    background: rgba(28, 24, 20, 0.04);
                    border-color: rgba(125, 37, 53, 0.22);
                }

                :global(.ham span) {
                    display: block;
                    width: 100%;
                    height: 1.5px;
                    background: var(--charcoal);
                    border-radius: 1px;
                    transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
                    transform-origin: center;
                }

                :global(.ham.open span:nth-child(1)) {
                    transform: translateY(6.5px) rotate(45deg);
                }

                :global(.ham.open span:nth-child(2)) {
                    opacity: 0;
                    transform: scaleX(0);
                }

                :global(.ham.open span:nth-child(3)) {
                    translate: translateY(-6.5px) rotate(-45deg);
                }

                /* Mobile overlay */
                :global(#mob-ov) {
                    position: fixed;
                    inset: 0;
                    z-index: 798;
                    background: rgba(28, 24, 20, 0);
                    pointer-events: none;
                    transition: background 0.4s;
                    backdrop-filter: blur(0px);
                    -webkit-backdrop-filter: blur(0px);
                }

                :global(#mob-ov.open) {
                    pointer-events: auto;
                    background: rgba(28, 24, 20, 0.2);
                    backdrop-filter: blur(3px);
                    -webkit-backdrop-filter: blur(3px);
                }

                /* Mobile drawer */
                :global(#mob-nav) {
                    position: fixed;
                    top: 90px;
                    right: max(5vw, calc((100% - 1440px) / 2));
                    z-index: 799;
                    width: 260px;
                    background: rgba(244, 238, 230, 0.97);
                    backdrop-filter: saturate(200%) blur(40px);
                    -webkit-backdrop-filter: saturate(200%) blur(40px);
                    border: 1px solid rgba(125, 37, 53, 0.1);
                    border-radius: 14px;
                    box-shadow: 0 2px 0 rgba(255,255,255,0.6) inset, 0 20px 60px rgba(28, 24, 20, 0.14), 0 4px 16px rgba(28, 24, 20, 0.08);
                    transform: translateY(-10px) scale(0.97);
                    opacity: 0;
                    pointer-events: none;
                    transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.28s ease;
                    overflow: hidden;
                }

                :global(#mob-nav.open) {
                    transform: translateY(0) scale(1);
                    opacity: 1;
                    pointer-events: auto;
                }

                :global(.mob-header) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1.25rem 1.125rem 1rem;
                    border-bottom: 1px solid rgba(125, 37, 53, 0.07);
                }

                :global(.mob-logo-image) {
                    width: auto !important;
                    height: 50px !important;
                    max-width: 180px;
                    display: block;
                }

                :global(.mob-list) {
                    list-style: none;
                    margin: 0;
                    padding: 0.5rem 0;
                }

                :global(.mob-list li) {
                    list-style: none;
                }

                :global(.mob-list a) {
                    display: flex;
                    align-items: center;
                    padding: 0.75rem 1.125rem;
                    font-size: 0.875rem;
                    font-weight: 500;
                    letter-spacing: 0.01em;
                    color: var(--text-secondary);
                    text-decoration: none;
                    transition: background 0.2s, color 0.2s;
                }

                :global(.mob-list a:hover) {
                    background: rgba(125, 37, 53, 0.05);
                    color: var(--text-primary);
                }

                :global(.mob-list a.active) {
                    color: var(--burgundy);
                    background: rgba(125, 37, 53, 0.06);
                }

                :global(.mob-footer) {
                    padding: 0.75rem 1.125rem 1rem;
                    border-top: 1px solid rgba(125, 37, 53, 0.07);
                    display: flex;
                    flex-direction: column;
                    gap: 0.625rem;
                }

                :global(.mob-cta) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 0.65rem 1rem;
                    background: var(--charcoal);
                    color: var(--parchment);
                    border-radius: 8px;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    text-decoration: none;
                    transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
                }

                :global(.mob-cta:hover) {
                    background: var(--burgundy);
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(125, 37, 53, 0.2);
                }

                /* Mobile Instagram Link */
                :global(.mob-ig) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 0.55rem 0.875rem;
                    font-size: 0.6875rem;
                    font-weight: 500;
                    letter-spacing: 0.02em;
                    color: var(--text-secondary);
                    text-decoration: none;
                    border-radius: 7px;
                    border: 1px solid rgba(188, 48, 129, 0.15);
                    background: rgba(255, 255, 255, 0.3);
                    transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
                }

                :global(.mob-ig:hover) {
                    background: rgba(255, 255, 255, 0.6);
                    border-color: rgba(188, 48, 129, 0.3);
                    color: #BC3081;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(188, 48, 129, 0.15);
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    :global(.order-btn .order-text) {
                        display: none;
                    }
                    :global(.order-btn) {
                        width: 36px;
                        padding: 0;
                    }
                }

                @media (max-width: 860px) {
                    :global(.nav-links),
                    :global(.instagram-btn),
                    :global(.order-btn) {
                        display: none;
                    }
                    :global(.ham) {
                        display: flex;
                    }
                }

                @media (max-width: 600px) {
                    :global(nav#nav) {
                        padding: 0 5vw;
                        height: 70px;
                    }
                    :global(nav#nav.scrolled) {
                        height: 60px;
                    }
                    :global(.logo-image) {
                        height: 52px !important;
                    }
                    :global(nav#nav.scrolled .logo-image) {
                        height: 44px !important;
                    }
                    :global(#mob-nav) {
                        top: 76px;
                        right: 5vw;
                        width: calc(100vw - 10vw);
                        max-width: 320px;
                    }
                    :global(.mob-logo-image) {
                        height: 45px !important;
                    }
                }

                @media (max-width: 400px) {
                    :global(nav#nav) {
                        height: 65px;
                    }
                    :global(nav#nav.scrolled) {
                        height: 56px;
                    }
                    :global(.logo-image) {
                        height: 48px !important;
                    }
                    :global(nav#nav.scrolled .logo-image) {
                        height: 40px !important;
                    }
                    :global(#mob-nav) {
                        top: 71px;
                    }
                    :global(.mob-logo-image) {
                        height: 40px !important;
                    }
                }

                /* Accessibility */
                :global(.nav-links a:focus-visible),
                :global(.instagram-btn:focus-visible),
                :global(.order-btn:focus-visible),
                :global(.ham:focus-visible) {
                    outline: 2px solid var(--burgundy);
                    outline-offset: 3px;
                    border-radius: 7px;
                }

                @media (prefers-reduced-motion: reduce) {
                    :global(nav#nav),
                    :global(.nav-links a),
                    :global(.instagram-btn),
                    :global(.order-btn),
                    :global(.ham span),
                    :global(#mob-nav),
                    :global(#mob-ov),
                    :global(.nav-indicator),
                    :global(.nav-logo) {
                        transition: none !important;
                        animation: none !important;
                    }
                }
            `}</style>
        </>
    );
}