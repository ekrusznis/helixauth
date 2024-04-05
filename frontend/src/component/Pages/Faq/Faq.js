import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import FaqQuestion from './FaqQuestion';
import Apps from '../../Shared/Apps';
import Footer from '../../Shared/Footer';

const Faq = () => {
    return (
        <>
            <Header
                parentMenu='pages'
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='Faq' />
            <FaqQuestion />
            <Apps />
            <Footer />
        </>
    );
};

export default Faq;