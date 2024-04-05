import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import errorImg from '../../../assets/images/feature/error_img.png'

const ErrorMessage = () => {
    return (
        <>
            <section>
                <div className="sc-error-pages-area sc-pt-140 sc-md-pt-70 sc-pb-20">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="sc-error-content-box">
                                    <div className="sc-heading-area sc-mb-60">
                                        <h2 className="heading-title sc-mb-15">Sorry!! Page not found</h2>
                                        <div className="description sc-mb-25">Risus commodo viverra maecenas accumsan lacus vel. Urna condimentum mattis pellentesque id nibh tortor.</div>
                                        <div className="btn-area sc-mt-40">
                                            <Link className="primary-btn" to="/#"><span>Back to Home</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="sc-error-image">
                                    <img src={errorImg} alt="Error" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorMessage;