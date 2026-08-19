'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div style={{ marginBottom: '1px' }}>
      <button
        onClick={onClick}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 20px',
          backgroundColor: '#25447a',
          color: isOpen ? '#e53935' : 'white',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          fontSize: '1rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
        }}
      >
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{isOpen ? '-' : '+'}</span>
        {title}
      </button>
      
      <div 
        style={{ 
          maxHeight: isOpen ? '500px' : '0', 
          overflow: 'hidden', 
          transition: 'max-height 0.3s ease-in-out',
          backgroundColor: '#f8f9fa'
        }}
      >
        <div style={{ padding: '20px', color: 'var(--color-supporting)', lineHeight: '1.6' }}>
          {content}
        </div>
      </div>
    </div>
  );
};

export const ClassesAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: 'Expert Faculty and Comprehensive Study Material',
      content: 'Our team comprises highly qualified and experienced educators who are passionate about teaching. We provide meticulously crafted study materials that cover the entire syllabus, ensuring students have access to the best resources for their preparation.'
    },
    {
      title: 'Personalized Attention and Result-Oriented Approach',
      content: 'We maintain small batch sizes to ensure every student receives individualized attention. Our teaching methodology is focused on achieving tangible results through regular assessments, doubt-solving sessions, and continuous performance tracking.'
    },
    {
      title: 'Flexible Timings and Location Advantage',
      content: 'Located conveniently with centers in Borivali East and West, we offer flexible batch timings that suit school schedules. Our state-of-the-art infrastructure provides a comfortable and distraction-free learning environment.'
    },
    {
      title: 'Conclusion',
      content: 'Choosing NK Academy means investing in a proven system of success. With our expert guidance, comprehensive resources, and unwavering support, students are empowered to achieve their highest academic potential.'
    }
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', width: '100%', padding: '0 20px' }}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};
