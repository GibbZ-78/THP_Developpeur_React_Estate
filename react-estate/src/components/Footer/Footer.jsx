import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark fixed-bottom">
      <Container>
        <Row>
          <Col className="text-center text-light py-3">
            &copy; 2022 Damian, Jean-Baptiste & Loïs for REACT-ESTATE
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;