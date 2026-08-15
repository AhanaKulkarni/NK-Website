import { ProgramOverview } from './types';

export const programsData: Record<string, ProgramOverview> = {
  'ssc': {
    id: 'ssc',
    title: 'SSC Coaching',
    category: 'School',
    shortDescription: 'Maharashtra State Board mastery from Std 5 to Std 10.',
    whoItsFor: 'Students enrolled in Maharashtra State Board schools seeking a strong foundation and outstanding board results.',
    classesCovered: ['Std 5', 'Std 6', 'Std 7', 'Std 8', 'Std 9', 'Std 10'],
    boardsCovered: ['Maharashtra State Board'],
    streamsCovered: ['General'],
    subjects: ['English', 'Marathi', 'Hindi', 'Sanskrit', 'Mathematics', 'Science & Technology', 'History & Political Science', 'Geography'],
    learningApproach: [
      'Textbook-focused conceptual learning',
      'Regular unit tests aligned with board pattern',
      'Dedicated grammar and writing skills sessions for languages',
      'Extensive paper solving for Std 10'
    ],
    whatStudentsReceive: [
      'Comprehensive study notes',
      'Previous years question paper analysis',
      'Doubt solving sessions',
      'Parent-teacher progress tracking'
    ]
  },
  'cbse': {
    id: 'cbse',
    title: 'CBSE Coaching',
    category: 'School',
    shortDescription: 'Application-driven CBSE preparation for Classes 5 to 10.',
    whoItsFor: 'CBSE students who need conceptual clarity and practice to excel in school exams and Class 10 Boards.',
    classesCovered: ['Std 5', 'Std 6', 'Std 7', 'Std 8', 'Std 9', 'Std 10'],
    boardsCovered: ['CBSE'],
    streamsCovered: ['General'],
    subjects: ['English', 'Hindi', 'Sanskrit', 'Mathematics', 'Science', 'Social Science'],
    learningApproach: [
      'NCERT-centric teaching methodology',
      'Focus on application-based questions and HOTS',
      'Regular assessment through objective and subjective tests',
      'Strategic revision plans for board exams'
    ],
    whatStudentsReceive: [
      'NCERT solution guides',
      'Chapter-wise revision maps',
      'Sample paper solving',
      'Continuous performance evaluation'
    ]
  },
  'icse': {
    id: 'icse',
    title: 'ICSE Coaching',
    category: 'School',
    shortDescription: 'Depth-focused ICSE coaching for Classes 5 to 10.',
    whoItsFor: 'ICSE students requiring in-depth understanding and meticulous preparation for the rigorous CISCE curriculum.',
    classesCovered: ['Std 5', 'Std 6', 'Std 7', 'Std 8', 'Std 9', 'Std 10'],
    boardsCovered: ['ICSE'],
    streamsCovered: ['General'],
    subjects: ['English', 'Hindi', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'History & Civics', 'Geography', 'Commercial Studies', 'Computer Applications'],
    learningApproach: [
      'Detailed exploration of vast syllabus',
      'Emphasis on English language proficiency',
      'Subject-specific specialized faculty',
      'Rigorous internal testing pattern'
    ],
    whatStudentsReceive: [
      'Specialized ICSE notes',
      'Extensive question banks',
      'Project guidance',
      'Board-pattern prelim exams'
    ]
  },
  'science': {
    id: 'science',
    title: 'Science (11-12)',
    category: 'Junior College',
    shortDescription: 'Comprehensive Science coaching for Maharashtra HSC and CBSE.',
    whoItsFor: 'Std 11 & 12 Science students aiming for excellence in board exams and a strong foundation for competitive entrance tests.',
    classesCovered: ['Std 11', 'Std 12'],
    boardsCovered: ['Maharashtra State Board', 'CBSE'],
    streamsCovered: ['PCM', 'PCB'],
    subjects: ['English', 'Physics', 'Chemistry', 'Mathematics', 'Biology', 'Information Technology', 'Computer Science'],
    learningApproach: [
      'Integration of board preparation with entrance concepts',
      'Practical-oriented theoretical understanding',
      'Intensive numerical problem-solving',
      'Structured revision for HSC/CBSE boards'
    ],
    whatStudentsReceive: [
      'Detailed derivation & formula sheets',
      'Board-specific question banks',
      'Mock board examinations',
      'Personalized mentoring'
    ]
  },
  'commerce': {
    id: 'commerce',
    title: 'Commerce (11-12)',
    category: 'Junior College',
    shortDescription: 'Expert Commerce coaching for Maharashtra HSC and CBSE.',
    whoItsFor: 'Std 11 & 12 Commerce students looking to master core subjects and secure top scores in board exams.',
    classesCovered: ['Std 11', 'Std 12'],
    boardsCovered: ['Maharashtra State Board', 'CBSE'],
    streamsCovered: ['Commerce'],
    subjects: ['English', 'Book-Keeping & Accountancy', 'Economics', 'Organisation of Commerce & Management', 'Secretarial Practice', 'Mathematics & Statistics', 'Information Technology'],
    learningApproach: [
      'Real-world application of commerce concepts',
      'Step-by-step mastery of Accountancy',
      'Simplified learning techniques for theory subjects',
      'Extensive practice of board papers'
    ],
    whatStudentsReceive: [
      'Comprehensive study materials',
      'Objective question banks',
      'Full-length prelim papers',
      'Career guidance sessions'
    ]
  },
  'neet': {
    id: 'neet',
    title: 'NEET Coaching',
    category: 'Competitive Exams',
    shortDescription: 'Dedicated medical entrance foundation and preparation.',
    whoItsFor: 'Aspiring medical students aiming for top ranks in the NEET-UG examination.',
    classesCovered: ['Std 11', 'Std 12', 'Dropper'],
    boardsCovered: ['NTA'],
    streamsCovered: ['PCB'],
    subjects: ['Physics', 'Chemistry', 'Botany', 'Zoology'],
    learningApproach: [
      'Strict adherence to the latest NTA NEET syllabus',
      'NCERT line-by-line mastery for Biology',
      'Extensive MCQ practice and time management strategies',
      'Regular All-India level mock tests'
    ],
    whatStudentsReceive: [
      'Daily Practice Papers (DPPs)',
      'High-yield revision notes',
      'Error analysis for mock tests',
      'Doubt clearing sessions'
    ]
  },
  'jee-mht-cet': {
    id: 'jee-mht-cet',
    title: 'JEE / MHT-CET',
    category: 'Competitive Exams',
    shortDescription: 'Engineering and Pharmacy entrance exam preparation.',
    whoItsFor: 'Students targeting premier engineering colleges through JEE Main or Maharashtra state colleges through MHT-CET.',
    classesCovered: ['Std 11', 'Std 12', 'Dropper'],
    boardsCovered: ['NTA', 'Maharashtra CET Cell'],
    streamsCovered: ['PCM', 'PCB'],
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    learningApproach: [
      'Concept-driven problem solving',
      'Speed and accuracy enhancement techniques',
      'Dual focus on board preparation and entrance exams',
      'Computer Based Test (CBT) practice'
    ],
    whatStudentsReceive: [
      'Extensive question banks (Level 1, 2, 3)',
      'Previous Years Questions (PYQ) analysis',
      'Online test series',
      'Personalized performance tracking'
    ]
  },
  'sanskrit': {
    id: 'sanskrit',
    title: 'Sanskrit Mastery',
    category: 'Specialised',
    shortDescription: "Borivali's strongest and most renowned Sanskrit program.",
    whoItsFor: 'Students from any board (SSC, CBSE, ICSE) taking Sanskrit as an optional language, aiming for 95%+ scores.',
    classesCovered: ['Std 8', 'Std 9', 'Std 10'],
    boardsCovered: ['Maharashtra State Board', 'CBSE', 'ICSE'],
    streamsCovered: ['General'],
    subjects: ['Sanskrit (Entire)', 'Sanskrit (Composite)'],
    learningApproach: [
      'NK Sir’s proprietary highly-effective teaching method',
      'Simplification of complex grammar rules',
      'Focus on scoring areas: translation, comprehension, writing',
      'Rote-free learning of Shlokas and vocabulary'
    ],
    whatStudentsReceive: [
      'Custom NK Academy Sanskrit booklets',
      'Grammar charts and quick-reference guides',
      'Extensive writing practice sheets',
      'Guaranteed score improvement plan'
    ]
  }
};
