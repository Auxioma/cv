import React from "react";

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            errorMessage: null,
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
                console.log(data);

                if (data && data.message && data.message[0].title) {
                    this.setState({article: data.message[0].title});
                } else {
                    this.setState({errorMessage: 'No data found!'});
                }
            })
            .catch(error => {
                this.setState({errorMessage: error.message});
            });
    }



    render() {
        return (
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
        )
    }
}

export default BlogPost;