'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Quote } from 'lucide-react';
import styles from './about.module.css';

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

export default function AboutPage() {
  return (
    <div className={styles.page}>
      
      {/* HEADER */}
      <section className={styles.header}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            About NK Academy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.subtitle}
          >
            The direction of success. Since our inception, we have been committed to delivering the highest quality education and shaping the leaders of tomorrow.
          </motion.p>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className={styles.founderSection}>
        <div className={`container ${styles.founderGrid}`}>
          <Reveal>
            <div className={styles.founderImageWrapper}>
              {/* I'll use a placeholder for NK Sir. If the user has a specific image, they can swap this src later */}
              <img src="/logo.png" alt="Nand Kishor Mishra - Founder" className={styles.founderImage} style={{ objectFit: 'contain', backgroundColor: '#f8f9fa', padding: '2rem' }} />
            </div>
          </Reveal>
          
          <Reveal delay={0.2} className={styles.founderContent}>
            <div>
              <h2>Nand Kishor Mishra</h2>
              <h3>Our Founder</h3>
            </div>
            
            <div className={styles.founderText}>
              <div className={styles.quote}>
                &quot;Learning from the best teachers is an experience that can sometimes be more profound than education itself.&quot;
              </div>
              <p>
                At NK Academy, we believe that learning from exceptional mentors is an experience more profound than the curriculum itself. We combine brilliant educators, meticulously crafted study materials, and rigorous practice to nurture academic excellence. 
              </p>
              <p>
                Success requires dedication&mdash;we don&apos;t believe in shortcuts, but we provide the strongest foundation to help you climb higher. Driven by the philosophy that &apos;the best is yet to come,&apos; we inspire continuous, competitive improvement in every student, leveraging modern technology to keep quality education at your fingertips.
              </p>
              <p style={{ fontWeight: '600', color: 'var(--color-primary)', marginTop: '1rem' }}>
                We are committed to delivering the highest quality education. NK Academy assures you: Your child is in safe hands.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MOTTO & QUALITY SECTION */}
      <section className={styles.valuesSection}>
        <div className={`container ${styles.valuesGrid}`}>
          
          <Reveal>
            <div className={styles.valueCard}>
              <div className={styles.valueCardContent}>
                <div className={styles.valueIcon}>
                  <Target size={32} />
                </div>
                <h3 className={styles.valueTitle}>Our Motto</h3>
                <p className={styles.valueText}>
                  Teaching, more than imparting knowledge, is inspiring change. Learning, more than absorbing facts, is acquiring understanding. We focus on true comprehension that lasts a lifetime.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className={styles.valueCard}>
              <div className={styles.valueCardContent}>
                <div className={styles.valueIcon}>
                  <Award size={32} />
                </div>
                <h3 className={styles.valueTitle}>Our Quality</h3>
                <p className={styles.valueText}>
                  No compromises when it comes to the quality of education. We pledge to continually level up the knowledge that we impart, harnessing the latest teaching methodologies and implementing them with absolute perfection.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <Reveal className={styles.testiHeader}>
            <span className={styles.testiEyebrow}>Testimonial</span>
            <h2 className={styles.testiTitle}>Parents Feedback</h2>
          </Reveal>

          <div className={styles.testiGrid}>
            <Reveal delay={0.1}>
              <div className={styles.testiCard}>
                <Quote size={40} color="rgba(255,255,255,0.1)" style={{ marginBottom: '1rem' }} />
                <p className={styles.testiText}>
                  &quot;Dear NK Mishra sir... today Aayushi&apos;s PA 1 result of Std. 8th was out. She has done pretty good in most of the subjects. Special mention of Science where she got 19/20 and Hindi as well. This is the first year we enrolled her to NK Academy and I am happy to see her progress in very short span of time.&quot;
                </p>
                <div className={styles.testiAuthor}>
                  <div className={styles.testiAvatar}>K</div>
                  <div>
                    <div className={styles.testiName}>Adv. Kedar Dike</div>
                    <div className={styles.testiRole}>Parent</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className={styles.testiCard}>
                <Quote size={40} color="rgba(255,255,255,0.1)" style={{ marginBottom: '1rem' }} />
                <p className={styles.testiText}>
                  &quot;Best classes must say... teachers in these 3 years has always helped me... looked after every student with great efforts and has made a friendly environment between teachers and students. With our most experienced sanskrit teacher Nk sir. It was a wonderful time studying in nk academy which is not just an academy but a family.&quot;
                </p>
                <div className={styles.testiAuthor}>
                  <div className={styles.testiAvatar}>R</div>
                  <div>
                    <div className={styles.testiName}>Renee Choksi</div>
                    <div className={styles.testiRole}>Student / Parent</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}
