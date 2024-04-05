import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import PricePlan from '../../Shared/PricePlan';
import PriceFaq from './PriceFaq';
import Apps from '../../Shared/Apps';
import Footer from '../../Shared/Footer';

const Price = () => {
    return (
        <>
            <Header
                parentMenu='pages'
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='Pricing Plan' />
            <PricePlan />
            <PriceFaq />
            <Apps />
            <Footer />
        </>
    );
};

export default Price;