import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="signup-container" id="login">
      <div className="login-box">
        <div className="right-side">
          <div className="login-form w-50">
            <h1 className='text-white text-center mb-3'>Sign Up</h1>
            <form>
              <div className="input-group">
                <input type="email" className='form-control' placeholder="Email" required />
              </div>
              <div className="input-group">
                <input type="password" className='form-control mt-2' placeholder="Password" required />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary mt-2 sign-in-btn">Continue</button>
              </div>
            </form>
            <div className='mt-3'>
              <p className='text-center login-links-text ml-2 mt-3'>Already have an account? <span><Link to="/Login" className='login-links-signup' target="_blank">Sign In</Link></span></p>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;