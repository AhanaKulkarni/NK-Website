import { notFound } from 'next/navigation';
import { syllabusData } from '@/data/academic/syllabus';
import { ShieldCheck, Book, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

export default function SubjectSyllabusPage({ 
  params 
}: { 
  params: { board: string; academicYear: string; classLevel: string; subject: string } 
}) {
  // Try to find the syllabus in our data store.
  // In a real DB, we'd query by the slugs. For now, we search the array.
  
  // Example match logic based on the params structure:
  // /resources/syllabus/cbse/2026-27/std10/science
  const mappedBoard = params.board.toLowerCase();
  const syllabus = syllabusData.find(s => 
    s.board.toLowerCase().replace(/[^a-z0-9]+/g, '-') === mappedBoard &&
    s.academicYear === params.academicYear &&
    s.classLevel.toLowerCase().replace(/[^a-z0-9]+/g, '') === params.classLevel &&
    s.subject.toLowerCase().replace(/[^a-z0-9]+/g, '-') === params.subject
  );

  if (!syllabus) {
    return (
      <div className={styles.page}>
        <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
          <h2>Syllabus Not Yet Available</h2>
          <p>We are currently gathering verified data for this subject.</p>
          <Link href="/resources/syllabus" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Back to Explorer
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <Link href="/resources/syllabus" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Explorer
          </Link>
          <div className={styles.heroContent}>
             <div className={styles.heroLeft}>
                <span className={styles.classBadge}>{syllabus.classLevel}</span>
                <h1>{syllabus.subject} {syllabus.subjectCode && `(${syllabus.subjectCode})`}</h1>
                <p className={styles.boardName}>{syllabus.board}</p>
             </div>
             
             <div className={styles.verificationBox}>
                <div className={styles.vHeader}>
                  <ShieldCheck size={20} className={styles.vIcon} /> 
                  ACADEMIC INFORMATION
                </div>
                <div className={styles.vBody}>
                  <div className={styles.vRow}>
                    <span>Academic Year:</span>
                    <strong>{syllabus.academicYear}</strong>
                  </div>
                  <div className={styles.vRow}>
                    <span>Last Verified:</span>
                    <strong>{syllabus.verification.lastVerified}</strong>
                  </div>
                  <a href={syllabus.verification.sourceUrl} target="_blank" rel="noopener noreferrer" className={styles.officialLink}>
                    View Official Syllabus <ExternalLink size={14} />
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className={`container ${styles.contentContainer}`}>
         <div className={styles.syllabusMain}>
           <h2>Full Syllabus</h2>
           
           <div className={styles.unitsList}>
             {syllabus.units.map(unit => (
               <div key={unit.id} className={styles.unitCard}>
                  <div className={styles.unitHeader}>
                    <span className={styles.unitNum}>Unit {unit.unitNumber}</span>
                    <h3>{unit.title}</h3>
                  </div>
                  
                  <div className={styles.chaptersList}>
                    {unit.chapters.map(chapter => (
                      <div key={chapter.id} className={styles.chapterItem}>
                        <h4>{chapter.title}</h4>
                        <ul className={styles.topicList}>
                          {chapter.topics.map(topic => (
                            <li key={topic.id}>{topic.title}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
               </div>
             ))}
           </div>
         </div>
         
         <div className={styles.sidebar}>
           <div className={styles.resourceCard}>
              <h3>Study Resources</h3>
              <p>Prepare for {syllabus.subject} with NK Academy's exclusive materials.</p>
              
              <Link href={`/resources/notes/${params.board}/${params.academicYear}/${params.classLevel}/${params.subject}`} className={styles.resourceLink}>
                <Book size={18} /> Notes & Summaries
              </Link>
              <Link href={`/resources/question-papers/${params.board}/${params.academicYear}/${params.classLevel}/${params.subject}`} className={styles.resourceLink}>
                <Book size={18} /> Past Question Papers
              </Link>
              <Link href={`/resources/practice-tests/${params.board}/${params.academicYear}/${params.classLevel}/${params.subject}`} className={styles.resourceLink}>
                <Book size={18} /> Practice Tests
              </Link>
           </div>
         </div>
      </div>
    </div>
  );
}
