'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChevronRight, Search, Book } from 'lucide-react';
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

const SUBJECT_MAP: Record<string, string[]> = {
  'default': ['Mathematics', 'Science', 'English', 'Social Studies'],
  'std-8': ['Mathematics', 'Science', 'History & Civics', 'Geography', 'English', 'Hindi', 'Marathi', 'Sanskrit'],
  'std-9': ['Mathematics Part - 1 (Algebra)', 'Mathematics Part - 2 (Geometry)', 'Science & Technology', 'History & Political Science', 'Geography', 'English', 'Hindi', 'Marathi', 'Sanskrit'],
  'std-10': ['Mathematics Part - 1 (Algebra)', 'Mathematics Part - 2 (Geometry)', 'Science & Technology Part - 1', 'Science & Technology Part - 2', 'History & Political Science', 'Geography', 'English', 'Hindi', 'Marathi', 'Sanskrit'],
  'std-11': ['Physics', 'Chemistry', 'Mathematics & Statistics', 'Biology', 'Information Technology', 'English', 'Book Keeping & Accountancy', 'Economics', 'OCM', 'SP'],
  'std-12': ['Physics', 'Chemistry', 'Mathematics & Statistics', 'Biology', 'Information Technology', 'English', 'Book Keeping & Accountancy', 'Economics', 'OCM', 'SP'],
  'dropper': ['Physics', 'Chemistry', 'Mathematics', 'Biology']
};

function SyllabusContent() {
  const searchParams = useSearchParams();
  const programParam = searchParams?.get('program');

  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedYear, setSelectedYear] = useState('2026-27');
  const [selectedClass, setSelectedClass] = useState('');

  // Auto-select based on program query param
  useEffect(() => {
    if (programParam) {
      if (['ssc', 'science', 'commerce', 'mht-cet'].includes(programParam)) {
        setSelectedBoard('maharashtra-state-board');
      } else if (programParam === 'cbse') {
        setSelectedBoard('cbse');
      } else if (programParam === 'icse') {
        setSelectedBoard('icse');
      } else if (['jee', 'neet'].includes(programParam)) {
        setSelectedBoard('nta');
      }
    }
  }, [programParam]);

  const getSubjectsForClass = (classSelection: string) => {
    return SUBJECT_MAP[classSelection] || SUBJECT_MAP['default'];
  };

  const currentSubjects = selectedClass ? getSubjectsForClass(selectedClass) : [];

  return (
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
              {CLASSES.map(c => {
                const classKey = c.toLowerCase().replace(' ', '-');
                return (
                  <button 
                    key={c} 
                    className={`${styles.optionBtn} ${selectedClass === classKey ? styles.active : ''}`}
                    onClick={() => setSelectedClass(classKey)}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {selectedBoard && selectedYear && selectedClass && (
        <div className={styles.results}>
          <h2>Available Subjects</h2>
          <div className={styles.subjectGrid}>
            {currentSubjects.map((sub, i) => (
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
  );
}

export default function SyllabusExplorer() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <h1>Syllabus Explorer</h1>
          <p>Find the official, verified curriculum for your exact board, class, and subject.</p>
        </div>
      </div>
      <Suspense fallback={<div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Loading...</div>}>
        <SyllabusContent />
      </Suspense>
    </div>
  );
}
