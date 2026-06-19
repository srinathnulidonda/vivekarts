// data/services.ts

export interface Service {
    title: string;
    description: string;
    image: string;
}

export const services: Service[] = [
    {
        title: "Pencil Portraits",
        description: "Realistic hand-drawn pencil artworks that capture every detail with precision and soul.",
        image: "/assets/services/pencil.jpg"
    },
    {
        title: "Couple Portraits",
        description: "Celebrate your love story with a timeless artwork that preserves your bond forever.",
        image: "/assets/services/couple.jpg"
    },
    {
        title: "Family Portraits",
        description: "Bring your entire family together in one beautifully composed hand-drawn portrait.",
        image: "/assets/services/family.jpg"
    },
    {
        title: "Pet Portraits",
        description: "Honor your furry friend with a lifelike portrait that captures their unique personality.",
        image: "/assets/services/pet.jpg"
    },
    {
        title: "Memorial Portraits",
        description: "A heartfelt tribute to preserve the memory of your loved ones with grace and dignity.",
        image: "/assets/services/memorial.jpg"
    },
    {
        title: "Custom Gifts",
        description: "Create meaningful, personalized gifts for birthdays, anniversaries, and special occasions.",
        image: "/assets/services/gift.jpg"
    }
];