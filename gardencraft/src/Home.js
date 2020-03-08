import React, { Component } from 'react';
import './styles/home.css'
import IntroductionImg from './images/introduction_img.png';

const IntroImg = () => {
 return (
  <div className="introduction_img">
   <img class="" src={IntroductionImg} alt="Plants"></img>
  </div>
 )
}

const IntroText = () => {
 return (
  <div class="introduction_text">
   <h1>Your garden,</h1><br></br>
   <h1>where you need it.</h1>
   <blockquote>
    <p>Organic seeds, ready for planting in your home.</p>
    <hr class="hr1"></hr>
   </blockquote>
   <div class="home_buttons">
    <a href="plants.html" class="btn">Plants</a>
    <a href="furniture.html" class="btn">Furniture</a>
   </div>
  </div>
 )
}

class Home extends Component {
 render() {
  return (
   <section className="introduction_container">
    <IntroImg />
    <IntroText />
   </section>
  )
 }
}

export default Home;