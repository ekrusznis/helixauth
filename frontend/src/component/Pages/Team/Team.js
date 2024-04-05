import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import TeamMember from './TeamMember';
import Apps from '../../Shared/Apps';
import Footer from '../../Shared/Footer';

const Team = () => {
    return (
        <>
            <Header
                parentMenu='pages'
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='Team' />
            <TeamMember />
            <Apps />
            <Footer />
        </>
    );
};

export default Team;