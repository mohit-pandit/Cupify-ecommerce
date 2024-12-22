import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Signup = () => {
    return (
        <div className="auth-container">
            <div className="card">
                <div className="card-left">
                    <div className='w-50 mx-auto mb-3'>
                        <img src={'./assets/logo/cupify-logo.png'} alt="Cupify logo"></img>
                    </div>
                    <h1>Welcome to Cupify</h1>
                    <p>
                        Start your journey to explore the endless possibilities in the galaxy.
                    </p>
                </div>
                <div className="card-right">
                    <h2>Sign Up</h2>
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Create a password" />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                    <div className="card-footer">
                        <p className='text-dark'>
                            Already have an account ? <Link to="/login" className="link">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
