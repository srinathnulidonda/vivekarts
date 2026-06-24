// app/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-page">
      <h2>Something went wrong!</h2>
      <p>We apologise for the inconvenience. Please try again later.</p>
      <button onClick={() => reset()}>Try again</button>

      {process.env.NODE_ENV === 'development' && (
        <p><small>Error: {error.message}</small></p>
      )}

      <style jsx>{`
                .error-page {
                    padding: var(--space-section) 0;
                    background: var(--parchment);
                    text-align: center;
                }
                .error-page h2 {
                    color: var(--burgundy);
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }
                .error-page p {
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                    max-width: 500px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .error-page button {
                    background: var(--sienna);
                    color: var(--parchment);
                    border: none;
                    padding: 0.85rem 2rem;
                    font-family: 'Jost', sans-serif;
                    font-size: var(--text-xs);
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    font-weight: 600;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s var(--ease-out);
                }
                .error-page button:hover {
                    background: var(--burgundy);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(125, 37, 53, 0.2);
                }
            `}</style>
    </div>
  );
}