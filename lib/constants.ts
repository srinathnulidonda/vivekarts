// lib/constants.ts (Update with complete values)
export const CONTACT = {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '91XXXXXXXXXX',
    whatsappLink: (message: string = "Hi! I'd like to order a custom portrait.") =>
        `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '91XXXXXXXXXX'}?text=${encodeURIComponent(message)}`,
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || 'vivek_artline',
    instagramUrl: `https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || 'vivek_artline'}`,
    email: process.env.NEXT_PUBLIC_EMAIL || 'info@vivekartline.com',
    phone: process.env.NEXT_PUBLIC_PHONE || '+911234567890',
    location: 'Hyderabad, Telangana',
} as const;

export const SITE = {
    name: 'Vivek Artline',
    title: 'Vivek Artline — Custom Portrait Artist, Hyderabad',
    description: 'Hand-drawn pencil portraits for couples, families, pets, and memorial tributes. Preserving memories through custom artwork.',
    url: 'https://vivekartline.com',
} as const;

export const STATS = {
    portraitsDelivered: '500+',
    turnaroundDays: '7–10',
    shipping: 'Pan-India',
    quality: '100% Handcrafted',
} as const;