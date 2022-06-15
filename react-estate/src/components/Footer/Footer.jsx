import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FooterComponent = () => {
    return (
        <footer className="bg-dark">
            <Container >
                <Row >
                    <Col className="text-center text-light py-3">
                        Copyright &copy; React Estate
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterComponent