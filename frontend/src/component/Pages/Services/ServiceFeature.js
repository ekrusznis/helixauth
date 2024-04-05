import React from 'react';
import { Fade } from 'react-reveal';
import featureImg7 from '../../../assets/images/feature/feature_img7.png'

const ServiceFeature = () => {
    return (
        <>
            <section className="sc-feature-section-area5 sc-pt-175 sc-md-pt-115 sc-pb-140 sc-md-pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <Fade left>
                            <div className="col-lg-6">
                                <div className="sc-feature-image pulse sc-md-mb-50">
                                    <img className="feature_img" src={featureImg7} alt="Feature" />
                                    <div className="image-bg-circle"></div>
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-lg-6">
                                <div className="sc-feature-item">
                                    <div className="sc-heading-area sc-mb-20">
                                        <span className="sc-sub-title primary-color">What We Do</span>
                                        <h2 className="heading-title sc-mb-25">Successful SaaS Campaigns Needed Advanced Tools.</h2>
                                        <div className="description sc-mb-25">
                                            Risus commodo viverra maecenas accumsan lacus vel. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Nulla facilisi cras fermentum
                                            odio eu. Hac habitasse platea dictumst quisque sagittis purus.
                                        </div>
                                    </div>
                                    <div className="feature_check">
                                        <ul>
                                            <li><i className="ri-checkbox-circle-fill"></i>Widget, personalize your own app with your preference</li>
                                            <li><i className="ri-checkbox-circle-fill"></i>Auto up-to-date, we mark sure that it keep updating</li>
                                            <li><i className="ri-checkbox-circle-fill"></i>100+ crypto Exchange platfrom support</li>
                                        </ul>
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

export default ServiceFeature;