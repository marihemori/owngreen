import React, { Component } from 'react';
import './styles/footer.css';

const F_About = () => {
 return (
  <div class="f_about">
   <h3>Gardencraft</h3>
   <ul>
    <li><a href="#">What we care about</a></li>
    <li><a href="#">Careers</a></li>
    <li><a href="#">News</a></li>
   </ul>
   <div class="f_social">
    <a href="#"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <i href="#" class="far fa-envelope"></i>
   </div>
  </div>
 )
}

const F_Products = () => {
 return (
  <div class="f_products">
   <h4>Our products</h4>
   <ul>
    <li><a href="#">Seeds</a></li>
    <li><a href="#">Fertilizers</a></li>
    <li><a href="#">Tools</a></li>
    <li><a href="#">Furniture</a></li>
   </ul>
  </div>
 )
}

const F_Sale = () => {
 return (
  <div class="f_sale">
   <h4>On sale</h4>
   <ul>
    <li><a href="#">Prices</a></li>
    <li><a href="#">Benefits</a></li>
   </ul>
  </div>
 )
}

const F_Legal = () => {
 return (
  <div class="f_legal">
   <h4>Legal</h4>
   <ul>
    <li><a href="#">Conditions & Terms</a></li>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Cookies</a></li>
   </ul>
  </div>
 )
}

class Footer extends Component {
 render() {
  return (
   <footer>
    <div class="footer_container">
     <F_About />
     <F_Products />
     <F_Sale />
     <F_Legal />
    </div>
   </footer>

  )
 }
}

export default Footer;
