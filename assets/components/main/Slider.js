import React from "react";
import Titre from "./partials/title";
import Slides from "./partials/typed";
import Country from "./partials/country";

class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slider: [],
            error: null,
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8001/api/slider')
            .then(reponse => {
                if(!reponse.ok) {
                    throw new Error(`http error! status: ${reponse.status}`);
                }

                return reponse.json();
            })

            .then(data => {
                console.log(data);
                if (data && data.message && isInArray(data.message)) {
                    this.setState({slider: data.message});
                } else {
                    this.setState({error: 'No data found!'});
                }
            })
            .catch(error => {
                this.setState({error: error.message});
            })
    }

    render() {
        return (
            <section aria-label="section" className="jarallax no-top no-bottom text-light">
                <img src="/images/background/4.jpg" className="jarallax-img" alt="" />
                    <div id="particles-js"></div>
                    <div className="v-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <h6 className="wow fadeInUp" data-wow-delay=".4s">
                                        <Titre />
                                    </h6>
                                    <div className="spacer-10"></div>
                                    <div className="h1_big text-white wow fadeInUp" data-wow-delay=".6s">
                                        <Slides />
                                    </div>
                                </div>
                                <div className="spacer-20"></div>
                                <ul className="list_location wow fadeInUp" data-wow-delay=".8s">
                                    <Country />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a href="#section-about" className="mouse-icon-click scroll-to wow fadeInUp" data-wow-delay=".8s">
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