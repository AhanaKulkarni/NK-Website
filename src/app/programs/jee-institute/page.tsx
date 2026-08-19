import React from 'react';
import styles from '@/app/about/about.module.css';
import { EnquirySection } from '@/components/shared/EnquirySection';
import { ClassesAccordion } from '@/components/ui/Accordion';

export const metadata = {
  title: 'Best JEE-Main Institute | NK Academy',
  description: 'Unlock your academic potential with the Best JEE-Main Institute at NK Academy.',
};

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className={styles.title} style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>Best JEE-Main Institute</h1>
          <p className={styles.subtitle}>
            Home » <span style={{ color: 'var(--color-accent)' }}>Best JEE-Main Institute</span>
          </p>
        </div>
      </div>
      
      <div className="container" style={{ padding: '4rem 0', maxWidth: '900px' }}>
        <h2 style={{ color: 'var(--color-primary)', textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
          Unlock Your Academic Potential with the Best JEE-Main Institute in Mumbai
        </h2>
        
        <p style={{ color: 'var(--color-supporting)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          If you are looking for the Best JEE-Main Institute in Mumbai, NK Academy is your ideal destination. With a focus on providing quality education, NK Academy offers a nurturing environment for students aiming to excel in top tier engineering entrance exams. The academy's experienced faculty, structured courses, and personalized attention ensure that students are well-prepared to face the challenges ahead.
        </p>

        <h3 style={{ color: 'var(--color-primary)', fontSize: '2rem', marginBottom: '1.5rem', marginTop: '3rem' }}>
          Why Choose NK Academy for JEE-Main Institute?
        </h3>
        
        <p style={{ color: 'var(--color-supporting)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          When it comes to preparing for crucial exams, selecting the right coaching institute is crucial. NK Academy stands out as one of the top choices in Mumbai due to its impeccable track record and commitment to academic excellence. The academy offers coaching for all major subjects with faculty members who are experts in their fields, ensuring that students receive the best possible guidance.
        </p>
        
        <p style={{ color: 'var(--color-supporting)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          At NK Academy, the focus is not just on rote learning, but on conceptual clarity and application. The academy's teaching methods are designed to cater to the unique learning needs of every student, building confidence and deep subject knowledge.
        </p>
      </div>
      
      <ClassesAccordion />
      <EnquirySection />
    </div>
  );
}
