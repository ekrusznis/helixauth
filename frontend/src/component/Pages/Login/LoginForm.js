import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { toast } from 'react-toastify';
import { login } from '../../../ApiClient'; // Import the login function

const LoginForm = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await login(email, password);
            toast("Login Successfully: " + response.data.message);
            setTimeout(() => {
                navigate('/dashboard');
            }, 1500);
        } catch (error) {
        let errorMessage = "Login failed";
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            errorMessage += ": " + error.response.data.error;
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            errorMessage += ": Server did not respond.";
        } else {
            // Something happened in setting up the request that triggered an Error
            errorMessage += ": " + error.message;
        }
        toast.error(errorMessage);
        }
    };

    return (
        <>
            <div className="sc-login-section sc-pt-120 sc-md-pb-70">
                <div className="sc-login-box">
                    <h4 className="sc-text text-center">Don't have an account yet? <Link className='primary-color' to="/signup#">Sign Up</Link></h4>
                    <form onSubmit={handleLogin}>
                        <div className="login-form">
                            <label className="login-label">Email address</label>
                            <input className="from-control" type="email" id="form-email" name="email" placeholder="Enter Your Email" required autoComplete="off" value={email} onChange={e => setEmail(e.target.value)} />
                            <label className="login-label">Password</label>
                            <input className="from-control" type="password" id="password" name="password" placeholder="Enter Your Password" autoComplete="off" required value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="check-box d-flex justify-content-between">
                            <div className="input-box"><input type="checkbox" id="Check" name="Check" /><label> Remember Me</label></div>
                            <div className="login-password">
                                <Link to="#">Forget Password?</Link>
                            </div>
                        </div>
                        <div className="submit-btn text-center">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="login-email text-center">
                        <p>Or Login with Social</p>
                    </div>
                    <div className="submit-btn text-center">
                        <svg width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25.4989 19.412C25.0306 21.0411 24.1025 22.5006 22.8257 23.6156C21.549 24.7306 19.9778 25.4539 18.3005 25.6986C16.9889 25.8889 15.6523 25.8122 14.371 25.4731C13.0897 25.134 11.8902 24.5395 10.8444 23.7252C9.79857 22.911 8.92809 21.8938 8.28517 20.7348C7.64225 19.5758 7.24016 18.2988 7.10303 16.9806C6.99681 15.6571 7.16633 14.326 7.60087 13.0714C8.03542 11.8168 8.72553 10.6661 9.62759 9.69183C10.5296 8.71761 11.624 7.94114 12.8415 7.41152C14.059 6.8819 15.3732 6.61064 16.7009 6.61489C17.945 6.61664 19.1774 6.85552 20.3321 7.31873C20.5139 7.40036 20.7196 7.41116 20.909 7.34903C21.0984 7.28689 21.2577 7.15629 21.3558 6.98281L23.6593 2.74376C23.7089 2.64613 23.7387 2.53966 23.747 2.43047C23.7554 2.32128 23.7421 2.21152 23.7079 2.10748C23.6737 2.00345 23.6193 1.90719 23.5478 1.82422C23.4764 1.74126 23.3892 1.67322 23.2914 1.62402C20.8179 0.50413 18.1 0.0322823 15.3938 0.252916C12.6876 0.473549 10.0821 1.3794 7.82263 2.88516C5.5632 4.39091 3.72423 6.44701 2.47893 8.85979C1.23362 11.2726 0.622966 13.9626 0.704477 16.6766C0.862114 20.7076 2.51907 24.5344 5.35075 27.4075C8.18244 30.2806 11.9848 31.993 16.013 32.2091C20.2328 32.3963 24.3552 30.9068 27.4809 28.0658C30.6066 25.2248 32.4818 21.2629 32.6973 17.0445C32.6973 16.7246 32.6973 14.885 32.6973 13.8453C32.6932 13.6344 32.6076 13.4334 32.4585 13.2842C32.3094 13.1351 32.1083 13.0495 31.8974 13.0454H17.5007C17.2886 13.0454 17.0851 13.1297 16.9351 13.2797C16.7851 13.4297 16.7009 13.6331 16.7009 13.8453V18.6442C16.7009 18.8563 16.7851 19.0597 16.9351 19.2097C17.0851 19.3597 17.2886 19.444 17.5007 19.444H25.4989"
                                fill="#DB4437" />
                        </svg>
                        <Link to="#"><input type="submit" value="Continue with Google" /></Link>
                    </div>
                    <div className="submit-btn text-center">
                        <svg className="sc-facebook" width="15" height="25" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.27626 16.1796V8.97205H10.1937L10.631 6.16346H7.27722V4.37007C7.27722 3.55632 7.54876 3.00251 8.95508 3.00251L10.7492 3.00172V0.489387C9.88108
                        0.413203 9.00862 0.376279 8.13568 0.378781C5.54886 0.378781 3.77858 1.68788 3.77858 4.09197V6.16346H0.853516V8.97205H3.77858V16.1796H7.27626V16.1796Z"
                                fill="white">
                            </path></svg>
                        <Link to="#"><input type="submit" value="Continue with Facebook" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;