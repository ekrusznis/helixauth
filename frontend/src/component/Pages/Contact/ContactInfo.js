import React from 'react';
import { toast } from 'react-toastify';

const ContactInfo = () => {
    const handleMessage = (event) => {
        event.preventDefault()
        event.target.reset()
        toast("Message Sent Successfully")
    }

    return (
        <>
            <section>
                <div className="sc-contact-pages-area sc-pt-140 sc-md-pt-70 sc-pb-20 sc-md-pb-10">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="sc-heading-area sc-mb-20">
                                    <span className="sc-sub-title primary-color">Get In Touch</span>
                                    <h2 className="heading-title sc-mb-45">Our Team Is Ready To Rapid Support You</h2>
                                </div>
                                <div className="contact-page-service-box">
                                    <div className="contact_icon">
                                        <i className="ri-map-pin-fill"></i>
                                    </div>
                                    <div className="contact-service-box">
                                        <ul>
                                            <li>335 Sheet, R-04, H-03, Squer Milis<span>Tower. New work</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="contact-page-service-box">
                                    <div className="contact_icon">
                                        <i className="ri-mail-fill"></i>
                                    </div>
                                    <div className="contact-service-box">
                                        <ul className="contact-list">
                                            <li><a href="mailto:Info@yourmail.com">Info@yourmail.com</a></li>
                                            <li><a href="mailto:Support@info.com">Support@info.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="contact-page-service-box sc-md-mb-25">
                                    <div className="contact_icon">
                                        <i className="ri-phone-fill"></i>
                                    </div>
                                    <div className="contact-service-box">
                                        <ul className="contact-list">
                                            <li><a href="tel:(00) 1234 567 890">(00) 1234 567 890</a></li>
                                            <li><a href="tel:(00) 1234 567 800">(00) 1234 567 800</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-box sc-md-mb-10">
                                    <form onSubmit={handleMessage}>
                                        <div className="login-form">
                                            <div className="form-box">
                                                <label className="sc-mb-10">Name*</label>
                                                <input className="from-control" type="text" id="name" name="name" placeholder="Write Your Name" required autoComplete="off" />
                                            </div>
                                            <div className="form-box">
                                                <label className="sc-mb-10">Email*</label>
                                                <input className="from-control" type="email" id="email" name="email" placeholder="Write Your Email" required autoComplete="off" />
                                            </div>
                                            <div className="form-box">
                                                <label>Message*</label>
                                                <textarea id="message" name="message" placeholder="Write Your Message" autoComplete="off" required></textarea>
                                            </div>
                                        </div>
                                        <div className="submit-button">
                                            <input className="submit-btn" type="submit" value="Send Message" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactInfo;