// components/common/Button.tsx
'use client';

interface ButtonProps {
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
    icon?: string;
    external?: boolean;
}

export default function Button({
    href,
    onClick,
    variant = 'primary',
    children,
    icon,
    external = false
}: ButtonProps) {
    const className = `btn btn-${variant}`;

    const content = (
        <>
            {children}
            {icon && <i className={`bi bi-${icon}`}></i>}
        </>
    );

    const styles = `
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-size: var(--text-xs);
            letter-spacing: 0.12em;
            text-transform: uppercase;
            padding: 0.9rem 2rem;
            text-decoration: none;
            font-weight: 600;
            border-radius: 50px;
            transition: all 0.35s var(--ease-out);
            border: none;
            cursor: pointer;
            font-family: 'Jost', sans-serif;
        }

        .btn-primary {
            background: var(--sienna);
            color: var(--parchment);
            box-shadow: 0 2px 8px rgba(184, 92, 42, 0.2);
        }

        .btn-primary:hover {
            background: var(--burgundy);
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(125, 37, 53, 0.24);
        }

        .btn-secondary {
            background: transparent;
            color: var(--charcoal);
            border: 1.5px solid var(--border-medium);
        }

        .btn-secondary:hover {
            background: var(--burgundy);
            color: var(--parchment);
            border-color: var(--burgundy);
            transform: translateY(-2px);
        }

        .btn-outline {
            background: transparent;
            color: var(--burgundy);
            border: 1.5px solid var(--border-medium);
            border-radius: 4px;
        }

        .btn-outline:hover {
            background: var(--burgundy);
            color: var(--parchment);
            border-color: var(--burgundy);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px var(--shadow-warm-lg);
        }

        .btn i {
            transition: transform 0.3s;
        }

        .btn:hover i {
            transform: translateX(4px);
        }
    `;

    if (href) {
        return (
            <>
                <a
                    href={href}
                    className={className}
                    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                    {content}
                </a>
                <style jsx>{styles}</style>
            </>
        );
    }

    return (
        <>
            <button onClick={onClick} className={className}>
                {content}
            </button>
            <style jsx>{styles}</style>
        </>
    );
}