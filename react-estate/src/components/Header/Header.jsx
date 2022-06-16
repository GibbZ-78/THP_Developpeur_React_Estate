import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import About from '../About/About';
import Contact from '../Contact/Contact';
import { FaBuilding, FaHome, FaRegQuestionCircle, FaHouseUser, FaAt, FaDoorOpen, FaFileSignature, FaDoorClosed, FaPlusSquare } from "react-icons/fa";

const Header = () => {
    return (
        <header className='bg-dark sticky-top'>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/"><FaBuilding /> REACT-ESTATE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"><FaHome /> Home</Nav.Link>
                            <Nav.Link href="/about"><FaRegQuestionCircle /> About</Nav.Link>
                            <Nav.Link href="/contact"><FaAt /> Contact</Nav.Link>
                            <Nav.Link href="/addproperty"><FaPlusSquare /> Add your ad</Nav.Link>
                            <FaHouseUser />
                            <NavDropdown title="Connexion" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/login"><FaDoorOpen/> Log In</NavDropdown.Item>
                                <NavDropdown.Item href="/signup"><FaFileSignature/> Sign Up</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logout"><FaDoorClosed/> Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;