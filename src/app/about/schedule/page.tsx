import React from 'react';
import styles from '../about.module.css';

export const metadata = {
  title: 'Schedule & Timings | NK Academy',
  description: 'View the class schedules and batch timings at NK Academy.',
};

export default function SchedulePage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Class Schedules</h1>
          <p className={styles.subtitle}>
            Flexible batch timings designed to accommodate your academic needs.
          </p>
        </div>
        
        <div className={styles.contentSection}>
          <p style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-supporting)' }}>
            [Content to be updated with detailed timetables and batch slots]
          </p>
        </div>
      </div>
    </div>
  );
}
