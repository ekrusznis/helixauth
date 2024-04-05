import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import testImage from '../../../assets/images/testimonials/test-img.png'
import groupImage from '../../../assets/images/testimonials/group_img.png'
import groupImage1 from '../../../assets/images/testimonials/group_img1.png'
import groupImage2 from '../../../assets/images/testimonials/group_img2.png'
import groupImage3 from '../../../assets/images/testimonials/group_img3.png'
import groupImage4 from '../../../assets/images/testimonials/group_img4.png'
import groupImage5 from '../../../assets/images/testimonials/group_img5.png'

const Testimonial = () => {

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="ri-arrow-right-line"></i></button>;
    };
    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="ri-arrow-left-line"></i></button>;

    };

    return (
        <>
            <section className="sc-testimonial-area sc-pt-125 sc-pb-120 sc-md-pt-60 sc-md-pb-60">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="sc-heading-area text-center">
                                <h2 className="heading-title">Check What’s Our Client Say About Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="home-testimonial-wrapper">
                        <Carousel className="home-testimonial"
                            infinite={true}
                            draggable={true}
                            pauseOnHover={true}
                            slidesToSlide={1}
                            swipeable={true}
                            autoPlaySpeed={3000}
                            customRightArrow={<CustomRightArrow />}
                            customLeftArrow={<CustomLeftArrow />}
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 992
                                    },
                                    items: 1,
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 991,
                                        min: 577
                                    },
                                    items: 1,
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 576,
                                        min: 1
                                    },
                                    items: 1,
                                }
                            }}>
                            <div className="sc-testimonial-item">
                                <div className="quote-icon quote-icon_1">
                                    <i className="ri-double-quotes-l"></i>
                                </div>
                                <div className="description">
                                    Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists
                                    stay in touch with what's happening.
                                </div>
                                <div className="testimonial-image text-center">
                                    <img src={testImage} alt="TestimonialImage" />
                                </div>
                                <div className="test-person-wrap text-center">
                                    <h5 className="test-title sc-mb-0"><Link to="#">Jenifer Aston</Link></h5>
                                    <p className="designation ">Product Designer</p>
                                </div>
                            </div>
                            <div className="sc-testimonial-item">
                                <div className="quote-icon quote-icon_1">
                                    <i className="ri-double-quotes-l"></i>
                                </div>
                                <div className="description">
                                    Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists
                                    stay in touch with what's happening.
                                </div>
                                <div className="testimonial-image text-center">
                                    <img src={groupImage2} alt="TestimonialImage" />
                                </div>
                                <div className="test-person-wrap text-center">
                                    <h5 className="test-title sc-mb-0"><Link to="#">Ema lice</Link></h5>
                                    <p className="designation ">Product Designer</p>
                                </div>
                            </div>
                            <div className="sc-testimonial-item">
                                <div className="quote-icon quote-icon_1">
                                    <i className="ri-double-quotes-l"></i>
                                </div>
                                <div className="description">
                                    Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists
                                    stay in touch with what's happening.
                                </div>
                                <div className="testimonial-image text-center">
                                    <img src={groupImage5} alt="TestimonialImage" />
                                </div>
                                <div className="test-person-wrap text-center">
                                    <h5 className="test-title sc-mb-0"><Link to="#">Micky James</Link></h5>
                                    <p className="designation ">Product Designer</p>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    <div className="test_left_imgage">
                        <img src={groupImage} width="82" height="82" alt="groupImage" />
                    </div>
                    <div className="test_left_imgage1">
                        <img src={groupImage1} width="60" height="60" alt="groupImage1" />
                    </div>
                    <div className="test_left_imgage2">
                        <img src={groupImage2} width="82" height="82" alt="groupImage2" />
                    </div>
                    <div className="test_right_imgage">
                        <img src={groupImage3} width="82" height="82" alt="groupImage3" />
                    </div>
                    <div className="test_right_imgage1">
                        <img src={groupImage4} width="60" height="60" alt="groupImage4" />
                    </div>
                    <div className="test_right_imgage2">
                        <img src={groupImage5} width="82" height="82" alt="groupImage5" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonial;