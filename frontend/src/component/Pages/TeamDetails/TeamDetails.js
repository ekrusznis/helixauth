import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import TeamMemberDetails from './TeamMemberDetails';
import Apps from '../../Shared/Apps';
import Footer from '../../Shared/Footer';
const TeamDetails = () => {
    return (
        <>
            <Header
                parentMenu='pages'
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='Team Details' />
            <TeamMemberDetails />
            <Apps />
            <Footer />
        </>
    );
};

export default TeamDetails;