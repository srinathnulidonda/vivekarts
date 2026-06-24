// components/common/ImagePlaceholder.tsx
'use client';

import { ImageProps } from 'next/image';

interface ImagePlaceholderProps extends Omit<ImageProps, 'src'> {
    width?: number;
    height?: number;
    className?: string;
}

export default function ImagePlaceholder({
    width,
    height,
    className,
    ...props
}: ImagePlaceholderProps) {
    return (
        <>
            <div
                style={{
                    position: 'relative',
                    width: width ? `${width}px` : '100%',
                    height: height ? `${height}px` : '200px',
                    backgroundColor: '#f0e8dc',
                    overflow: 'hidden'
                }}
                className={className}
            >
                {/* Shimmer effect */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        animation: 'shimmer 2s infinite'
                    }}
                />

                {/* Vivekartline watermark */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        color: 'rgba(125, 37, 53, 0.3)',
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '12px',
                        fontStyle: 'italic',
                        pointerEvents: 'none'
                    }}
                >
                    vivekartline
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% {
                        background-position: -200% 0;
                    }
                    100% {
                        background-position: 200% 0;
                    }
                }
            `}</style>
        </>
    );
}