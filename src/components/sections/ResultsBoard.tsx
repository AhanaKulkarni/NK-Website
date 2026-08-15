"use client";

import React, { useState } from 'react';
import { Trophy } from 'lucide-react';
import { allBoards, Topper } from '@/data/results';
import styles from './ResultsBoard.module.css';

export function ResultsBoard({ data }: { data?: Topper[] }) {
  const boardNames = Object.keys(allBoards);
  const [activeTab, setActiveTab] = useState<string>(boardNames[0]);

  // If external data is passed via props, use it directly and ignore internal tabs.
  const currentData: Topper[] = data || allBoards[activeTab as keyof typeof allBoards] || [];

  return (
    <div className={styles.boardContainer}>
      {!data && (
        <>
          <div className={styles.tabs}>
            {boardNames.map(name => (
              <button 
                key={name}
                className={`${styles.tabBtn} ${activeTab === name ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(name)}
              >
                {name}
              </button>
            ))}
          </div>
          
          <div className={styles.boardHeader}>
            <h3>{activeTab} Toppers</h3>
          </div>
        </>
      )}

      <div className={styles.grid}>
        {currentData.map((student, i) => (
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
    </div>
  );
}
