export type Board = 'Maharashtra State Board' | 'CBSE' | 'ICSE' | 'ISC' | 'NTA' | 'Maharashtra CET Cell';

export type AcademicYear = '2026-27' | '2027-28';

export type ClassLevel = 'Std 5' | 'Std 6' | 'Std 7' | 'Std 8' | 'Std 9' | 'Std 10' | 'Std 11' | 'Std 12' | 'Dropper';

export type Stream = 'General' | 'PCM' | 'PCB' | 'Commerce';

export type ProgramCategory = 'School' | 'Junior College' | 'Competitive Exams' | 'Specialised';

export interface SourceVerification {
  sourceType: 'official' | 'internal' | 'third-party';
  sourceAuthority: string; // e.g. "MSBSHSE", "CBSE", "NTA"
  sourceUrl: string;
  lastVerified: string; // ISO Date e.g. "2026-08-13"
}

export interface Topic {
  id: string;
  title: string;
  description?: string;
}

export interface Chapter {
  id: string;
  title: string;
  chapterNumber?: number;
  topics: Topic[];
}

export interface Unit {
  id: string;
  title: string;
  unitNumber?: number;
  chapters: Chapter[];
}

export interface Syllabus {
  id: string; // e.g., 'cbse-2026-27-std10-science'
  board: Board;
  academicYear: AcademicYear;
  classLevel: ClassLevel;
  stream: Stream;
  subject: string;
  subjectCode?: string;
  units: Unit[];
  verification: SourceVerification;
}

export type ResourceType = 'Syllabus' | 'Notes' | 'Question Paper' | 'Practice Test' | 'Revision Sheet' | 'Formula Sheet' | 'Exam Guide' | 'Textbook';

export interface AcademicResource {
  id: string;
  type: ResourceType;
  title: string;
  board?: Board;
  academicYear?: AcademicYear;
  classLevel?: ClassLevel;
  stream?: Stream;
  subject?: string;
  chapterId?: string;
  
  // Link or File handling
  sourceUrl: string;
  isExternal: boolean; // True if pointing to NCERT/external site, False if local PDF
  
  verification: SourceVerification;
}

export interface ProgramOverview {
  id: string;
  title: string;
  category: ProgramCategory;
  shortDescription: string;
  whoItsFor: string;
  classesCovered: ClassLevel[];
  boardsCovered: Board[];
  streamsCovered?: Stream[];
  subjects: string[];
  learningApproach: string[];
  whatStudentsReceive: string[];
}
