// data/featured-artworks.ts

export interface FeaturedArtwork {
    title: string;
    image: string;
    category: string;
}

export const featuredArtworks: FeaturedArtwork[] = [
    {
        title: "Anniversary Portrait",
        image: "/assets/featured/1.jpg",
        category: "Couple"
    },
    {
        title: "Golden Years",
        image: "/assets/featured/2.jpg",
        category: "Memorial"
    },
    {
        title: "Best Friends Forever",
        image: "/assets/featured/3.jpg",
        category: "Pet"
    },
    {
        title: "Family Bonds",
        image: "/assets/featured/4.jpg",
        category: "Family"
    },
    {
        title: "Childhood Innocence",
        image: "/assets/featured/5.jpg",
        category: "Portrait"
    },
    {
        title: "Eternal Love",
        image: "/assets/featured/6.jpg",
        category: "Couple"
    }
];