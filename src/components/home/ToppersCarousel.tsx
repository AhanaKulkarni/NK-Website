'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import styles from './ToppersCarousel.module.css';

const topperGroups = [
  {
    id: 1,
    title: 'TOP ACHIEVERS',
    subtitle: 'East Branch 2025-26',
    mainTopper: { name: 'Saanvi Prabhu', photoId: 'saanvi-prabhu', score: '96.6%', school: 'St. Lawrence High School' },
    gridToppers: [
      { name: 'Aditya Khatavkar', photoId: 'aditya-khatavkar', score: '95.4%', school: 'St. Lawrence High School' },
      { name: 'Araya Dewoolkar', photoId: 'araya-dewoolkar', score: '95.8%', school: 'St. Lawrence High School' },
      { name: 'Hrishant Dave', photoId: 'hrishant-dave', score: '94.2%', school: 'Mary Immaculate Girls High School' },
      { name: 'Indira Parmar', photoId: 'indira-parmar', score: '96.0%', school: 'St. Lawrence High School' }
    ]
  },
  {
    id: 2,
    title: 'TOP ACHIEVERS',
    subtitle: 'West Branch 2024-25',
    mainTopper: { name: 'Jiya Modi', photoId: 'jiya-modi', score: '93.2%', school: 'Mary Immaculate Girls High School' },
    gridToppers: [
      { name: 'Shwet Pange', photoId: 'shwet-pange', score: '94.6%', school: 'St. Lawrence High School' },
      { name: 'Shrey Thakoor', photoId: 'shrey-thakoor', score: '96.2%', school: 'St. Lawrence High School' },
      { name: 'Ahan Shetty', photoId: 'ahan-shetty', score: '92.8%', school: 'Rustomjee Cambridge' }
    ]
  },
  {
    id: 3,
    title: 'TOP ACHIEVERS',
    subtitle: 'East Branch 2024-25',
    mainTopper: { name: 'Tithi Patel', photoId: 'tithi-sanjay-patel', score: '97.2%', school: 'St. Lawrence High School' },
    gridToppers: [
      { name: 'Ansh Kumar', photoId: 'ansh-kumar', score: '96.8%', school: 'Rustomjee Cambridge' },
      { name: 'Janhavi Pawar', photoId: 'janhavi-pawar', score: '92.4%', school: 'Mary Immaculate Girls High School' },
      { name: 'Yash Vedak', photoId: 'yash-vedak', score: '95.6%', school: 'St. Lawrence High School' },
      { name: 'Rashi Agrawal', photoId: 'rashi-agrwal', score: '94.8%', school: 'St. Lawrence High School' }
    ]
  },
  {
    id: 4,
    title: 'TOP ACHIEVERS',
    subtitle: 'East Branch 2023-24',
    mainTopper: { name: 'Aaryan Rathod', photoId: 'aaryan-rathod', score: '89.8%', school: 'St. Lawrence High School' },
    gridToppers: [
      { name: 'Hetvi Pandya', photoId: 'hetvi-pandya', score: '95.4%', school: 'Mary Immaculate Girls High School' },
      { name: 'Shubham Wagle', photoId: 'shubham-wagle', score: '96.4%', school: 'St. Lawrence High School' },
      { name: 'Vivaan Shetty', photoId: 'vivaan-shetty', score: '95.2%', school: 'Rustomjee Cambridge' },
      { name: 'Shreya Gupta', photoId: 'shreya-gupta', score: '97.0%', school: 'St. Lawrence High School' }
    ]
  }
];

export function ToppersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % topperGroups.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + topperGroups.length) % topperGroups.length);
  };

  return (
    <section className={styles.carouselSection}>
      <div className={`container ${styles.carouselContainer}`}>
        
        <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>

        <div className={styles.slideWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={styles.slide}
            >
              
              {/* Left text block */}
              <div className={styles.textColumn}>
                <div className={styles.badge}>NK ACADEMY EXCELLENCE</div>
                <h2 className={`display-font ${styles.title}`}>
                  {topperGroups[currentIndex].title}
                </h2>
                <div className={styles.subtitleBadge}>
                  {topperGroups[currentIndex].subtitle}
                </div>
                
                <div className={styles.statsBox}>
                  <div className={styles.statsNumber}>30+</div>
                  <div className={styles.statsText}>STUDENTS WITH MORE THAN 90%</div>
                </div>
              </div>

              {/* Center Main Topper */}
              <div className={styles.mainTopperColumn}>
                <div className={styles.blobBackground}>
                  <div className={styles.blobRed}></div>
                  <div className={styles.blobNavy}></div>
                </div>
                <div style={{position: 'relative', display: 'inline-block'}}>
                  <img 
                    src={`/students/${topperGroups[currentIndex].mainTopper.photoId}.jpg`} 
                    alt={topperGroups[currentIndex].mainTopper.name}
                    className={styles.mainPhoto}
                    onError={(e) => { e.currentTarget.src = '/logo.png'; e.currentTarget.style.objectFit = 'contain'; e.currentTarget.style.padding = '2rem'; }}
                  />
                  <div className={styles.trophyIcon} style={{position: 'absolute', top: '10px', right: '-10px', background: 'white', borderRadius: '50%', padding: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}}>
                    <Trophy size={24} color="#FBBF24" fill="#FBBF24" />
                  </div>
                </div>
                <div className={styles.mainLabel}>
                  <div className={styles.mainLabelName}>{topperGroups[currentIndex].mainTopper.name}</div>
                  <div className={styles.mainLabelScore}>{topperGroups[currentIndex].mainTopper.score}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', marginTop: '2px', fontWeight: '400', textAlign: 'center' }}>{topperGroups[currentIndex].mainTopper.school}</div>
                </div>
              </div>

              {/* Right Grid */}
              <div className={styles.gridColumn}>
                {topperGroups[currentIndex].gridToppers.map((student, idx) => (
                  <div key={idx} className={styles.gridCard}>
                    <div className={styles.gridPhotoWrapper}>
                      <img 
                        src={`/students/${student.photoId}.jpg`} 
                        alt={student.name}
                        className={styles.gridPhoto}
                        onError={(e) => { e.currentTarget.src = '/logo.png'; e.currentTarget.style.objectFit = 'contain'; }}
                      />
                      <div className={styles.trophyIcon}>
                        <Trophy size={16} color="#FBBF24" fill="#FBBF24" />
                      </div>
                    </div>
                    <div className={styles.gridLabel}>
                      <div className={styles.gridName}>{student.name}</div>
                      <div className={styles.gridScore}>{student.score}</div>
                      <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.9)', marginTop: '2px', fontWeight: '500', textAlign: 'center', lineHeight: '1.1' }}>{student.school}</div>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>

      </div>
    </section>
  );
}
