import React from 'react';
import styles from '../about.module.css';

export const metadata = {
  title: 'Our Faculties | NK Academy',
  description: 'Meet the expert faculties at NK Academy.',
};

const faculties = [
  // Left Column (conceptually)
  { name: 'Mr Nanad Kishore Mishra', qual: 'M.A, Bed, MP Set, CTET' },
  { name: 'Prof. Singh', qual: 'Retd. Principal' },
  { name: 'Ms. Rao', qual: 'M.A.B.Ed' },
  { name: 'Ms. Thatte', qual: 'TESOL/TEFL Certified English Language Trainer' },
  { name: 'Dr. Mehta', qual: 'BHMS (Homoeopathic Doctor)' },
  { name: 'Ms. Arora', qual: 'M.A B.Ed. LLB' },
  { name: 'Mr Sachin Kadam', qual: 'Bsc BIT' },
  { name: 'Mrs. Marolia', qual: 'MAB.ed in Sanskrit' },
  { name: 'Ms. Tulsi', qual: 'M.Com E.C.C.Ed B.Ed. TTC' },
  { name: 'Ms. Yadav', qual: 'M.A.B.Ed Hindi' },
  { name: 'Mrs. Parkar', qual: 'Bsc-IT, MSc-IT,MBA, B.ED' },
  { name: 'Ms. Tibrewala', qual: 'B.A' },
  { name: 'Ms. Parmar', qual: 'Subjects specialisation – English, Social studies' },
  { name: 'Ms. Surve', qual: 'B.Com, B. Ed(Maths & Economics), PPTTC, CTET Part1' },
  { name: 'Ms. Shinde', qual: 'M.Sc, B.Ed.' },
  { name: 'Mrs. Bhogale', qual: 'B.A, D.Ed.' },
  { name: 'Mr. Thanvi', qual: 'CS, Mcom, LLB' },
  { name: 'Mr. Singh', qual: 'M.Sc, B.Ed' },
  { name: 'Mr. Nair', qual: 'M.Sc, B.Ed' },
  { name: 'Mr. Angne', qual: 'B.E. (Mechanical Eng.)' },
  
  // Right Column (conceptually)
  { name: 'Mr. Mishra', qual: 'B.Ed, PET' },
  { name: 'Mrs. Gore', qual: 'BA MA' },
  { name: 'Mrs. Naik', qual: 'BSc. BED, DE' },
  { name: 'Mrs. Mundada', qual: 'M.A.' },
  { name: 'Mrs. Menon', qual: 'M.AB.Ed[Eng]' },
  { name: 'Mrs. Kekunnaya', qual: 'Science and English Literature' },
  { name: 'Mr. Tiwari', qual: 'Director' },
  { name: 'Mrs. Pai', qual: 'M.Sc' },
  { name: 'Mrs. Jain', qual: 'M.Sc. B.Ed.' },
  { name: 'Mr. Sharma', qual: 'M.A, B.Ed, CTET, Sanskrit, Hindi' },
  { name: 'Mr. Dixit', qual: 'M.A, B.Ed Sanskrit, Hindi' },
  { name: 'Mrs. Thaker', qual: 'M.Com Inter CA(1)' },
  { name: 'Mr. Maurya', qual: 'M.Sc. B.Ed.' },
  { name: 'Mr. Singh ', qual: 'M.A. (English) B.ed' }, // Added space to make key unique or just use index
  { name: 'Mrs. Srivastava', qual: 'BA, B.Ed' },
  { name: 'Mr. Vaskar', qual: 'M.Sc.-Physics, M.M.S.-Marketing' }
];

export default function FacultiesPage() {
  const leftColumn = faculties.slice(0, 20);
  const rightColumn = faculties.slice(20);

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header} style={{ backgroundColor: '#25447a', color: 'white', padding: '4rem 0', backgroundImage: 'url(/hero_students.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className={styles.title} style={{ color: 'white', fontSize: '3.5rem', marginBottom: '0.5rem' }}>Faculties</h1>
          <p className={styles.subtitle} style={{ color: 'rgba(255,255,255,0.8)' }}>
            Home » <span style={{ color: 'var(--color-accent)' }}>Faculties</span>
          </p>
        </div>
      </div>
      
      <div className="container" style={{ padding: '4rem 0' }}>
        <h2 style={{ textAlign: 'center', color: '#25447a', fontSize: '2.5rem', marginBottom: '3rem' }}>
          Faculty Member School Section
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Left Column */}
          <div style={{ backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '8px' }}>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {leftColumn.map((faculty, i) => (
                <li key={i} style={{ marginBottom: '1.5rem', color: '#25447a', fontSize: '1.2rem', fontWeight: '500' }}>
                  {faculty.name}
                  <div style={{ color: '#333', fontSize: '1rem', fontWeight: '400', marginTop: '0.2rem', marginLeft: '5px' }}>
                    {faculty.qual}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div style={{ backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '8px' }}>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {rightColumn.map((faculty, i) => (
                <li key={i} style={{ marginBottom: '1.5rem', color: '#25447a', fontSize: '1.2rem', fontWeight: '500' }}>
                  {faculty.name}
                  <div style={{ color: '#333', fontSize: '1rem', fontWeight: '400', marginTop: '0.2rem', marginLeft: '5px' }}>
                    {faculty.qual}
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
