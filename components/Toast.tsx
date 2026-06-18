//components/Toast.tsx

interface Props {
    show: boolean;
}

export default function Toast({ show }: Props) {
    return (
        <>
            <div id="toast" className={show ? 'show' : ''}>
                <i className="bi bi-check-circle-fill"></i> Enquiry sent! Vivek will reply within 24 hours.
            </div>

            <style jsx>{`
                /*toast*/
                #toast {
                    position: fixed;
                    bottom: var(--space-6);
                    left: 50%;
                    transform: translateX(-50%) translateY(100px);
                    background: var(--sienna);
                    color: var(--parchment);
                    padding: 1rem 2rem;
                    font-size: var(--text-sm);
                    font-weight: 600;
                    z-index: 950;
                    transition: transform 0.4s var(--ease-out);
                    white-space: nowrap;
                    pointer-events: none;
                    border-radius: 6px;
                    box-shadow: 0 12px 40px rgba(184, 92, 42, 0.3);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                #toast.show {
                    transform: translateX(-50%) translateY(0);
                }
            `}</style>
        </>
    );
}