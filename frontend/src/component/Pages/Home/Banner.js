import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import ModalVideo from 'react-modal-video';
import { HashLink as Link } from 'react-router-hash-link';
import bannerBG from '../../../assets/images/banner/banner-bg.png';
import bannerBG2 from '../../../assets/images/banner/banner-bg2.png';
import bannerBG3 from '../../../assets/images/banner/banner-bg3.png';

const Banner = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="sc-banner-section-area bottom-skew-bg sc-pt-200 sc-sm-pt-150 sc-pb-50 sc-sm-pb-70">
                <Fade top>
                    <div className="banner-circle-shape"></div>
                </Fade>
                <div className="container-fluid p-0">
                    <div className="row sc-banner-item d-flex align-items-center">
                        <div className="col-md-6">
                            <div className="banner-header-content">
                                <Fade left>
                                    <h1 className="banner-title p-z-idex white-color sc-mb-25 sc-sm-mb-15">Secure Your API with Custom Security and Authorization</h1>
                                    <div className="banner-sub-title white-dark-color sc-mb-40 sc-sm-mb-25">
                                        HelixAuth provides robust, customizable authentication solutions designed to protect your applications and data. Our advanced security protocols ensure that your APIs and endpoints are shielded from unauthorized access, safeguarding your digital infrastructure.
                                    </div>
                                </Fade>
                                <div className="banner-btn-area d-flex align-items-center">
                                    <Link className="primary-btn2" smooth to="/price#"><span>Free Trial</span></Link>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="LlCwHnp3kL4" onClose={() => setOpen(false)} />
                                    <Link className="popup-video" onClick={() => setOpen(true)}>
                                        <i className="ri-play-fill"></i>
                                        <span>Watch Intro
                                        </span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-image text-end shake-y">
                                <img className="banner-img" src={bannerBG} alt="Banner" />
                                <img className="banner-img_1 pulse" src={bannerBG2} alt="Banner" />
                                <img className="banner-img_2 pulse" src={bannerBG3} alt="Banner" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-shape"></div>
            </section>
        </>
    );
};

export default Banner;