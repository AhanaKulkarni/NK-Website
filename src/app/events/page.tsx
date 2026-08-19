'use client';
import React, { useState } from 'react';
import styles from '../about/about.module.css';
import Image from 'next/image';

const eventsData = [
  { id: 1, category: 'Farewell Celebration', src: '/events/farewell1-scaled.jpeg' },
  { id: 2, category: 'Farewell Celebration', src: '/events/farewell2-scaled.jpeg' },
  { id: 3, category: 'Farewell Celebration', src: '/events/farewell3-scaled.jpeg' },
  { id: 4, category: 'NK Academy Premiere League', src: '/events/NKPL1-scaled.jpeg' },
  { id: 5, category: 'NK Academy Premiere League', src: '/events/NKPL2-scaled.jpeg' },
  { id: 6, category: 'NK Academy Premiere League', src: '/events/NKPL3-scaled.jpeg' },
  { id: 7, category: 'Picnics', src: '/events/1-1.jpeg' },
  { id: 8, category: 'Picnics', src: '/events/2.jpeg' },
  { id: 9, category: 'Picnics', src: '/events/3.jpeg' },
];

const categories = ['All', 'Farewell Celebration', 'NK Academy Premiere League', 'Picnics'];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredEvents = activeTab === 'All' 
    ? eventsData 
    : eventsData.filter(event => event.category === activeTab);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className={styles.title} style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>NK Academy Events</h1>
          <p className={styles.subtitle} style={{ color: 'var(--color-accent)' }}>
            Home » <span style={{ color: 'var(--color-accent)' }}>NK Academy Events</span>
          </p>
        </div>
      </div>
      
      <div className="container" style={{ padding: '4rem 0' }}>
        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              style={{
                padding: '12px 24px',
                background: activeTab === cat ? 'var(--color-accent)' : 'transparent',
                color: activeTab === cat ? 'white' : 'var(--color-primary)',
                border: activeTab === cat ? 'none' : '1px solid rgba(0,0,0,0.1)',
                borderRadius: '4px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === cat ? '0 4px 10px rgba(229,57,53,0.3)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {filteredEvents.map(event => (
            <div key={event.id} style={{ 
              position: 'relative', 
              width: '100%', 
              height: '250px', 
              borderRadius: '8px', 
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              <Image 
                src={event.src} 
                alt={event.category}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
