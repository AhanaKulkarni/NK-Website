import React from 'react';
import styles from '../about/about.module.css';
import { EnquirySection } from '@/components/shared/EnquirySection';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | NK Academy',
  description: 'Get in touch with NK Academy in Borivali East and West.',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            We'd love to hear from you. Visit our centers or get in touch below.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {/* East Branch */}
          <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(16,43,94,0.05)', textAlign: 'center', borderTop: '4px solid var(--color-accent)' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(229,57,53,0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <MapPin size={30} />
            </div>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Borivali East</h2>
            <p style={{ color: 'var(--color-supporting)', lineHeight: 1.6 }}>
              Shivam Building, B/204, Chitrakoot, Kulupwadi, Borivali East, Mumbai, Maharashtra - 400066.
            </p>
          </div>

          {/* West Branch */}
          <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(16,43,94,0.05)', textAlign: 'center', borderTop: '4px solid var(--color-primary)' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16,43,94,0.05)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <MapPin size={30} />
            </div>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Borivali West</h2>
            <p style={{ color: 'var(--color-supporting)', lineHeight: 1.6 }}>
              New Delight CHS LTD., Floor No. 2, Flat No. A 203, Chandavarkar Road, Borivali West, Mumbai, Maharashtra - 400092.
            </p>
          </div>
        </div>

        {/* Quick Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem', padding: '2rem', background: 'var(--color-surface)', borderRadius: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ color: 'var(--color-accent)' }}><Mail size={24} /></div>
            <div>
              <h4 style={{ color: 'var(--color-primary)' }}>Email Address</h4>
              <p style={{ color: 'var(--color-supporting)', fontSize: '0.9rem' }}>nkacademymumbai@gmail.com</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ color: 'var(--color-accent)' }}><Phone size={24} /></div>
            <div>
              <h4 style={{ color: 'var(--color-primary)' }}>Call Now</h4>
              <p style={{ color: 'var(--color-supporting)', fontSize: '0.9rem' }}>+91 88795 11601 / +91 75060 58113</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ color: 'var(--color-accent)' }}><Clock size={24} /></div>
            <div>
              <h4 style={{ color: 'var(--color-primary)' }}>Open Hours</h4>
              <p style={{ color: 'var(--color-supporting)', fontSize: '0.9rem' }}>Working-Hours 10AM-8:30PM</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global Enquiry Form */}
      <EnquirySection />
    </div>
  );
}
