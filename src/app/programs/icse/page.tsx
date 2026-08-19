import React from 'react';
import styles from '@/app/about/about.module.css';
import { EnquirySection } from '@/components/shared/EnquirySection';

export const metadata = {
  title: 'Best ICSE Coaching Classes | NK Academy',
  description: 'Unlock your academic potential with the Best ICSE Coaching Classes at NK Academy.',
};

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className={styles.title} style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>Best ICSE Coaching Classes</h1>
          <p className={styles.subtitle}>
            Home » <span style={{ color: 'var(--color-accent)' }}>Best ICSE Coaching Classes</span>
          </p>
        </div>
      </div>
      
      <div className="container" style={{ padding: '4rem 0', maxWidth: '900px' }}>
        <h2 style={{ color: 'var(--color-primary)', textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
          Unlock Your Academic Potential with the Best ICSE Coaching Classes in Borivali
        </h2>
        
        <p style={{ color: 'var(--color-supporting)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          If you are looking for the Best ICSE Coaching Classes in Borivali, NK Academy is your ideal destination. With a focus on providing quality education, NK Academy offers a nurturing environment for students aiming to excel in the rigorous ICSE curriculum. The academy's experienced faculty, structured courses, and personalized attention ensure that students are well-prepared to face the challenges ahead.
        </p>

        <h3 style={{ color: 'var(--color-primary)', fontSize: '2rem', marginBottom: '1.5rem', marginTop: '3rem' }}>
          Why Choose NK Academy for ICSE Coaching?
        </h3>
        
        <p style={{ color: 'var(--color-supporting)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          When it comes to preparing for crucial exams, selecting the right coaching institute is crucial. NK Academy stands out as one of the top choices in Borivali due to its impeccable track record and commitment to academic excellence. The academy offers coaching for all major subjects with faculty members who are experts in their fields, ensuring that students receive the best possible guidance.
        </p>
        
        <p style={{ color: 'var(--color-supporting)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          At NK Academy, the focus is not just on rote learning, but on conceptual clarity and application. The academy's teaching methods are designed to cater to the unique learning needs of every student, building confidence and deep subject knowledge.
        </p>
      </div>
      <EnquirySection />
    </div>
  );
}
