import React from 'react';
import SocialIcon from '../../Shared/SocialIcon';
import { HashLink as Link } from 'react-router-hash-link';
import teamImg1 from '../../../assets/images/team/team_img1.png'
import teamImg2 from '../../../assets/images/team/team_img2.png'
import teamImg3 from '../../../assets/images/team/team_img3.png'
import teamImg4 from '../../../assets/images/team/team_img4.png'
import teamImg5 from '../../../assets/images/team/team_img5.png'
import teamImg6 from '../../../assets/images/team/team_img6.png'
import teamImg7 from '../../../assets/images/team/team_img7.png'
import teamImg8 from '../../../assets/images/team/team_img8.png'

const TeamMember = () => {
    return (
        <>
            <section>
                <div className="sc-team-pages-area white-color sc-pt-140 sc-pb-20 sc-md-pt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team-content-box text-center sc-mb-30">
                                    <div className="team-image">
                                        <img src={teamImg1} alt="Team" />
                                        <div className="team-social-icon">
                                            <SocialIcon></SocialIcon>
                                        </div>
                                    </div>
                                    <div className="team-author">
                                        <h4 className="team-title sc-pt-15"><Link to="/team-details#">Richard Hockins</Link></h4>
                                        <span className="sc-mb-0">Product Desinger</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team-content-box text-center sc-mb-30">
                                    <div className="team-image">
                                        <img src={teamImg2} alt="Team" />
                                        <div className="team-social-icon">
                                            <SocialIcon></SocialIcon>
                                        </div>
                                    </div>
                                    <div className="team-author">
                                        <h4 className="team-title sc-pt-15"><Link to="/team-details#">Jane Cooper</Link></h4>
                                        <span className="sc-mb-0">Product Desinger</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team-content-box text-center sc-mb-30">
                                    <div className="team-image">
                                        <img src={teamImg3} alt="Team" />
                                        <div className="team-social-icon">
                                            <SocialIcon></SocialIcon>
                                        </div>
                                    </div>
                                    <div className="team-author">
                                        <h4 className="team-title sc-pt-15"><Link to="/team-details#">Ema Watson</Link></h4>
                                        <span className="sc-mb-0">Product Desinger</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team-content-box text-center sc-mb-30">
                                    <div className="team-image">
                                        <img src={teamImg4} alt="Team" />
                                        <div className="team-social-icon">
                                            <SocialIcon></SocialIcon>
                                        </div>
                                    </div>
                                    <div className="team-author">
                                        <h4 className="team-title sc-pt-15"><Link to="/team-details#">Masud Rana</Link></h4>
                                        <span className="sc-mb-0">Product Desinger</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team-content-box text-center sc-md-mb-30">
                                    <div className="team-image">
                                        <img src={teamImg5} alt="Team" />
                                        <div className="team-social-icon">
                                            <SocialIcon></SocialIcon>
                                        </div>
                                    </div>
                                    <div className="team-author">
                                        <h4 className="team-title sc-pt-15"><Link to="/team-details#">Micky James</Link></h4>
                                        <span className="sc-mb-0">Product Desinger</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team-content-box text-center sc-md-mb-30">
                                    <div className="team-image">
                                        <img src={teamImg6} alt="Team" />
                                        <div className="team-social-icon">
                                            <SocialIcon></SocialIcon>
                                        </div>
                                    </div>
                                    <div className="team-author">
                                        <h4 className="team-title sc-pt-15"><Link to="/team-details#">Istiak Ahmed</Link></h4>
                                        <span className="sc-mb-0">Product Desinger</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team-content-box text-center">
                                    <div className="team-image">
                                        <img src={teamImg7} alt="Team" />
                                        <div className="team-social-icon">
                                            <SocialIcon></SocialIcon>
                                        </div>
                                    </div>
                                    <div className="team-author">
                                        <h4 className="team-title sc-pt-15"><Link to="/team-details#">Jimmy Uso</Link></h4>
                                        <span className="sc-mb-0">Product Desinger</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team-content-box text-center">
                                    <div className="team-image">
                                        <img src={teamImg8} alt="Team" />
                                        <div className="team-social-icon">
                                            <SocialIcon></SocialIcon>
                                        </div>
                                    </div>
                                    <div className="team-author">
                                        <h4 className="team-title sc-pt-15"><Link to="/team-details#">Stephen Marie</Link></h4>
                                        <span className="sc-mb-0">Product Desinger</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamMember;