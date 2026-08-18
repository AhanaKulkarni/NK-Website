import React from 'react';
import styles from '../about.module.css';

export const metadata = {
  title: 'Our Faculties | NK Academy',
  description: 'Meet the expert faculties at NK Academy.',
};

export default function FacultiesPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Our Expert Faculties</h1>
          <p className={styles.subtitle}>
            Learn from the best. Our dedicated team of educators brings years of experience and a passion for teaching.
          </p>
        </div>
        
        <div className={styles.contentSection}>
          <p style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-supporting)' }}>
            [Content to be updated with faculty profiles, photos, and achievements]
          </p>
        </div>
      </div>
    </div>
  );
}
