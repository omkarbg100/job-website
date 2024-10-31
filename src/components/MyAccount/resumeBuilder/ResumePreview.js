// src/resumeBuilder/ResumePreview.js
import React from 'react';
import styles from './ResumeBuilder.module.css';

const ResumePreview = ({ resumeData }) => {
  return (
    <div className={styles.resumePreview}>
      <h2>{resumeData.name}</h2>
      <p>Email: {resumeData.email}</p>
      <p>Phone: {resumeData.phone}</p>
      <h3>Summary</h3>
      <p>{resumeData.summary}</p>
      <h3>Experience</h3>
      <p>{resumeData.experience}</p>
      <h3>Education</h3>
      <p>{resumeData.education}</p>
      <h3>Skills</h3>
      <p>{resumeData.skills}</p>
    </div>
  );
};

export default ResumePreview;
