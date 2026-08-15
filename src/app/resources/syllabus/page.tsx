"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Search, Book } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

const BOARDS = [
  { id: 'maharashtra-state-board', name: 'Maharashtra State Board' },
  { id: 'cbse', name: 'CBSE' },
  { id: 'icse', name: 'ICSE' },
  { id: 'nta', name: 'NTA (NEET / JEE)' },
  { id: 'cet-cell', name: 'Maharashtra CET Cell' }
];

const CLASSES = ['Std 5', 'Std 6', 'Std 7', 'Std 8', 'Std 9', 'Std 10', 'Std 11', 'Std 12', 'Dropper'];
const ACADEMIC_YEARS = ['2026-27', '2027-28'];
const SUBJECTS = ['Mathematics Part - I (Algebra)', 'Science', 'Physics', 'Chemistry', 'Biology'];

export default function SyllabusExplorer() {
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedYear, setSelectedYear] = useState('2026-27');
  const [selectedClass, setSelectedClass] = useState('');
  
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <h1>Syllabus Explorer</h1>
          <p>Find the official, verified curriculum for your exact board, class, and subject.</p>
        </div>
      </div>

      <div className={`container ${styles.explorerContainer}`}>
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label>1. Select Board / Examination</label>
            <div className={styles.optionsGrid}>
              {BOARDS.map(b => (
                <button 
                  key={b.id} 
                  className={`${styles.optionBtn} ${selectedBoard === b.id ? styles.active : ''}`}
                  onClick={() => setSelectedBoard(b.id)}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

          {selectedBoard && (
            <div className={styles.filterGroup}>
              <label>2. Select Academic Year</label>
              <div className={styles.optionsGrid}>
                {ACADEMIC_YEARS.map(y => (
                  <button 
                    key={y} 
                    className={`${styles.optionBtn} ${selectedYear === y ? styles.active : ''}`}
                    onClick={() => setSelectedYear(y)}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBoard && selectedYear && (
            <div className={styles.filterGroup}>
              <label>3. Select Class</label>
              <div className={styles.optionsGrid}>
                {CLASSES.map(c => (
                  <button 
                    key={c} 
                    className={`${styles.optionBtn} ${selectedClass === c.toLowerCase().replace(' ', '') ? styles.active : ''}`}
                    onClick={() => setSelectedClass(c.toLowerCase().replace(' ', ''))}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {selectedBoard && selectedYear && selectedClass && (
          <div className={styles.results}>
            <h2>Available Subjects</h2>
            <div className={styles.subjectGrid}>
              {/* This is mocked for the explorer UI, normally it filters based on selection */}
              {SUBJECTS.map((sub, i) => (
                <Link 
                  key={i} 
                  href={`/resources/syllabus/${selectedBoard}/${selectedYear}/${selectedClass}/${sub.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className={styles.subjectCard}
                >
                  <Book size={24} className={styles.subjectIcon} />
                  <h3>{sub}</h3>
                  <ChevronRight size={16} className={styles.arrowIcon} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
