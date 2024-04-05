import React from 'react';
import { Fade } from 'react-reveal';
import CountUp from 'react-countup';
import frame1 from '../../../assets/images/icons/frame_1.png'
import frame2 from '../../../assets/images/icons/frame_2.png'

const Counter = () => {
    return (
        <>
            <section className="sc-counter-area sc-pt-45 sc-pb-65">
                <div className="container position-relative">
                    <Fade bottom delay={100}>
                        <div className="shape_image" >
                            <img className="pulse" src={frame1} alt="frame_1" />
                        </div>
                    </Fade>
                    <Fade bottom delay={200}>
                        <div className="shape_image1" >
                            <img className="pulse" src={frame2} alt="frame_2" />
                        </div>
                    </Fade>
                    <div className="row align-items-center">
                        <Fade bottom delay={300}>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="sc-counter-box text-center">
                                    <div className="sc-count"><span data-count="40"><CountUp end={50} duration={3} /></span>%</div>
                                    <h4 className="count-title white-color">Sale Increase</h4>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom delay={400}>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="sc-counter-box text-center">
                                    <div className="sc-count"><span data-count="95"><CountUp end={95} duration={3} /></span>%</div>
                                    <h4 className="count-title white-color">Customer Feedback</h4>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom delay={500}>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="sc-counter-box counter-border text-center">
                                    <div className="sc-count"><span data-count="80"><CountUp end={80} duration={3} /></span>k</div>
                                    <h4 className="count-title white-color">Revenue Increase</h4>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Counter;