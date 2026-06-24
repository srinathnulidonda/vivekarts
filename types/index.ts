// types/index.ts

export interface GalleryItem {
    id: number;
    category: string;
    name: string;
    gradientClass: string;
    minHeight: string;
}

export interface Testimonial {
    id: number;
    name: string;
    location: string;
    rating: number;
    text: string;
    initial: string;
}

export interface CustomerReaction {
    image: string;
    alt: string;
    type: 'delivered' | 'holding' | 'story' | 'whatsapp';
    caption?: string;
    customer?: string;
}

export interface FeaturedArtwork {
    title: string;
    image: string;
    category: string;
}

export interface Service {
    title: string;
    description: string;
    image: string;
}

export interface Metric {
    name: string;
    value: number;
    delta: number;
    id: string;
    entries: PerformanceEntry[];
}