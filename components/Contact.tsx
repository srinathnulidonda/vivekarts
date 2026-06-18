//components/Contact.tsx

'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/useToast';
import Toast from './Toast';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', type: '', message: '' });
    const { show, showToast } = useToast();

    const handleSubmit = () => {
        if (!formData.name || !formData.phone || !formData.type) {
            alert('Please fill in your name, phone number, and artwork type.');
            return;
        }

        const msg = `Hi Vivek! New artwork enquiry.%0A%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0AEmail: ${encodeURIComponent(formData.email)}%0AArtwork Type: ${encodeURIComponent(formData.type)}%0ADetails: ${encodeURIComponent(formData.message)}`;
        window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`, '_blank');
        showToast();
    };

    return (
        <>
            <section className="contact-sec" id="contact">
                <div className="contact-inner">
                    <div className="eyebrow reveal">Commission Your Artwork</div>
                    <h2 className="sec-title reveal">Let's Create Something<br /><em>Just for You</em></h2>
                    <p className="contact-sub reveal">Share your vision and Vivek will reply within 24 hours.</p>

                    <div className="c-form reveal">
                        <div className="fg">
                            <label>Your Name</label>
                            <input type="text" placeholder="Full name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        </div>
                        <div className="fg">
                            <label>WhatsApp Number</label>
                            <input type="tel" placeholder="+91 xxxxx xxxxx" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                        </div>
                        <div className="fg">
                            <label>Email Address</label>
                            <input type="email" placeholder="your@email.com" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </div>
                        <div className="fg">
                            <label>Type of Artwork</label>
                            <select onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                                <option value="">Choose a style</option>
                                <option>Pencil Portrait</option>
                                <option>Glass Engraving</option>
                                <option>Spiritual Painting</option>
                            </select>
                        </div>
                        <div className="fg full">
                            <label>Tell Us About Your Vision</label>
                            <textarea placeholder="Occasion, people, size..." onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                        </div>
                        <button className="c-submit" onClick={handleSubmit}>
                            Send Enquiry <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </section>

            <Toast show={show} />

            <style jsx>{`
                /*contact*/
                .contact-sec {
                    padding: var(--space-16) max(8vw, calc((100% - var(--max-width)) / 2));
                    background: var(--linen);
                    position: relative;
                    overflow: hidden;
                }

                .contact-inner {
                    max-width: 720px;
                    margin: 0 auto;
                    text-align: center;
                    position: relative;
                    z-index: 2;
                }

                .contact-inner .eyebrow {
                    justify-content: center;
                }

                .contact-inner .eyebrow::before {
                    display: none;
                }

                .contact-sub {
                    font-size: var(--text-base);
                    color: var(--text-secondary);
                    line-height: 1.8;
                    margin-bottom: var(--space-8);
                    font-weight: 400;
                }

                .c-form {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                    text-align: left;
                }

                .fg {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }

                .fg.full {
                    grid-column: span 2;
                }

                .fg label {
                    font-size: 0.625rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--text-tertiary);
                    font-weight: 600;
                }

                .fg input, .fg select, .fg textarea {
                    background: var(--parchment);
                    border: 1.5px solid var(--border-subtle);
                    color: var(--text-primary);
                    padding: 0.85rem 1.1rem;
                    font-family: 'Jost', sans-serif;
                    font-size: var(--text-sm);
                    outline: none;
                    transition: all 0.3s;
                    border-radius: 4px;
                }

                .fg input::placeholder, .fg textarea::placeholder {
                    color: var(--text-tertiary);
                }

                .fg input:focus, .fg select:focus, .fg textarea:focus {
                    border-color: var(--burgundy);
                    box-shadow: 0 0 0 3px rgba(125, 37, 53, 0.08);
                }

                .fg select option {
                    background: var(--parchment);
                    color: var(--text-primary);
                }

                .fg textarea {
                    resize: vertical;
                    min-height: 110px;
                }

                .c-submit {
                    grid-column: span 2;
                    background: var(--sienna);
                    color: var(--parchment);
                    border: none;
                    padding: 1.1rem;
                    font-family: 'Jost', sans-serif;
                    font-size: var(--text-xs);
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    font-weight: 700;
                    cursor: pointer;
                    width: 100%;
                    transition: all 0.35s var(--ease-out);
                    margin-top: var(--space-2);
                    border-radius: 4px;
                }

                .c-submit:hover {
                    background: var(--burgundy);
                    transform: translateY(-3px);
                    box-shadow: 0 12px 32px rgba(125, 37, 53, 0.2);
                }

                /*responsive*/
                @media(max-width:900px) {
                    .c-form {
                        grid-template-columns: 1fr;
                    }
                    .fg.full {
                        grid-column: span 1;
                    }
                    .c-submit {
                        grid-column: span 1;
                    }
                }
            `}</style>
        </>
    );
}