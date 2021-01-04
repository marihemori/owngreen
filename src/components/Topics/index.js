import React, { Component } from 'react';
import '../../style/home.css';
import SeedsImage from '../../assets/img/seeds_img.png';
import FertilizersImage from '../../assets/img/fert_img.png';
import ToolsImage from '../../assets/img/tools_img.png';

const SeedsText = () => {
 return (
  <div className="seeds-text">
  <div className="title-style">
   <h1>Seeds</h1>
  </div>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Quisque sit amet orci a arcu.</p>
   <a className="know-more" href="">Know more</a>
  </div>
 )
}

const SeedsImg = () => {
 return (
  <div>
   <img className="seeds-img" src={SeedsImage} alt="Seeds"></img>
  </div>
 )
}

const FertImg = () => {
 return (
  <div>
   <img class="fert-img" src={FertilizersImage} alt="Fertilizers"></img>
  </div>
 )
}

const FertText = () => {
 return (
  <div class="fert-text">
  <div className="title-style">
   <h1>Fertilizers</h1>
  </div>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Quisque sit amet orci a arcu.</p>
   <a className="know-more" href="">Know more</a>
  </div>
 )
}

const ToolsText = () => {
 return (
  <div class="tools-text">
  <div className="title-style">
   <h1>Tools</h1>
  </div>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Quisque sit amet orci a arcu.</p>
   <a className="know-more" href="">Know more</a>
  </div>
 )
}

const ToolsImg = () => {
 return (
  <div>
   <img class="tools-img" src={ToolsImage} alt="Tools"></img>
  </div>
 )
}

class Topics extends Component {
 render() {
  return (
   <section className="topics">
    <div className="container">
     <div className="seeds-container">
      <SeedsText />
      <SeedsImg />
     </div>
     <div className="fert-container">
      <FertImg />
      <FertText />
     </div>
     <div className="tools-container">
      <ToolsText />
      <ToolsImg />
     </div>
    </div>
   </section>
  )
 }
}

export default Topics;