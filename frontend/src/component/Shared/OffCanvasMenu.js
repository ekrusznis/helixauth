import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logoDark from '../../assets/images/logo-dark.png'

const OffCanvasMenu = (props) => {
    const [iconToggle1, setIconToggle1] = useState(true)
    const [iconToggle2, setIconToggle2] = useState(true)
    const [iconToggle3, setIconToggle3] = useState(true)

    const { parentMenu } = props;
    const location = useLocation();

    return (
        <>
            <div className='offcanvas-area'>
                <Link data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="ri-menu-line"></i></Link>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <Link to="/#"><img src={logoDark} alt="DarkLogo" /></Link>
                        <button type="button" className="offcanvasClose" data-bs-dismiss="offcanvas" aria-label="Close"><i className="ri-close-fill"></i></button>
                    </div>
                    <div className="offcanvas-body">
                        <nav className="navbar navbar-light">
                            <div className="w-100">
                                <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item dropdown">
                                            <Link className={parentMenu === 'pages' ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle'} to="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIconToggle1(!iconToggle1)}>
                                                Home
                                                {iconToggle1 ? <i className="ri-add-line"></i> : <i className="ri-subtract-line"></i>}
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li>
                                                    <Link className={location.pathname === '/' ? 'dropdown-item active' : 'dropdown-item'} to="/#">Home One</Link>
                                                </li>
                                                <li>
                                                    <Link className={location.pathname === '/home2' ? 'dropdown-item active' : 'dropdown-item'} to="/home2#">Home Two</Link>
                                                </li>
                                                <li>
                                                    <Link className={location.pathname === '/home3' ? 'dropdown-item active' : 'dropdown-item'} to="/home3#">Home Three</Link>
                                                </li>
                                                <li>
                                                    <Link className={location.pathname === '/home4' ? 'dropdown-item active' : 'dropdown-item'} to="/home4#">Home Four</Link>
                                                </li>
                                                <li>
                                                    <Link className={location.pathname === '/home5' ? 'dropdown-item active' : 'dropdown-item'} to="/home5#">Home Five</Link>
                                                </li>
                                                <li>
                                                    <Link className={location.pathname === '/home6' ? 'dropdown-item active' : 'dropdown-item'} to="/home6#">Home Six</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'} to="/about#">About Us</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className={parentMenu === 'pages' ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle'} to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIconToggle2(!iconToggle2)}>
                                                Pages
                                                {iconToggle2 ? <i className="ri-add-line"></i> : <i className="ri-subtract-line"></i>}
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li>
                                                    <Link className={location.pathname === '/services' ? 'dropdown-item active' : 'dropdown-item'} to="/services#">Services</Link>
                                                </li>
                                                <li>
                                                    <Link className={location.pathname === '/price' ? 'dropdown-item active' : 'dropdown-item'} to="/price#">Price</Link>
                                                </li>
                                                <li>
                                                    <Link className={location.pathname === '/team' ? 'dropdown-item active' : 'dropdown-item'} to="/team#">Team</Link>
                                                </li>
                                                <li>
                                                    <Link className={location.pathname === '/team-details' ? 'dropdown-item active' : 'dropdown-item'} to="/team-details#">Team Details</Link>
                                                </li>
                                                <li>
                                                    <Link className={location.pathname === '/faq' ? 'dropdown-item active' : 'dropdown-item'} to="/faq#">Faq</Link>
                                                </li>
                                                <li>
                                                    <Link className={location.pathname === '/login' ? 'dropdown-item active' : 'dropdown-item'} to="/login#">Login</Link>
                                                </li>
                                                <li>
                                                    <Link className={location.pathname === '/signup' ? 'dropdown-item active' : 'dropdown-item'} to="/signup#">Sign Up</Link>
                                                </li>
                                                <li>
                                                    <Link className={location.pathname === '/Error404' ? 'dropdown-item active' : 'dropdown-item'} to="/Error404#">404 Error</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown ">
                                            <Link className={parentMenu === 'blog' ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle'} to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIconToggle3(!iconToggle3)}>
                                                Blog
                                                {iconToggle3 ? <i className="ri-add-line"></i> : <i className="ri-subtract-line"></i>}
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className={location.pathname === '/blog' ? 'dropdown-item active' : 'dropdown-item'} to="/blog#">Blog</Link></li>
                                                <li><Link className={location.pathname === '/blog-details' ? 'dropdown-item active' : 'dropdown-item'} to="/blog-details#">Blog Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'} to="/contact#">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="offcanvas-icon-list">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/"><i className="ri-facebook-fill"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/"><i className="ri-twitter-fill"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/"><i className="ri-video-fill"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/"><i className="ri-linkedin-fill"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OffCanvasMenu;