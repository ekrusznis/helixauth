import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import aboutImage from '../../assets/images/about/about-image.png'
import aboutImage1 from '../../assets/images/about/about-img_1.png'

const AboutUs = () => {
    return (
        <>
            <section className="sc-about-area gray-bg sc-pt-140 sc-pb-180 sc-md-pt-80 sc-md-pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <Fade left>
                            <div className="col-lg-6">
                                <div className="image-area sc-md-mb-150">
                                    <div className="sc-about-image">
                                        <img className="about-image" src={aboutImage} alt="aboutImage" />
                                        <img className="about-image_1 pulse" src={aboutImage1} alt="About" />
                                        <div className="circle-shape pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-lg-6">
                                <div className="sc-about-item sc-pl-100">
                                    <div className="sc-heading-area sc-mb-30 sc-sm-mb-15">
                                        <h2 className="heading-title">Revolutionize Business Management</h2>
                                    </div>
                                    <div className="description sc-mb-25 sc-sm-mb-15">
                                        HelixAuth redefines business management with unparalleled security and efficiency. Our platform not only protects your data with blockchain technology but also offers comprehensive tools for managing your team, projects, and integrations, all within a customizable and user-friendly environment.
                                    </div>
                                    <div className="btn-area sc-mt-40">
                                        <Link className="primary-btn" to="/price#"><span>Get Started</span></Link>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;