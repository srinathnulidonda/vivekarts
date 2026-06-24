// components/Footer.tsx
'use strict';

import type { JSX } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './common/Container';
import { CONTACT } from '@/lib/constants';

interface AccordionItem {
    title: string;
    links: { label: string; href: string }[];
}

export default function Footer() {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (title: string) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };

    const footerLinks: AccordionItem[] = [
        {
            title: 'Quick Links',
            links: [
                { label: 'Home', href: '#' },
                { label: 'Portrait Gallery', href: '#gallery' },
                { label: 'About Vivek', href: '#about' },
                { label: 'Order Portrait', href: '#contact' }
            ]
        },
        {
            title: 'Portrait Types',
            links: [
                { label: 'Couple Portraits', href: '#gallery' },
                { label: 'Family Portraits', href: '#gallery' },
                { label: 'Pet Portraits', href: '#gallery' },
                { label: 'Memorial Portraits', href: '#gallery' },
                { label: 'Wedding Gifts', href: '#gallery' }
            ]
        },
        {
            title: 'Get in Touch',
            links: [
                { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { label: CONTACT.phone, href: `tel:${CONTACT.phone}` },
                { label: 'WhatsApp Enquiry', href: `https://wa.me/${CONTACT.whatsapp}` },
                { label: CONTACT.location, href: '#' }
            ]
        }
    ];

    const socialLinks = [
        { icon: 'bi-instagram', href: CONTACT.instagramUrl, label: 'Instagram' },
        { icon: 'bi-facebook', href: '#', label: 'Facebook' },
        { icon: 'bi-youtube', href: '#', label: 'YouTube' },
        { icon: 'bi-pinterest', href: '#', label: 'Pinterest' }
    ];

    return (
        <>
            <footer className="footer">
                <Container>
                    {/* Desktop Layout */}
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <Link href="#" className="footer-logo">
                                <Image
                                    src="/logo.png"
                                    alt="Vivek Artline"
                                    width={200}
                                    height={70}
                                    className="footer-logo-image"
                                    style={{ width: 'auto', height: '60px' }}
                                />
                            </Link>
                            <p className="footer-desc">
                                Custom portrait artist in Hyderabad specializing in hand-drawn pencil portraits.
                                From couple sketches to memorial tributes — preserving your cherished memories forever.
                            </p>
                            <div className="footer-social">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label={social.label}
                                    >
                                        <i className={`bi ${social.icon}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {footerLinks.map((section) => (
                            <div key={section.title} className="footer-column">
                                <h4 className="footer-heading">{section.title}</h4>
                                <ul className="footer-list">
                                    {section.links.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href}>{link.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Layout */}
                    <div className="footer-mobile">
                        <Link href="#" className="footer-logo">
                            <Image
                                src="/logo.png"
                                alt="Vivek Artline"
                                width={160}
                                height={55}
                                className="footer-logo-image"
                                style={{ width: 'auto', height: '50px' }}
                            />
                        </Link>
                        <p className="footer-desc">
                            Custom portrait artist in Hyderabad specializing in hand-drawn pencil portraits.
                            Preserving your cherished memories forever.
                        </p>
                        <div className="footer-social">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label={social.label}
                                >
                                    <i className={`bi ${social.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Accordion */}
                    <div className="footer-accordion">
                        {footerLinks.map((section) => (
                            <div key={section.title} className="accordion-item">
                                <button
                                    className={`accordion-button ${openAccordion === section.title ? 'open' : ''}`}
                                    onClick={() => toggleAccordion(section.title)}
                                    aria-expanded={openAccordion === section.title}
                                >
                                    {section.title}
                                    <i className="bi bi-plus"></i>
                                </button>
                                <div className={`accordion-body ${openAccordion === section.title ? 'open' : ''}`}>
                                    <ul className="footer-list">
                                        {section.links.map((link, index) => (
                                            <li key={index}>
                                                <a href={link.href}>{link.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="footer-bottom">
                        <span>© 2025 Vivek Artline — Custom Portrait Artist, Hyderabad</span>
                        <span>
                            Handcrafted with <i className="bi bi-heart-fill"></i> for preserving memories
                        </span>
                    </div>
                </Container>
            </footer>

            <style jsx>{`
                .footer {
                    background: var(--parchment);
                    border-top: 1px solid var(--border-subtle);
                    padding: var(--space-12) 0 var(--space-6);
                }

                /* Desktop Grid */
                .footer-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1fr;
                    gap: var(--space-10);
                    margin-bottom: var(--space-8);
                }

                .footer-logo {
                    display: block;
                    margin-bottom: var(--space-5);
                    transition: opacity 0.3s;
                }

                .footer-logo:hover {
                    opacity: 0.8;
                }

                .footer-logo :global(.footer-logo-image) {
                    display: block;
                    object-fit: contain;
                    max-width: 220px;
                }

                .footer-desc {
                    font-size: var(--text-sm);
                    color: var(--text-secondary);
                    line-height: 1.75;
                    margin-bottom: var(--space-5);
                    max-width: 320px;
                }

                .footer-social {
                    display: flex;
                    gap: 0.5rem;
                }

                .social-link {
                    width: 36px;
                    height: 36px;
                    border: 1.5px solid var(--border-subtle);
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-secondary);
                    font-size: 0.9375rem;
                    text-decoration: none;
                    transition: all 0.3s var(--ease-out);
                }

                .social-link:hover {
                    background: var(--burgundy);
                    color: var(--parchment);
                    border-color: var(--burgundy);
                    translate: translateY(-3px);
                    box-shadow: 0 4px 12px rgba(125, 37, 53, 0.2);
                }

                .footer-heading {
                    font-size: 0.625rem;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: var(--text-primary);
                    margin-bottom: var(--space-5);
                    font-weight: 700;
                }

                .footer-list {
                    list-style: none;
                }

                .footer-list li {
                    margin-bottom: var(--space-3);
                }

                .footer-list a {
                    font-size: var(--text-sm);
                    color: var(--text-secondary);
                    text-decoration: none;
                    transition: color 0.3s, transform 0.3s;
                    font-weight: 400;
                    display: inline-block;
                }

                .footer-list a:hover {
                    color: var(--burgundy);
                    transform: translateX(2px);
                }

                /* Mobile Layout */
                .footer-mobile,
                .footer-accordion {
                    display: none;
                }

                .footer-bottom {
                    border-top: 1px solid var(--border-subtle);
                    padding-top: var(--space-5);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: var(--text-xs);
                    color: var(--text-tertiary);
                    flex-wrap: wrap;
                    gap: var(--space-4);
                }

                .footer-bottom i {
                    color: var(--burgundy);
                    font-size: 0.625rem;
                }

                /* Accordion Styles */
                .accordion-button {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 0.625rem;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--text-primary);
                    padding: var(--space-4) 0;
                    border-bottom: 1px solid var(--border-subtle);
                    background: none;
                    border-top: none;
                    border-left: none;
                    border-right: none;
                    width: 100%;
                    cursor: pointer;
                    font-weight: 600;
                    font-family: 'Jost', sans-serif;
                }

                .accordion-button i {
                    color: var(--burgundy);
                    transition: transform 0.3s;
                    font-size: 0.875rem;
                }

                .accordion-button.open i {
                    transform: rotate(45deg);
                }

                .accordion-body {
                    display: none;
                    padding: var(--space-4) 0 var(--space-3);
                }

                .accordion-body.open {
                    display: block;
                    animation: slideDown 0.3s ease;
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Responsive */
                @media(max-width: 1100px) {
                    .footer-grid {
                        grid-template-columns: 1.5fr 1fr 1fr;
                        gap: var(--space-8);
                    }

                    .footer-grid .footer-column:first-of-type {
                        grid-column: 1 / -1;
                    }
                }

                @media(max-width: 900px) {
                    .footer {
                        padding: var(--space-10) 0 var(--space-5);
                    }

                    .footer-grid {
                        display: none;
                    }

                    .footer-mobile {
                        display: block;
                        margin-bottom: var(--space-6);
                    }

                    .footer-mobile .footer-logo :global(.footer-logo-image) {
                        display: block;
                        object-fit: contain;
                        max-width: 180px;
                    }

                    .footer-mobile .footer-desc {
                        margin-bottom: var(--space-5);
                        max-width: 100%;
                    }

                    .footer-accordion {
                        display: block;
                    }
                }

                @media(max-width: 600px) {
                    .footer-bottom {
                        flex-direction: column;
                        text-align: center;
                        gap: var(--space-2);
                    }

                    .footer-bottom span {
                        font-size: 0.625rem;
                    }
                }

                @media(max-width: 400px) {
                    .footer-mobile .footer-logo :global(.footer-logo-image) {
                        max-width: 160px;
                    }
                }
            `}</style>
        </>
    );
}