import React, { useState } from 'react';
import '../styles/Home.css';

const SignInModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => {
    const modal = document.getElementById('signInModal');
    const backdrop = document.querySelector('.modal-backdrop');
    
    modal.classList.remove('show');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
    
    // Remove backdrop if it exists
    if (backdrop) {
      backdrop.remove();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in with:', email, password);
    handleClose();
  };

  const handleSocialSignIn = (provider) => {
    console.log(`Signing in with ${provider}`);
    handleClose();
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target.id === 'signInModal') {
      handleClose();
    }
  };

  return (
    <div 
      className="modal fade" 
      id="signInModal" 
      tabIndex="-1" 
      aria-labelledby="signInModalLabel" 
      aria-hidden="true"
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="signInModalLabel">Sign In</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-yellow w-100">
                Sign In
              </button>
            </form>

            <div className="social-login-divider">
              <span>or sign in with</span>
            </div>

            <div className="social-login-buttons">
              <button 
                className="btn btn-outline-primary w-100 mb-2"
                onClick={() => handleSocialSignIn('Google')}
                type="button"
              >
                <i className="fab fa-google me-2"></i>
                Continue with Google
              </button>
              <button 
                className="btn btn-outline-primary w-100"
                onClick={() => handleSocialSignIn('Facebook')}
                type="button"
              >
                <i className="fab fa-facebook-f me-2"></i>
                Continue with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal; 