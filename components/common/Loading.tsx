// components/common/Loading.tsx
'use client';

export default function Loading() {
    return (
        <>
            <div className="loading-screen">
                <div className="loading-content">
                    <div className="loading-logo">
                        Vivek <em>Artline</em>
                    </div>
                    <div className="loading-spinner"></div>
                </div>
            </div>

            <style jsx>{`
                .loading-screen {
                    position: fixed;
                    inset: 0;
                    background: var(--parchment);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                }

                .loading-content {
                    text-align: center;
                }

                .loading-logo {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 2.5rem;
                    font-weight: 600;
                    color: var(--charcoal);
                    margin-bottom: var(--space-6);
                }

                .loading-logo em {
                    color: var(--burgundy);
                    font-style: italic;
                }

                .loading-spinner {
                    width: 40px;
                    height: 40px;
                    margin: 0 auto;
                    border: 3px solid var(--linen);
                    border-top-color: var(--burgundy);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </>
    );
}