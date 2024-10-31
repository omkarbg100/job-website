// src/resumeBuilder/ResumeForm.js
import React, { useState } from 'react';
import styles from './ResumeBuilder.module.css';

const ResumeForm = ({ setResumeData ,setformpage}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: ''
  });

  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeData(formData);
    setformpage(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.resumeForm }>
      <h2>Create Your Resume</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
      <div>
        <label>Summary:</label>
        <textarea name="summary" value={formData.summary} onChange={handleChange} />
      </div>
      <div>
        <label>Experience:</label>
        <textarea name="experience" value={formData.experience} onChange={handleChange} />
      </div>
      <div>
        <label>Education:</label>
        <textarea name="education" value={formData.education} onChange={handleChange} />
      </div>
      <div>
        <label>Skills:</label>
        <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
      </div>
      <button type="submit" className={styles.saveButton}>Save</button>
    </form>
  );
};

export default ResumeForm;
