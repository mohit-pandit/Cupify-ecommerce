import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Login = () => {
    return (
        <div className="auth-container">
            <div className="card">
                <div className="card-left">
                    <div className='w-50 mx-auto mb-3'>
                        <img src={'./assets/logo/cupify-logo.png'} alt="Cupify logo"></img>
                    </div>
                    <h1>Welcome to Cupify</h1>
                    <p>
                        Explore the galaxy with us. Stay connected and explore the universe of possibilities.
                    </p>
                </div>
                <div className="card-right">
                    <h2>Login your account</h2>
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                    <div className="card-footer">
                        <Link to="/forgot-password" className="link">Forgot Password?</Link>
                        <p className='text-dark'>
                            Don't have an account ? <Link to="/signup" className="link">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
