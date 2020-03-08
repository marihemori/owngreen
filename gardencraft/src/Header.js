import React, { Component } from 'react';
import './styles/header.css'
import ImgLogo from './images/gardencraft.png'

const Logo = () => {
 return (
   <div className = "logo">
     <img class="imglogo" src={ImgLogo} alt="Logo of the Gardencraft"></img>
   </div>
 );
}

const Menu = () => {
  return (
    <div className="header_menu">
    <ul>
     <li><a href="aboutus.html">About us</a></li>
      <li><a href="ourproducts.html">Our products</a></li>
      <li><a href="onsale.html">On sale</a></li>
      <li>
        <input type="text" class="searchbox" placeholder="Search seeds ..."></input>
        <button type="submit" class="searchbtn"><i class="fas fa-search"></i></button>
      </li>
    </ul>
    </div>
  )
}

class Header extends Component {
 render() {
  return (
   <header>
    <div className="header_container">
      <Logo />
      <Menu />
    </div>
   </header>
  )
 }
}

export default Header;