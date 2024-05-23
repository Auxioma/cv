import React from "react";

class Contact extends React.Component {
    render() {
        return(
            <>
                <section id="section-contact" className="jarallax">
                    <div className="de-gradient-edge-top"></div>
                    <img src="images/background/5.jpg" className="jarallax-img" alt=""/>
                    <div className="container z-index-1000">
                        <div className="row">
                            <div className="col-md-12 text-center wow fadeInUp">
                                <h2>Contact Me</h2>
                                <div className="space-border"></div>
                            </div>
                            <div className="col-lg-8 offset-lg-2 wow fadeInUp">
                                <div className="contact_form_wrapper">
                                    <form name="contactForm" id="contact_form" className="form-border" method="post"
                                          action="index-particle-effect.html#">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="field-set">
                                                    <input type="text" name="Name" id="name" className="form-control"
                                                           placeholder="Your Name" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="field-set">
                                                    <input type="text" name="Email" id="email" className="form-control"
                                                           placeholder="Your Email" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="field-set">
                                                    <input type="text" name="phone" id="phone" className="form-control"
                                                           placeholder="Your Phone" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="field-set">
                                                <textarea name="message" id="message" className="form-control"
                                                          placeholder="Your Message" required></textarea>
                                            </div>
                                            <div className="g-recaptcha"
                                                 data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"></div>
                                            <div id='submit' className="mt10">
                                                <input type='submit' id='send_message' value='Send Message'
                                                       className="btn-main"/>
                                            </div>

                                            <div id="success_message" className='success'>
                                                Your message has been sent successfully. Refresh this page if you want
                                                to send more messages.
                                            </div>
                                            <div id="error_message" className='error'>
                                                Sorry there was an error sending your form.
                                            </div>

                                        </div>
                                    </form>
                                </div>
                                <div className="spacer-double"></div>
                                <div className="row text-center wow fadeInUp">
                                    <div className="col-md-4">
                                        <div className="wm-1"></div>
                                        <h6>Email Me</h6>
                                        <p>contact@kyrosnoriaki.com</p>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="wm-1"></div>
                                        <h6>Call Me</h6>
                                        <p>+1 700 333 92 96</p>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="wm-1"></div>
                                        <h6>Address</h6>
                                        <p>Collins Street West, Louisiana, Bayerfurt, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="de-gradient-edge-bottom"></div>
                </section>
            </>
        );
    }
}

export default Contact;