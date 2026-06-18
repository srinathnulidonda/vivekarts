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