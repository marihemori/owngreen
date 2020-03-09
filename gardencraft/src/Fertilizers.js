import React, { Component } from 'react';
import './styles/home.css'
import FertilizersImage from './images/fert_img.png'

const FertImg = () => {
 return (
  <div class="fert_img">
   <img class="" src={FertilizersImage} alt="Fertilizers"></img>
  </div>
 )
}

const FertText = () => {
 return (
  <div class="fert_text">
   <h1>Fertilizers</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Quisque sit amet orci a arcu.</p>
   <a href="" class="see_more">See more</a>
  </div>
 )
}

class Fertilizers extends Component {
 render() {
  return (
   <section className="fert_container">
    <FertImg />
    <FertText />
   </section>
  )
 }
}

export default Fertilizers;