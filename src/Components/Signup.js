import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    email: '',
    password: '',
    rePassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleFocus = (e) => {
    document.querySelectorAll("input").forEach((ele) => {
      ele.style.border = "1px solid rgb(218, 218, 218)";
    });
    e.target.style.borderLeft = "2px solid blue";
  };

  const handleBlur = (e) => {
    e.target.style.border = "1px solid rgb(218, 218, 218)";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.Name || formData.Name.length < 3 || formData.Name.length > 10) tempErrors.Name = "Please Enter Your Name.";
    if (!formData.MobileNo || !/^\d{10}$/.test(formData.MobileNo)) tempErrors.MobileNo = "Please Enter a valid 10-digit Mobile No.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid.";
    if (!formData.Password || formData.Password.length < 3) tempErrors.Password = "Enter Your Password.";
    if (formData.RePassword !== formData.Password) tempErrors.RePassword = "Password Mismatch.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const { name, mobileNo, email, password, rePassword } = formData;
      if (name && mobileNo && email && password && rePassword) {
        try {
          await axios.post('http://localhost:8080/api/signup', formData);
          alert('User Created');
          navigate('/Signin');
        } catch (error) {
          alert('Error creating user');
        }
      } else {
        alert('Please fill all the fields');
      }
    }
  };

  const handleLoginRedirect = () => {
    navigate("/Signin");
  };

  return (
    <div className="form-container">
      <h1 style={{ textAlign: 'center', color: 'black', fontSize: '36px', marginTop: '20px' }}>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.Name && <p className="error">{errors.Name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="MobileNo">Mobile No:</label>
          <input
            type="text"
            id="MobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.MobileNo && <p className="error">{errors.MobileNo}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.Password && <p className="error">{errors.Password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="RePassword">Re-Enter Password:</label>
          <input
            type="password"
            id="RePassword"
            name="rePassword"
            value={formData.rePassword}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.RePassword && <p className="error">{errors.RePassword}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        <center>Already have an account?</center> 
        <button onClick={handleLoginRedirect} className="link-button">Sign In</button>
      </p>
    </div>
  );
};

export default Signup;
