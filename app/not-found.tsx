// app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <h2>404 — Page Not Found</h2>
      <p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/">Return to Homepage</Link>

      <style jsx>{`
                .not-found-page {
                    padding: var(--space-section) 0;
                    background: var(--parchment);
                    text-align: center;
                }
                .not-found-page h2 {
                    color: var(--burgundy);
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 2.5rem;
                    margin-bottom: 1.5rem;
                }
                .not-found-page p {
                    color: var(--text-secondary);
                    margin-bottom: 2rem;
                    max-width: 500px;
                    margin-left: auto;
                    margin-right: auto;
                    font-size: 1.125rem;
                }
                .not-found-page a {
                    display: inline-block;
                    background: var(--sienna);
                    color: var(--parchment);
                    padding: 0.85rem 2rem;
                    font-family: 'Jost', sans-serif;
                    font-size: var(--text-xs);
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    font-weight: 600;
                    border-radius: 50px;
                    text-decoration: none;
                    transition: all 0.3s var(--ease-out);
                }
                .not-found-page a:hover {
                    background: var(--burgundy);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(125, 37, 53, 0.2);
                }
            `}</style>
    </div>
  );
}