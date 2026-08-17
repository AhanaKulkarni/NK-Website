import React from 'react';
import styles from './EnquirySection.module.css';

export function EnquirySection() {
  return (
    <section id="enquiry" className={styles.enquirySection}>
      <div className={`container ${styles.enquiryGrid}`}>
        
        <div className={styles.textContent}>
          <p>
            NK Academy is a widely recognized educational institute in Mumbai. It is renowned for its comprehensive and structured curriculum that fosters holistic development. Our methodology emphasizes a balanced approach to education, combining rigorous academics with focused exam strategies. The academy conducts regular testing that assesses students' knowledge and skills in various subjects, aiming to provide a well-rounded foundation. NK Academy is known for its robust evaluation process and expert instruction, preparing students for diverse career paths and higher education opportunities. Its focus on critical thinking and application-based learning sets it apart in the coaching landscape.
          </p>
          <p className={styles.highlightText}>
            Ace at your academics with NK Academy!
          </p>
        </div>

        <div className={styles.formContent}>
          <h2 className={styles.formTitle}>Enquire Now</h2>
          <form className={styles.enquiryForm} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className={styles.inputField} required />
            <input type="tel" placeholder="Phone Number" className={styles.inputField} required />
            <input type="email" placeholder="Email Address" className={styles.inputField} required />
            
            <select className={styles.selectField} required defaultValue="">
              <option value="" disabled>Select Area</option>
              <option value="borivali-west">Borivali West</option>
              <option value="borivali-east">Borivali East</option>
              <option value="other">Other</option>
            </select>
            
            <select className={styles.selectField} required defaultValue="">
              <option value="" disabled>Select Grade</option>
              <option value="8">Grade 8</option>
              <option value="9">Grade 9</option>
              <option value="10">Grade 10</option>
              <option value="11">Grade 11</option>
              <option value="12">Grade 12</option>
            </select>
            
            <select className={styles.selectField} required defaultValue="">
              <option value="" disabled>Select Board</option>
              <option value="ssc">SSC</option>
              <option value="cbse">CBSE</option>
              <option value="icse">ICSE</option>
              <option value="hsc-science">HSC Science</option>
              <option value="hsc-commerce">HSC Commerce</option>
            </select>
            
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
