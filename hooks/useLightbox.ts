// hooks/useLightbox.ts
'use client';

import { useState, useEffect } from 'react';
import { GalleryItem } from '@/types';

export const useLightbox = (items: GalleryItem[]): {
    isOpen: boolean;
    currentIndex: number;
    open: (index: number) => void;
    close: () => void;
    next: () => void;
    prev: () => void;
    currentItem: GalleryItem | undefined
} => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const open = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const close = () => {
        setIsOpen(false);
        document.body.style.overflow = '';
    };

    const next = () => {
        setCurrentIndex((prev) => Math.min(parseInt((prev + 1).toString()), items.length - 1));
    };

    const prev = () => {
        setCurrentIndex((prev) => Math.max(parseInt((prev - 1).toString()), 0));
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return {
        isOpen,
        currentIndex,
        open,
        close,
        next,
        prev,
        currentItem: items[currentIndex]
    };
};