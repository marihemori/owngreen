import React from "react";
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

import Logo from "../Logo/index";
import Burger from '../Burger/index';

import * as S from "./styled";

export default function Navbar() {
  return (
      <S.Header>
        <Logo to="/" exact/>
        <Burger />
      </S.Header>
  );
}