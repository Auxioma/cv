import React from "react";

class Titre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '', // title should be a string
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
                console.log(data.message[0].title);

                if (data && data.message && data.message[0].title) {
                    this.setState({title: data.message[0].title});
                } else {
                    this.setState({errorMessage: 'No data found!'});
                }
            })
            .catch(error => {
                this.setState({errorMessage: error.message});
            });
    }

    render() {
        const { title, errorMessage } = this.state;

        return (
            <>
                {errorMessage ? (
                    <span className="error">{errorMessage}</span>
                ) : (
                    <span className="id-color">{title}</span>
                )}
            </>
        );
    }
}

export default Titre;