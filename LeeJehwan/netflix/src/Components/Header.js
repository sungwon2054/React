import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;
const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;
const Item = styled.li``;
const SLink = styled(Link)``;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Header>
    <List>
      <Item>
        <SLink to='/'>Movies</SLink>
      </Item>
      <Item>
        <SLink to='/tv'>Tv</SLink>
      </Item>
      <Item>
        <SLink to='/search'>Serach</SLink>
      </Item>
    </List>
  </Header>
);
