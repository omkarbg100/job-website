// src/resumeBuilder/ResumeBuilder.js
import React, { useState } from 'react';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import styles from './ResumeBuilder.module.css';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: ''
  });

  const [formpage,setformpage]=useState(true);
  
  return (
    <div className={styles.resumeBuilder}>
      {/* <div className={styles.formSection}>  */}
        {formpage === true ? <ResumeForm setResumeData={setResumeData} setformpage={setformpage}/>: ""} 
      {/* </div> */}
      {/* <div className={styles.previewSection}> */}
      {formpage === false ? <ResumePreview resumeData={resumeData} /> : ""} 
      {/* </div> */}
    </div>
  );
};

export default ResumeBuilder;
