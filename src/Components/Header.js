import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [open, setopen] = useState(false);

  return (
    <>
      <Container>
        <a>
          <img src="/images/logo.svg"></img>
        </a>
        <Menu>
          <p>
            <a href="">Model S</a>
          </p>
          <p>
            <a href="">Model 3</a>
          </p>
          <p>
            <a href="">Model X</a>
          </p>
          <p>
            <a href="">Model Y</a>
          </p>
          <p>
            <a href="">Solar Panels</a>
          </p>
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <CustomMenuIcon
            onClick={() => {
              setopen(true);
            }}
          />
        </RightMenu>
        <SideBar show={open}>
          <CloseWrap>
            <CloseIcon
              onClick={() => {
                setopen(false);
              }}
            />
          </CloseWrap>

          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadaster</a>
          </li>
          <li>
            <a href="#">Test Drive</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">PowerWall</a>
          </li>
          <li>
            <a href="#">Find Us</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </SideBar>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1;
  font-size: 15px;

  img {
    width: 120px;
    height: 20px;
    margin-left: 30px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenuIcon = styled(FaBars)`
  font-size: 25px;
  margin-top: -2px;
`;

const SideBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  height: 100%;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  transition: 0.3s ease-in-out;

  li {
    padding: 15px 0;
    text-align: left;
    margin-left: 20px;
    a {
      font-weight: 500;
    }
  }
  li:hover {
    color: red;
  }
`;

const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CloseIcon = styled(IoMdClose)`
  font-size: 30px;
  right: 0;
`;
