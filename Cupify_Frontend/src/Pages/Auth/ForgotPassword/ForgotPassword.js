import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <div className="card d-flex d-sm-block">
        <div className="card-left">
          <h1>Forgot Password?</h1>
          <p>
            No worries! Enter your email below to reset your password.
          </p>
        </div>
        <div className="card-right">
          <h2>Reset Password</h2>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <button type="submit">Reset Password</button>
          </form>
          <div className="card-footer">
            <Link to="/login" className="link">Back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
