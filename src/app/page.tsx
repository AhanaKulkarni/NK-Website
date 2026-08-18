'use client';
import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MoveRight, Trophy, BookOpen } from 'lucide-react';
import { ToppersCarousel } from '@/components/home/ToppersCarousel';
import styles from './home.module.css';

// Reusable scroll reveal component
const Reveal = ({ children, delay = 0, className = "" }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const topStudents = [
  'Saanvi Prabhu', 'Aditya Khatavkar', 'Araya Dewoolkar', 'Hrishant Dave', 
  'Indira Parmar', 'Gaurang Mourya', 'Arya Trivedi', 'Vaidehi Shewale', 
  'Manasvi Patankar', 'Aniket Kadam', 'Ananya Dalvi', 'Soumil Save', 
  'Aarav Darji', 'Heet Sondagar', 'Shreyas Ghadi', 'Ishan Hindalekar', 
  'Akshara Bhosale', 'Aayushi Dike', 'Sanika Rane', 'Ayush Jagtap', 
  'Daksh Wangde', 'Jiya Modi', 'Shwet Pange', 'Shrey Thakoor', 
  'Ahan Shetty', 'Tithi Sanjay Patel', 'Ansh Kumar', 'Janhavi Pawar', 
  'Yash Vedak', 'Rashi Agrawal', 'Ishani Bharti', 'Aaryan Rathod', 
  'Hetvi Pandya', 'Shubham Wagle', 'Vivaan Shetty', 'Shreya Gupta', 
  'Sharvil Gundewar'
];

// Duplicate for continuous marquee effect
const marqueeStudents = [...topStudents, ...topStudents];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const compassRotate = useTransform(scrollYProgress, [0, 1], [0, 360]); // Increased rotation

  return (
    <div className={styles.page}>
      
      {/* SECTION 01: HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBackgroundBlob}></div>
        <div className={styles.heroWatermark}>SUCCESS</div>
        
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroLeft}>
            <Reveal>
              <span className={styles.eyebrow} style={{ marginBottom: '1rem', display: 'inline-block' }}>Established Excellence</span>
            </Reveal>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={styles.heroTitle}
            >
              Find Your<br />
              <span className={styles.heroAccent}>Direction.</span><br />
              <span style={{ color: '#800020' }}>Build Your<br />Future.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.heroSubtitle}
            >
              Your goal is the destination. We give you the direction. Join Borivali's most trusted coaching institute and secure your academic success.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={styles.heroActions}
            >
              <a href="#enquiry" className={styles.btnPrimary}>
                START YOUR JOURNEY <ArrowRight size={18} />
              </a>
              <a href="#programs" className={styles.btnSecondary}>
                Explore Programs
              </a>
            </motion.div>
          </div>
          
          <div className={styles.heroRight}>
            <div className={styles.heroRightContainer}>
              
              {/* Floating Card 1 */}
              <div className={`${styles.floatingCard} ${styles.floatingCard1}`}>
                <div className={styles.cardIcon}>
                  <Trophy size={24} />
                </div>
                <div className={styles.cardText}>
                  <h4>98.8%</h4>
                  <p>Highest Score 2025</p>
                </div>
              </div>

              {/* Main Compass Area */}
              <div style={{ position: 'relative', zIndex: 10 }}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: [-1080, 0]
                  }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  transition={{ 
                    duration: 3, 
                    ease: [0.16, 1, 0.3, 1], // Custom dramatic ease-out
                    opacity: { duration: 1 },
                    scale: { duration: 1.5, type: 'spring' }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Abstract Compass SVG */}
                  <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="190" stroke="rgba(16, 43, 94, 0.05)" strokeWidth="2" strokeDasharray="10 10"/>
                    <circle cx="200" cy="200" r="150" stroke="rgba(16, 43, 94, 0.1)" strokeWidth="1"/>
                    <circle cx="200" cy="200" r="100" stroke="var(--color-primary)" strokeWidth="2"/>
                    <path d="M200 40 L220 180 L200 200 Z" fill="var(--color-accent)"/>
                    <path d="M200 40 L180 180 L200 200 Z" fill="#B71C1C"/>
                    <path d="M200 360 L220 220 L200 200 Z" fill="var(--color-primary)"/>
                    <path d="M200 360 L180 220 L200 200 Z" fill="#0A1A3A"/>
                  </svg>
                </motion.div>
              </div>

              {/* Floating Card 2 */}
              <div className={`${styles.floatingCard} ${styles.floatingCard2}`}>
                <div className={`${styles.cardIcon} ${styles.cardIconRed}`}>
                  <BookOpen size={24} />
                </div>
                <div className={styles.cardText}>
                  <h4>4 Boards</h4>
                  <p>Comprehensive Prep</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: THE NK PROMISE */}
      <section className={styles.promise}>
        <div className="container">
          <Reveal>
            <span className={styles.eyebrow} style={{ color: 'rgba(255,255,255,0.7)' }}>The NK Promise</span>
            <h2 className={styles.promiseTitle}>MORE THAN PREPARATION. A CLEARER PATH FORWARD.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={styles.promiseText}>
              We believe every student has the potential to excel when given the right direction. Through highly structured methodology, expert faculty, and rigorous tracking, we turn ambition into achievement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 03: PROGRAMS */}
      <section id="programs" className={styles.programs}>
        <div className="container">
          <Reveal className={styles.programsHeader}>
            <span className={styles.eyebrow}>Our Programs</span>
            <h2 className="display-font" style={{ fontSize: '3rem' }}>One academy.<br/>Every board & stream.</h2>
          </Reveal>
          
          <div className={styles.programsList}>
            {[
              { num: '01', title: 'SSC Board', desc: 'Maharashtra State Board mastery', path: '/programs/ssc' },
              { num: '02', title: 'CBSE Board', desc: 'Application-driven CBSE preparation', path: '/programs/cbse' },
              { num: '03', title: 'ICSE Board', desc: 'Depth-focused ICSE coaching', path: '/programs/icse' },
              { num: '04', title: 'Science', desc: 'PCM / PCB for Std 11 & 12', path: '/programs/science' },
              { num: '05', title: 'Commerce', desc: 'Accounts, Economics & more', path: '/programs/commerce' },
              { num: '06', title: 'Sanskrit', desc: "Borivali's strongest Sanskrit program", path: '/programs/sanskrit' },
            ].map((prog, i) => (
              <Reveal key={prog.num} delay={i * 0.1}>
                <Link href={prog.path} className={styles.programItem}>
                  <span className={styles.programNum}>{prog.num}</span>
                  <div>
                    <h3 className={styles.programName}>{prog.title}</h3>
                    <p className={styles.programDesc}>{prog.desc}</p>
                  </div>
                  <MoveRight size={32} className={styles.programIcon} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: WHY NK */}
      <section className={styles.why}>
        <div className="container">
          <Reveal>
            <span className={styles.eyebrow}>Why NK Academy</span>
            <h2 className="display-font" style={{ fontSize: '3rem' }}>Built for performance.</h2>
          </Reveal>
          
          <div className={styles.whyGrid}>
            {[
              { num: '01', title: 'Structured Preparation', text: 'A daily, weekly, and monthly syllabus tracker ensures students are never behind.' },
              { num: '02', title: 'Experienced Faculty', text: 'Learn from subject experts who have mentored board toppers for over a decade.' },
              { num: '03', title: 'Measurable Progress', text: 'Regular testing and transparent analytics so parents always know where the student stands.' },
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 0.1} className={styles.whyCard}>
                <div className={styles.whyCardNum}>{item.num}</div>
                <h3 className="display-font">{item.title}</h3>
                <p style={{ color: 'var(--color-supporting)' }}>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: RESULTS */}
      <section className={styles.results}>
        <div className="container">
          <Reveal>
            <span className={styles.eyebrow} style={{ color: 'rgba(255,255,255,0.7)' }}>Our Achievements</span>
            <h2 className={styles.promiseTitle} style={{ margin: 0, textAlign: 'left' }}>RESULTS THAT<br/>SPEAK FOR<br/>THEMSELVES.</h2>
          </Reveal>
          
          <div className={styles.resultsGrid}>
            <Reveal delay={0.1}>
              <div className={styles.resultNumber}>500+</div>
              <div className={styles.resultLabel}>Students Mentored</div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className={styles.resultNumber}>98%</div>
              <div className={styles.resultLabel}>SSC Pass Rate</div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className={styles.resultNumber}>94%</div>
              <div className={styles.resultLabel}>CBSE Pass Rate</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 05.5: TOPPERS CAROUSEL */}
      <ToppersCarousel />

      {/* SECTION 05.6: STUDENT MARQUEE */}
      <section className={styles.marqueeSection}>
        <div className={styles.marqueeContainer}>
          {marqueeStudents.map((name, index) => {
            const photoId = name.toLowerCase().replace(/ /g, '-').replace('rashi-agrawal', 'rashi-agrwal');
            return (
              <div key={`${name}-${index}`} className={styles.studentCard}>
                <div className={styles.studentPhotoWrapper}>
                  <img src={`/students/${photoId}.jpg`} alt={name} className={styles.studentPhoto} loading="lazy" />
                </div>
                <div className={styles.studentInfo}>
                  <div className={styles.studentName}>{name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 06: SUCCESS STORIES */}
      <section className={styles.testimonials}>
        <div className="container">
          <Reveal>
            <span className={styles.eyebrow}>Success Stories</span>
          </Reveal>
          
          <Reveal delay={0.2} className={styles.testimonialCard}>
            <p className={styles.testimonialQuote}>
              "NK Academy didn't just teach me the syllabus, they showed me how to actually study. The direction they provided changed everything for my board exams."
            </p>
            <div className={styles.testimonialAuthor}>Ananya Sharma</div>
            <div className={styles.testimonialDetail}>CBSE Topper, 97.4%</div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 07: FACULTY */}
      <section className={styles.faculty}>
        <div className="container">
          <Reveal>
            <span className={styles.eyebrow}>Our Faculty</span>
            <h2 className="display-font" style={{ fontSize: '3rem' }}>Mentors who lead.</h2>
          </Reveal>
          
          <div className={styles.facultyGrid}>
            {[1, 2, 3, 4].map((i) => (
              <Reveal key={i} delay={i * 0.1} className={styles.facultyCard}>
                <div className={styles.facultyImage}>[Portrait]</div>
                <div className={styles.facultyInfo}>
                  <h3 className={styles.facultyName}>NK Sir</h3>
                  <div className={styles.facultyRole}>Founder & Sanskrit Head</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-supporting)' }}>15+ years of experience turning Sanskrit into a reliable scoring subject.</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 08: THE JOURNEY */}
      <section className={styles.journey}>
        <div className="container">
          <Reveal style={{ textAlign: 'center' }}>
            <span className={styles.eyebrow}>The Journey</span>
            <h2 className="display-font" style={{ fontSize: '3.5rem' }}>Every success story<br/>starts with a direction.</h2>
          </Reveal>
          
          <div className={styles.journeyLine}>
            {['Discover', 'Prepare', 'Practice', 'Improve', 'Perform', 'Achieve'].map((step, i) => (
              <Reveal key={step} delay={0.1} className={styles.journeyStep}>
                <div className={styles.journeyNum}>0{i + 1}</div>
                <h3 className="display-font" style={{ fontSize: '2rem' }}>{step}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09: CTA */}
      <section className={styles.cta}>
        <div className="container">
          <Reveal>
            <h2 className={`display-font ${styles.ctaTitle}`}>YOUR NEXT STEP<br/>STARTS HERE.</h2>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.btnPrimary} style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
                START YOUR JOURNEY <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      
    </div>
  );
}
