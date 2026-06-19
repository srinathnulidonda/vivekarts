// data/customer-reactions.ts

export interface CustomerReaction {
    image: string;
    alt: string;
    type: 'delivered' | 'holding' | 'story' | 'whatsapp';
    caption?: string;
    customer?: string;
}

export const customerReactions: CustomerReaction[] = [
    {
        image: "/assets/reactions/delivered-1.jpg",
        alt: "Customer receiving portrait delivery",
        type: "delivered",
        caption: "The packaging was so beautiful! Can't wait to open it.",
        customer: "Priya S."
    },
    {
        image: "/assets/reactions/holding-1.jpg",
        alt: "Customer holding finished portrait",
        type: "holding",
        caption: "This is beyond perfect! Every detail is captured beautifully.",
        customer: "Rahul M."
    },
    {
        image: "/assets/reactions/story-1.jpg",
        alt: "Instagram story mention",
        type: "story",
        caption: "Best anniversary gift ever! Thank you Vivek Artline!",
        customer: "Anjali K."
    },
    {
        image: "/assets/reactions/whatsapp-1.jpg",
        alt: "WhatsApp message screenshot",
        type: "whatsapp",
        caption: "My mom cried happy tears when she saw it. Priceless moment!",
        customer: "Arjun P."
    },
    {
        image: "/assets/reactions/holding-2.jpg",
        alt: "Customer with pet portrait",
        type: "holding",
        caption: "You captured Bruno's soul! This will be treasured forever.",
        customer: "Sneha R."
    },
    {
        image: "/assets/reactions/delivered-2.jpg",
        alt: "Unboxing moment",
        type: "delivered",
        caption: "The attention to detail is incredible. Worth every penny!",
        customer: "Vikram D."
    }
];