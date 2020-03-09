import React, { Component } from 'react';
import './styles/home.css'
import SeedsImage from './images/seeds_img.png'

const SeedsText = () => {
 return (
  <div class="seeds_text">
   <h1>Seeds</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Quisque sit amet orci a arcu.</p>
   <a href="" class="see_more">See more</a>
  </div>
 )
}

const SeedsImg = () => {
 return (
  <div class="seeds_img">
   <img class="" src={SeedsImage} alt="Seeds"></img>
  </div>
 )
}

class Seeds extends Component {
 render() {
  return (
   <section className="seeds_container">
    <SeedsText />
    <SeedsImg />
   </section>
  )
 }
}

export default Seeds;