import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from '../assets/Logo.jpeg';
import { Navbar, Container, Nav } from 'react-bootstrap';

function AppNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" style={{ marginLeft: '10px' }}>
                    <img
                        src={Logo}
                        width="70"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <div className="d-flex align-items-center ms-3" style={{ flexGrow: 1 }}>
                    <input
                        id="searchmainpage"
                        type="text"
                        placeholder="Search the Locations for events and more..."
                        style={{ paddingLeft: '10px', flexGrow: 1, width: '100%', maxWidth: '700px', marginLeft: '60px' }}
                        className="form-control"
                    />
                    <i className="fas fa-search" style={{ color: 'grey', marginLeft: '20px', alignSelf: 'center' }}></i>
                </div>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto me-4">
                        <Nav.Link className="px-3" href="#">Booked Events</Nav.Link>
                        <Nav.Link className="px-3" href="#">Create Events</Nav.Link>
                        <Nav.Link className="px-3" href="#">About Us</Nav.Link>
                        <Nav.Link className="px-3" href="#">Login</Nav.Link>
                        <Nav.Link className="px-3" href="#">SignUp</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;

