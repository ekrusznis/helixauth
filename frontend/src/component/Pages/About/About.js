import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import AboutTeam from './AboutTeam';
import AboutUs from '../../Shared/AboutUs';
import Apps from '../../Shared/Apps';
import Footer from '../../Shared/Footer';

const About = () => {
    return (
        <>
            <Header
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='About' />
            <AboutTeam />
            <AboutUs />
            <Apps />
            <Footer />
        </>
    );
};

export default About;