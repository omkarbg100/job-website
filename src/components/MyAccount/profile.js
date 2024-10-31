import React, { useState } from "react";
import "./profile.css";
import ResumeBuilder from './resumeBuilder/ResumeBuilder';

function Profile(props) {
  const userInfo = {
    fullName: props.data?.fullName || "",
    email: props.data?.email || "",
    password: props.data?.password || "",
    linkedIn: props.data?.linkedIn || "",
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [isVisible, setIsVisible] = useState(true);
  const [isVisible1, setIsVisible1] = useState(false);

  return (
    <div className="my-profile-parent-div">
      <div className="my-profile-header">
        <div>
          <span onClick={() => {
            if (!isVisible) {
              setIsVisible(true);
              setIsVisible1(false);
            }
          }}>My Profile</span>
          <span onClick={() => {
            if (!isVisible1) {
              setIsVisible1(true);
              setIsVisible(false);
            }
          }}>My Resume</span>
        </div>
      </div>
      <div className={isVisible ? 'visible my-profile' : 'hidden my-profile'}>
        <h2>My Profile</h2>
        <div className="profile-info">
          <div className="profile-item">
            <label>Full Name:</label>
            <span>{userInfo.fullName}</span>
          </div>
          <div className="profile-item">
            <label>Email:</label>
            <span>{userInfo.email}</span>
          </div>
          <div className="profile-item">
            <label>Password:</label>
            <span>{showPassword ? userInfo.password : "********"}</span>
            <button onClick={handleTogglePassword} className="toggle-password-btn">
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="profile-item">
            <label>LinkedIn:</label>
            <a href={userInfo.linkedIn} target="_blank" rel="noopener noreferrer">
              {userInfo.linkedIn || "None"}
            </a>
          </div>
        </div>
      </div>
      <div className={isVisible1 ? 'visible my-resume' : 'hidden my-resume'}>
        <ResumeBuilder />
      </div>
    </div>
  );
}

export default Profile;
