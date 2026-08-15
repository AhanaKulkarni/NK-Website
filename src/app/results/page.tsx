"use client";

import React, { useState, useMemo } from 'react';
import { nk_east_23_24, Topper } from '@/data/results';
import { ResultsBoard } from '@/components/sections/ResultsBoard';
import styles from './page.module.css';

export default function ResultsPage() {
  const [filterYear, setFilterYear] = useState<string>('');
  const [filterBoard, setFilterBoard] = useState<string>('');
  const [filterSubject, setFilterSubject] = useState<string>('');
  
  // Combine all results (if we add more arrays in future, concat them here)
  const allResults = [...nk_east_23_24];

  // Dynamically compute available filter options based on ACTUAL data present
  const availableYears = useMemo(() => Array.from(new Set(allResults.map(r => r.academicYear).filter(Boolean))), [allResults]);
  const availableBoards = useMemo(() => Array.from(new Set(allResults.map(r => r.board).filter(Boolean))), [allResults]);
  const availableSubjects = useMemo(() => Array.from(new Set(allResults.map(r => r.subject).filter(Boolean))), [allResults]);

  const filteredResults = useMemo(() => {
    return allResults.filter(r => {
      if (filterYear && r.academicYear !== filterYear) return false;
      if (filterBoard && r.board !== filterBoard) return false;
      if (filterSubject && r.subject !== filterSubject) return false;
      return true;
    });
  }, [allResults, filterYear, filterBoard, filterSubject]);

  const hasActiveFilters = filterYear || filterBoard || filterSubject;

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <h1>Hall of Fame</h1>
          <p>Celebrating the outstanding achievements of our students.</p>
        </div>
      </div>

      <div className={`container ${styles.contentContainer}`}>
        
        {/* Only show filter card if there are actually filterable values in the data */}
        {(availableYears.length > 0 || availableBoards.length > 0 || availableSubjects.length > 0) && (
          <div className={styles.filterCard}>
            
            {availableYears.length > 0 && (
              <select className={styles.filterSelect} value={filterYear} onChange={e => setFilterYear(e.target.value)}>
                <option value="">All Academic Years</option>
                {availableYears.map(y => <option key={y} value={y as string}>{y}</option>)}
              </select>
            )}

            {availableBoards.length > 0 && (
              <select className={styles.filterSelect} value={filterBoard} onChange={e => setFilterBoard(e.target.value)}>
                <option value="">All Boards</option>
                {availableBoards.map(b => <option key={b} value={b as string}>{b}</option>)}
              </select>
            )}

            {availableSubjects.length > 0 && (
              <select className={styles.filterSelect} value={filterSubject} onChange={e => setFilterSubject(e.target.value)}>
                <option value="">All Subjects</option>
                {availableSubjects.map(s => <option key={s} value={s as string}>{s}</option>)}
              </select>
            )}

            {hasActiveFilters && (
              <button className={styles.clearBtn} onClick={() => {
                setFilterYear(''); setFilterBoard(''); setFilterSubject('');
              }}>
                Clear Filters
              </button>
            )}
          </div>
        )}

        <div className={styles.resultsGrid}>
          {filteredResults.length === 0 ? (
             <div className={styles.noResults}>
                No results found matching these specific filters.
             </div>
          ) : (
             <>
               {!hasActiveFilters && (
                 <>
                   <ResultsBoard />
                 </>
               )}
               {hasActiveFilters && (
                 <>
                   <h2 className={styles.sectionTitle}>Filtered Results ({filteredResults.length})</h2>
                   <ResultsBoard data={filteredResults} />
                 </>
               )}
             </>
          )}
        </div>
      </div>
    </div>
  );
}
