//components/Emotion.tsx

'use client';

export default function Emotion() {
    return (
        <>
            <section className="emotion-sec">
                <div className="emotion-bg"></div>
                <div className="emotion-content reveal">
                    <div className="emotion-eyebrow">Crafted with Passion</div>
                    <h2 className="emotion-title">
                        More Than Art,<br />It's an <em>Emotion</em>.
                    </h2>
                    <a href="#" className="play-btn">
                        <div className="play-circle">
                            <i className="bi bi-play-fill"></i>
                        </div>
                        Watch the Journey
                    </a>
                </div>
            </section>

            <style jsx>{`
                /*emotion*/
                .emotion-sec {
                    position: relative;
                    min-height: 65vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--burgundy-deep);
                    overflow: hidden;
                }

                .emotion-bg {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse at 50% 40%, rgba(184, 92, 42, 0.08) 0%, transparent 60%);
                }

                .emotion-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    max-width: 720px;
                    padding: 0 max(6vw, calc((100% - var(--max-width)) / 2));
                }

                .emotion-eyebrow {
                    font-size: var(--text-xs);
                    letter-spacing: 0.24em;
                    text-transform: uppercase;
                    color: rgba(240, 232, 220, 0.5);
                    margin-bottom: var(--space-5);
                    font-weight: 500;
                }

                .emotion-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: clamp(2.75rem, 5.5vw, 4.5rem);
                    font-weight: 600;
                    line-height: 1.15;
                    color: var(--parchment);
                    margin-bottom: var(--space-8);
                    letter-spacing: -0.01em;
                }

                .emotion-title em {
                    font-style: italic;
                    color: var(--sienna);
                }

                .play-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.9rem;
                    font-size: var(--text-xs);
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: rgba(240, 232, 220, 0.6);
                    text-decoration: none;
                    transition: color 0.3s;
                    font-weight: 500;
                }

                .play-btn:hover {
                    color: var(--parchment);
                }

                .play-circle {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    border: 2px solid rgba(240, 232, 220, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1rem;
                    color: rgba(240, 232, 220, 0.7);
                    position: relative;
                    transition: all 0.4s var(--ease-out);
                }

                .play-circle::before {
                    content: '';
                    position: absolute;
                    inset: -10px;
                    border-radius: 50%;
                    border: 1px solid rgba(184, 92, 42, 0.15);
                    animation: pulse 2.8s ease-out infinite;
                }

                .play-btn:hover .play-circle {
                    background: rgba(240, 232, 220, 0.08);
                    border-color: rgba(240, 232, 220, 0.4);
                    transform: scale(1.08);
                }
            `}</style>
        </>
    );
}