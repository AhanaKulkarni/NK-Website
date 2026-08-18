'use client';
import React, { useState } from 'react';
import styles from './EnquirySection.module.css';
import { Send } from 'lucide-react';

export function EnquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    grade: '',
    board: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Determine phone number based on Area
    let phoneNo = '918879511601'; // Default General (NK Sir)
    if (formData.area === 'Borivali West') {
      phoneNo = '919082948098'; // Rupa Ma'am
    } else if (formData.area === 'Borivali East') {
      phoneNo = '917506058113'; // Pawan Sir
    }

    // Build message
    const message = `Hello, I would like to enquire about admissions.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Area:* ${formData.area}\n*Grade:* ${formData.grade}\n*Board:* ${formData.board}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/${phoneNo}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="enquiry" className={styles.enquirySection}>
      <div className={`container ${styles.enquiryGrid}`}>
        
        <div className={styles.textContent}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Your Future Starts Here</h2>
            <p>
              NK Academy is a widely recognized educational institute in Mumbai. It is renowned for its comprehensive and structured curriculum that fosters holistic development. Our methodology emphasizes a balanced approach to education, combining rigorous academics with focused exam strategies.
            </p>
            <p>
              The academy conducts regular testing that assesses students' knowledge and skills in various subjects, aiming to provide a well-rounded foundation. NK Academy is known for its robust evaluation process and expert instruction, preparing students for diverse career paths and higher education opportunities. Its focus on critical thinking and application-based learning sets it apart in the coaching landscape.
            </p>
            <p className={styles.highlightText}>
              Ace at your academics with NK Academy!
            </p>
          </div>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Enquire Now</h2>
            <p className={styles.formSubtitle}>Fill the form below and our counselor will reach out to you instantly via WhatsApp.</p>
            
            <form className={styles.enquiryForm} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input type="text" name="name" placeholder="Your Name" className={styles.inputField} required value={formData.name} onChange={handleChange} />
              </div>
              
              <div className={styles.inputGroup}>
                <input type="tel" name="phone" placeholder="Phone Number" className={styles.inputField} required value={formData.phone} onChange={handleChange} />
              </div>
              
              <div className={styles.inputGroup}>
                <input type="email" name="email" placeholder="Email Address" className={styles.inputField} required value={formData.email} onChange={handleChange} />
              </div>
              
              <div className={styles.inputGroup}>
                <select name="area" className={styles.selectField} required value={formData.area} onChange={handleChange}>
                  <option value="" disabled>Select Area</option>
                  <option value="Borivali West">Borivali West (Rupa Ma'am)</option>
                  <option value="Borivali East">Borivali East (Pawan Sir)</option>
                  <option value="Other">Other / General</option>
                </select>
              </div>
              
              <div className={styles.inputGroup}>
                <select name="grade" className={styles.selectField} required value={formData.grade} onChange={handleChange}>
                  <option value="" disabled>Select Grade</option>
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12</option>
                </select>
              </div>
              
              <div className={styles.inputGroup}>
                <select name="board" className={styles.selectField} required value={formData.board} onChange={handleChange}>
                  <option value="" disabled>Select Board</option>
                  <option value="SSC">SSC</option>
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="HSC Science">HSC Science</option>
                  <option value="HSC Commerce">HSC Commerce</option>
                </select>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                Send WhatsApp <Send size={18} style={{ marginLeft: '0.5rem' }} />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
