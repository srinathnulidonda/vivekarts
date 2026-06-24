// components/Contact.tsx
'use client';

import React, { useState } from 'react';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';
import { useToast } from '@/hooks/useToast';
import Toast from './Toast';
import { CONTACT } from '@/lib/constants';

export default function Contact(): React.ReactNode {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        type: '',
        message: ''
    });
    const { show, showToast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.type) {
            alert('Please fill in your name, phone number, and artwork type.');
            return;
        }

        const msg = `Hi Vivek! New artwork enquiry.%0A%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0AEmail: ${encodeURIComponent(formData.email)}%0AArtwork Type: ${encodeURIComponent(formData.type)}%0ADetails: ${encodeURIComponent(formData.message)}`;
        window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, '_blank');
        showToast();

        // Reset form
        setFormData({ name: '', phone: '', email: '', type: '', message: '' });
    };

    return (
        <>
            <section className="contact-section" id="contact">
                <Container>
                    <div className="contact-inner">
                        <SectionHeader
                            eyebrow="Commission Your Artwork"
                            title="Let's Create Something "
                            titleEm="Just for You"
                            subtitle="Share your vision and Vivek will reply within 24 hours."
                            centered
                        />

                        <form className="contact-form reveal" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Full name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">WhatsApp Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="+91 xxxxx xxxxx"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="type">Type of Artwork</label>
                                <select
                                    id="type"
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    required
                                >
                                    <option value="">Choose a style</option>
                                    <option value="Pencil Portrait">Pencil Portrait</option>
                                    <option value="Glass Engraving">Glass Engraving</option>
                                    <option value="Spiritual Painting">Spiritual Painting</option>
                                    <option value="Custom">Custom Request</option>
                                </select>
                            </div>

                            <div className="form-group full">
                                <label htmlFor="message">Tell Us About Your Vision</label>
                                <textarea
                                    id="message"
                                    placeholder="Occasion, people, size..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={4}
                                />
                            </div>

                            <button type="submit" className="submit-button">
                                Send Enquiry <i className="bi bi-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                </Container>
            </section>

            <Toast show={show} />

            <style jsx>{`
                .contact-section {
                    padding: var(--space-section) 0;
                    background: var(--linen);
                    position: relative;
                    overflow: hidden;
                }

                .contact-inner {
                    max-width: 720px;
                    margin: 0 auto;
                }

                .contact-form {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                    margin-top: var(--space-8);
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .form-group.full {
                    grid-column: span 2;
                }

                .form-group label {
                    font-size: 0.625rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--text-tertiary);
                    font-weight: 600;
                }

                .form-group input,
                .form-group select,
                .form-group textarea {
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

                .form-group input::placeholder,
                .form-group textarea::placeholder {
                    color: var(--text-tertiary);
                }

                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                    border-color: var(--burgundy);
                    box-shadow: 0 0 0 3px rgba(125, 37, 53, 0.08);
                }

                .form-group textarea {
                    resize: vertical;
                    min-height: 110px;
                }

                .submit-button {
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
                    transition: all 0.35s var(--ease-out);
                    margin-top: var(--space-2);
                    border-radius: 4px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }

                .submit-button:hover {
                    background: var(--burgundy);
                    transform: translateY(-3px);
                    box-shadow: 0 12px 32px rgba(125, 37, 53, 0.2);
                }

                .submit-button:active {
                    transform: translateY(-1px);
                }

                @media(max-width: 768px) {
                    .contact-section {
                        padding: var(--space-section-mobile) 0;
                    }

                    .contact-form {
                        grid-template-columns: 1fr;
                    }

                    .form-group.full,
                    .submit-button {
                        grid-column: span 1;
                    }
                }
            `}</style>
        </>
    );
}