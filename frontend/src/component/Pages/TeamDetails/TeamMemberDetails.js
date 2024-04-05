import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SocialIcon from '../../Shared/SocialIcon';
import teamImg1 from '../../../assets/images/team/team_img1.png'

const TeamMemberDetails = () => {
    return (
        <>
            <section>
                <div className="sc-team-details-pages-area sc-pt-140 sc-md-pt-80 sc-pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="team-content-box text-center sc-md-mb-30">
                                    <div className="team-image">
                                        <img src={teamImg1} alt="Team" />
                                        <div className="team-social-icon">
                                            <SocialIcon></SocialIcon>
                                        </div>
                                    </div>
                                    <div className="team-author">
                                        <h4 className="team-title sc-pt-15"><Link to="#">Jane Cooper</Link></h4>
                                        <span className="sc-mb-0">Product Desinger</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="content-area">
                                    <div className="details-area">
                                        <div className="team-author">
                                            <h2>Jane Cooper</h2>
                                            <h3>A certified instructor from Spria</h3>
                                            <ul className="personal-info">
                                                <li>
                                                    <i className="ri-mail-line"></i>
                                                    <a href="mailto:hello@yourmail.com">info@gmail.com</a>
                                                </li>
                                                <li>
                                                    <i className="ri-phone-fill"></i>
                                                    <a href="tel:+00222444555">+00 222 444 555</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team-rating">
                                            <ul className="rating-list">
                                                <li>
                                                    <span><i className="ri-star-fill"></i></span>
                                                    <span><i className="ri-star-fill"></i></span>
                                                    <span><i className="ri-star-fill"></i></span>
                                                    <span><i className="ri-star-fill"></i></span>
                                                    <span><i className="ri-star-fill"></i></span>(9220 Rating)
                                                </li>
                                                <li>730 Reviews</li>
                                            </ul>
                                        </div>
                                        <h3 className="sc-mb-25">About Me</h3>
                                        <div className="description sc-mb-15">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nisi ut
                                            aliquip ex ea commodo consequat. sint occaecat non proident, sunt in culpa qui
                                            deserunt mollit anim id est laborum.
                                        </div>
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

export default TeamMemberDetails;