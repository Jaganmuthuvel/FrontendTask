import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const confirmRef = useRef(null);

  useEffect(() => {
    if (confirmRef.current) {
      if (password !== confirmPassword && confirmPassword !== '') {
        confirmRef.current.setCustomValidity("Passwords do not match");
      } else {
        confirmRef.current.setCustomValidity("");
      }
    }
  }, [password, confirmPassword]);

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/otp');
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">

        
        <div className="register-left-panel">
          <div className="register-image"></div>
        </div>

       
        <div className="register-right-panel">

          <form className="register-form-group" onSubmit={handleRegister}>
            <h1 className="register-heading">Register to Admin Panel</h1>
            <p className="register-subheading">Enter your phone number and password below</p>

            <div className="register-input-container">
              <label className="register-label">EMAIL ID</label>
              <input
                type="email"
                className="register-input"
                placeholder="Enter your email id"
                required
              />
            </div>

            <div className="register-input-container">
              <label className="register-label">PASSWORD</label>
              <input
                type="password"
                className="register-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="register-input-container">
              <label className="register-label">CONFIRM PASSWORD</label>
              <input
                type="password"
                className="register-input"
                placeholder="Enter your confirm password"
                ref={confirmRef}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button className="register-button" type="submit">Register</button>

            <div className="register-footer">
              <span className="register-footer-text">Already have an account?</span>
              <Link className="register-login-link" to="/">Login</Link>
            </div>
          </form>

        </div>
      </div>
    </div>


  );
};

export default Register;
