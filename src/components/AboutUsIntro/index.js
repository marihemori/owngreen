import React from 'react';
import '../../style/aboutus.css';
import AboutImg from '../../assets/img/aboutus.png';

const AboutUsText = () => {
  return (
   <div className="aboutus-text">
    <h1>About us</h1>
    <div className="phrases">
      <p>We are a company that was created in 2019. We are located in Brazil in São Paulo.</p>
      <p>We support NGOs that fight against deforestation and illegal hunting of animals.</p>
      <p>We now know that it is very important to use Earth's resources wisely. We hope that this kind of thinking will spread to a lot of people.</p>
      <p>
        We care about the plant life in cities. If you care too, join us.
      </p>
    </div>
    <div>
      <button className="join-button">Join</button>
    </div>
   </div>
  )
 }

 const AboutUsImg= () => {
  return(
    <div>
      <img className="aboutusimg" src={AboutImg}></img>
    </div>
  )
}

function AboutUsIntro(){
  return(
  <section className="about-intro">
    <div className="container">
      <AboutUsText />
      <AboutUsImg />
    </div>
  </section>
  );
};

export default AboutUsIntro;