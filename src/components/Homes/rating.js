import React, { useState } from "react";
import "./rating.css"; // CSS for custom styling

function Rating() {
  const [rating, setRating] = useState(0);

  // Set rating based on the clicked star
  const handleRating = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="rating-container">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          onClick={() => handleRating(index)}
          onMouseEnter={() => setRating(index + 1)}
          onMouseLeave={() => setRating(rating)}
          className={`star ${index < rating ? "filled" : ""}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568L23.511 9.7l-5.77 5.389L18.1 23.5 12 19.979 5.9 23.5l1.359-8.411L1.489 9.7l7.843-1.545L12 .587z" />
        </svg>
      ))}
    </div>
  );
}


export default Rating;
