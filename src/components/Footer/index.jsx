import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function FooterComponent(){
    return(
        <footer>
            <Container>
                <Row>
                    <Col className="text-center">Todos los derechos reservados &copy; {new Date().getFullYear()}</Col>
                </Row>
            </Container>
        </footer>
    )
}