import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-left-panel">
          <div className="login-image"></div>
        </div>

        
        <div className="login-right-panel">
          
          <form className="login-form-group" onSubmit={handleLogin}>
            <h1 className="login-heading">Log In to Admin Panel</h1>
            <p className="login-subheading">Enter your email id and password below</p>

            <div className="login-input-container">
              <label className="login-label">EMAIL ID</label>
              <input
                type="email"
                className="login-input"
                placeholder="Enter your email id"
                required
              />
            </div>

            <div className="login-input-container">
              <label className="login-label">PASSWORD</label>
              <input
                type="password"
                className="login-input"
                placeholder="Enter your password"
                required
              />
            </div>

            <button className="login-button" type="submit">Log In</button>

            <div className="login-footer">
              <span className="login-footer-text">Don't have an account?</span>
              <Link className="login-register-link" to="/register">Register</Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
