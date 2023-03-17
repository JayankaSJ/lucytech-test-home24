import React, { FC } from "react";
import styled from "styled-components";

type HeaderProps = object;

const HeaderContainer = styled.div`
  grid-area: header;
  background-color: lightblue;

  input {
    float: right;
  }
`;

const Header: FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <strong>home24</strong>
      <input placeholder={"Search"} />
    </HeaderContainer>
  );
};

export default Header;
