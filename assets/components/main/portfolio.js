import React from "react";

class Portfolio extends React.Component {
    render() {
        return (
<section id="section-portfolio" class="no-bottom">
                <div class="container relative">
                    <div class="row">
                        <div class="col-md-12 text-center wow fadeInUp">
                            <h2>Portfolio</h2>
                            <div class="space-border"></div>
                        </div>
                    </div>
                    <div id="gallery" class="row sequence">
                        <div class="col-md-4 item">
                            <div class="de_modal wow" data-url="single-project.html">
                                <div class="card-image-1 mod-c" data-tilt>
                                    <div class="d-text">
                                        <h3>Single Image</h3>
                                        <h5 class="d-tag">website</h5>
                                    </div>
                                    <img src="images/gallery/1.jpg" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 item">
                            <div class="de_modal wow" data-url="single-project-2.html">
                                <div class="card-image-1 mod-c" data-tilt>
                                    <div class="d-text">
                                        <h3>Multiple Images</h3>
                                        <h5 class="d-tag">website</h5>
                                    </div>
                                    <img src="images/gallery/2.jpg" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 item">
                            <div class="de_modal wow" data-url="single-project-3.html">
                                <div class="card-image-1 mod-c" data-tilt>
                                    <div class="d-text">
                                        <h3>Self Hosted Video</h3>
                                        <h5 class="d-tag">website</h5>
                                    </div>
                                    <img src="images/gallery/3.jpg" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 item">
                            <div class="de_modal wow" data-url="single-project.html">
                                <div class="card-image-1 mod-c" data-tilt>
                                    <div class="d-text">
                                        <h3>Bluetec App</h3>
                                        <h5 class="d-tag">website</h5>
                                    </div>
                                    <img src="images/gallery/4.jpg" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 item">
                            <div class="de_modal wow" data-url="single-project.html">
                                <div class="card-image-1 mod-c" data-tilt>
                                    <div class="d-text">
                                        <h3>Uhost Hosting</h3>
                                        <h5 class="d-tag">website</h5>
                                    </div>
                                    <img src="images/gallery/5.jpg" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 item">
                            <div class="de_modal wow" data-url="single-project.html">
                                <div class="card-image-1 mod-c" data-tilt>
                                    <div class="d-text">
                                        <h3>Bolo Creative</h3>
                                        <h5 class="d-tag">website</h5>
                                    </div>
                                    <img src="images/gallery/6.jpg" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

        );
    }
}

export default Portfolio;