'use client';

import { CONTACT } from '@/lib/constants';

export default function WhatsAppButton() {
    const message = "Hi Vivek! I'd like to enquire about a custom portrait.";
    const href = CONTACT.whatsappLink(message);

    return (
        <>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-btn"
                aria-label="Chat on WhatsApp"
            >
                <i className="bi bi-whatsapp" aria-hidden="true" />
                <span className="wa-label">Chat with Vivek</span>
            </a>

            <style jsx>{`
                .wa-btn {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    z-index: 1000;

                    display: flex;
                    align-items: center;
                    gap: 0.625rem;

                    /* Subtle gradient gives it depth, avoids flat plastic look */
                    background: linear-gradient(160deg, #2EDB6C 0%, #1EB854 100%);
                    color: #fff;
                    text-decoration: none;

                    padding: 0.8125rem 1.375rem 0.8125rem 1.125rem;
                    border-radius: 100px;

                    /* Layered shadow: inner highlight + ambient + coloured glow */
                    box-shadow:
                        inset 0 1px 0 rgba(255, 255, 255, 0.18),
                        0 2px 6px rgba(0, 0, 0, 0.10),
                        0 6px 20px rgba(37, 211, 102, 0.28);

                    font-family: 'Jost', sans-serif;
                    font-size: 0.875rem;
                    font-weight: 500;
                    letter-spacing: 0.02em;

                    /* Spring slide-in on mount */
                    animation: waEnter 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;

                    transition:
                        box-shadow 0.25s ease,
                        filter 0.2s ease;

                    will-change: filter, box-shadow;
                }

                .wa-btn i {
                    font-size: 1.375rem;
                    line-height: 1;
                    flex-shrink: 0;
                }

                .wa-label {
                    white-space: nowrap;
                }

                /* Hover: shadow deepens + brightness nudge — no movement */
                .wa-btn:hover {
                    box-shadow:
                        inset 0 1px 0 rgba(255, 255, 255, 0.18),
                        0 4px 10px rgba(0, 0, 0, 0.14),
                        0 10px 32px rgba(37, 211, 102, 0.42);
                    filter: brightness(1.06);
                }

                /* Active: quick tactile press */
                .wa-btn:active {
                    transform: scale(0.96);
                    box-shadow:
                        inset 0 1px 0 rgba(255, 255, 255, 0.12),
                        0 1px 4px rgba(0, 0, 0, 0.10),
                        0 3px 10px rgba(37, 211, 102, 0.20);
                    filter: brightness(0.97);
                    transition-duration: 0.08s;
                }

                /* Pulse ring */
                .wa-btn::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 100px;
                    border: 2px solid #25D366;
                    opacity: 0;
                    animation: waPulse 2.5s ease-out 1.2s infinite;
                    pointer-events: none;
                }

                @keyframes waEnter {
                    from {
                        opacity: 0;
                        transform: translateY(1.25rem) scale(0.88);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes waPulse {
                    0%   { transform: scale(1);    opacity: 0.55; }
                    100% { transform: scale(1.55); opacity: 0;    }
                }

                /* Mobile: collapse to clean circle */
                @media (max-width: 768px) {
                    .wa-btn {
                        bottom: 1.5rem;
                        right: 1.5rem;
                        padding: 0.9375rem;
                        border-radius: 50%;
                        gap: 0;
                    }

                    .wa-label {
                        display: none;
                    }

                    .wa-btn::before {
                        border-radius: 50%;
                    }
                }

                @media (max-width: 480px) {
                    .wa-btn {
                        bottom: 1rem;
                        right: 1rem;
                        padding: 0.8125rem;
                    }

                    .wa-btn i {
                        font-size: 1.25rem;
                    }
                }

                /* Focus */
                .wa-btn:focus-visible {
                    outline: 2px solid var(--burgundy);
                    outline-offset: 4px;
                }

                /* Reduced motion */
                @media (prefers-reduced-motion: reduce) {
                    .wa-btn,
                    .wa-btn::before {
                        animation: none;
                        transition: none;
                    }
                }

                /* High contrast */
                @media (prefers-contrast: high) {
                    .wa-btn {
                        border: 2px solid #fff;
                    }
                }
            `}</style>
        </>
    );
}