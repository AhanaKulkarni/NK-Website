"use client";

import React from 'react';
import { ResultsBoard } from '@/components/sections/ResultsBoard';
import styles from './page.module.css';

export default function ResultsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <h1>Hall of Fame</h1>
          <p>Celebrating the outstanding achievements of our students.</p>
        </div>
      </div>

      <div className={`container ${styles.contentContainer}`}>
        <ResultsBoard />
      </div>
    </div>
  );
}
