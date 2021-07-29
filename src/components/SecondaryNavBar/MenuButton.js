import React from "react";
import styled from "styled-components";

import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa'

const MenuButtonWrapper = styled.button`
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    

    color: #fff;

    font-size: 2rem;
    
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

function MenuButton({ open, handleClick }) {
    return !open ? (
        <MenuButtonWrapper onClick={handleClick}>
            <FaAngleDoubleLeft />
        </MenuButtonWrapper>
    ) : (
        <MenuButtonWrapper onClick={handleClick}>
            <FaAngleDoubleRight />
        </MenuButtonWrapper>
    );
}

export default MenuButton;
