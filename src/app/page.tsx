import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ChevronRight, MessageCircle, MapPin, Users, BookOpen, TrendingUp, HelpCircle, Monitor } from 'lucide-react';
import { ResultsBoard } from '@/components/sections/ResultsBoard';
import { ResultsGraphic } from '@/components/sections/ResultsGraphic';
import { CountingNumber } from '@/components/ui/CountingNumber';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>


      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <ScrollReveal className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.starIcon}>🇮🇳</span> Borivali's most trusted coaching - Since 2019
            </div>
            <h1 className={styles.heroTitle}>
              Your child's<br />success starts <span className={styles.heroItalic}>here.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              500+ students. SSC <strong>98%</strong> & CBSE <strong>94%</strong> pass rates. Real teachers, small batches, and Borivali's strongest Sanskrit program.
            </p>
            <div className={styles.heroActions}>
              <Link href="/demo">
                <Button variant="secondary" size="large" style={{ borderRadius: '50px', padding: '1rem 2rem', fontWeight: 600 }}>
                  Book Free Demo Class <ChevronRight size={18} />
                </Button>
              </Link>
              <Link href="/results">
                <Button variant="outline" size="large" style={{ borderRadius: '50px', padding: '1rem 2rem', fontWeight: 600, borderColor: 'rgba(0,0,0,0.1)', color: 'var(--color-primary)' }}>
                  See this year's results
                </Button>
              </Link>
            </div>
            <div className={styles.heroWhatsapp}>
              <MessageCircle size={16} className={styles.whatsappIconSmall} /> Or WhatsApp us now — we reply within hours
            </div>
          </div>
          
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageInner}>
               <Image src="/hero_students.jpg" alt="Students studying" fill className={styles.heroImage} priority />
               <div className={styles.googleBadge}>
                 <span className={styles.verifiedIcon}>✓</span> 4.9★ Google Rating
               </div>
               <div className={styles.topperFloatingCard}>
                 <div className={styles.topperFloatingAvatar}>M</div>
                 <div>
                   <div className={styles.topperFloatingScore}>100/100</div>
                   <div className={styles.topperFloatingName}>Manasvi Patankar - Sanskrit</div>
                 </div>
               </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- STATS SECTION --- */}
      <section className={styles.statsSection}>
        <ScrollReveal className={`container ${styles.statsGrid}`}>
          <div className={styles.statCard}>
            <h3 className={styles.statNumber}><CountingNumber value={6} suffix="+" /></h3>
            <p className={styles.statLabel}>Years of Excellence</p>
          </div>
          <div className={styles.statCard}>
            <h3 className={styles.statNumber}><CountingNumber value={500} suffix="+" /></h3>
            <p className={styles.statLabel}>Students Mentored</p>
          </div>
          <div className={styles.statCard}>
            <h3 className={styles.statNumber}><CountingNumber value={100} suffix="%" /></h3>
            <p className={styles.statLabel}>Passing Rate</p>
          </div>
          <div className={styles.statCard}>
            <h3 className={styles.statNumber}><CountingNumber value={25} suffix="+" /></h3>
            <p className={styles.statLabel}>Expert Faculty</p>
          </div>
        </ScrollReveal>
      </section>

      {/* --- RESULTS GRAPHIC SECTION --- */}
      <ResultsGraphic />

      {/* --- PROGRAMS SECTION --- */}
      <section id="programs" className={styles.programsSection}>
        <div className={`container`}>
          <div className={styles.sectionHeaderRow}>
            <ScrollReveal className={styles.sectionHeaderLeft}>
              <span className={styles.sectionEyebrow}>PROGRAMS</span>
              <h2>One academy, every board & stream</h2>
              <p>From Std 5 to Std 12 — pick a programme built around your child's board, pace and goals.</p>
            </ScrollReveal>
            <Link href="/programs" className={styles.viewAllLink}>
              View all programs <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className={styles.programsGrid}>
            {[
              { num: '01', title: 'SSC', desc: 'Maharashtra State Board mastery', tag: '98%', id: 'ssc', delay: 0.1 },
              { num: '02', title: 'CBSE', desc: 'Application-driven CBSE preparation', tag: '94%', id: 'cbse', delay: 0.15 },
              { num: '03', title: 'ICSE', desc: 'Depth-focused ICSE coaching', tag: '95%', id: 'icse', delay: 0.2 },
              { num: '04', title: 'Science (11-12)', desc: 'PCM / PCB for Std 11 & 12', tag: '96%', id: 'science', delay: 0.25 },
              { num: '05', title: 'Commerce (11-12)', desc: 'Accounts, Economics & more', tag: '97%', id: 'commerce', delay: 0.3 },
              { num: '06', title: 'NEET', desc: 'Medical entrance foundation', tag: 'TOP 5%', id: 'neet', delay: 0.35 },
              { num: '07', title: 'JEE / MHT-CET', desc: 'Engineering entrance edge', tag: 'TOP 5%', id: 'jee', delay: 0.4 },
            ].map((prog) => (
              <ScrollReveal key={prog.id} delay={prog.delay} className={styles.programCard}>
                <div className={styles.programCardTop}>
                  <span className={styles.programNum}>{prog.num}</span>
                  <span className={styles.programTag}>{prog.tag}</span>
                </div>
                <div>
                  <h3>{prog.title}</h3>
                  <p>{prog.desc}</p>
                  <Link href={`/programs/${prog.id}`} className={styles.learnMoreLink}>
                    Learn more <ChevronRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
            
            {/* Sanskrit Card */}
            <ScrollReveal delay={0.45} className={styles.programCard}>
                <div className={styles.programCardTop}>
                  <span className={styles.programNum}>08</span>
                  <span className={styles.programTag}>90%+</span>
                </div>
                <div>
                  <h3>Sanskrit</h3>
                  <p>Borivali's strongest Sanskrit program</p>
                  <Link href="/programs/sanskrit" className={styles.learnMoreLink}>
                    Learn more <ChevronRight size={14} />
                  </Link>
                </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- WHY US SECTION --- */}
      <section className={styles.whySection}>
        <div className={`container`}>
          <ScrollReveal className={styles.whyHeader}>
            <span className={styles.whyEyebrow}>WHY NK ACADEMY</span>
            <h2>Reasons Parents trust us</h2>
          </ScrollReveal>
          
          <div className={styles.whyGrid}>
            <ScrollReveal delay={0.1} className={styles.whyCard}>
              <div className={styles.whyCardTop}>
                <span className={styles.whyNum}>01</span>
                <TrendingUp size={24} className={styles.whyIcon} />
              </div>
              <h3>Results parents can verify</h3>
              <p>SSC 98% and CBSE 94% pass rates with named toppers you can meet — not vague claims.</p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} className={styles.whyCard}>
              <div className={styles.whyCardTop}>
                <span className={styles.whyNum}>02</span>
                <Users size={24} className={styles.whyIcon} />
              </div>
              <h3>Small batches, real attention</h3>
              <p>Capped batch sizes so every student is known by name and tracked test-by-test.</p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} className={styles.whyCard}>
              <div className={styles.whyCardTop}>
                <span className={styles.whyNum}>03</span>
                <BookOpen size={24} className={styles.whyIcon} />
              </div>
              <h3>The Sanskrit advantage</h3>
              <p>NK Sir's Sanskrit method turns a feared subject into a reliable 90%+ scorer.</p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4} className={styles.whyCard}>
              <div className={styles.whyCardTop}>
                <span className={styles.whyNum}>04</span>
                <MapPin size={24} className={styles.whyIcon} />
              </div>
              <h3>Two Borivali branches</h3>
              <p>Established centres in Borivali East and West — close to home, easy to reach.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.5} className={styles.whyCard}>
              <div className={styles.whyCardTop}>
                <span className={styles.whyNum}>05</span>
                <HelpCircle size={24} className={styles.whyIcon} />
              </div>
              <h3>Instant doubt resolution</h3>
              <p>Dedicated doubt-solving sessions and 24/7 faculty support to ensure no conceptual gaps.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.6} className={styles.whyCard}>
              <div className={styles.whyCardTop}>
                <span className={styles.whyNum}>06</span>
                <Monitor size={24} className={styles.whyIcon} />
              </div>
              <h3>Tech-enabled learning</h3>
              <p>Access our premium digital resources, recorded lectures, and app for continuous revision.</p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.7} className={styles.whyCTAContainer}>
            <div className={styles.whyCTABox}>
              <h3>Ready to give your child the NK Academy advantage?</h3>
              <p>Join Borivali's most trusted coaching institute today and secure their academic future.</p>
              <Link href="/contact" className={styles.whyCTABtn}>
                Book a Free Counseling Session
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- RESULTS SECTION --- */}
      <section className={styles.resultsSection}>
        <div className={`container`}>
          <ScrollReveal className={styles.sectionHeaderRow}>
            <div className={styles.sectionHeaderLeft}>
              <span className={styles.sectionEyebrowDark}>RESULTS</span>
              <h2>Toppers you can actually name</h2>
              <p>Filter by year and board. These are our students — real names, real scores.</p>
            </div>
            <Link href="/results" className={styles.viewAllLink}>
              Full results dashboard <ChevronRight size={16} />
            </Link>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <ResultsBoard />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
