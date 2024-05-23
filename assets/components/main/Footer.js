import React from "react";

class Footer extends React.Component {
    render() {
        return(
            <>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <a href="index.html">
                                    <span className="copy">&copy; Copyright 2022 - Kyros by Designesia</span>
                                </a>
                            </div>
                            <div className="col-md-6">
                                <div className="social-icons">
                                    <a href="index-particle-effect.html#"><i className="fa fa-facebook fa-lg"></i></a>
                                    <a href="index-particle-effect.html#"><i className="fa fa-twitter fa-lg"></i></a>
                                    <a href="index-particle-effect.html#"><i className="fa fa-linkedin fa-lg"></i></a>
                                    <a href="index-particle-effect.html#"><i className="fa fa-pinterest fa-lg"></i></a>
                                    <a href="index-particle-effect.html#"><i className="fa fa-rss fa-lg"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;