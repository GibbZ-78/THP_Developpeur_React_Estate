import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import About from '../About/About';
import Contact from '../Contact/Contact';
import { FaBuilding, FaHome, FaRegQuestionCircle, FaHouseUser, FaAt} from "react-icons/fa";

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
                            <Nav.Link href="#"><FaHouseUser /> Sign In</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;