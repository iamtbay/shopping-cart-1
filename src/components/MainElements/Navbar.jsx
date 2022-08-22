import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Wrapper>
      <h3>Tyrcae</h3>
      <ul className="navbar">
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2% 2%;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    li {
      padding: 0 2%;
    }
  }
`;

export default Navbar;
