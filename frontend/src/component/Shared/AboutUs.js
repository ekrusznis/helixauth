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
                                        <h2 className="heading-title">Application and Data Security</h2>
                                    </div>
                                    <div className="description sc-mb-25 sc-sm-mb-15">
                                        HelixAuth not only secures the gates to your digital assets but also ensures that the interactions within are monitored and protected. Our comprehensive security solutions cover every touchpoint, providing peace of mind and compliance with the latest security standards.
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