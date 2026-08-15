import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.grid}>
          {/* Brand & About */}
          <div className={styles.column}>
            <h3 className={styles.logo}>NK Academy</h3>
            <p className={styles.description}>
              The benchmark digital education platform in Borivali. Empowering students with premium coaching for SSC, CBSE, ICSE, Science, Commerce, NEET, JEE, and Sanskrit.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.list}>
              <li><Link href="/about">About NK Sir</Link></li>
              <li><Link href="/programs">Our Programs</Link></li>
              <li><Link href="/results">Past Results</Link></li>
              <li><Link href="/resources">Study Materials</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Programs</h4>
            <ul className={styles.list}>
              <li><Link href="/programs/ssc">SSC Board</Link></li>
              <li><Link href="/programs/cbse">CBSE Board</Link></li>
              <li><Link href="/programs/icse">ICSE Board</Link></li>
              <li><Link href="/programs/science">Science (XI & XII)</Link></li>
              <li><Link href="/programs/commerce">Commerce (XI & XII)</Link></li>
              <li><Link href="/programs/sanskrit">Sanskrit Toolkit</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} />
                <span>Borivali East & West Branches</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+91 90000 00000</span>
              </li>
              <li>
                <Mail size={18} />
                <span>info@nkacademy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} NK Academy. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
