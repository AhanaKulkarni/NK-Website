'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import styles from './Navigation.module.css';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { 
      label: 'About Us', 
      href: '/about',
      dropdown: [
        { label: 'About Us', href: '/about' },
        { label: 'Faculties', href: '/about/faculties' },
        { label: 'Facilities', href: '/about/facilities' },
        { label: 'Schedule', href: '/about/schedule' },
        { label: 'NK Academy Events', href: '/events' }
      ]
    },
    { label: 'Success', href: '/results' },
    {
      label: 'Classes',
      href: '/programs',
      dropdown: [
        { label: 'Best CBSE Coaching Classes', href: '/programs/cbse' },
        { label: 'Best ICSE Coaching Classes', href: '/programs/icse' },
        { label: 'Best SSC Coaching Classes', href: '/programs/ssc' },
        { label: 'Best NEET Coaching Classes', href: '/programs/neet' },
        { label: 'Best MHT-CET Coaching Classes', href: '/programs/mht-cet' },
        { label: 'Best JEE-Main Coaching Classes', href: '/programs/jee' },
        { label: 'Best Commerce Classes', href: '/programs/commerce' },
        { label: 'Best JEE-Main Institute', href: '/programs/jee-institute' },
        { label: 'Premium Coaching Classes', href: '/programs/premium' },
        { label: 'Best SSC Coaching Classes Borivali West', href: '/programs/ssc-borivali-west' },
        { label: 'Best ICSE Coaching Classes Borivali West', href: '/programs/icse-borivali-west' },
        { label: 'Best CBSE Coaching Classes Borivali West', href: '/programs/cbse-borivali-west' },
      ]
    },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="NK Academy" className={styles.logoImage} />
        </Link>

        <nav className={`${styles.desktopNav}`}>
          {navLinks.map((link) => (
            <div 
              key={link.href} 
              className={styles.navItem}
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              <Link 
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? styles.active : ''}`}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} className={styles.chevron} />}
              </Link>
              
              {link.dropdown && activeDropdown === link.label && (
                <div className={styles.dropdownMenu}>
                  {link.dropdown.map((dropLink) => (
                    <Link 
                      key={dropLink.href} 
                      href={dropLink.href}
                      className={styles.dropdownItem}
                    >
                      {dropLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#enquiry" className={styles.ctaButton}>
            ENQUIRE NOW
          </a>
          
          <button 
            className={styles.hamburger} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <div key={link.href} className={styles.mobileNavItem}>
              <div 
                className={styles.mobileNavLinkWrapper}
                onClick={() => link.dropdown ? setActiveDropdown(activeDropdown === link.label ? null : link.label) : null}
              >
                <Link href={link.href} className={styles.mobileNavLink}>
                  {link.label}
                </Link>
                {link.dropdown && (
                  <button className={styles.mobileDropdownBtn}>
                    <ChevronDown size={20} className={activeDropdown === link.label ? styles.rotate : ''} />
                  </button>
                )}
              </div>
              
              {link.dropdown && activeDropdown === link.label && (
                <div className={styles.mobileDropdown}>
                  {link.dropdown.map((dropLink) => (
                    <Link 
                      key={dropLink.href} 
                      href={dropLink.href}
                      className={styles.mobileDropdownItem}
                    >
                      {dropLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <Link href="#enquiry" className={styles.mobileCtaButton} onClick={() => setMobileMenuOpen(false)}>
          ENQUIRE NOW
        </Link>
      </div>
    </header>
  );
}
