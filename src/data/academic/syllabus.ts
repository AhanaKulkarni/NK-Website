import { Syllabus } from './types';

export const syllabusData: Syllabus[] = [
  {
    id: 'cbse-2026-27-std10-science',
    board: 'CBSE',
    academicYear: '2026-27',
    classLevel: 'Std 10',
    stream: 'General',
    subject: 'Science',
    subjectCode: '086',
    verification: {
      sourceType: 'official',
      sourceAuthority: 'CBSE',
      sourceUrl: 'https://cbseacademic.nic.in/web_material/CurriculumMain27/Sec/Science_Sec_2026-27.pdf',
      lastVerified: '2026-08-13'
    },
    units: [
      {
        id: 'u1',
        title: 'Chemical Substances-Nature and Behaviour',
        unitNumber: 1,
        chapters: [
          {
            id: 'c1',
            title: 'Chemical reactions and equations',
            topics: [
              { id: 't1', title: 'Chemical equation, Balanced chemical equation' },
              { id: 't2', title: 'Implications of a balanced chemical equation' },
              { id: 't3', title: 'Types of chemical reactions: combination, decomposition, displacement, double displacement, precipitation, neutralization, oxidation and reduction' }
            ]
          },
          {
            id: 'c2',
            title: 'Acids, Bases and Salts',
            topics: [
              { id: 't4', title: 'Their definitions in terms of furnishing of H+ and OH- ions' },
              { id: 't5', title: 'General properties, examples and uses' },
              { id: 't6', title: 'Concept of pH scale (Definition relating to logarithm not required)' },
              { id: 't7', title: 'Importance of pH in everyday life' },
              { id: 't8', title: 'Preparation and uses of Sodium Hydroxide, Bleaching powder, Baking soda, Washing soda and Plaster of Paris' }
            ]
          }
        ]
      },
      {
        id: 'u2',
        title: 'World of Living',
        unitNumber: 2,
        chapters: [
          {
            id: 'c3',
            title: 'Life processes',
            topics: [
              { id: 't9', title: 'Living Being' },
              { id: 't10', title: 'Basic concept of nutrition, respiration, transport and excretion in plants and animals' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'msb-2026-27-std10-math-1',
    board: 'Maharashtra State Board',
    academicYear: '2026-27',
    classLevel: 'Std 10',
    stream: 'General',
    subject: 'Mathematics Part - I (Algebra)',
    verification: {
      sourceType: 'official',
      sourceAuthority: 'MSBSHSE',
      sourceUrl: 'https://www.mahahsscboard.in/',
      lastVerified: '2026-08-13'
    },
    units: [
      {
        id: 'u1',
        title: 'Linear Equations in Two Variables',
        unitNumber: 1,
        chapters: [
          {
            id: 'c1',
            title: 'Linear Equations in Two Variables',
            topics: [
              { id: 't1', title: 'Solving simultaneous equations' },
              { id: 't2', title: 'Graphical method' },
              { id: 't3', title: 'Cramer’s rule' },
              { id: 't4', title: 'Equations reducible to linear form' },
              { id: 't5', title: 'Application of simultaneous equations' }
            ]
          }
        ]
      }
    ]
  }
];
