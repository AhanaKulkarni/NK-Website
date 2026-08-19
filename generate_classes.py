import os

programs = {
    'cbse': ('Best CBSE Coaching Classes', 'CBSE Coaching', 'the CBSE curriculum', 'Borivali'),
    'icse': ('Best ICSE Coaching Classes', 'ICSE Coaching', 'the rigorous ICSE curriculum', 'Borivali'),
    'ssc': ('Best SSC Coaching Classes', 'SSC Coaching', 'the Maharashtra State Board syllabus', 'Borivali'),
    'neet': ('Best NEET Coaching Classes', 'NEET Preparation', 'the highly competitive NEET examination', 'Mumbai'),
    'mht-cet': ('Best MHT-CET Coaching Classes', 'MHT-CET Coaching', 'state-level engineering and pharmacy entrances', 'Mumbai'),
    'jee': ('Best JEE-Main Coaching Classes', 'JEE-Main Preparation', 'the prestigious JEE Main exams', 'Mumbai'),
    'commerce': ('Best Commerce Classes', 'Commerce Coaching', 'Accounts, Economics, and Commerce subjects', 'Borivali'),
    'jee-institute': ('Best JEE-Main Institute', 'JEE-Main Institute', 'top tier engineering entrance exams', 'Mumbai'),
    'premium': ('Premium Coaching Classes', 'Premium Coaching', 'exclusive personalized learning plans', 'Borivali'),
    'ssc-borivali-west': ('Best SSC Coaching Classes Borivali West', 'SSC Coaching', 'the Maharashtra State Board syllabus', 'Borivali West'),
    'icse-borivali-west': ('Best ICSE Coaching Classes Borivali West', 'ICSE Coaching', 'the ICSE curriculum', 'Borivali West'),
    'cbse-borivali-west': ('Best CBSE Coaching Classes Borivali West', 'CBSE Coaching', 'the CBSE curriculum', 'Borivali West')
}

base_dir = 'src/app/programs'

for prog_id, (title, short_name, curriculum, location) in programs.items():
    content = f"""import React from 'react';
import styles from '@/app/about/about.module.css';
import {{ EnquirySection }} from '@/components/shared/EnquirySection';

export const metadata = {{
  title: '{title} | NK Academy',
  description: 'Unlock your academic potential with the {title} at NK Academy.',
}};

export default function Page() {{
  return (
    <div className={{styles.page}}>
      <div className={{styles.header}}>
        <div className="container" style={{{{ textAlign: 'center' }}}}>
          <h1 className={{styles.title}} style={{{{ fontSize: '3.5rem', marginBottom: '0.5rem' }}}}>{title}</h1>
          <p className={{styles.subtitle}}>
            Home » <span style={{{{ color: 'var(--color-accent)' }}}}>{title}</span>
          </p>
        </div>
      </div>
      
      <div className="container" style={{{{ padding: '4rem 0', maxWidth: '900px' }}}}>
        <h2 style={{{{ color: 'var(--color-primary)', textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}}}>
          Unlock Your Academic Potential with the {title} in {location}
        </h2>
        
        <p style={{{{ color: 'var(--color-supporting)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}}}>
          If you are looking for the {title} in {location}, NK Academy is your ideal destination. With a focus on providing quality education, NK Academy offers a nurturing environment for students aiming to excel in {curriculum}. The academy's experienced faculty, structured courses, and personalized attention ensure that students are well-prepared to face the challenges ahead.
        </p>

        <h3 style={{{{ color: 'var(--color-primary)', fontSize: '2rem', marginBottom: '1.5rem', marginTop: '3rem' }}}}>
          Why Choose NK Academy for {short_name}?
        </h3>
        
        <p style={{{{ color: 'var(--color-supporting)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}}}>
          When it comes to preparing for crucial exams, selecting the right coaching institute is crucial. NK Academy stands out as one of the top choices in {location} due to its impeccable track record and commitment to academic excellence. The academy offers coaching for all major subjects with faculty members who are experts in their fields, ensuring that students receive the best possible guidance.
        </p>
        
        <p style={{{{ color: 'var(--color-supporting)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}}}>
          At NK Academy, the focus is not just on rote learning, but on conceptual clarity and application. The academy's teaching methods are designed to cater to the unique learning needs of every student, building confidence and deep subject knowledge.
        </p>
      </div>
      <EnquirySection />
    </div>
  );
}}
"""
    file_path = os.path.join(base_dir, prog_id, 'page.tsx')
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Pages generated successfully!")
