import React from "react";

class Funfacts extends React.Component {
    render() {
        return (
<section id="section-fun-facts" aria-label="section" class="jarallax">
                <div class="de-gradient-edge-top"></div>
                <img src="images/background/3.jpg" class="jarallax-img" alt="" />
                <div class="container">
                        <div class="row">
                            <div class="col-md-3 wow fadeIn" data-wow-delay="0">
                                <div class="de_count text-center">
                                    <h3 class="timer" data-to="8240" data-speed="2500">0</h3>
                                    <span>Hours of Works</span>
                                </div>
                            </div>

                            <div class="col-md-3 wow fadeIn" data-wow-delay=".25s">
                                <div class="de_count text-center">
                                    <h3 class="timer" data-to="315" data-speed="2500">0</h3>
                                    <span>Projects Done</span>
                                </div>
                            </div>

                            <div class="col-md-3 wow fadeIn" data-wow-delay=".5s">
                                <div class="de_count text-center">
                                    <h3 class="timer" data-to="250" data-speed="2500">0</h3>
                                    <span>Satisfied Customers</span>
                                </div>
                            </div>

                            <div class="col-md-3 wow fadeIn" data-wow-delay=".75s">
                                <div class="de_count text-center">
                                    <h3 class="timer" data-to="32" data-speed="2500">0</h3>
                                    <span>Awards Winning</span>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="de-gradient-edge-bottom"></div>
            </section>
            

        );
    }
}

export default Funfacts;