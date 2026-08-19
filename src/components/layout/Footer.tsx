'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#25447a', color: 'white', paddingTop: '4rem', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr', gap: '2rem', marginBottom: '4rem' }}>
          
          {/* About Us */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 600, borderBottom: '2px solid var(--color-accent)', paddingBottom: '0.5rem', display: 'inline-block' }}>About Us</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2rem', color: 'rgba(255,255,255,0.8)' }}>
              At NK Academy, we hold a shared vision that places your child's future at the forefront of our mission.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--color-accent)" />
                <a href="mailto:nkacademymumbai@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>nkacademymumbai@gmail.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--color-accent)" />
                <a href="tel:+918879511601" style={{ color: 'white', textDecoration: 'none' }}>+91 88795 11601</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--color-accent)" />
                <a href="tel:+917506058113" style={{ color: 'white', textDecoration: 'none' }}>+91 75060 58113</a>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>FB</a>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>IG</a>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>LI</a>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>YT</a>
            </div>
          </div>

          {/* Our Courses */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 600, borderBottom: '2px solid var(--color-accent)', paddingBottom: '0.5rem', display: 'inline-block' }}>Our Courses</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
              <Link href="/programs/ssc" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>SSC</Link>
              <Link href="/programs/cbse" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>CBSE</Link>
              <Link href="/programs/icse" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>ICSE</Link>
              <Link href="/programs/science" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Science</Link>
              <Link href="/programs/commerce" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Commerce</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 600, borderBottom: '2px solid var(--color-accent)', paddingBottom: '0.5rem', display: 'inline-block' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Home</Link>
              <Link href="/results" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Success</Link>
              <Link href="/events" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>NK Academy Events</Link>
              <Link href="/contact" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Contact</Link>
            </div>
          </div>

          {/* Locations */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600, borderBottom: '2px solid var(--color-accent)', paddingBottom: '0.5rem', display: 'inline-block' }}>Borivali West</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.8)' }}>
                New Delight CHS LTD., Floor No. 2,<br />
                Flat No. A 203, Chandavarkar Road,<br />
                Borivali West, Mumbai,<br />
                Maharashtra - 400092
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600, borderBottom: '2px solid var(--color-accent)', paddingBottom: '0.5rem', display: 'inline-block' }}>Borivali East</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.8)' }}>
                B/204, Shivam Apartment, Chitrakoot,<br />
                Kulupwadi, Borivali East,<br />
                Mumbai - 400066
              </p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div style={{ background: '#0a1936', padding: '1.5rem 0', position: 'relative' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', flexWrap: 'wrap' }}>
          <p>Copyright {new Date().getFullYear()} NK Academy. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact Us</Link>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          style={{
            position: 'absolute',
            right: '2rem',
            bottom: '0',
            width: '50px',
            height: '50px',
            background: 'var(--color-accent)',
            border: 'none',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </footer>
  );
}
