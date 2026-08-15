import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Phone, MapPin, Clock, MessageCircle, ChevronDown } from 'lucide-react';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <>
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <div className={styles.topBarLeft}>
            <div className={styles.contactItem}>
              <Phone size={14} />
              <span>+91 88795 11601 • +91 75060 58113</span>
            </div>
          </div>
          <div className={styles.topBarRight}>
            <div className={styles.contactItem}>
              <span>Mon-Sat • 10:00 AM - 8:30 PM • Borivali East & West</span>
            </div>
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logoWrapper}>
            <div className={styles.logoBox}>NK</div>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>NK Academy</span>
              <span className={styles.logoSubtitle}>THE DIRECTION OF SUCCESS</span>
            </div>
          </Link>
          
          <nav className={styles.navLinks}>
            <Link href="/" className={styles.link}>Home</Link>
            
            <div className={styles.dropdown}>
              <Link href="/programs" className={styles.link} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                Programs <ChevronDown size={14} />
              </Link>
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownGroup}>
                  <span className={styles.dropdownLabel}>School</span>
                  <Link href="/programs/ssc" className={styles.dropdownLink}>SSC</Link>
                  <Link href="/programs/cbse" className={styles.dropdownLink}>CBSE</Link>
                  <Link href="/programs/icse" className={styles.dropdownLink}>ICSE</Link>
                </div>
                <div className={styles.dropdownGroup}>
                  <span className={styles.dropdownLabel}>Junior College</span>
                  <Link href="/programs/science" className={styles.dropdownLink}>Science</Link>
                  <Link href="/programs/commerce" className={styles.dropdownLink}>Commerce</Link>
                </div>
                <div className={styles.dropdownGroup}>
                  <span className={styles.dropdownLabel}>Competitive Exams</span>
                  <Link href="/programs/neet" className={styles.dropdownLink}>NEET</Link>
                  <Link href="/programs/jee-mht-cet" className={styles.dropdownLink}>JEE / MHT-CET</Link>
                </div>
                <div className={styles.dropdownGroup}>
                  <span className={styles.dropdownLabel}>Specialised</span>
                  <Link href="/programs/sanskrit" className={styles.dropdownLink}>Sanskrit</Link>
                </div>
              </div>
            </div>

            <Link href="/results" className={styles.link}>Results</Link>
            
            <div className={styles.dropdown}>
              <Link href="/resources" className={styles.link} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                Resources <ChevronDown size={14} />
              </Link>
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownGroup}>
                  <Link href="/resources" className={styles.dropdownLink}>Study Hub</Link>
                  <Link href="/resources/syllabus" className={styles.dropdownLink}>Syllabus</Link>
                  <Link href="/resources/notes" className={styles.dropdownLink}>Notes</Link>
                  <Link href="/resources/question-papers" className={styles.dropdownLink}>Question Papers</Link>
                  <Link href="/resources/practice-tests" className={styles.dropdownLink}>Practice Tests</Link>
                  <Link href="/resources/exam-guides" className={styles.dropdownLink}>Exam Guides</Link>
                  <Link href="/resources/academic-calendar" className={styles.dropdownLink}>Academic Calendar</Link>
                  <Link href="/resources/faqs" className={styles.dropdownLink}>FAQs</Link>
                </div>
              </div>
            </div>

            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </nav>

          <div className={styles.actions}>
            <Link href="https://wa.me/918879511601" className={styles.whatsappBtn}>
              <MessageCircle size={18} className={styles.whatsappIcon} />
              WhatsApp
            </Link>
            <Link href="/demo">
              <Button variant="secondary" size="small" style={{ borderRadius: '50px', padding: '0.75rem 1.5rem', fontWeight: 600 }}>
                Book Free Demo
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
