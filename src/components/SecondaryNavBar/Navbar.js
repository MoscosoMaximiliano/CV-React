import React, { useState } from 'react';
import { HeaderWrapper, NavbarWrapper } from './NavbarElements.styled'
import { Link } from 'react-router-dom'


import MenuButton from './MenuButton'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <HeaderWrapper>
            <NavbarWrapper open={open}>
                <Link to="/" onClick={handleClick}>
                    About Me
                </Link>
                <Link to="/portfolio" onClick={handleClick}>
                    Portfolio
                </Link>
                <Link to="/contact" onClick={handleClick}>
                    Contact Me
                </Link>
            </NavbarWrapper>
            {/* <MenuButton open={open} handleClick={handleClick} /> */}
        </HeaderWrapper>
    );
}

export default Navbar;
