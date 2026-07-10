import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Otp.css';

const Otp = () => {
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    pastedData.split('').forEach((char, i) => {
      if (inputRefs.current[i]) {
        inputRefs.current[i].value = char;
      }
    });
    if (inputRefs.current[pastedData.length - 1]) {
      inputRefs.current[pastedData.length - 1].focus();
    }
  };

  const handleProceed = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="otp-wrapper">
      <div className="otp-card">

       
        <div className="otp-left-panel">
          <div className="otp-image"></div>
        </div>

        
        <div className="otp-right-panel">

          <form className="otp-form-group" onSubmit={handleProceed}>
            <h1 className="otp-heading">Verify your email</h1>
            <p className="otp-subheading">Enter the OTP from your register email id</p>

           
            <div className="otp-inputs-container">
              <input
                type="text"
                maxLength="1"
                className="otp-input text-center"
                ref={(el) => (inputRefs.current[0] = el)}
                onInput={(e) => handleInput(e, 0)}
                onKeyDown={(e) => handleKeyDown(e, 0)}
                onPaste={handlePaste}
                required
              />
              <input
                type="text"
                maxLength="1"
                className="otp-input text-center"
                ref={(el) => (inputRefs.current[1] = el)}
                onInput={(e) => handleInput(e, 1)}
                onKeyDown={(e) => handleKeyDown(e, 1)}
                required
              />
              <input
                type="text"
                maxLength="1"
                className="otp-input text-center"
                ref={(el) => (inputRefs.current[2] = el)}
                onInput={(e) => handleInput(e, 2)}
                onKeyDown={(e) => handleKeyDown(e, 2)}
                required
              />
              <input
                type="text"
                maxLength="1"
                className="otp-input text-center"
                ref={(el) => (inputRefs.current[3] = el)}
                onInput={(e) => handleInput(e, 3)}
                onKeyDown={(e) => handleKeyDown(e, 3)}
                required
              />
              <input
                type="text"
                maxLength="1"
                className="otp-input text-center"
                ref={(el) => (inputRefs.current[4] = el)}
                onInput={(e) => handleInput(e, 4)}
                onKeyDown={(e) => handleKeyDown(e, 4)}
                required
              />
              <input
                type="text"
                maxLength="1"
                className="otp-input text-center"
                ref={(el) => (inputRefs.current[5] = el)}
                onInput={(e) => handleInput(e, 5)}
                onKeyDown={(e) => handleKeyDown(e, 5)}
                required
              />
            </div>

            <button className="otp-button" type="submit">Proceed</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Otp;
