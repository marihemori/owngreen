import React, { useState } from 'react';

import Menu from '../Menu';

import * as S from './styled';

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <S.Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.Burger>
      <Menu open={open} />
    </>
  );
}