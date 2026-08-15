"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { Phone, MessageCircle, ChevronDown, Menu, X } from 'lucide-react';
import styles from './Navigation.module.css';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <Image src="/logo.png" alt="NK Academy Logo" width={220} height={55} className={styles.logoImage} />
          </Link>
          
          <nav className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
            <Link href="/" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            
            <div className={styles.dropdown}>
              <Link href="/programs" className={styles.link} style={{ display: 'flex', alignItems: 'center', gap: '4px' }} onClick={() => setIsMobileMenuOpen(false)}>
                Programs <ChevronDown size={14} />
              </Link>
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownGroup}>
                  <span className={styles.dropdownLabel}>School</span>
                  <Link href="/programs/ssc" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>SSC</Link>
                  <Link href="/programs/cbse" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>CBSE</Link>
                  <Link href="/programs/icse" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>ICSE</Link>
                </div>
                <div className={styles.dropdownGroup}>
                  <span className={styles.dropdownLabel}>Junior College</span>
                  <Link href="/programs/science" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>Science</Link>
                  <Link href="/programs/commerce" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>Commerce</Link>
                </div>
                <div className={styles.dropdownGroup}>
                  <span className={styles.dropdownLabel}>Competitive Exams</span>
                  <Link href="/programs/neet" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>NEET</Link>
                  <Link href="/programs/jee" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>JEE / MHT-CET</Link>
                </div>
                <div className={styles.dropdownGroup}>
                  <span className={styles.dropdownLabel}>Specialised</span>
                  <Link href="/programs/sanskrit" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>Sanskrit</Link>
                </div>
              </div>
            </div>

            <Link href="/results" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Results</Link>
            
            <div className={styles.dropdown}>
              <Link href="/resources" className={styles.link} style={{ display: 'flex', alignItems: 'center', gap: '4px' }} onClick={() => setIsMobileMenuOpen(false)}>
                Resources <ChevronDown size={14} />
              </Link>
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownGroup}>
                  <Link href="/resources" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>Study Hub</Link>
                  <Link href="/resources/syllabus" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>Syllabus</Link>
                  <Link href="/resources/notes" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>Notes</Link>
                  <Link href="/resources/question-papers" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>Question Papers</Link>
                  <Link href="/resources/practice-tests" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>Practice Tests</Link>
                  <Link href="/resources/exam-guides" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>Exam Guides</Link>
                  <Link href="/resources/academic-calendar" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>Academic Calendar</Link>
                  <Link href="/resources/faqs" className={styles.dropdownLink} onClick={() => setIsMobileMenuOpen(false)}>FAQs</Link>
                </div>
              </div>
            </div>

            <Link href="/about" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/contact" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            
            <div className={styles.mobileActions}>
              <Link href="https://wa.me/918879511601" className={styles.whatsappBtn} onClick={() => setIsMobileMenuOpen(false)}>
                <MessageCircle size={18} className={styles.whatsappIcon} />
                WhatsApp
              </Link>
              <Link href="/demo" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="secondary" size="small" style={{ borderRadius: '50px', padding: '0.75rem 1.5rem', fontWeight: 600 }}>
                  Book Free Demo
                </Button>
              </Link>
            </div>
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
          
          <button className={styles.hamburgerBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>
    </>
  );
}
