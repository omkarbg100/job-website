// Companies.js
import React from "react";
import "./companies.css";
import companyLogo1 from "../assets/img 1.png";
import companyLogo2 from "../assets/img 2.png";
import companyLogo3 from "../assets/img 3.png";
import companyLogo4 from "../assets/img 4.png";

function Companies() {
  const companiesData = [
    { name: "Tech Innovations", description: "Leading tech solutions provider.", logo: companyLogo1 },
    { name: "Creative Minds", description: "Specializes in UX/UI design.", logo: companyLogo2 },
    { name: "Finance Pros", description: "Top-tier financial consultancy.", logo: companyLogo3 },
    { name: "Health First", description: "Innovating healthcare solutions.", logo: companyLogo4 },
  ];

  return (
    <div className="companies-container">
      <h2>Top Companies</h2>
      <div className="companies-list">
        {companiesData.map((company, index) => (
          <div key={index} className="company-card">
            <img src={company.logo} alt={`${company.name} logo`} className="company-logo" />
            <h3>{company.name}</h3>
            <p>{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;

