import React from "react";
import Header from "../../components/main/Header";
import Slider from "../../components/main/Slider";
import About from "../../components/main/About";
import Myquote from "../../components/main/Myquote";
import Services from "../../components/main/Services";
import Portfolio from "../../components/main/Portfolio";
import Resume from "../../components/main/Resume";
import Funfacts from "../../components/main/Funfacts";
import Blog from "../../components/main/Blog";  
import Contact from "../../components/main/Contact";

import Footer from "../../components/main/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>
          <div id="preloader">
            <div className="preloader1"></div>
          </div>
          <div className="float-text">
            <div className="de_social-icons">
              <a href="index-particle-effect.html#"><i className="fa fa-facebook fa-lg"></i></a>
              <a href="index-particle-effect.html#"><i className="fa fa-twitter fa-lg"></i></a>
              <a href="index-particle-effect.html#"><i className="fa fa-instagram fa-lg"></i></a>
            </div>
            <span>Follow Me</span>
          </div>
          <div id="de_modal">
            <button className="button-close"></button>
            <div className="d-modal-loader"></div>
          </div>

          <Slider />

        </div>

        <a href="index-particle-effect.html#" id="back-to-top"></a>
        
        <Footer />
      </>
    );
  }
}

export default App;