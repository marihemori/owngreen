import React, { Component } from 'react';
import './styles.css';
import ImgLogo from '../../assets/gardencraft.png';
import ImgCart from '../../assets/cart.png';

import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo-gardencraft">
      <Link to="/">
        <a>
          <img className="imglogo" src={ImgLogo} alt="Logo of the Gardencraft"></img>
        </a>
      </Link>
      
    </div>
  );
};

const Menu = () => {
  return (
    <div className="header-menu">
      <nav>
        <ul>
          <li><a href="products">Our products</a></li>
          <li className="search">
            <input type="search" class="searchbox" placeholder="Search seeds ..."></input>
            <button type="submit" class="searchbtn"><i className="fas fa-search"></i></button>
          </li>
          <li><img className="header-cart" src={ImgCart} alt="Image of cart"></img></li>
        </ul>
      </nav>
      <div className="menu-toggle">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
    </div>
  );
};

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <Logo />
          <Menu />
        </div>
      </header>
    );
  };
};

export default Header;