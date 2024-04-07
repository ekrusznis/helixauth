import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const PricePlan = () => {
    let [priceToggle, setPriceToggle] = useState(true)
    return (
        <>
            <section className="sc-price-area gray-bg sc-pt-125 sc-md-pt-65 sc-pb-140 sc-md-pb-80">
                <div className="container">
                    <div className="sc-heading-area sc-mb-40 sc-md-mb-30 text-center">
                        <h2 className="title sc-mb-25">Really Simple Pricing</h2>
                        <span className="sub_title">No Hidden Fees</span>
                    </div>
                    <div className="pricing-selector">
                        <form >
                            <button type="button" className="pricing-monthly-btn">Monthly</button>
                            <input type="checkbox" name="pricing-selector" id="pricing-selector" onChange={() => setPriceToggle(!priceToggle)} />
                            <button type="button" className="pricing-yearly-btn">Yearly <span>(1 Month Free)</span></button>
                        </form>
                    </div>
                    <div className={`${priceToggle ? 'pricing-monthly' : 'pricing-monthly d-none'}`}>
                        <div className="row">
                            <Fade bottom delay={100}>
                                <div className="col-lg-4 col-md-6 sc-md-mb-30">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">BASIC</h4>
                                            <div className="price-active">$49.99<span className="month"> - Month</span></div>
                                        </div>
                                        <div className="perfect-title">Perfect for Small Businesses</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i><span>1,000 Per-Month Transactions</span></li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>10 User Contracts</li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Automated Role Generation</li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Basic Usage Reporting</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="price-btn" to="/contact#"><span>Try It’s Free</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom delay={200}>
                                <div className="col-lg-4 col-md-6 sc-md-mb-30" >
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">BUSINESS</h4>
                                            <div className="price-active price">$199.99<span className="month"> - Month</span></div>
                                        </div>
                                        <div className="perfect-title">Perfect for Medium Businesses</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i>5,000 Per-Month Transactions</li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>25 Users Contracts</span></li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>Automated Rule Generation</span></li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Custom Usage Reporting</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="price-btn" to="/contact#"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="price_sale">
                                            <span className="popular">popular</span>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom delay={300}>
                                <div className="col-lg-4 col-md-6">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">ENTERPRISE</h4>
                                            <div className="price-active price">499.99<span className="month"> - Month</span></div>
                                        </div>
                                        <div className="perfect-title">Perfect for Enterprise Businesses</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i>10,000 Per-Month Transactions</li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>Unlimited Users</span></li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>Custom Rule Creation</span></li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Custom Usage Reporting</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="price-btn" to="/contact#"><span>Buy Now</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={`${priceToggle ? 'pricing-yearly d-none' : 'pricing-yearly'}`}>
                        <div className="row">
                            <Fade bottom delay={100}>
                                <div className="col-lg-4 col-md-6 sc-md-mb-30">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">BASIC</h4>
                                            <div className="price-active">$549.99<span className="month"> - Year</span></div>
                                        </div>
                                        <div className="perfect-title">Perfect for Small Businesses</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i><span>1,000 Per-Month Transactions</span></li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>10 User Contracts</li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Automated Role Generation</li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Basic Usage Reporting</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="price-btn" to="/contact#"><span>Free Trial</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom delay={200}>
                                <div className="col-lg-4 col-md-6 sc-md-mb-30">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">BUSINESS</h4>
                                            <div className="price-active price">$2,199.99<span className="month"> - Year</span></div>
                                        </div>
                                        <div className="perfect-title">Perfect for Medium Businesses</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i>5,000 Per-Month Transactions</li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>25 Users Contracts</span></li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>Automated Rule Generation</span></li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Custom Usage Reporting</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="price-btn" to="/contact#"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="price_sale">
                                            <span className="popular">popular</span>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom delay={300}>
                                <div className="col-lg-4 col-md-6">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">Pro</h4>
                                            <div className="price-active price">$5,499.99<span className="month"> - Year</span></div>
                                        </div>
                                        <div className="perfect-title">Perfect for Enterprise Businesses</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i>10,000 Per-Month Transactions</li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>Unlimited Users</span></li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>Custom Rule Creation</span></li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Custom Usage Reporting</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="price-btn" to="/contact#"><span>Buy Now</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricePlan;