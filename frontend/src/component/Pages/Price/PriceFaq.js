import React from 'react';
import Accordion from '../../Shared/Accordion';

const PriceFaq = () => {
    return (
        <>
            <div className="sc-faq-pages-area white-gay-color sc-pt-130 sc-md-pt-70 sc-pb-125 sc-md-pb-65">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="sc-heading text-center sc-mb-55">
                                <h2 className="sc-mb-20">Pricing FAQ</h2>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-2">
                            <Accordion></Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceFaq;