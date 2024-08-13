import React, { useState } from 'react';
import '../login/css/login.css';
import SignUp from './Singup';

function Login() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = (e) => {
    e.preventDefault(); 
    setShowSignUp(true); 
  };

  return (
    <>
      {showSignUp ? (
        <SignUp />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <form className="form">
              <button className="close-btn" onClick={() => setShowLogin(false)}>×</button>

                <p className="form-title">Log in to your account</p>

                <div className="input-container">
                  <input placeholder="Enter email" type="email" />
                  <span>
                    <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                  </span>
                </div>
                

                <div className="input-container">
                  <input placeholder="Enter password" type="password" />
                  <span>
                    <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                  </span>
                </div>

                <button className="submit" type="submit">
                  Log in
                </button>

                <p className="signup-link">
                  No account?
                  <a href="/" onClick={handleSignUpClick}>Sign up</a>
                </p>
              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
