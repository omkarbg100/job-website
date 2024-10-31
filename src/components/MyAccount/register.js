import React, { useState, useEffect } from "react";
import "./register.css";
import Profile from "./profile";

function Register() {
  const savedData = JSON.parse(localStorage.getItem("formData")) || {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    linkedIn: "",
  };

  const [registered, setRegistered] = useState(localStorage.getItem("registered") === "true");
  const [formData, setFormData] = useState(savedData);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.fullName.trim()) validationErrors.fullName = "Full name is required";
    if (!formData.email.trim()) validationErrors.email = "Email is required";
    if (!formData.password.trim()) validationErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) validationErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      localStorage.setItem("formData", JSON.stringify(formData));
      localStorage.setItem("registered", "true");
      setSuccessMessage("Registration successful!");
      setRegistered(true);
    }
  };

  if (!registered) {
    return (
      <div className="registration-container">
        <h2>Job Portal Registration</h2>
        {successMessage && <div className="success-message">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          {/* Form fields here */}
        </form>
      </div>
    );
  } else {
    return <Profile data={formData} />;
  }
}

export default Register;
