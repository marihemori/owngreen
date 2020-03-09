import React, { Component } from 'react';
import './styles/home.css'
import ToolsImage from './images/tools_img.png'

const ToolsText = () => {
 return (
  <div class="tools_text">
   <h1>Tools</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Quisque sit amet orci a arcu.</p>
   <a href="" class="see_more">See more</a>
  </div>
 )
}

const ToolsImg = () => {
 return (
  <div class="tools_img">
   <img class="" src={ToolsImage} alt="Tools"></img>
  </div>
 )
}

class Tools extends Component {
 render() {
  return (
   <section className="tools_container">
    <ToolsText />
    <ToolsImg />
   </section>
  )
 }
}

export default Tools;