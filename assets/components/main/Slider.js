import React from "react";

class Slider extends React.Component {
    render() {
        return (
            <section aria-label="section" className="jarallax no-top no-bottom text-light">
                <img src="/images/background/4.jpg" className="jarallax-img" alt="" />
                    <div id="particles-js"></div>
                    <div className="v-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <h6 className="wow fadeInUp" data-wow-delay=".4s"><span className="id-color">I Am Kyros Noriaki</span></h6>
                                    <div className="spacer-10"></div>
                                    <div className="h1_big text-white wow fadeInUp" data-wow-delay=".6s">
                                        <div className="typed-strings">
                                            <p>Freelancer</p>
                                            <p>Programmer</p>
                                            <p>Photographer</p>
                                        </div>
                                        <div className="typed"></div>
                                    </div>
                                </div>
                                <div className="spacer-20"></div>
                                <ul className="list_location wow fadeInUp" data-wow-delay=".8s">
                                    <li><span>France</span>Bodin, Chauveau</li>
                                    <li><span>USA</span>Louisiana, Bayerfurt</li>
                                    <li><span>German</span>Hamburg, Dortmund</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a href="index-particle-effect.html#section-about" className="mouse-icon-click scroll-to wow fadeInUp" data-wow-delay=".8s">
                        <span className="mouse fadeScroll relative" data-scroll-speed="10">
                            <span className="scroll"></span>
                        </span>
                    </a>
                    <div className="de-gradient-edge-bottom"></div>
            </section>

        );
    }
}

export default Slider;