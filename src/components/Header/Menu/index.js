import React from 'react';

import ImgCart from '../../../assets/img/cart.png';
import SearchBox from '../Search';

import * as S from "./styled";

export default function Menu({ open }) {
  return (
    <S.Nav open={open}>
      <ul>
        <li>
          <S.StyledLink activeClassName="is-active" to="/" exact>
            Home
          </S.StyledLink>
        </li>
        <li>
          <S.StyledLink activeClassName="is-active" to="/about-us" exact>
            About us
          </S.StyledLink>
        </li>
        <li>
          <S.StyledLink activeClassName="is-active" to="/our-products" exact>
            Our products
          </S.StyledLink>
        </li>
        <SearchBox />
        <li>
          <S.StyledLink activeClassName="is-active" to="/cart" exact>
            <S.Cart src={ImgCart} />
          </S.StyledLink>
        </li>
        
      </ul>
    </S.Nav>
  );
}