import React, { Component } from 'react';
import '../../style/home.css';
import '../../style/responsive.css';
import IntroductionImg from '../../assets/img/introduction_img.png';

import { Link } from 'react-router-dom';

const IntroImg = () => {
 return (
  <div className="introduction-img">
   <img className="intro-img" src={IntroductionImg} alt="Plants"></img>
  </div>
 )
}

const IntroText = () => {
 return (
  <div class="introduction-text">
   <h1>Your plants, where you need it.</h1>
   <blockquote>
    <p>Organic seeds, ready for planting in your home.</p>

   </blockquote>
    <Link to="/aboutus">
      <a href="plants.html" class="btn">Know more</a>
    </Link>
  </div>
 )
}

class Home extends Component {
 render() {
  return (
   <section className="introduction">
    <div className="container">
      <IntroImg />
      <IntroText />
    </div>
   </section>
  )
 }
}

export default Home;