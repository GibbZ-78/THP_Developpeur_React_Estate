import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Footer from './components/FooterComponent'

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import logo from './logo.svg';
import './App.css';



const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <h1> Header</h1>
      </main>

      <Footer />
    </div >
  )
}

export default App;
