import React from "react";

class Blog extends React.Component {
    render() {
        return(
            <>
                <section id="section-blog" className="no-bottom">
                    <div className="container relative">
                        <div className="row">
                            <div className="col-md-12 text-center wow fadeInUp">
                                <h2>Recent Blog</h2>
                                <div className="space-border"></div>
                            </div>
                        </div>
                        <div id="carousel-blog" className="owl-carousel wow fadeInUp">
                            <div className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="de_modal" data-url="single-blog.html"><img alt=""
                                                                                                   src="images/blog/1.jpg"
                                                                                                   className="lazy grayscale"/>
                                        </div>
                                    </div>
                                    <div className="post-text">
                                        <h4 className="de_modal" data-url="single-blog.html">How to Make Better User
                                            Interface</h4>
                                        <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim
                                            reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="de_modal" data-url="single-blog.html"><img alt=""
                                                                                                   src="images/blog/2.jpg"
                                                                                                   className="lazy grayscale"/>
                                        </div>
                                    </div>
                                    <div className="post-text">
                                        <h4 className="de_modal" data-url="single-blog.html">10 Web Design Tips From
                                            Experts</h4>
                                        <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim
                                            reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="de_modal" data-url="single-blog.html"><img alt=""
                                                                                                   src="images/blog/3.jpg"
                                                                                                   className="lazy grayscale"/>
                                        </div>
                                    </div>
                                    <div className="post-text">
                                        <h4 className="de_modal" data-url="single-blog.html">The Importance of Web
                                            Design</h4>
                                        <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim
                                            reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="de_modal" data-url="single-blog.html"><img alt=""
                                                                                                   src="images/blog/4.jpg"
                                                                                                   className="lazy grayscale"/>
                                        </div>
                                    </div>
                                    <div className="post-text">
                                        <h4 className="de_modal" data-url="single-blog.html">10 Web Design Tips From
                                            Experts</h4>
                                        <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim
                                            reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="de_modal" data-url="single-blog.html"><img alt=""
                                                                                                   src="images/blog/5.jpg"
                                                                                                   className="lazy grayscale"/>
                                        </div>
                                    </div>
                                    <div className="post-text">
                                        <h4 className="de_modal" data-url="single-blog.html">The Importance of Web
                                            Design</h4>
                                        <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim
                                            reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="de_modal" data-url="single-blog.html"><img alt=""
                                                                                                   src="images/blog/6.jpg"
                                                                                                   className="lazy grayscale"/>
                                        </div>
                                    </div>
                                    <div className="post-text">
                                        <h4 className="de_modal" data-url="single-blog.html">Tips for Healthy
                                            Teeth<span></span></h4>
                                        <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim
                                            reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
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

export default Blog;