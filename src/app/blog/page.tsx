import React from 'react';
import styles from '../about/about.module.css';

export const metadata = {
  title: 'Blog | NK Academy',
  description: 'Read the latest educational articles, tips, and news from NK Academy.',
};

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Our Blog</h1>
          <p className={styles.subtitle}>
            Insights, study tips, and the latest updates from the education world.
          </p>
        </div>
        
        <div className={styles.contentSection}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', padding: '2rem 0' }}>
            {/* Blog Post 1 */}
            <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ height: '200px', backgroundColor: 'var(--color-surface)' }}></div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>7 Reasons Why NK Academy is Still the Superior Choice</h3>
                <p style={{ color: 'var(--color-supporting)', fontSize: '0.9rem', marginBottom: '1rem' }}>Discover why we stand out for CBSE 10th Boards in Borivali.</p>
                <span style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.85rem' }}>Read More →</span>
              </div>
            </div>
            
            {/* Blog Post 2 */}
            <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ height: '200px', backgroundColor: 'var(--color-surface)' }}></div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>How to Prepare for HSC Board Exams</h3>
                <p style={{ color: 'var(--color-supporting)', fontSize: '0.9rem', marginBottom: '1rem' }}>Top strategies from our expert faculties to maximize your score.</p>
                <span style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.85rem' }}>Read More →</span>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ height: '200px', backgroundColor: 'var(--color-surface)' }}></div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Cracking NEET: A Beginner's Guide</h3>
                <p style={{ color: 'var(--color-supporting)', fontSize: '0.9rem', marginBottom: '1rem' }}>Everything you need to know to start your medical journey.</p>
                <span style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.85rem' }}>Read More →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
