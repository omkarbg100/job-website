// import React, { useState } from "react";
// import JobsCard from "./JobsCard";
// import "./Jobs.css";
// import img1 from "../assets/img 1.png";
// import img2 from "../assets/img 2.png";
// import img3 from "../assets/img 3.png";
// import img4 from "../assets/img 4.png";

// function Jobs() {
//   const cardData = [
//     {
//       title: "Data Scientist",
//       description:
//         "Analyzes and interprets complex data to help companies make decisions.",
//       imageUrl: img1,
//     },
//     {
//       title: "UX Designer",
//       description:
//         "Designs user-friendly interfaces to enhance user experience.",
//       imageUrl: img2,
//     },
//     {
//       title: "Product Manager",
//       description: "Oversees the development and delivery of products.",
//       imageUrl: img3,
//     },
//     {
//       title: "Project Coordinator",
//       description: "Coordinates project tasks and supports the project team.",
//       imageUrl: img4,
//     },
//     {
//       title: "Network Engineer",
//       description: "Maintains network infrastructure for optimal performance.",
//       imageUrl: img2,
//     },
//     {
//       title: "Marketing Specialist",
//       description: "Creates marketing strategies to reach potential customers.",
//       imageUrl: img3,
//     },
//     {
//       title: "HR Manager",
//       description: "Manages employee relations and company policies.",
//       imageUrl: img4,
//     },
//     {
//       title: "Content Writer",
//       description: "Writes engaging content for various media platforms.",
//       imageUrl: img1,
//     },
//     {
//       title: "Financial Analyst",
//       description: "Analyzes financial data to guide business decisions.",
//       imageUrl: img1,
//     },
//     {
//       title: "Software Tester",
//       description: "Tests software to ensure quality and functionality.",
//       imageUrl: img4,
//     },
//     {
//       title: "Customer Support Specialist",
//       description: "Provides customer service and technical support.",
//       imageUrl: img2,
//     },
//     {
//       title: "Operations Manager",
//       description: "Oversees daily operations to ensure efficiency.",
//       imageUrl: img3,
//     },
//     {
//       title: "Sales Representative",
//       description: "Sells products and builds relationships with customers.",
//       imageUrl: img4,
//     },
//     {
//       title: "Business Analyst",
//       description: "Identifies business needs and proposes solutions.",
//       imageUrl: img2,
//     },
//     {
//       title: "Graphic Designer",
//       description: "Creates visual content to communicate ideas.",
//       imageUrl: img1,
//     },
//     {
//       title: "Front-End Developer",
//       description: "Develops the visual components of websites.",
//       imageUrl: img1,
//     },
//     {
//       title: "Back-End Developer",
//       description: "Builds and maintains the server-side of applications.",
//       imageUrl: img3,
//     },
//     {
//       title: "SEO Specialist",
//       description: "Optimizes website content for search engine ranking.",
//       imageUrl: img4,
//     },
//     {
//       title: "IT Support Technician",
//       description: "Provides technical support and resolves IT issues.",
//       imageUrl: img3,
//     },
//     {
//       title: "Cloud Architect",
//       description: "Designs cloud infrastructure and solutions.",
//       imageUrl: img2,
//     },
//   ];

//   const [jobpage, setjobpage] = useState(true);
//   let output;

//   function changepage(e){
//     output=e;
//     console.log(e);
//   }

//   if(jobpage & true) {
//     return (
//       <div className="Main-Conatiner">
//         <h2>Job Listings</h2>
//         <div className="app-container">
//           <div onClick={changepage(cardData[0])}>
//             <JobsCard
//               title={cardData[0].title}
//               description={cardData[0].description}
//               imageUrl={cardData[0].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[1])}>
//             <JobsCard
//               title={cardData[1].title}
//               description={cardData[1].description}
//               imageUrl={cardData[1].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[2])}>
//             <JobsCard
//               title={cardData[2].title}
//               description={cardData[2].description}
//               imageUrl={cardData[2].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[3])}>
//             <JobsCard
//               title={cardData[3].title}
//               description={cardData[3].description}
//               imageUrl={cardData[3].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[4])}>
//             <JobsCard
//               title={cardData[4].title}
//               description={cardData[4].description}
//               imageUrl={cardData[4].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[5])}>
//             <JobsCard
//               title={cardData[5].title}
//               description={cardData[5].description}
//               imageUrl={cardData[5].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[6])}>
//             <JobsCard
//               title={cardData[6].title}
//               description={cardData[6].description}
//               imageUrl={cardData[6].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[7])}>
//             <JobsCard
//               title={cardData[7].title}
//               description={cardData[7].description}
//               imageUrl={cardData[7].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[8])}>
//             <JobsCard
//               title={cardData[8].title}
//               description={cardData[8].description}
//               imageUrl={cardData[8].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[9])}>
//             <JobsCard
//               title={cardData[9].title}
//               description={cardData[9].description}
//               imageUrl={cardData[9].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[10])}>
//             <JobsCard
//               title={cardData[10].title}
//               description={cardData[10].description}
//               imageUrl={cardData[10].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[11])}>
//             <JobsCard
//               title={cardData[11].title}
//               description={cardData[11].description}
//               imageUrl={cardData[11].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[12])}>
//             <JobsCard
//               title={cardData[12].title}
//               description={cardData[12].description}
//               imageUrl={cardData[12].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[13])}>
//             <JobsCard
//               title={cardData[13].title}
//               description={cardData[13].description}
//               imageUrl={cardData[13].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[14])}>
//             <JobsCard
//               title={cardData[14].title}
//               description={cardData[14].description}
//               imageUrl={cardData[14].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[15])}>
//             <JobsCard
//               title={cardData[15].title}
//               description={cardData[15].description}
//               imageUrl={cardData[15].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[16])}>
//             <JobsCard
//               title={cardData[16].title}
//               description={cardData[16].description}
//               imageUrl={cardData[16].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[17])}>
//             <JobsCard
//               title={cardData[17].title}
//               description={cardData[17].description}
//               imageUrl={cardData[17].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[18])}>
//             <JobsCard
//               title={cardData[18].title}
//               description={cardData[18].description}
//               imageUrl={cardData[18].imageUrl}
//             />
//           </div>
//           <div onClick={changepage(cardData[19])}>
//             <JobsCard
//               title={cardData[19].title}
//               description={cardData[19].description}
//               imageUrl={cardData[19].imageUrl}
//             />
//           </div>
//           {/* <JobsCard
//             title={cardData[20].title}
//             description={cardData[4].description}
//             imageUrl={cardData[4].imageUrl}
//           /> */}
//           {/* You can add more Card components as needed */}
//         </div>
//       </div>
//     );
//   } else {
//     return <div>hello{output}</div>
//   }
// }

// export default Jobs;

import React, { useState } from "react";
import JobsCard from "./JobsCard";
import "./Jobs.css";
import Search from "./Jobssearch";
import img1 from "../assets/img 1.png";
import img2 from "../assets/img 2.png";
import img3 from "../assets/img 3.png";
import img4 from "../assets/img 4.png";
import FilterBar from "./FilterBar/FilterBar";

