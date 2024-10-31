import React, { useState } from 'react';
import './FilterBar.css';

const FilterBar = () => {
    const [selectedOfficeType, setSelectedOfficeType] = useState('');
    const [experience, setExperience] = useState('');
    const [salary, setSalary] = useState(3);

    const handleOfficeTypeChange = (type) => setSelectedOfficeType(type);
    const handleExperienceChange = (e) => setExperience(e.target.value);
    const handleSalaryChange = (e) => setSalary(e.target.value);

    const clearFilters = () => {
        setSelectedOfficeType('');
        setExperience('');
        setSalary(3);
    };

    return (
        <div className="filter-bar">
            <div className="filter-section">
                <h3 className="filter-title">Office Type</h3>
                <div className="filter-options">
                    <label>
                        <input
                            type="radio"
                            name="officeType"
                            value="Remote"
                            checked={selectedOfficeType === 'Remote'}
                            onChange={() => handleOfficeTypeChange('Remote')}
                        />
                        Remote
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="officeType"
                            value="In-Office"
                            checked={selectedOfficeType === 'In-Office'}
                            onChange={() => handleOfficeTypeChange('In-Office')}
                        />
                        In-Office
                    </label>
                </div>
            </div>

            <div className="filter-section">
                <h3 className="filter-title">Work Experience</h3>
                <select value={experience} onChange={handleExperienceChange} className="filter-select">
                    <option value="">Select experience</option>
                    <option value="0-1 years">0-1 years</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5+ years">5+ years</option>
                </select>
            </div>

            <div className="filter-section">
                <h3 className="filter-title">Min Salary</h3>
                <input
                    type="range"
                    min="3"
                    max="12"
                    value={salary}
                    onChange={handleSalaryChange}
                    className="salary-slider"
                />
                <div className="salary-labels">
                    {[3, 6, 8, 10, 12].map((val) => (
                        <span key={val} className={`salary-label ${salary >= val ? 'active' : ''}`}>
                            {val} LPA
                        </span>
                    ))}
                </div>
            </div>

            <div className="filter-actions">
                <button className="clear-button" onClick={clearFilters}>Clear</button>
                <button className="apply-button">Apply</button>
            </div>
        </div>
    );
};

export default FilterBar;
