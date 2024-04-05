import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import ContactInfo from './ContactInfo';
import Apps from '../../Shared/Apps';
import Footer from '../../Shared/Footer';

const Contact = () => {
    return (
        <>
            <Header
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='Contact Us' />
            <ContactInfo />
            <Apps />
            <Footer />
        </>
    );
};

export default Contact;