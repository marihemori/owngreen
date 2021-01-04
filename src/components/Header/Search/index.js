import React, { Fragment } from 'react';

import * as S from "./styled";

export default function Search() {
  return (
     <Fragment>
      <S.SearchInput>
        <S.Input />
        <S.Button />
      </S.SearchInput>
     </Fragment>
  );
}