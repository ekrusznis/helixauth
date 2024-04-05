import React from 'react';
import Accordion from '../../Shared/Accordion';

const ServiceFaq = () => {
    return (
        <>
            <div className="sc-faq-pages-area sc-pt-125 sc-md-pt-65 sc-pb-5 sc-md-pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="sc-heading text-center sc-mb-55">
                                <h2 className="sc-mb-20">Services FAQ</h2>
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

export default ServiceFaq;