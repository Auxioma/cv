import React from "react";
import BlogPost from "./partials/BlogPost";

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: [],
            error: null,
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8001/api/blog')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data.message[0].name);

                if (data && data.message && data.message[0].name) {
                    this.setState({blog: data.message[0].name});
                } else {
                    this.setState({error: 'No data found!'});
                }
            })
            .catch(error => {
                this.setState({error: error.message});
            });
    }


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
                            <BlogPost/>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Blog;