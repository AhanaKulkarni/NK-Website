import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <div className={styles.logoGroup}>
              <img src="/logo.png" alt="NK Academy" className={styles.logoImage} />
            </div>
            <p className={styles.tagline}>The direction of success.</p>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="YouTube">YouTube</a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.heading}>Navigation</h4>
            <nav className={styles.navLinks}>
              <Link href="/">Home</Link>
              <Link href="/about">About NK</Link>
              <Link href="/programs">Programs</Link>
              <Link href="/results">Results</Link>
              <Link href="/events/nk-apl-2023">NK APL 2023</Link>
            </nav>
          </div>

          <div className={styles.contactCol}>
            <h4 className={styles.heading}>Contact</h4>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <MapPin size={18} className={styles.icon} />
                <p>Borivali East & West<br />Mumbai, Maharashtra</p>
              </div>
              <div className={styles.contactItem}>
                <Phone size={18} className={styles.icon} />
                <div>
                  <p><strong>NK Sir:</strong> +91 88795 11601</p>
                  <p><strong>East Branch (Pawan Sir):</strong> +91 75060 58113</p>
                  <p><strong>West Branch (Rupa Ma'am):</strong> +91 90829 48098</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Mail size={18} className={styles.icon} />
                <p>info@nkacademy.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} NK Academy. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
