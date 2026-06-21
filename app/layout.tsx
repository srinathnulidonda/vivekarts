// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import PageLoader from '@/components/common/PageLoader';

export const metadata: Metadata = {
  title: 'Vivek Artline — Custom Portrait Artist, Hyderabad',
  description:
    'Hand-drawn pencil portraits for couples, families, pets, and memorial tributes. Preserving memories through custom artwork.',
  keywords:
    'portrait artist, pencil portraits, custom artwork, Hyderabad, couple portraits, pet portraits',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Vivek Artline — Custom Portrait Artist',
    description: 'Hand-drawn pencil portraits preserving your cherished memories',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <style>{`@keyframes __va_spin__ { to { transform: rotate(360deg); } }`}</style>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>

      <body>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}