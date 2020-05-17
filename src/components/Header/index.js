import React, { Component } from 'react';
import '../../style/header.css';
import ImgLogo from '../../assets/gardencraft.png';
import ImgCart from '../../assets/cart.png';

const Logo = () => {
  return (
    <div className="logo-gardencraft">
      <img class="imglogo" src={ImgLogo} alt="Logo of the Gardencraft"></img>
    </div>
  );
}

const Menu = () => {
  return (
    <div className="header-menu">
      <nav>
       <ul>
        <li><a href="ourproducts.html">Our products</a></li>
        <li className="search">
          <input type="search" class="searchbox" placeholder="Search seeds ..."></input>
          <button type="submit" class="searchbtn"><i class="fas fa-search"></i></button>
        </li>
        <li><img className="header-cart" src={ImgCart} alt="Image of cart"></img></li>
      </ul>
      </nav>
      <div class="menu-toggle">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
      </div>
    </div>
  )
}

const HeaderCont = () => {
  return (
    <header>
      <div className="header-container">
        <Logo />
        <Menu />
      </div>
    </header>
  )
}

class Header extends Component {
  render() {
    return (
      <HeaderCont />
    )
  }
}

export default Header;