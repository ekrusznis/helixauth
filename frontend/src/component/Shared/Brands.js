import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import brand1 from '../../assets/images/brand/brand_1.png'
import brand2 from '../../assets/images/brand/brand_2.png'
import brand3 from '../../assets/images/brand/brand_3.png'
import brand4 from '../../assets/images/brand/brand_4.png'
import brand5 from '../../assets/images/brand/brand_5.png'
import brand6 from '../../assets/images/brand/brand_6.png'

const Brands = () => {
    return (
        <>
            <div className="sc-media-brand-section-area">
                <div className="container border-brand">
                    <Carousel
                        className="sc-client-area sc-slick-slide sc-slick-slides"
                        infinite={true}
                        draggable={true}
                        arrows={false}
                        pauseOnHover={true}
                        slidesToSlide={1}
                        swipeable={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 992
                                },
                                items: 6,
                            },
                            tablet: {
                                breakpoint: {
                                    max: 991,
                                    min: 577
                                },
                                items: 3,
                            },
                            mobile: {
                                breakpoint: {
                                    max: 576,
                                    min: 1
                                },
                                items: 2,
                            }
                        }}
                    >
                        <div className="sc-brand-item text-center">
                            <img src={brand1} alt="Brand" />
                        </div>
                        <div className="sc-brand-item text-center">
                            <img src={brand2} alt="Brand" />
                        </div>
                        <div className="sc-brand-item text-center">
                            <img src={brand3} alt="Brand" />
                        </div>
                        <div className="sc-brand-item text-center">
                            <img src={brand4} alt="Brand" />
                        </div>
                        <div className="sc-brand-item text-center">
                            <img src={brand6} alt="Brand" />
                        </div>
                        <div className="sc-brand-item text-center">
                            <img src={brand5} alt="Brand" />
                        </div>
                        <div className="sc-brand-item text-center">
                            <img src={brand3} alt="Brand" />
                        </div>
                        <div className="sc-brand-item text-center">
                            <img src={brand4} alt="Brand" />
                        </div>
                        <div className="sc-brand-item text-center">
                            <img src={brand6} alt="Brand" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default Brands;