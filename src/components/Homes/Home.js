// App.js
import React from "react";
import "./Home.css"; // Import the CSS file for styling
import person from "../assets/person.png";
import Logo1 from "../assets/accounts 1.png";
import Logo2 from "../assets/business 1.png";
import Rating from "./rating";
import Stats from "./Stats";
import Features from "./Features";

function Home() {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header1">
        <div className="header-content">
          <h1>
            One Step Closer To Your <span>Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. It’s your future. Come find it. Manage all your job
            applications from start to finish.
          </p>
          <button className="get-started">Get Started</button>
        </div>
        <div className="header-image">
          <img src={person} alt="Person" />
        </div>
      </header>

      <section className="Stats-card">
        <Stats/>
      </section>

      <section className="Features-card">
        <Features/>
      </section>

      {/* Job Category List Section */}
      <section className="job-category-list">
        <h2>Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. It's your future.
        </p>
        <div className="categories">
          <CategoryCard
            title="Account & Finance"
            jobsAvailable="300+"
            logo={Logo1}
          />
          <CategoryCard
            title="Creative Design"
            jobsAvailable="100+"
            logo={Logo2}
          />
          <CategoryCard
            title="Marketing & Sales"
            jobsAvailable="150+"
            logo={Logo1}
          />
          <CategoryCard
            title="Engineering Job"
            jobsAvailable="220+"
            logo={Logo1}
          />
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. It's your future.
        </p>
        <div className="job-cards">
          <JobCard
            company="Google LLC"
            position="Sr. Software Engineer"
            location="New York, NY"
            salary="$90,000 - $110,000"
            type="Onsite"
          />
          <JobCard
            company="Airbnb"
            position="Solution Architect"
            location="Anywhere"
            salary="$80,000 - $120,000"
            type="Remote"
          />
          <JobCard
            company="Netflix"
            position="Dev Ops Engineer"
            location="Chicago, IL"
            salary="$95,000 - $120,000"
            type="Onsite"
          />
          <JobCard
            company="Planet"
            position="Data Engineer"
            location="Anywhere"
            salary="$115,000 - $145,000"
            type="Remote"
          />
        </div>
      </section>

      


      <section className="Message-card">
        <h2>Why you Should Choose Us ?</h2>
        <div className="our-Message">The job market in India is highly competitive; therefore, it is essential for HR managers to leverage the best job portal sites to attract and hire the right talent. Numerous job posting sites offer organization the access to a wide pool of talent across different industries and job roles. The above listed are the popular job sites in India which empowers HR with advanced search tools and dynamic filtering options. By taking advantage of these platforms, hiring managers can reduce their hiring time, lower recruitment cost, and find the best suitable candidate for the open job position.</div>
      </section>

      <section>
        <div className="Rating-sec">
          <h2>Rate this Product:</h2>
          <h4>Your opinion matters! </h4>
          <h4>Rate our service to help us enhance your experience in the future.</h4>
          <Rating/>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Job Hunt</h3>
            <p>
              There are many variations of passages of Lorem Ipsum, but the
              majority have suffered alteration in some form.
            </p>
            <div className="social-icons">{/* Social media icons here */}</div>
          </div>
          <div className="footer-links">
            <div>
              <h4>Services</h4>
              <ul>
                <li>Company Review</li>
                <li>Accounts Review</li>
                <li>HR Consulting</li>
                <li>SEO Optimization</li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>About</li>
                <li>Meet the Team</li>
                <li>Accounts Review</li>
              </ul>
            </div>
            <div>
              <h4>Helpful Links</h4>
              <ul>
                <li>Contact</li>
                <li>FAQ</li>
                <li>Live Chat</li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li>Accessibility</li>
                <li>Returns Policy</li>
                <li>Refund Policy</li>
                <li>Hiring Statistics</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Job Hunt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function CategoryCard({ title, jobsAvailable, logo }) {
  return (
    <div className="category-card">
      <img src={logo} alt="logo" />
      <h3>{title}</h3>
      <p>{jobsAvailable} Jobs Available</p>
    </div>
  );
}

function JobCard({ company, position, location, salary, type }) {
  return (
    <div className="job-card">
      <h3>{position}</h3>
      <p>{company}</p>
      <div className="job-info">
        <p>{location}</p>
        <p>{salary}</p>
        <span className={`job-type ${type.toLowerCase()}`}>{type}</span>
      </div>
    </div>
  );
}

export default Home;
