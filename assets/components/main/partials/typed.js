import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

class Slides extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typed: [], // title should be a string
            errorMessage: null, // better name for clarity
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8001/api/slider')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {

                if (data && data.message[0].typed && data.message[0].typed) {

                    this.setState({typed: data.message[0].typed});
                    const options = {
                        strings: data.message[0].typed,
                        typeSpeed: 50,
                        backSpeed: 50,
                        loop: true,
                    };
                    this.Typed = new Typed('.typed', options);
                } else {
                    this.setState({errorMessage: 'No data found!'});
                }
            })
            .catch(error => {
                this.setState({errorMessage: error.message});
            });
    }

    render() {
        const { errorMessage } = this.state;

        return (
            <p className="wow fadeInUp" data-wow-delay=".6s">
                {errorMessage ? errorMessage : <span className="typed"></span>}
            </p>
        );
    }
}

export default Slides;