import React, { useState } from 'react';
// import "./JobsCard.css";
import './JobsCard.css'
import dollor from "../assets/dollor.png";
import location from '../assets/location.png'

function JobsCard({ title, description, imageUrl }) {
  // Limit description to 50 characters
  const truncatedDescription = description.length > 50 
    ? description.slice(0, 50) + '...' 
    : description;

  // return (
  //   <div className="card">
  //     {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
  //     <div className="card-content">
  //       <h3 className="card-title">{title}</h3>
  //       <p className="card-description">{truncatedDescription}</p>
  //     </div>
  //   </div>
  // );

  return(
    <div className='Job-card-div'>
            <div className='Job-card-div1'>
                <div className="image">
                    <img src={imageUrl} className='job-img'
                        alt="" srcset="" />
                </div>
                <div className="job-details">
                    <h1 className='job-title'>{title}</h1>
                    <p className='job-Company'>company</p>
                    <button className='job-type'>remote</button>
                    <div className='job-salary-loca'>
                        <p className='job-locatin'>
                            {/* { <M className="h-6 w-6 text-blue-500" /> } */}
                            <img src={location} className='location-img'/>
                            location</p>
                        <p className='job-salary'>
                            {/* <CurrencyDollarIcon className="h-6 w-6 text-blue-500" /> */}
                            <img src={dollor} className='dollor-img'/>
                            Salary : 100000$ </p>
                    </div>
                </div>
            </div>
            {/* <div className='Job-card-div2'>
                <div  className='custom-btn mt-4 w-full '>
                    View Details
                </div>
            </div> */}
        </div>
  )
}

export default JobsCard;
