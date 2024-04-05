import React from 'react';
import { Fade } from 'react-reveal';
import { toast } from 'react-toastify';
import shape1 from '../../assets/images/icons/shape_1.png'
import shape2 from '../../assets/images/icons/shape_2.png'
import shape3 from '../../assets/images/icons/shape_3.png'
import shape4 from '../../assets/images/icons/shape_4.png'
import shape5 from '../../assets/images/icons/shape_5.png'
import shape6 from '../../assets/images/icons/shape_6.png';

const Apps = () => {

    const handleTrial = (event) => {
        event.preventDefault()
        event.target.reset()
        toast("Enjoy Your Free Trial")
    }

    return (
        <>
            <section className="sc-apps-section-area sc-apps-bottom">
                <div className="container">
                    <div className="row">
                        <div className="apps-area d-flex align-items-center">
                            <Fade left>
                                <div className="col-lg-6">
                                    <div className="apps-title">
                                        <h2 className="heading-title white-color p-z-idex">Sign Up For More Information</h2>
                                    </div>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="col-lg-6">
                                    <form onSubmit={handleTrial}>
                                        <div className="sc-form-inner p-z-idex d-flex align-items-center justify-content-end">
                                            <div className="apps-form">
                                                <input type="email" id="email" name="email" placeholder="Email Address" required autoComplete="off" />
                                            </div>
                                            <div className="sc-primary-btn sc-md-pt-40">
                                                <button className="primary-btn2"><span>Start Trial</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </Fade>
                            <div className="apps_shape_image">
                                <img className="shape-img_1" src={shape1} alt="Shape1" />
                                <img className="shape-img_2" src={shape2} alt="Shape2" />
                                <img className="shape-img_3 d-none d-md-block" src={shape3} alt="Shape3" />
                                <img className="shape-img_4" src={shape4} alt="Shape4" />
                                <img className="shape-img_5" src={shape5} alt="Shape5" />
                                <img className="shape-img_6" src={shape6} alt="Shape6" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Apps;