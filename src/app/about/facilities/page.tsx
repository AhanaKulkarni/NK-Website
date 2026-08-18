import React from 'react';
import styles from '../about.module.css';

export const metadata = {
  title: 'Facilities | NK Academy',
  description: 'Explore the world-class facilities at NK Academy.',
};

export default function FacilitiesPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Campus Facilities</h1>
          <p className={styles.subtitle}>
            We provide a conducive learning environment equipped with modern amenities.
          </p>
        </div>
        
        <div className={styles.contentSection}>
          <p style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-supporting)' }}>
            [Content to be updated with photos of AC classrooms, library, and other infrastructure]
          </p>
        </div>
      </div>
    </div>
  );
}
