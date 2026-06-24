// app/gallery/gallery-client.tsx
'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import Footer from '@/components/Footer';
import { galleryItems } from '@/data/gallery';
import { useLightbox } from '@/hooks/useLightbox';
import Lightbox from '@/components/Lightbox';
import Button from '@/components/common/Button';

export default function GalleryPage(): React.ReactNode {
  const [activeFilter, setActiveFilter] = useState('all');
  const { isOpen, currentIndex, open, close, next, prev, currentItem } = useLightbox(galleryItems);

  const filteredItems = React.useMemo(() =>
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter(item => item.category === activeFilter),
  [activeFilter]);

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'portrait', label: 'Portraits' },
    { key: 'couple', label: 'Couples' },
    { key: 'family', label: 'Families' },
    { key: 'pet', label: 'Pets' },
    { key: 'memorial', label: 'Memorial' },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="gallery-hero">
        <Container>
          <div className="hero-content">
            <div className="hero-eyebrow">Explore Our Work</div>
            <h1 className="hero-title">
              Portrait <em>Gallery</em>
            </h1>
            <p className="hero-subtitle">
              A curated collection of custom pencil portraits showcasing our artistry and attention to detail.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" id="gallery">
        <Container>
          <div className="gallery-header reveal">
            <SectionHeader
              eyebrow="Our Work"
              title="Portrait "
              titleEm="Gallery"
            />
            <div className="gallery-filters">
              {filters.map(filter => (
                <button
                  key={filter.key}
                  className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                  aria-pressed={activeFilter === filter.key}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </Container>

        <div className="gallery-grid-wrapper">
          <Container>
            <div className="gallery-grid">
              {galleryItems.map((item, index) => {
                const isVisible = activeFilter === 'all' || item.category === activeFilter;
                return (
                  <div
                    key={item.id}
                    className={`gallery-item reveal ${isVisible ? 'visible' : 'hidden'}`}
                    data-cat={item.category}
                    onClick={() => isVisible && open(index)}
                    style={{
                      animationDelay: `${index * 0.05}s`
                    }}
                  >
                    <div className={`gallery-art ${item.gradientClass}`} style={{ minHeight: item.minHeight }}></div>
                    <div className="gallery-overlay">
                      <div className="gallery-info">
                        <div className="gallery-cat">{item.category}</div>
                        <div className="gallery-name">{item.name}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>

        <Container>
          <div className="gallery-footer reveal">
            <p className="gallery-tagline">Portraits That Last a Lifetime</p>
            <div className="gallery-cta">
              <Button
                href="https://www.instagram.com/vivek_artline"
                variant="outline"
                icon="arrow-right"
                external
              >
                More on Instagram
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {isOpen && <Lightbox {...{ isOpen, currentIndex, open, close, next, prev, currentItem }} />}
    </>
  );
}