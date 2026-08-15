import React from 'react';
import { programsData } from '@/data/academic/programs';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, BookOpen, GraduationCap, MapPin } from 'lucide-react';
import styles from '@/app/programs/page.module.css';
import { notFound } from 'next/navigation';

export function ProgramTemplate({ programId }: { programId: string }) {
  const program = programsData[programId];
  
  if (!program) {
    notFound();
  }

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroBadge}>
            {program.category}
          </div>
          <h1 className={styles.heroTitle}>{program.title}</h1>
          <p className={styles.heroSubtitle}>{program.shortDescription}</p>
          <div className={styles.heroActions}>
            <Link href="/demo">
              <Button variant="secondary" size="large" style={{ borderRadius: '50px' }}>
                Book Free Demo Class
              </Button>
            </Link>
            <Link href={`/resources/syllabus?program=${program.id}`}>
              <Button variant="outline" size="large" style={{ borderRadius: '50px', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
                View Full Syllabus
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.grid}>
            
            {/* Left Column: Details */}
            <div className={styles.mainContent}>
              <ScrollReveal>
                <div className={styles.card}>
                  <h2>Program Overview</h2>
                  <p>{program.whoItsFor}</p>
                  
                  <h3 className={styles.sectionHeading}>Learning Approach</h3>
                  <ul className={styles.list}>
                    {program.learningApproach.map((item, i) => (
                      <li key={i}><CheckCircle2 className={styles.listIcon} size={18}/> {item}</li>
                    ))}
                  </ul>

                  <h3 className={styles.sectionHeading}>What Students Receive</h3>
                  <ul className={styles.list}>
                    {program.whatStudentsReceive.map((item, i) => (
                      <li key={i}><CheckCircle2 className={styles.listIcon} size={18}/> {item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Meta Info */}
            <div className={styles.sidebar}>
              <ScrollReveal delay={0.2}>
                <div className={styles.metaCard}>
                  <h3>Program Details</h3>
                  
                  <div className={styles.metaItem}>
                    <GraduationCap size={20} className={styles.metaIcon} />
                    <div>
                      <h4>Classes Covered</h4>
                      <p>{program.classesCovered.join(', ')}</p>
                    </div>
                  </div>
                  
                  <div className={styles.metaItem}>
                    <BookOpen size={20} className={styles.metaIcon} />
                    <div>
                      <h4>Boards / Examinations</h4>
                      <p>{program.boardsCovered.join(', ')}</p>
                    </div>
                  </div>
                  
                  <div className={styles.metaItem}>
                    <MapPin size={20} className={styles.metaIcon} />
                    <div>
                      <h4>Subjects Offered</h4>
                      <div className={styles.subjectTags}>
                        {program.subjects.map(subject => (
                          <span key={subject} className={styles.subjectTag}>{subject}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.ctaCard}>
                  <h3>Ready to start?</h3>
                  <p>Join {program.title} and secure a top rank.</p>
                  <Link href="/demo">
                    <Button variant="primary" style={{ width: '100%' }}>Book Demo <ChevronRight size={16}/></Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
