import React, { useState } from 'react';
import './Signin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileNo: '',
    password: '',
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
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { mobileNo, password } = formData;
    if (mobileNo && password) {
      try {
        const response = await axios.get('http://localhost:8080/api/signup');
        const userExist = response.data.some(
          (data) => data.mobileNo === mobileNo && data.password === password
        );
        if (userExist) {
          alert('Login successful');
          navigate("/");
        } else {
          alert('User Not Found');
        }
      } catch (error) {
        console.error('Error fetching users', error);
        alert('Error logging in');
      }
    } else {
      alert('Please fill all the fields');
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="form-containerr">
      <h1 style={{ textAlign: 'center', color: 'black', fontSize: '36px', marginTop: '20px' }}>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="MobileNo">Mobile No.:</label>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        Don't have an account? <a href="/signup" onClick={handleCreateAccount}>Sign Up</a>
      </p>
    </div>
  );
}

export default Signin;
