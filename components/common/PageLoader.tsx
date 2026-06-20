// components/common/PageLoader.tsx
'use client';

import { useEffect, useState } from 'react';

type Phase = 'visible' | 'fading' | 'hidden';

const MIN_MS = 850;
const FADE_MS = 550;

export default function PageLoader() {
    const [phase, setPhase] = useState<Phase>('visible');

    useEffect(() => {
        const mountedAt = Date.now();

        const startFade = () => {
            const elapsed = Date.now() - mountedAt;
            const wait = Math.max(0, MIN_MS - elapsed);
            setTimeout(() => {
                setPhase('fading');
                setTimeout(() => setPhase('hidden'), FADE_MS);
            }, wait);
        };

        if (document.readyState === 'complete') {
            startFade();
        } else {
            window.addEventListener('load', startFade, { once: true });
            const fallback = setTimeout(startFade, 6_000);
            return () => {
                window.removeEventListener('load', startFade);
                clearTimeout(fallback);
            };
        }
    }, []);

    if (phase === 'hidden') return null;

    return (
        <>
            <style>{`
        /* Keyframes */
        @keyframes __va_spin__    { to { transform: rotate(360deg); } }
        @keyframes __va_reveal__ {
          from { clip-path: inset(0 101% 0 0); }
          to   { clip-path: inset(0 0%   0 0); }
        }
        @keyframes __va_tipSlide__ {
          from { left: -2px;          opacity: 1; }
          90%  { opacity: 1; }
          to   { left: calc(100% + 2px); opacity: 0; }
        }
        @keyframes __va_lineOpen__ {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        @keyframes __va_dotBounce__ {
          0%, 60%, 100% { transform: translateY(0);    opacity: 0.25; }
          30%           { transform: translateY(-7px); opacity: 1;    }
        }
        @keyframes __va_shimmer__ {
          0%   { background-position: -300% center; }
          100% { background-position:  300% center; }
        }
      `}</style>

            {/* Backdrop */}
            <div
                aria-hidden="true"
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 99999,
                    background: '#F0E8DC',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: phase === 'fading' ? 0 : 1,
                    transition: phase === 'fading'
                        ? `opacity ${FADE_MS}ms cubic-bezier(0.23,1,0.32,1)`
                        : 'none',
                    pointerEvents: phase === 'fading' ? 'none' : 'all',
                }}
            >

                {/* Brand */}
                <div style={{ position: 'relative', lineHeight: 1 }}>

                    {/* Text */}
                    <div
                        style={{
                            fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif",
                            fontSize: 'clamp(2.2rem, 7vw, 3.2rem)',
                            fontWeight: 600,
                            color: '#1C1814',
                            letterSpacing: '-0.01em',
                            whiteSpace: 'nowrap',
                            clipPath: 'inset(0 101% 0 0)',
                            animation: '__va_reveal__ 0.85s 0.1s cubic-bezier(0.6,0,0.4,1) forwards',
                        }}
                    >
                        Vivek{' '}
                        <em style={{ color: '#7D2535', fontStyle: 'italic' }}>Artline</em>
                    </div>

                    {/* Pencil */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            marginTop: '-5px',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, #5A4033 0%, #7D2535 100%)',
                            boxShadow: '0 0 0 3px rgba(125,37,53,0.15), 0 2px 8px rgba(125,37,53,0.2)',
                            animation: '__va_tipSlide__ 0.85s 0.1s cubic-bezier(0.6,0,0.4,1) forwards',
                        }}
                    />

                    {/* Shimmer */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.6) 50%, transparent 80%)',
                            backgroundSize: '300% auto',
                            animation: '__va_shimmer__ 0.9s 1.05s ease-in-out both',
                            pointerEvents: 'none',
                            mixBlendMode: 'overlay',
                        }}
                    />
                </div>

                {/* Divider */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '9px',
                        marginTop: '1rem',
                    }}
                >
                    {/* Left */}
                    <div
                        style={{
                            width: '56px',
                            height: '1px',
                            background: 'linear-gradient(to right, transparent, rgba(125,37,53,0.5))',
                            transformOrigin: 'right center',
                            animation: '__va_lineOpen__ 0.6s 0.75s cubic-bezier(0.23,1,0.32,1) both',
                        }}
                    />
                    {/* Center */}
                    <div
                        style={{
                            width: '5px',
                            height: '5px',
                            background: '#7D2535',
                            transform: 'rotate(45deg)',
                            opacity: 0,
                            flexShrink: 0,
                            animation: '__va_lineOpen__ 0.4s 0.85s ease both',
                        }}
                    />
                    {/* Right */}
                    <div
                        style={{
                            width: '56px',
                            height: '1px',
                            background: 'linear-gradient(to left, transparent, rgba(125,37,53,0.5))',
                            transformOrigin: 'left center',
                            animation: '__va_lineOpen__ 0.6s 0.75s cubic-bezier(0.23,1,0.32,1) both',
                        }}
                    />
                </div>

                {/* Loader */}
                <div
                    style={{
                        display: 'flex',
                        gap: '8px',
                        marginTop: '1.6rem',
                        opacity: 0,
                        animation: '__va_lineOpen__ 0.35s 1s ease both',
                    }}
                >
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: '#7D2535',
                                animation: `__va_dotBounce__ 1.1s ${i * 0.18}s ease-in-out infinite`,
                            }}
                        />
                    ))}
                </div>

            </div>
        </>
    );
}