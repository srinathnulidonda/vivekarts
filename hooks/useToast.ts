// hooks/useToast.ts

'use client';

import { useState } from 'react';

export const useToast = (): {
    show: boolean;
    showToast: () => void;
} => {
    const [show, setShow] = useState(false);

    const showToast = () => {
        setShow(true);
        setTimeout(() => setShow(false), 4500);
    };

    return { show, showToast };
};