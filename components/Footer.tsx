//components/Footer.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';

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
            title: 'Links',
            links: [
                { label: 'Home', href: '#' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'About', href: '#about' },
                { label: 'Commission', href: '#contact' }
            ]
        },
        {
            title: 'Information',
            links: [
                { label: 'Shipping & Delivery', href: '#' },
                { label: 'Custom Orders', href: '#' },
                { label: 'FAQs', href: '#' },
                { label: 'Care Guide', href: '#' }
            ]
        },
        {
            title: 'Contact',
            links: [
                { label: 'info@vivekartline.com', href: 'mailto:info@vivekartline.com' },
                { label: '+91 12345 67890', href: 'tel:+911234567890' },
                { label: 'Hyderabad, Telangana', href: '#' }
            ]
        }
    ];

    const socialLinks = [
        { icon: 'bi-instagram', href: 'https://instagram.com/vivek_artline' },
        { icon: 'bi-facebook', href: '#' },
        { icon: 'bi-youtube', href: '#' },
        { icon: 'bi-pinterest', href: '#' }
    ];

    return (
        <>
            <footer>
                <div className="ft-grid">
                    <div className="ft-brand">
                        <Link href="#" className="ft-logo">
                            Vivek <em>Artline</em>
                        </Link>
                        <p className="ft-desc">
                            A Hyderabad-based fine art studio creating museum-quality portraits, spiritual
                            paintings, and custom artworks treasured for generations.
                        </p>
                        <div className="ft-soc">
                            {socialLinks.map((social, index) => (
                                <a key={index} href={social.href} target="_blank" className="ft-s">
                                    <i className={`bi ${social.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title} className="ft-col">
                            <h4>{section.title}</h4>
                            <ul>
                                {section.links.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href}>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="ft-mob-only">
                    <Link href="#" className="ft-logo">
                        Vivek <em>Artline</em>
                    </Link>
                    <p className="ft-desc">
                        A Hyderabad-based fine art studio creating museum-quality portraits and custom artworks.
                    </p>
                    <div className="ft-soc">
                        {socialLinks.map((social, index) => (
                            <a key={index} href={social.href} target="_blank" className="ft-s">
                                <i className={`bi ${social.icon}`}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {footerLinks.map((section) => (
                    <div key={section.title} className="ft-acc-item">
                        <button
                            className={`ft-acc-btn ${openAccordion === section.title ? 'open' : ''}`}
                            onClick={() => toggleAccordion(section.title)}
                        >
                            {section.title} <i className="bi bi-plus"></i>
                        </button>
                        <div className={`ft-acc-body ${openAccordion === section.title ? 'open' : ''}`}>
                            <ul>
                                {section.links.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href}>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

                <div className="ft-bot">
                    <span>© 2025 Vivek Artline. All rights reserved.</span>
                    <span>
                        Designed with <i className="bi bi-heart-fill"></i> for art lovers
                    </span>
                </div>
            </footer>

            <style jsx>{`
                /*footer*/
                footer {
                    background: var(--parchment);
                    border-top: 1px solid var(--border-subtle);
                    padding: var(--space-12) max(8vw, calc((100% - var(--max-width)) / 2)) var(--space-6);
                }

                .ft-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1fr;
                    gap: var(--space-10);
                    margin-bottom: var(--space-8);
                }

                .ft-brand :global(.ft-logo) {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.875rem;
                    font-weight: 600;
                    color: var(--charcoal);
                    display: block;
                    margin-bottom: var(--space-3);
                    text-decoration: none;
                    letter-spacing: -0.01em;
                }

                :global(.ft-logo) em {
                    color: var(--burgundy);
                    font-style: italic;
                }

                .ft-desc {
                    font-size: var(--text-sm);
                    color: var(--text-secondary);
                    line-height: 1.7;
                    margin-bottom: var(--space-4);
                    max-width: 280px;
                }

                .ft-soc {
                    display: flex;
                    gap: 0.5rem;
                }

                .ft-s {
                    width: 34px;
                    height: 34px;
                    border: 1.5px solid var(--border-subtle);
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-secondary);
                    font-size: 0.875rem;
                    text-decoration: none;
                    transition: all 0.3s var(--ease-out);
                }

                .ft-s:hover {
                    background: var(--burgundy);
                    color: var(--parchment);
                    border-color: var(--burgundy);
                    transform: translateY(-2px);
                }

                .ft-col h4 {
                    font-size: 0.625rem;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: var(--text-primary);
                    margin-bottom: var(--space-5);
                    font-weight: 700;
                }

                .ft-col ul {
                    list-style: none;
                }

                .ft-col li {
                    margin-bottom: var(--space-3);
                }

                .ft-col a {
                    font-size: var(--text-sm);
                    color: var(--text-secondary);
                    text-decoration: none;
                    transition: color 0.3s;
                    font-weight: 400;
                }

                .ft-col a:hover {
                    color: var(--burgundy);
                }

                .ft-bot {
                    border-top: 1px solid var(--border-subtle);
                    padding-top: var(--space-5);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: var(--text-xs);
                    color: var(--text-tertiary);
                    flex-wrap: wrap;
                    gap: var(--space-3);
                }

                .ft-bot :global(i) {
                    color: var(--burgundy);
                }

                .ft-mob-only {
                    display: none;
                }

                .ft-acc-item {
                    display: none;
                }

                .ft-acc-btn {
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
                }

                .ft-acc-btn :global(i) {
                    color: var(--burgundy);
                    transition: transform 0.3s;
                }

                .ft-acc-btn.open :global(i) {
                    transform: rotate(45deg);
                }

                .ft-acc-body {
                    display: none;
                    padding: var(--space-3) 0 var(--space-2);
                }

                .ft-acc-body.open {
                    display: block;
                }

                .ft-acc-body li {
                    margin-bottom: var(--space-2);
                }

                .ft-acc-body a {
                    font-size: var(--text-sm);
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-weight: 400;
                }

                /*responsive*/
                @media(max-width:1100px) {
                    .ft-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: var(--space-8);
                    }
                }

                @media(max-width:900px) {
                    footer {
                        padding: var(--space-10) 6vw var(--space-5);
                    }
                    .ft-grid {
                        display: none;
                    }
                    .ft-mob-only {
                        display: block;
                    }
                    .ft-mob-only :global(.ft-logo) {
                        font-family: 'Cormorant Garamond', serif;
                        font-size: 1.75rem;
                        font-weight: 600;
                        color: var(--charcoal);
                        text-decoration: none;
                        display: block;
                        margin-bottom: var(--space-4);
                    }
                    .ft-mob-only .ft-desc {
                        margin-bottom: var(--space-5);
                    }
                    .ft-mob-only .ft-soc {
                        margin-bottom: var(--space-6);
                    }
                    .ft-acc-item {
                        display: block;
                    }
                }

                @media(max-width:600px) {
                    .ft-bot {
                        flex-direction: column;
                        text-align: center;
                    }
                }
            `}</style>
        </>
    );
}