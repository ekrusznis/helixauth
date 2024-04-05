import React from 'react';
import Header from '../../Shared/Header';
import Banner from './Banner';
import Service from '../../Shared/Service';
import AboutUs from '../../Shared/AboutUs';
import Feature from '../../Shared/Feature';
import Counter from './Counter';
import Testimonial from './Testimonial';
import PricePlan from '../../Shared/PricePlan';
import Apps from '../../Shared/Apps';
import Footer from '../../Shared/Footer'

const HomeOne = () => {
    return (
        <div>
            <Header
                parentMenu='home'
                headerClass='sc-header-section'
            />
            <Banner />
            <Service />
            <AboutUs />
            <Feature />
            <Counter />
            <Testimonial />
            <PricePlan />
            <Apps />
            <Footer />
        </div>
    );
};

export default HomeOne;