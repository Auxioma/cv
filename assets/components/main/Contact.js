import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <section id="section-contact" class="jarallax">
            <div class="de-gradient-edge-top"></div>
            <img src="images/background/5.jpg" class="jarallax-img" alt="" />
            <div class="container z-index-1000">
                <div class="row">
                    <div class="col-md-12 text-center wow fadeInUp">
                        <h2>Contact Me</h2>
                        <div class="space-border"></div>
                    </div>
                    <div class="col-lg-8 offset-lg-2 wow fadeInUp">
                        <div class="contact_form_wrapper">
                            <form name="contactForm" id="contact_form" class="form-border" method="post" action="index-particle-effect.html#">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="field-set">
                                            <input type="text" name="Name" id="name" class="form-control" placeholder="Your Name" required />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="field-set">
                                            <input type="text" name="Email" id="email" class="form-control" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="field-set">
                                            <input type="text" name="phone" id="phone" class="form-control" placeholder="Your Phone" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <div class="field-set">
                                        <textarea name="message" id="message" class="form-control" placeholder="Your Message" required></textarea>
                                    </div>
                                    <div class="g-recaptcha" data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"></div>
                                    <div id='submit' class="mt10">
                                        <input type='submit' id='send_message' value='Send Message' class="btn-main" />
                                    </div>

                                    <div id="success_message" class='success'>
                                        Your message has been sent successfully. Refresh this page if you want to send more messages.
                                    </div>
                                    <div id="error_message" class='error'>
                                        Sorry there was an error sending your form.
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div class="spacer-double"></div>
                        <div class="row text-center wow fadeInUp">
                            <div class="col-md-4">
                                <div class="wm-1"></div>
                                <h6>Email Me</h6>
                                <p>contact@kyrosnoriaki.com</p>
                            </div>
                            <div class="col-md-4">
                                <div class="wm-1"></div>
                                <h6>Call Me</h6>
                                <p>+1 700 333 92 96</p>
                            </div>
                            <div class="col-md-4">
                                <div class="wm-1"></div>
                                <h6>Address</h6>
                                <p>Collins Street West, Louisiana, Bayerfurt, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="de-gradient-edge-bottom"></div>
        </section>
    

        );
    }
}

export default Contact;