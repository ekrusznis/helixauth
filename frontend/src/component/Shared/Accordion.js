import React from 'react';

const Accordion = () => {
    return (
        <>
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
                            Do I have to pay for each agent account?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong
                            >Viverra aliquet eget sit amet tellus cras adipiscing enim. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Senectus et netus et malesuada fames ac turpis. Egestas erat imperdiet sed euismod nisi porta. Cursus sit amet dictum sit amet.
                            </strong>
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
                            Are there any additional costs?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong
                            >Viverra aliquet eget sit amet tellus cras adipiscing enim. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Senectus et netus et malesuada fames ac turpis. Egestas erat imperdiet sed euismod nisi porta. Cursus sit amet dictum sit amet.
                            </strong>
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
                            Do I have to pay for each agent account?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong
                            >Viverra aliquet eget sit amet tellus cras adipiscing enim. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Senectus et netus et malesuada fames ac turpis. Egestas erat imperdiet sed euismod nisi porta. Cursus sit amet dictum sit amet.
                            </strong>
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
                            Do you provide customer service agents?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong
                            >Viverra aliquet eget sit amet tellus cras adipiscing enim. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Senectus et netus et malesuada fames ac turpis. Egestas erat imperdiet sed euismod nisi porta. Cursus sit amet dictum sit amet.
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Accordion;