import React, { Component } from 'react';


class Home extends Component {
 render() {
  return (
   <section className="introduction_Container">
    <div className="introduction_img">
     <img class="" src="img/introduction_img.svg" alt="Plants"></img>
    </div>
    <div class="introduction_text">
     <h1>Your garden,</h1><br></br>
     <h1>where you need it.</h1>
     <blockquote>
        <p>Organic seeds, ready for planting in your home.</p>
        <hr class="hr1"></hr>
     </blockquote>
     <div class="home_buttons">
      <a href="plants.html" class="btn" class="sub_btn" id="sub_btn">Plants</a>
        
      <a href="furniture.html" class="btn">Furniture</a> 
    </div>
    </div>
   </section>
  )
 }
}

export default Home;