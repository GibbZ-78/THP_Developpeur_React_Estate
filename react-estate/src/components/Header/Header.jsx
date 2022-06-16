import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import About from '../About/About';
import Contact from '../Contact/Contact';
import { FaBuilding, FaHome, FaRegQuestionCircle, FaHouseUser, FaAt } from "react-icons/fa";
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import './Header.css';




const Header = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <header className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <FaBuilding />
                    <img alt='logo' src="https://i.imgur.com/LLxvYWN.png"
                    />
                    <i class='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            <FaHome />
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/about'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                            <FaRegQuestionCircle />
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/contact'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                            <FaAt />
                            Contact
                        </Link>
                    </li>

                    <li>
                        <Link
                            to='/sign'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}>
                            <FaHouseUser />
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </header>
    );
}

export default Header;