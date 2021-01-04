import React from "react";

import * as S from "./styled";

export default function Container(props) {
  return (
  <S.ContainerWrapper>{props.children}</S.ContainerWrapper>
  );
}