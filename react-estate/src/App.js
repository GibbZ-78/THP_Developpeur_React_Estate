import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Nav, NavDropdown } from 'react-bootstrap';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header >
          <Navbar bg="dark" variant="dark"
            sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
              <img src={logo} width="40px" height="40px" />{' '}
              Logo
            </Navbar.Brand>

            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
              <Nav>
                <NavDropdown title="Products">
                  <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
                  <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
                  <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"/Blog"}>Blog</Nav.Link>
                <Nav.Link as={Link} to={"/About"}>About Us</Nav.Link>
                <Nav.Link as={Link} to={"/Contact"}>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>
          <div className="content">
            This is a content.
          </div>
        </header>
      </div>
      <div>
        {/*  <Routes>
          <Route path="/blog">
            <blog />
          </Route>
          <Route path="/about">
            <about />
          </Route>
          <Route path="/contact">
            <contact />
          </Route>
        </Routes> */}
      </div>

    </Router>
  );
}

export default App;
