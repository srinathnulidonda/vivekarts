// lib/constants.ts

// Call this from app/layout.tsx (server component) to catch missing vars early
export const validateEnvVars = (): void => {
    const required = [
        'NEXT_PUBLIC_SITE_NAME',
        'NEXT_PUBLIC_SITE_URL',
        'NEXT_PUBLIC_WHATSAPP_NUMBER',
        'NEXT_PUBLIC_INSTAGRAM_HANDLE',
        'NEXT_PUBLIC_EMAIL',
        'NEXT_PUBLIC_PHONE',
    ] as const;

    const missing = required.filter((key) => !process.env[key]);
    if (missing.length > 0) {
        throw new Error(`Missing environment variables: ${missing.join(', ')}`);
    }
};

export const CONTACT = {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '',
    whatsappLink: (message = "Hi! I'd like to order a custom portrait.") =>
        `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? '',
    instagramUrl: `https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? ''}`,
    email: process.env.NEXT_PUBLIC_EMAIL ?? '',
    phone: process.env.NEXT_PUBLIC_PHONE ?? '',
    location: 'Hyderabad, Telangana',
} as const;

export const SITE = {
    name: process.env.NEXT_PUBLIC_SITE_NAME ?? '',
    title: `${process.env.NEXT_PUBLIC_SITE_NAME ?? ''} — Custom Portrait Artist, Hyderabad`,
    description: 'Hand-drawn pencil portraits for couples, families, pets, and memorial tributes. Preserving memories through custom artwork.',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? '',
} as const;

export const STATS = {
    portraitsDelivered: '500+',
    turnaroundDays: '7–10',
    shipping: 'Pan-India',
    quality: '100% Handcrafted',
} as const;