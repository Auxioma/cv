import React from "react";

class About extends React.Component {
    render() {
        return (
<section id="section-about">
                <div class="container relative">
                    <div class="row">
                        <div class="col-md-12 text-center wow fadeInUp">
                            <h2>About Me</h2>
                            <div class="space-border"></div>
                        </div>
                        <div class="col-md-8 offset-md-2 text-center wow fadeInUp">
                            <p>I am a website designer from Lousiana, with a strong focus in UI/UX design. I love to get new experiences and always learn from my surroundings. I've done more than 285 projects. You can check it through portfolio section on
                                this website. I looking forward to any opportunities and challenges. </p>
                        </div>
                        <div class="spacer-single"></div>
                        <div class="col-lg-3 position-relative wow fadeIn" data-wow-delay=".2s">
                            <div class="position-relative">
                                <div class="progressbar" data-animate="false">
                                    <div class="circle" data-percent="90">
                                        <div></div>
                                    </div>
                                    <h4>HTML</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 position-relative wow fadeIn" data-wow-delay=".4s">
                            <div class="position-relative">
                                <div class="progressbar" data-animate="false">
                                    <div class="circle" data-percent="85">
                                        <div></div>
                                    </div>
                                    <h4>CSS</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 position-relative wow fadeIn" data-wow-delay=".6s">
                            <div class="position-relative">
                                <div class="progressbar" data-animate="false">
                                    <div class="circle" data-percent="80">
                                        <div></div>
                                    </div>
                                    <h4>PHP</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 position-relative wow fadeIn" data-wow-delay=".8s">
                            <div class="position-relative">
                                <div class="progressbar" data-animate="false">
                                    <div class="circle" data-percent="75">
                                        <div></div>
                                    </div>
                                    <h4>jQuery</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

        );
    }
}

export default About;