import React from 'react';
import styles from '../about/about.module.css';

export const metadata = {
  title: 'Events | NK Academy',
  description: 'Discover the latest events, seminars, and activities at NK Academy.',
};

export default function EventsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>NK Academy Events</h1>
          <p className={styles.subtitle}>
            Beyond academics. Discover our extra-curricular activities, seminars, and celebrations.
          </p>
        </div>
        
        <div className={styles.contentSection}>
          <p style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-supporting)' }}>
            [Content to be updated with event galleries and upcoming schedules]
          </p>
        </div>
      </div>
    </div>
  );
}
