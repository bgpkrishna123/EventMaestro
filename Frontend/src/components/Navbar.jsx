import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/Logo.jpeg';
import { Navbar, Container, Nav } from 'react-bootstrap';

function AppNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className="ms-5">
                    <img
                        src={Logo}
                        width="70"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto me-4">
                        <Nav.Link className="px-3" href="#">Find Events</Nav.Link>
                        <Nav.Link className="px-3" href="#">Create Events</Nav.Link>
                        <Nav.Link className="px-3" href="#">Login</Nav.Link>
                        <Nav.Link className="px-3" href="#">SignUp</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
