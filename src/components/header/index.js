import React from 'react'
import logo from "../../assets/nwwLogo-s.svg";
import styled from "styled-components";
import { useState } from "react";
const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;
  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 4rem;
  height: auto;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
@media only screen and (max-width: 62rem){
  width: 3rem;
}
`;
const Nav = styled.nav`
width: 25rem;
max-width: 40rem;
display: flex;
align-iems: center;
justify-content: space-between;
@media only screen and (max-width: 48rem){
    display: none;
}
a{
    font-weight: 600;
    color: var(--white);
    line-height: 1.5;
    &::after{
        content:"";
        display: block;
        height: 3px;
        width: 3px;
        background: transparent;
        transition: width 0.5s;
        
    }
    &:not(:last-child):hover::after{
        width: 100%;
        background: var(--purple);

    }

}
`;
const Button = styled.button`
background-color: var(--purple);
padding: 0.5rem 1rem;
border-radius: 20px;
color: var(--white);
font-weight: 600;
cursor: pointer;
transition: all 0.2s;
&:hover{
    transform: scale(1.1);

}
&:focus{
    transform: scale(0.9);
}
`;
const HandburgerBtn = styled.button`
position: relative;
background-color: transparent;
width: 2rem;
height: 2px;
margin-top: 0rem;
transition: all 0.3s;
cursor: pointer;
display: none;
@media only screen and (max-width: 48rem){
    display: inline-block;
}
&::before,
&::after {
  content: "";
  background-color: var(--white);
  width: 2rem;
  height: 2px;
  display: inline-block;
  position: absolute;
  left: 0;
  cursor: pointer;

  transition: all 0.3s;
}
&::before {
  top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
  transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
}
&::after {
  top: ${(props) => (props.clicked ? "0" : "0.5rem")};
  transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
}
`;
const MobileMenu = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2rem 0;
position: absolute;
top: 100%;
left: 0;
right: 0;
opacity: ${(props) => (props.clicked ? "1" : 0)};
visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
transition: all 0.5s;
z-index: -10;
background: rgba(53, 53, 63,0.95);
border-radius: 20px;
margin: 0.5rem;
overflow-x: hidden;
a {
  color: var(--white);
  font-weight: 600;
  font-size: 1.5rem;
  margin: 1.5rem;
  cursor: pointer;
}
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <Headers>
      <Logo>
        <img src={logo} alt="new world wide" />
        <h3>New Worldwide</h3>
      </Logo>
      <Nav>
        <a href="#home">Home</a>
        <a href="#About">About</a>
        <a href="#services">Services</a>
        <a href="#contact" onClick={() => { }}>
          <Button>Contact Us</Button>
        </a>
      </Nav>
      <HandburgerBtn onClick={() => handleClick()} clicked={click}>
        <span />
      </HandburgerBtn>
      <MobileMenu clicked={click}>
        <a href="#home" onClick={() => handleClick()}>Home</a>
        <a href="#About" onClick={() => handleClick()}>About</a>
        <a href="#services" onClick={() => handleClick()}>Services</a>
        <a href="#contact" onClick={() => handleClick()}>
          <Button>Contact Us</Button>
        </a>
      </MobileMenu>
    </Headers>
  );
};
export default Header;