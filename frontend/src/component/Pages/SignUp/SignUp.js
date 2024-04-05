import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import SignUpForm from './SignUpForm';
import Apps from '../../Shared/Apps';
import Footer from '../../Shared/Footer';

const SignUp = () => {
    return (
        <>
            <Header
                parentMenu='pages'
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='Sign Up' />
            <SignUpForm />
            <Apps />
            <Footer />
        </>
    );
};

export default SignUp;