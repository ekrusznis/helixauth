import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { toast } from 'react-toastify';

const SignUpForm = () => {

    const navigate = useNavigate();
    const handleSignUp = (event) => {
        event.preventDefault()
        event.target.reset()
        toast("Sign Up Successful")

        setTimeout(() => {
            navigate('/');
        }, 1500);
    }

    return (
        <>
            <div className="sc-login-section sc-pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <form onSubmit={handleSignUp}>
                                <div className="sc-login-box sc-register-box">
                                    <div className="login-form register-form">
                                        <h4 className="text-center">Easily Create Your Account</h4>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <label className="login-label">First Name</label>
                                                <input className="from-control" type="text" id="s-name" name="s-name" placeholder="Your First Name" autoComplete="off" required />
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="login-label">Last Name</label>
                                                <input className="from-control" type="text" id="sl-name" name="sl-name" placeholder="Your Last Name" autoComplete="off" required />
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="login-label gender-label">Gender</label>
                                                <select className="sc-select" name="cars" id="cars" required >
                                                    <option value="volvo">Select Gender</option>
                                                    <option value="saab">Male</option>
                                                    <option value="mercedes">Female</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="login-label">Email</label>
                                                <input className="from-control" type="email" id="s-email" name="s-email" placeholder="Your Email" autoComplete="off" required />
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="login-label">User Name</label>
                                                <input className="from-control" type="text" id="s-username" name="s-username" placeholder="Enter Your User Name" autoComplete="off" required />
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="login-label">Password</label>
                                                <input className="from-control" type="password" id="s-password" name="s-password" placeholder="********" autoComplete="off" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="register-account d-flex align-items-center justify-content-between">
                                        <div className="submit-button">
                                            <input type="submit" value="Create an Account" />
                                        </div>
                                        <div className="register-signin">Already Have an Account?<Link to="/login#"> Login</Link></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUpForm;