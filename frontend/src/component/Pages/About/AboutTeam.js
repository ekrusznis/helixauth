import React from 'react';
import aboutImg1 from '../../../assets/images/about/ab_img.png'
import aboutImg2 from '../../../assets/images/about/ab_img1.png'
import aboutImg3 from '../../../assets/images/about/ab_img2.png'

const AboutTeam = () => {
    return (
        <>
            <section>
                <div className="about-team-pages-area sc-pt-130 sc-md-pt-70 sc-pb-180 sc-md-pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1 p-z-idex">
                                <div className="sc-heading-area sc-mb-105 sc-md-mb-60 text-center">
                                    <span className="sc-sub-title primary-color">About The Journey</span>
                                    <h2 className="heading-title sc-mb-25">We Help Small Businesses With Big Hearts Make Meaningful Hires.</h2>
                                    <div className="description sc-mb-20">
                                        Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. In nisl nisi scelerisque eu ultrices vitae auctor eu. Mattis pellentesque id
                                        nibh tortor id. Sit amet risus nullam eget felis. Augue lacus viverra vitae congue eu consequat. Pulvinar proin gravida hendrerit lectus.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row position-relative">
                            <div className="col-lg-4 p-z-idex">
                                <div className="about_team_Image text-center sc-md-mb-30">
                                    <img src={aboutImg1} alt="About" />
                                </div>
                            </div>
                            <div className="col-lg-4 p-z-idex">
                                <div className="about_team_Image text-center sc-md-mb-30">
                                    <img src={aboutImg2} alt="About" />
                                </div>
                            </div>
                            <div className="col-lg-4 p-z-idex">
                                <div className="about_team_Image text-center">
                                    <img src={aboutImg3} alt="About" />
                                </div>
                            </div>
                            <div className="sc-ab-circle purple"></div>
                            <div className="sc-ab-circle yelow"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutTeam;