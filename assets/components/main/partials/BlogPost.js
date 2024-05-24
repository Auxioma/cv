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

                if (data && data.articles) {
                    this.setState({articles: data.articles});
                } else {
                    this.setState({errorMessage: 'No data found!'});
                }
            })
            .catch(error => {
                this.setState({errorMessage: error.message});
            });
    }



    render() {

        const {articles, errorMessage} = this.state;

        if (errorMessage) {
            return <div className="error">{errorMessage}</div>;
        }

        return articles.map(({picture, name, description}) => (
            <div className="bloglist item">
                <div className="post-content">
                    <div className="post-image">
                        <div className="de_modal" data-url="single-blog.html"><img alt=""
                                                                                   src={`public/images/blog/${picture}`}
                                                                                   className="lazy grayscale"/>
                        </div>
                    </div>
                    <div className="post-text">
                        <h4 className="de_modal" data-url="single-blog.html">{name}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        ));
    }
}

export default BlogPost;