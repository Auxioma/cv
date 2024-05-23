import React from "react";

class Quote extends React.Component {
    render() {
        return(
            <>
                <section id="section-my-quote" aria-label="section" className="jarallax no-top no-bottom">
                    <div className="de-gradient-edge-top"></div>
                    <img src="images/background/2.jpg" className="jarallax-img" alt=""/>
                    <div className="v-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-10 offset-md-1">
                                    <blockquote className="q-big wow fadeIn" data-wow-duration="3s">
                                        <i className="d-big icon_quotations"></i>
                                        Do more than is required. What is the distance between someone who achieves
                                        their goals consistently and those who spend their lives and careers merely
                                        following? The extra mile.
                                        <span className="d-quote-by">Kyros Noriaki</span>
                                    </blockquote>
                                    <div className="spacer-double"></div>
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

export default Quote;