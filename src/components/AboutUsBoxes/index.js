import React from 'react';
import '../../style/aboutus.css';

const AboutUsBoxes= () => {
  return(
    <div className="mission-container">
      <h1>Our missions</h1>
      <div className="boxes-style">
        <h2>Quality</h2>
        <p>Our products have the essential quality you want. The materials are resistant and the plants are incredible.</p>
      </div>
      <div className="boxes-style">
        <h2>Great service</h2>
        <p>We managed to make customers continue to buy our products and our service is one of the points that helps us a lot.</p>
      </div>
      <div className="boxes-style">
        <h2>Delivery</h2>
        <p>We appreciate fast delivery but we also appreciate the delivery process. Our system is prepared to be always updating and 
          leaving the customer always informed about the delivery of the purchased product.</p>
      </div>
    </div>
  )
}

function AboutUsBox(){
  return(
  <section className="about-box">
    <div className="container">
      <AboutUsBoxes />
    </div>
  </section>
  );
};

export default AboutUsBox;