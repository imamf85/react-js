import React from 'react';
import './Header.css';
import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
    <div>
        <Navbar >
            <Container>
                <div className="brand"></div>
                <Nav className="fw-bold">
                    <Nav.Link href="#OurServices">Our Services</Nav.Link>
                    <Nav.Link href="#WhyUs">Why Us</Nav.Link>
                    <Nav.Link href="#Testimony">Testimonial</Nav.Link>
                    <Nav.Link href="#FAQ">FAQ</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>


    )
}

export default NavigationBar;