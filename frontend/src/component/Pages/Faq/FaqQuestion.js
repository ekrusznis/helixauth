import React from 'react';

const FaqQuestion = () => {
    return (
        <>
            <div className="sc-faq-pages-area sc-pt-130 sc-md-pt-70 sc-pb-10 sc-md-pb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="sc-heading text-center sc-mb-60">
                                <h2 className="sc-mb-20">Frequently Asked Questions</h2>
                                <div className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati quae quo iste ipsum officiis deleniti asperiores sit.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-2">
                            <div className="accordion sc-faq-style" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne">
                                            How to construction management requirement?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong
                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
                                                tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit,<br />
                                                sed doeiusmod tempor incididunt ut labore et dolore magna</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            How to vertual design & build?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong
                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
                                                tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit,<br />
                                                sed doeiusmod tempor incididunt ut labore et dolore magna</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree">
                                            How to project requirement management system?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong
                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
                                                tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit,<br />
                                                sed doeiusmod tempor incididunt ut labore et dolore magna</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour">
                                            How to project requirement management system?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong
                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
                                                tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit,<br />
                                                sed doeiusmod tempor incididunt ut labore et dolore magna</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive">
                                            What is the effective staking amount?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong
                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
                                                tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit,<br />
                                                sed doeiusmod tempor incididunt ut labore et dolore magna</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqQuestion;