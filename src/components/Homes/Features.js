import React from 'react';
import './Features.css'; // Import the CSS file

const Features = () => {
  const features = [
    {
      icon: "😎",
      title: "Get Upskilled",
      description: "The #1 way college students & early graduates get Internships, Jobs",
    },
    {
      icon: "📄",
      title: "Create Profile",
      description: "Create your profile with easy-to-fill form and get recommended with relevant internships/ jobs.",
    },
    {
      icon: "🕒",
      title: "Hassle Free",
      description: "An effortless way to get internships/ jobs through a quick and easy application process.",
    },
    {
      icon: "💰",
      title: "Earn Money",
      description: "You can earn ~ ₹90000 annually through our platform while working as an intern.",
    },
  ];

  return (
    <div className="features-container">
      <h2 className="features-heading">How Naukri helps you</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
