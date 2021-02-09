import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import {ButtonContainer} from './Button';

class Navbar extends Component {
  render() {
    return (
      < NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
     
        <Link to="/">
          <img src="/images/shop.jpg" alt="shop"  className="navbar-brand"/>
        </Link>
        <ul className="navbar-nav align-items-center">
        <li className="nav-item mr-5">
        <Link to="/" className="nav-link">
          home
        </Link>

        </li>
        <li className="nav-item mr-5">
        <Link to="/services" className="nav-link">
          service
        </Link>

        </li>
        <li className="nav-item mr-5">
        <Link to="/about" className="nav-link">
          about
        </Link>

        </li>
        <li className="nav-item mr-5">
        <Link to="/contact" className="nav-link">
          contact us
        </Link>

        </li>

        </ul>
        <Link to="/cart" className="ml-auto">
      <ButtonContainer>
      <span className="mr-2">

            <i className="fas fa-cart-plus"/>
      </span>
            my cart

      </ButtonContainer>
      

        </Link>
      </ NavWrapper>
    );
  }
}
const NavWrapper=styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize !important;
}
.navbar-brand{
    width:100px;
    border-radius:46%;
}
`


export default Navbar;
