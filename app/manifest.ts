// app/manifest.ts
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vivek Artline',
    short_name: 'Vivek Artline',
    description: 'Hand-drawn pencil portraits preserving memories for couples, families, pets, and loved ones.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F0E8DC',
    theme_color: '#7D2535',
    orientation: 'portrait-primary',
    categories: ['lifestyle', 'art', 'design'],
    icons: [
      { src: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { src: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}