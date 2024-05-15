import React from "react";

class Slider extends React.Component {
    render() {
        return (
            <section aria-label="section" class="jarallax no-top no-bottom text-light">
                <img src="/images/background/4.jpg" class="jarallax-img" alt="" />
                    <div id="particles-js"></div>
                    <div class="v-center">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-md-12">
                                    <h6 class="wow fadeInUp" data-wow-delay=".4s"><span class="id-color">I Am Kyros Noriaki</span></h6>
                                    <div class="spacer-10"></div>
                                    <div class="h1_big text-white wow fadeInUp" data-wow-delay=".6s">
                                        <div class="typed-strings">
                                            <p>Freelancer</p>
                                            <p>Programmer</p>
                                            <p>Photographer</p>
                                        </div>
                                        <div class="typed"></div>
                                    </div>
                                </div>
                                <div class="spacer-20"></div>
                                <ul class="list_location wow fadeInUp" data-wow-delay=".8s">
                                    <li><span>France</span>Bodin, Chauveau</li>
                                    <li><span>USA</span>Louisiana, Bayerfurt</li>
                                    <li><span>German</span>Hamburg, Dortmund</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a href="index-particle-effect.html#section-about" class="mouse-icon-click scroll-to wow fadeInUp" data-wow-delay=".8s">
                        <span class="mouse fadeScroll relative" data-scroll-speed="10">
                            <span class="scroll"></span>
                        </span>
                    </a>
                    <div class="de-gradient-edge-bottom"></div>
            </section>

        );
    }
}

export default Slider;