function Jobs() {
  const cardData = [
    {
      title: "Data Scientist",
      description:
        "Analyzes and interprets complex data to help companies make decisions.",
      imageUrl: img1,
    },
    {
      title: "UX Designer",
      description:
        "Designs user-friendly interfaces to enhance user experience.",
      imageUrl: img2,
    },
    {
      title: "Product Manager",
      description: "Oversees the development and delivery of products.",
      imageUrl: img3,
    },
    {
      title: "Project Coordinator",
      description: "Coordinates project tasks and supports the project team.",
      imageUrl: img4,
    },
    {
      title: "Network Engineer",
      description: "Maintains network infrastructure for optimal performance.",
      imageUrl: img2,
    },
    {
      title: "Data Scientist",
      description:
        "Analyzes and interprets complex data to help companies make decisions.",
      imageUrl: img1,
    },
    {
      title: "UX Designer",
      description:
        "Designs user-friendly interfaces to enhance user experience.",
      imageUrl: img2,
    },
    {
      title: "Product Manager",
      description: "Oversees the development and delivery of products.",
      imageUrl: img3,
    },
    {
      title: "Project Coordinator",
      description: "Coordinates project tasks and supports the project team.",
      imageUrl: img4,
    },
    {
      title: "Network Engineer",
      description: "Maintains network infrastructure for optimal performance.",
      imageUrl: img2,
    },
    {
      title: "Marketing Specialist",
      description: "Creates marketing strategies to reach potential customers.",
      imageUrl: img3,
    },
    {
      title: "HR Manager",
      description: "Manages employee relations and company policies.",
      imageUrl: img4,
    },
    {
      title: "Content Writer",
      description: "Writes engaging content for various media platforms.",
      imageUrl: img1,
    },
    {
      title: "Financial Analyst",
      description: "Analyzes financial data to guide business decisions.",
      imageUrl: img1,
    },
    {
      title: "Software Tester",
      description: "Tests software to ensure quality and functionality.",
      imageUrl: img4,
    },
    {
      title: "Customer Support Specialist",
      description: "Provides customer service and technical support.",
      imageUrl: img2,
    },
    {
      title: "Operations Manager",
      description: "Oversees daily operations to ensure efficiency.",
      imageUrl: img3,
    },
    {
      title: "Sales Representative",
      description: "Sells products and builds relationships with customers.",
      imageUrl: img4,
    },
    {
      title: "Business Analyst",
      description: "Identifies business needs and proposes solutions.",
      imageUrl: img2,
    },
    {
      title: "Graphic Designer",
      description: "Creates visual content to communicate ideas.",
      imageUrl: img1,
    },
    {
      title: "Front-End Developer",
      description: "Develops the visual components of websites.",
      imageUrl: img1,
    },
    {
      title: "Back-End Developer",
      description: "Builds and maintains the server-side of applications.",
      imageUrl: img3,
    },
    {
      title: "SEO Specialist",
      description: "Optimizes website content for search engine ranking.",
      imageUrl: img4,
    },
    {
      title: "IT Support Technician",
      description: "Provides technical support and resolves IT issues.",
      imageUrl: img3,
    },
    {
      title: "Cloud Architect",
      description: "Designs cloud infrastructure and solutions.",
      imageUrl: img2,
    },
  ];

  const [jobPage, setJobPage] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  function changepage(job) {
    setSelectedJob(job);
    setJobPage(false);
  }
  const [apply, setapply] = useState(true);
  const apply_message=()=>{
    alert('applied')
    setapply(false)
  }

  if (jobPage) {
    return (
      <div className="Main-Container">
        <h2>Job Listings </h2>
        <div><FilterBar/></div>
        <div className="app-container">
          {cardData.map((job, index) => (
            <div key={index} onClick={() => changepage(job)}>
              <JobsCard
                title={job.title}
                description={job.description}
                imageUrl={job.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
         {/* <div className="Job_info_page">
          <div onClick={() => setJobPage(true)}>
            <span>Back to Listings</span>
          </div>

          <h2>Title: {selectedJob.title}</h2>
          <p>Description: {selectedJob.description}</p>
          <pre className="Job_info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            cumque quasi
            <br></br> laborum corrupti, quidem praesentium nostrum, recusandae
            magnam, necessitatibus facilis <br></br>blanditiis ducimus!
            Blanditiis iste velit veniam facilis eaque voluptate dolorum
            provident error. <br></br>Temporibus ipsa error reiciendis
            recusandae. Atque voluptas consequatur ut blanditiis expedita vero{" "}
            <br></br>nihil quas iure dolorum! Nam excepturi quos accusamus,
            dicta eius sit repellat minima repellendus <br></br>delectus nemo
            nesciunt soluta corrupti illum perspiciatis culpa, sed dolores modi
            quasi <br></br>incidunt est? Porro voluptatibus quod quibusdam autem
            vitae nostrum tenetur error quas in eligendi iusto dicta <br></br>
            impedit deleniti architecto corporis, iure facere. Quibusdam
            possimus facilis iusto optio tempora <br></br>explicabo veritatis.
          </pre>
          { <button onClick={() => setJobPage(true)}>Back to Listings</button> }
          <button class="button">
            Apply Now
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>  */}

        <div className="Job_info_page">
          <div onClick={() => setJobPage(true)} className="Returning-div">
            <span>Back to Listings</span>
          </div>
          <div className="job-details-container">
            <div className="job-description-section">
              <h2 className="company-name">{selectedJob.title} - Job Details</h2>
              <p>
                <strong>Job Description:</strong> {selectedJob.description} As a software engineer, you
                will work on a specific project critical to Google’s needs with
                opportunities to switch teams and projects as you and our
                fast-paced business grow and evolve. We need our engineers to be
                versatile, display leadership qualities and be enthusiastic to
                take on new problems across the full-stack as we continue to
                push technology forward.
              </p>

              <p>
                <strong>Job Responsibility:</strong> Triage product or system
                issues and debug/track/resolve by analyzing the sources of
                issues and the impact on hardware, network, or service
                operations and quality. Review code developed by other
                developers and provide feedback to ensure best practices (e.g.,
                style guidelines, checking code in, accuracy, testability, and
                efficiency).
              </p>

              <p>
                <strong>Educational Requirements:</strong>
                <br /> Bachelor's degree in Computer Science, a related field,
                or equivalent practical experience
              </p>

              <p>
                <strong>Experiences:</strong> 1 year of experience with software
                design and architecture
              </p>
            </div>

            <div className="job-details-card">
              <h3 className="Job-details-heading">Job Details</h3>
              <p>
                <strong>💲 Salary:</strong> $90,000 - $110,000
              </p>
              <p>
                <strong>🧑‍💻 Job Title:</strong> Sr. Software Engineer
              </p>
              <hr />
              <h3>Contact Information</h3>
              <p>
                <strong>📞 Phone:</strong> 555-555-5555
              </p>
              <p>
                <strong>✉️ Email:</strong> google@career.com
              </p>
              <p>
                <strong>📍 Address:</strong> New York, NY
              </p>
              <button className="apply-button" onClick={apply_message}>{apply==true ? "APPLY NOW":"APPLIED"}</button>
            </div>

            
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;
