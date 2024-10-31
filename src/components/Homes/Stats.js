import React from 'react';
import './Stats.css'; // Import the CSS file

const Stats = () => {
  const data = [
    { count: '300000+', label: 'Student members' },
    { count: '6000+', label: 'Onboarded companies' },
    { count: '40000+', label: 'Connections made' },
    { count: '700+', label: 'Community Events' },
  ];

  return (
    <div className="stats-container">
      {data.map((item, index) => (
        <div key={index} className="stat-box">
          <h2 className="count">{item.count}</h2>
          <p className="label">{item.label}</p>
          <div className="underline"></div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
