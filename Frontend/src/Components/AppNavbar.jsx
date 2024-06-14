import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/Logo.jpeg';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';

function AppNavbar() {
    return (
        <BootstrapNavbar bg="light" expand="lg">
            <Container fluid>
                <BootstrapNavbar.Brand href="#" className="ms-5">
                    <img
                        src={Logo}
                        width="70"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="navbarNav" />
                <BootstrapNavbar.Collapse id="navbarNav">
                    <Nav className="ms-auto me-4">
                        <Nav.Link className="px-3" href="#">Find Events</Nav.Link>
                        <Nav.Link className="px-3" href="#">Create Events</Nav.Link>
                        <Nav.Link className="px-3" href="/auth">Login</Nav.Link>
                        <Nav.Link className="px-3" href="/auth">Sign Up</Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default AppNavbar;
