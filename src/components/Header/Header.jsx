import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";

const Header = ({ showForm, changeTextAndColor }) => {
  return (
    <HeaderComp>
      <Heading>CRUD App</Heading>
      <Button
        onClick={showForm}
        color={changeTextAndColor ? "red" : "green"}
        text={changeTextAndColor ? "close" : "Add"}
      ></Button>
    </HeaderComp>
  );
};

const HeaderComp = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  font-family: "Josefin Sans", sans-serif;
`;

export default Header;
