// app/global-error.tsx
'use client';

export default function GlobalError({
  error,
  resetErrorBoundary
}: {
  error: Error & { digest?: string };
  resetErrorBoundary: () => void;
}) {
  return (
    <div>
      <h2>Application Error</h2>
      <p>
        An unexpected error occurred. Please try refreshing the page or
        <button onClick={resetErrorBoundary}>try again</button>.
      </p>
      {/* Development only - show error details */}
      {process.env.NODE_ENV === 'development' && error.message && (
        <p>
          <small>Error details: {error.message}</small>
        </p>
      )}
      <style jsx>{`
        /* Global Error Page Styling */
        .global-error-page {
          padding: var(--space-section) 0;
          background: var(--parchment);
          text-align: center;
        }

        .global-error-page h2 {
          color: var(--burgundy);
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .global-error-page p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .global-error-page button {
          background: var(--sienna);
          color: var(--parchment);
          border: none;
          padding: 0.75rem 1.5rem;
          font-family: 'Jost', sans-serif;
          font-size: var(--text-xs);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s var(--ease-out);
        }

        .global-error-page button:hover {
          background: var(--burgundy);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(125, 37, 53, 0.2);
        }

        .global-error-page small {
          display: block;
          margin-top: 1rem;
          color: var(--text-tertiary);
          font-size: 0.75rem;
        }
      `}</style>
      <div className="global-error-page">
        <h2>Application Error</h2>
        <p>
          An unexpected error occurred. Please try refreshing the page or
          <button onClick={resetErrorBoundary}>try again</button>.
        </p>
        {process.env.NODE_ENV === 'development' && (
          <p>
            <small>Error details: {error?.message || 'Unknown error'}</small>
          </p>
        )}
      </div>
    </div>
  );
}