import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import About from '../About/About';
import Contact from '../Contact/Contact';
import { FaBuilding, FaHome, FaRegQuestionCircle, FaHouseUser, FaAt, FaDoorOpen, FaFileSignature, FaDoorClosed, FaPlusSquare } from "react-icons/fa";
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
                    <img className="logo" alt='logo' src="https://i.imgur.com/LLxvYWN.png" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
                    <li className='nav-item'>
                        <Link
                            to='/addproperty'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                            <FaPlusSquare />
                            Add your ad
                        </Link>
                    </li>
                    <nav className="px-3" >
                        <FaHouseUser />
                        <NavDropdown title="Connexion" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/login"><FaDoorOpen /> Log In</NavDropdown.Item>
                            <NavDropdown.Item href="/signup"><FaFileSignature /> Sign Up</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/logout"><FaDoorClosed /> Logout</NavDropdown.Item>
                        </NavDropdown>
                    </nav>
                </ul>

            </div>
        </header>
    );
}

export default Header;


