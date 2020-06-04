import React, { Component } from 'react';
import './styles.css';
import '../../style/responsive.css';

const FooterAbout = () => {
  return (
    <div className="f-about">
      <h3>Gardencraft</h3>
      <ul>
        <li><a href="#">What we care about</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">News</a></li>
      </ul>
      <div class="f-social">
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <i href="#" class="far fa-envelope"></i>
      </div>
    </div>
  )
}

const FooterProducts = () => {
  return (
    <div className="f-products">
      <h4>Our products</h4>
      <ul>
        <li><a href="#">Seeds</a></li>
        <li><a href="#">Fertilizers</a></li>
        <li><a href="#">Tools</a></li>
      </ul>
    </div>
  )
}

const FooterSale = () => {
  return (
    <div className="f-sale">
      <h4>On sale</h4>
      <ul>
        <li><a href="#">Prices</a></li>
        <li><a href="#">Benefits</a></li>
      </ul>
    </div>
  )
}

const FooterLegal = () => {
  return (
    <div className="f-legal">
      <h4>Legal</h4>
      <ul>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Cookies</a></li>
      </ul>
    </div>
  )
}

const FooterMadeBy = () => {
  return (
    <div className="made-by">
      Made with <i class="fa fa-heart pulse"></i>
   by <a href="https://github.com/marianamorais" target="_blank"> Mariana Morais</a>
    </div>
  )
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <FooterAbout />
          <FooterProducts />
          <FooterSale />
          <FooterLegal />
        </div>
        <div className="made-by-container">
          <FooterMadeBy />
        </div>
      </footer>
    )
  }
}

export default Footer;
