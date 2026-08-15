"use client";

import React, { useState, useMemo } from 'react';
import { Trophy } from 'lucide-react';
import { allToppers, Topper } from '@/data/results';
import styles from './ResultsBoard.module.css';

interface ResultsBoardProps {
  hideFilters?: boolean;
  defaultBranch?: string;
  defaultBoard?: string;
  defaultYear?: string;
  data?: Topper[]; // If we want to override data externally
}

export function ResultsBoard({ 
  hideFilters = false, 
  defaultBranch = 'NK East', 
  defaultBoard = 'CBSE', 
  defaultYear = '2024-25',
  data
}: ResultsBoardProps) {
  const [branch, setBranch] = useState(defaultBranch);
  const [board, setBoard] = useState(defaultBoard);
  const [year, setYear] = useState(defaultYear);

  const availableBranches = useMemo(() => Array.from(new Set(allToppers.map(t => t.branch).filter(Boolean))) as string[], []);
  const availableBoards = useMemo(() => Array.from(new Set(allToppers.map(t => t.board).filter(Boolean))) as string[], []);
  const availableYears = useMemo(() => Array.from(new Set(allToppers.map(t => t.academicYear).filter(Boolean))).sort().reverse() as string[], []);

  const filteredData = useMemo(() => {
    let sourceData = data || allToppers;
    
    // If not using external data override, apply our internal filters
    if (!data) {
      sourceData = sourceData.filter(t => t.branch === branch && t.board === board && t.academicYear === year);
    }
    
    // Sort by score
    return [...sourceData].sort((a, b) => {
      const getScore = (s: string) => {
        if (!s) return 0;
        if (s.includes('100/100')) return 100;
        if (s === 'Top Scorer') return 80; 
        const num = parseFloat(s.replace('%', ''));
        return isNaN(num) ? 0 : num;
      };
      return getScore(b.score) - getScore(a.score);
    });
  }, [branch, board, year, data]);

  const highlightTopper = filteredData[0];
  const runnerUps = filteredData.slice(1, 5);
  const rest = filteredData.slice(5);

  return (
    <div className={styles.boardContainer}>
      {!hideFilters && !data && (
         <div className={styles.filterContainer}>
            <div className={styles.filterGroup}>
               <span className={styles.filterLabel}>BRANCH</span>
               <div className={styles.pillGroup}>
                 {availableBranches.map(b => (
                   <button key={b} className={`${styles.filterBtn} ${branch === b ? styles.filterBtnActive : ''}`} onClick={() => setBranch(b)}>{b}</button>
                 ))}
               </div>
            </div>
            
            <div className={styles.filterGroup}>
               <span className={styles.filterLabel}>BOARD</span>
               <div className={styles.pillGroup}>
                 {availableBoards.map(b => (
                   <button key={b} className={`${styles.filterBtn} ${board === b ? styles.filterBtnActive : ''}`} onClick={() => setBoard(b)}>{b}</button>
                 ))}
               </div>
            </div>

            <div className={styles.filterGroup}>
               <span className={styles.filterLabel}>YEAR</span>
               <div className={styles.pillGroup}>
                 {availableYears.map(y => (
                   <button key={y} className={`${styles.filterBtn} ${year === y ? styles.filterBtnActive : ''}`} onClick={() => setYear(y)}>{y}</button>
                 ))}
               </div>
            </div>
         </div>
      )}

      {filteredData.length === 0 ? (
        <div className={styles.emptyState}>Results coming soon for this batch.</div>
      ) : (
        <>
          <div className={styles.extremeToppers}>
             {/* Highlight Topper */}
             {highlightTopper && (
               <div className={styles.highlightTopper}>
                 <div className={styles.highlightPhotoWrapper}>
                   <img 
                      src={`/students/${highlightTopper.photoId}.jpg`} 
                      alt={highlightTopper.name} 
                      className={styles.highlightPhoto} 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.classList.add(styles.showInitialsHighlight);
                      }}
                   />
                   <span className={styles.initialsHighlight}>{highlightTopper.name.charAt(0)}</span>
                   <div className={styles.highlightTrophy}>🏆 Top Scorer</div>
                 </div>
                 <div className={styles.highlightInfo}>
                   <div className={styles.highlightName}>{highlightTopper.name}</div>
                   <div className={styles.highlightScore}>{highlightTopper.score}</div>
                   {highlightTopper.school && <div className={styles.highlightSchool}>{highlightTopper.school}</div>}
                 </div>
               </div>
             )}

             {/* Runner Ups */}
             {runnerUps.length > 0 && (
               <div className={styles.runnerUpGrid}>
                 {runnerUps.map((topper, i) => (
                   <div key={i} className={styles.runnerUpCard}>
                     <div className={styles.runnerUpPhotoWrapper}>
                       <img 
                          src={`/students/${topper.photoId}.jpg`} 
                          alt={topper.name} 
                          className={styles.runnerUpPhoto}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.classList.add(styles.showInitialsRunnerUp);
                          }}
                       />
                       <span className={styles.initialsRunnerUp}>{topper.name.charAt(0)}</span>
                     </div>
                     <div className={styles.runnerUpInfo}>
                       <div className={styles.runnerUpName}>{topper.name}</div>
                       <div className={styles.runnerUpScore}>{topper.score}</div>
                       {topper.school && <div className={styles.highlightSchool} style={{ fontSize: '0.85rem' }}>{topper.school}</div>}
                     </div>
                   </div>
                 ))}
               </div>
             )}
          </div>
          
          {rest.length > 0 && (
            <>
              <div className={styles.boardHeader}>
                <h3>More Top Achievers</h3>
              </div>
              <div className={styles.grid}>
                {rest.map((student, i) => (
                  <div key={i} className={styles.card}>
                    <div className={styles.photoWrapper}>
                      <div className={styles.photoPlaceholder}>
                        <img 
                          src={`/students/${student.photoId}.jpg`} 
                          alt={student.name}
                          className={styles.photo}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.classList.add(styles.showInitials);
                          }}
                        />
                        <span className={styles.initials}>{student.name.charAt(0)}</span>
                      </div>
                      <div className={styles.trophyBadge}>
                        <Trophy size={16} className={styles.trophyIcon} />
                      </div>
                    </div>
                    <div className={styles.info}>
                      <div className={styles.name}>{student.name}</div>
                      <div className={styles.score}>{student.score}</div>
                      {student.school && <div className={styles.school}>{student.school}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
