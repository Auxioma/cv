import React from "react";

class About extends React.Component {
    render() {
        return(
            <>
                <section id="section-about">
                    <div className="container relative">
                        <div className="row">
                            <div className="col-md-12 text-center wow fadeInUp">
                                <h2>About Me</h2>
                                <div className="space-border"></div>
                            </div>
                            <div className="col-md-8 offset-md-2 text-center wow fadeInUp">
                                <p>I am a website designer from Lousiana, with a strong focus in UI/UX design. I love to
                                    get new experiences and always learn from my surroundings. I've done more than 285
                                    projects. You can check it through portfolio section on
                                    this website. I looking forward to any opportunities and challenges. </p>
                            </div>
                            <div className="spacer-single"></div>
                            <div className="col-lg-3 position-relative wow fadeIn" data-wow-delay=".2s">
                                <div className="position-relative">
                                    <div className="progressbar" data-animate="false">
                                        <div className="circle" data-percent="90">
                                            <div></div>
                                        </div>
                                        <h4>HTML</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 position-relative wow fadeIn" data-wow-delay=".4s">
                                <div className="position-relative">
                                    <div className="progressbar" data-animate="false">
                                        <div className="circle" data-percent="85">
                                            <div></div>
                                        </div>
                                        <h4>CSS</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 position-relative wow fadeIn" data-wow-delay=".6s">
                                <div className="position-relative">
                                    <div className="progressbar" data-animate="false">
                                        <div className="circle" data-percent="80">
                                            <div></div>
                                        </div>
                                        <h4>PHP</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 position-relative wow fadeIn" data-wow-delay=".8s">
                                <div className="position-relative">
                                    <div className="progressbar" data-animate="false">
                                        <div className="circle" data-percent="75">
                                            <div></div>
                                        </div>
                                        <h4>jQuery</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default About;