import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import ErrorMessage from './ErrorMessage';
import Apps from '../../Shared/Apps';
import Footer from '../../Shared/Footer';

const Error404 = () => {
    return (
        <>
            <Header
                parentMenu='pages'
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='404 Error' />
            <ErrorMessage />
            <Apps />
            <Footer />
        </>
    );
};

export default Error404;