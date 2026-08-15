import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import styles from './ResultsGraphic.module.css';
import { Award, TrendingUp, Users } from 'lucide-react';

export function ResultsGraphic() {
  return (
    <section className={styles.section}>
      <div className={`container`}>
        <ScrollReveal className={styles.graphicContainer}>
          <div className={styles.graphicText}>
            <span className={styles.eyebrow}>OUR LEGACY</span>
            <h2>Consistent Excellence, Year After Year</h2>
            <p>
              At NK Academy, we don't just teach; we deliver proven results. Our track record speaks for itself, with unmatched passing rates and hundreds of students achieving top percentiles across Borivali.
            </p>
            
            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <div className={styles.iconBox}><TrendingUp size={24} /></div>
                <div>
                  <h4>100% Passing Rate</h4>
                  <p>Unbroken record across all branches</p>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.iconBox}><Award size={24} /></div>
                <div>
                  <h4>98% Highest Score</h4>
                  <p>In SSC & CBSE Board Exams</p>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.iconBox}><Users size={24} /></div>
                <div>
                  <h4>500+ Toppers</h4>
                  <p>Mentored since 2019</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.graphicVisual}>
             <div className={styles.visualCard}>
                <h3>2024 Board Pass Rates</h3>
                <div className={styles.barChart}>
                  <div className={styles.barItem}>
                    <span className={styles.barLabel}>SSC</span>
                    <div className={styles.barTrack}><div className={styles.barFill} style={{width: '98%'}}></div></div>
                    <span className={styles.barValue}>98%</span>
                  </div>
                  <div className={styles.barItem}>
                    <span className={styles.barLabel}>ICSE</span>
                    <div className={styles.barTrack}><div className={styles.barFill} style={{width: '95%'}}></div></div>
                    <span className={styles.barValue}>95%</span>
                  </div>
                  <div className={styles.barItem}>
                    <span className={styles.barLabel}>CBSE</span>
                    <div className={styles.barTrack}><div className={styles.barFill} style={{width: '94%'}}></div></div>
                    <span className={styles.barValue}>94%</span>
                  </div>
                </div>
             </div>
             
             <div className={styles.floatingBadge}>
               <span className={styles.badgeNumber}>#1</span>
               <span className={styles.badgeText}>Sanskrit Coaching<br/>in Borivali</span>
             </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
