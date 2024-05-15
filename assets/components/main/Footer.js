import React from "react";

class Footer extends React.Component {
    render() {
        return (
<footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <a href="index.html">
                            <span class="copy">&copy; Copyright 2022 - Kyros by Designesia</span>
                        </a>
                    </div>
                    <div class="col-md-6">
                        <div class="social-icons">
                            <a href="index-particle-effect.html#"><i class="fa fa-facebook fa-lg"></i></a>
                            <a href="index-particle-effect.html#"><i class="fa fa-twitter fa-lg"></i></a>
                            <a href="index-particle-effect.html#"><i class="fa fa-linkedin fa-lg"></i></a>
                            <a href="index-particle-effect.html#"><i class="fa fa-pinterest fa-lg"></i></a>
                            <a href="index-particle-effect.html#"><i class="fa fa-rss fa-lg"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        

        );
    }
}

export default Footer;