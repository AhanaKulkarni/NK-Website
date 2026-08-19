import React from 'react';
import styles from '../about.module.css';

export const metadata = {
  title: 'Our Facilities | NK Academy',
  description: 'Top-notch facilities provided by NK Academy for students.',
};

const facilitiesData = [
  {
    id: 1,
    title: 'Interactive Digital Board',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop', // Generic digital/tech board photo
  },
  {
    id: 2,
    title: 'Projector',
    img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop', // Generic projector/presentation photo
  },
  {
    id: 3,
    title: 'Proper Question Paper Exercises',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop', // Exams/Papers
  },
  {
    id: 4,
    title: 'Complete Coursebooks',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop', // Books
  },
  {
    id: 5,
    title: 'Dedicated Doubt Solving Sessions',
    img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop', // Students asking questions
  },
  {
    id: 6,
    title: 'Comfortable Learning Environment',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop', // Classroom
  }
];

export default function FacilitiesPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header} style={{ backgroundColor: '#25447a', color: 'white', padding: '4rem 0', backgroundImage: 'url(/hero_students.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className={styles.title} style={{ color: 'white', fontSize: '3.5rem', marginBottom: '0.5rem' }}>Facilities</h1>
          <p className={styles.subtitle} style={{ color: 'rgba(255,255,255,0.8)' }}>
            Home » <span style={{ color: 'var(--color-accent)' }}>Facilities</span>
          </p>
        </div>
      </div>
      
      <div className="container" style={{ padding: '4rem 0' }}>
        <h2 style={{ textAlign: 'center', color: '#25447a', fontSize: '2.5rem', marginBottom: '4rem' }}>
          NK Academy Offers Top-Notch Facilities & Accessories
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '3rem',
          justifyContent: 'center'
        }}>
          {facilitiesData.map((facility) => (
            <div key={facility.id} style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '100%', 
                height: '280px', 
                position: 'relative', 
                marginBottom: '1.5rem',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src={facility.img} 
                  alt={facility.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ color: '#e53935', fontSize: '1.5rem', fontWeight: '600' }}>
                {facility.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
