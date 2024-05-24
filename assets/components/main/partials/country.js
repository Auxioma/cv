import React from "react";

class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: [], // title should be a string
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

                if (data && data.message && data.message[0].country) {
                    this.setState({country: data.message[0].country});
                } else {
                    this.setState({errorMessage: 'No data found!'});
                }
            })
            .catch(error => {
                this.setState({errorMessage: error.message});
            });
    }

    render() {
        const { country, errorMessage } = this.state;

        return (
            <>
                {errorMessage ? (

                    <span className="error">{errorMessage}</span>

                ) : (
                    country.map((country, index) => (
                        <li> <span key={index}>{country}</span>test, test</li>
                    ))
                )
                }
            </>
        );
    }
}

export default Country;