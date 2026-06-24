// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import PageLoader from '@/components/common/PageLoader';
import { SITE, validateEnvVars } from '@/lib/constants';

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  keywords:
    'portrait artist, pencil portraits, custom artwork, Hyderabad, couple portraits, pet portraits',
  icons: {
    icon: '/favicon.png', // Next.js auto-injects <link rel="icon"> from this — no manual tag needed
  },
  openGraph: {
    title: `${SITE.name} — Custom Portrait Artist`,
    description: 'Hand-drawn pencil portraits preserving your cherished memories',
    type: 'website',
  },
  // manifest is handled automatically by app/manifest.ts (MetadataRoute.Manifest convention)
  // Next.js serves it at /manifest.webmanifest and injects the <link> tag — no manual tag needed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  validateEnvVars(); // Runs at request time (after env is loaded), not at module evaluation time

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Jost:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          rel="stylesheet"
        />
        <style>{`@keyframes __va_spin__ { to { transform: rotate(360deg); } }`}</style>
        {/* Removed: <link rel="manifest"> — auto-injected by Next.js from app/manifest.ts  */}
        {/* Removed: <link rel="icon"> — auto-injected by Next.js from metadata.icons above */}
      </head>

      <body>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}