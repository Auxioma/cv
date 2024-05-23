import React from "react";

class Myquote extends React.Component {
    render() {
        return (
            <section id="section-my-quote" aria-label="section" class="jarallax no-top no-bottom">
                <div class="de-gradient-edge-top"></div>
                <img src="images/background/2.jpg" class="jarallax-img" alt="" />
                    <div class="v-center">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-md-10 offset-md-1">
                                    <blockquote class="q-big wow fadeIn" data-wow-duration="3s">
                                        <i class="d-big icon_quotations"></i>
                                        Do more than is required. What is the distance between someone who achieves their goals consistently and those who spend their lives and careers merely following? The extra mile.
                                        <span class="d-quote-by">Kyros Noriaki</span>
                                    </blockquote>
                                    <div class="spacer-double"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="de-gradient-edge-bottom"></div>
            </section>
        );
    }
}

export default Myquote;