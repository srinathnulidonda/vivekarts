//components/common/InstagramButton.tsx
'use client';

import { CONTACT } from '@/lib/constants';

export default function InstagramButton() {
    const href = CONTACT.instagramUrl;

    return (
        <>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="fab"
                aria-label="Contact us on Instagram"
            >
                <span className="fab-label">Contact Us</span>
                <span className="fab-icon">
                    <i className="bi bi-instagram" aria-hidden="true" />
                </span>
            </a>

            <style jsx>{`
                .fab {
                    position: fixed;
                    right: 1.5rem;
                    bottom: calc(1.5rem + env(safe-area-inset-bottom));
                    z-index: 1000;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    text-decoration: none;
                    cursor: pointer;
                }

                .fab-label {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    box-sizing: border-box;
                    height: 32px;
                    padding: 0 11px;
                    background: #ffffff;
                    border-radius: 999px;
                    font-family: 'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                    font-size: 12px !important;
                    font-weight: 600 !important;
                    line-height: 1 !important;
                    letter-spacing: 0 !important;
                    text-transform: none !important;
                    color: #2a2a2a;
                    white-space: nowrap;
                    filter: drop-shadow(0 2px 5px rgba(28, 24, 20, 0.08)) drop-shadow(0 8px 18px rgba(28, 24, 20, 0.10));
                    transition: filter 250ms ease, transform 250ms ease;
                }

                .fab-label::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: -4px;
                    transform: translateY(-50%);
                    width: 0;
                    height: 0;
                    border-top: 6px solid transparent;
                    border-bottom: 6px solid transparent;
                    border-left: 7px solid #ffffff;
                    pointer-events: none;
                }

                .fab-icon {
                    flex-shrink: 0;
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25), 0 4px 10px rgba(0, 0, 0, 0.12), 0 10px 24px rgba(214, 36, 159, 0.35);
                    transition: box-shadow 250ms ease, transform 250ms ease;
                }

                .fab-icon i {
                    color: #fff;
                    font-size: 22px;
                    line-height: 1;
                    display: block;
                }

                .fab:hover .fab-label {
                    transform: translateY(-2px);
                    filter: drop-shadow(0 4px 8px rgba(28, 24, 20, 0.10)) drop-shadow(0 12px 24px rgba(28, 24, 20, 0.14));
                }

                .fab:hover .fab-icon {
                    transform: translateY(-2px);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25), 0 6px 14px rgba(0, 0, 0, 0.16), 0 14px 32px rgba(214, 36, 159, 0.46);
                }

                .fab:active .fab-label,
                .fab:active .fab-icon {
                    transform: translateY(-1px) scale(0.97);
                }

                .fab:focus-visible .fab-label,
                .fab:focus-visible .fab-icon {
                    outline: 2px solid var(--burgundy, #7d2535);
                    outline-offset: 3px;
                }

                @media (max-width: 768px) {
                    .fab {
                        right: 1rem;
                        bottom: calc(1rem + env(safe-area-inset-bottom));
                        gap: 5px;
                    }
                    .fab-label {
                        height: 26px;
                        padding: 0 9px;
                        font-size: 10.5px !important;
                    }
                    .fab-label::after {
                        right: -3px;
                        border-top-width: 5px;
                        border-bottom-width: 5px;
                        border-left-width: 6px;
                    }
                    .fab-icon {
                        width: 48px;
                        height: 48px;
                    }
                    .fab-icon i {
                        font-size: 19px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .fab-label,
                    .fab-icon { transition: none; }
                }

                @media (prefers-contrast: high) {
                    .fab-label { border: 1px solid #000; }
                    .fab-icon { border: 2px solid #fff; }
                }
            `}</style>
        </>
    );
}