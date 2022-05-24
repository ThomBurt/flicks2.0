import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import {
    Nav,
    NavContainer,
    NavLogo,
  //  Image,
    Icon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './Navbar.elements';

import './navbar.css';


import Dropdown from './Dropdown/Dropdown';

import Auth from "../../utils/auth";

//const logo = require('../Assets/img/icon-BLACK.png')
const title = require('../Assets/img/text-WHITE.png')

export const NavBar = () => {

    
    const [click, setClick] = useState(false);

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

 

    const handleClick = () => setClick(!click);
   // const closeMobileMenu = () => setClick(false);

    const showLoginOut = () => {
        if (Auth.loggedIn()) {
            return (
                <NavMenu onClick={handleClick} click={click}>

                <NavItem>
                <NavLinks to="/home" onClick={event =>  window.location.href='/'}>
                    Home
                </NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to="/movie" onClick={event =>  window.location.href='/movie'}>
                    Get Started
                </NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to="/history" onClick={event => window.location.href='/history'}>
                    History
                </NavLinks>
                </NavItem>

                {/* <NavItem>
                <NavLinks to="/profile" onClick={event => window.location.href='/my-profile'}>
                    Profile
                </NavLinks>
                </NavItem> */}

                <NavItem>
                <NavLinks to="/profile" onClick={event => window.location.href='/my-profile'}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}>
                    <img className='nav-profile-img' src="https://ucarecdn.com/98a2c335-a1af-4262-bf9c-c8f76898f5f6/Untitleddesign.png" alt="friends"></img>
                    {dropdown && <Dropdown />}
                </NavLinks>
                </NavItem>
            
                <NavItem>
                <NavLinks to="/" onClick={() => Auth.logout()}>
                    Logout
                </NavLinks>
                </NavItem>
            </NavMenu>

            );
        } else {
            return (
            <NavMenu onClick={handleClick} click={click}>

                <NavItem>
                <NavLinks to="/home" onClick={event =>  window.location.href='/'}>
                    Home
                </NavLinks>
                </NavItem>
            
                <NavItem>
                <NavLinks to="/login" onClick={event => window.location.href='/login'}>
                    Log in / Signup
                </NavLinks>
                </NavItem>
            </NavMenu>
            );
        }
    }

    return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavContainer>
                    <NavLogo to="/" onClick={event =>  window.location.href='/home'}>
                        {/* <Image src={logo} /> */}
                        <Icon src={title} />
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    {showLoginOut()}
                    {/* <NavMenu onClick={handleClick} click={click}>

                    <NavItem>
                    <NavLinks to="/home" onClick={event =>  window.location.href='/'}>
                        Home
                    </NavLinks>
                    </NavItem>

                    <NavItem>
                    <NavLinks to="/movie" onClick={event =>  window.location.href='/movie'}>
                        Get Started
                    </NavLinks>
                    </NavItem>

                    <NavItem>
                    <NavLinks to="/history" onClick={event => window.location.href='/history'}>
                        History
                    </NavLinks>
                    </NavItem>
                
                    <NavItem>
                    <NavLinks to="/login" onClick={event => window.location.href='/login'}>
                        Login/Signup
                    </NavLinks>
                    </NavItem>
                </NavMenu> */}
                </NavContainer>
            </Nav>
        </IconContext.Provider>
    </>    
    );
};