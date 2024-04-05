import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../assets/helix_logo_white_trans_150.png'
import logoDark from '../../assets/helix_logo_150.png';
import OffCanvasMenu from './OffCanvasMenu';
import MenuItems from './MenuItems';

const Header = (props) => {
    const { parentMenu, headerClass, headerNormalLogo, headerStickyLogo, signUpBtn } = props;

    const [stickyHeader, setStickyHeader] = useState(false)
    let sticky = () => {
        if (window.scrollY > 150) {
            setStickyHeader(true)
        } else {
            setStickyHeader(false)
        }
    }
    window.addEventListener("scroll", sticky)

    return (
        <>
            <header className={stickyHeader ? headerClass + " sc-header-sticky" : headerClass} id="sc-header-sticky">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-8 col-md-4 col-sm-3">
                            <div className="sc-header-left-wraper d-flex align-items-center">
                                <div className="sc-main-logo sc-mr-60 sc-md-mr-30 text-center text-sm-start">
                                    <div className="default-logo logo-area">
                                        <Link to="/#">
                                            <img src={headerNormalLogo ? headerNormalLogo : logo} alt="logo" />
                                        </Link>
                                    </div>
                                    <div className="sticky-logo logo-area">
                                        <Link to="/#">
                                            <img src={headerStickyLogo ? headerStickyLogo : logoDark} alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="sc-main-menu d-lg-block d-none">
                                    <ul className="main-menu">
                                        <MenuItems
                                            parentMenu={parentMenu}
                                        />
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* OffCanvas Area  */}
                        <div className="col-lg-4 col-md-8 col-sm-9">
                            <div className="header-btn-area p-z-idex d-flex align-items-center justify-content-center justify-content-sm-end">
                                <div className="header-list">
                                    <ul className='d-flex '>
                                        <li className="canvas sc-pr-20 sc-sm-pr-10 text-white d-lg-none">
                                            <OffCanvasMenu></OffCanvasMenu>
                                        </li>
                                        <li>
                                            <Link to="/login#"><i className="ri-lock-line"></i>Login </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header-btn2 sc-pl-30 sc-sm-pl-20">
                                    <Link className={signUpBtn ? signUpBtn : "sign-in-btn"} to="/signup#"><span>Sign Up</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;