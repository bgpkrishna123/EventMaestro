import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/Logo.jpeg';
import '../Components/AppH.css';

const AppNavbar = () => {
    return (
        <header className="header-nav">
            <Navbar collapseOnSelect expand="lg" variant="light" fixed="top" style={{ backgroundColor: '#FFF1ED' }}>
                <Navbar.Brand className="ml-3">
                    <img src={logo} className="logo logo-scrolled" alt="Logo" style={{ width: '100px', height: 'auto', marginLeft: '20px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about-us">About Us</Nav.Link>
                        <NavDropdown title="What We Do" id="what-we-do-dropdown">
                            <NavDropdown.Item href="#">Exclusive Wedding Deals</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/beach-wedding">Beach Wedding</NavDropdown.Item>
                            <NavDropdown.Item href="/royal-wedding">Royal Wedding</NavDropdown.Item>
                            <NavDropdown.Item href="/cruise-wedding">Cruise Wedding</NavDropdown.Item>
                            <NavDropdown.Item href="/desert-wedding">Desert Wedding</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Wedding Services" id="wedding-services-dropdown">
                            <NavDropdown.Item href="/wedding-decor">Wedding Decor</NavDropdown.Item>
                            <NavDropdown.Item href="/wedding-planners">Wedding Planners</NavDropdown.Item>
                            <NavDropdown.Item href="#">Venue Selection</NavDropdown.Item>
                            <NavDropdown.Item href="/hospitality">Hospitality</NavDropdown.Item>
                            <NavDropdown.Item href="/catering-services">Catering</NavDropdown.Item>
                            <NavDropdown.Item href="/entertainment">Entertainment</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/corporate-events">Corporate Events</Nav.Link>
                        <NavDropdown title="Wedding Destination" id="wedding-destination-dropdown">
                            <NavDropdown.Item href="#">Indian</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/destination-wedding-in-agra">Agra</NavDropdown.Item>
                            <NavDropdown.Item href="/destination-wedding-in-ahmedabad">Ahmedabad</NavDropdown.Item>
                            <NavDropdown.Item href="/destination-wedding-in-jaipur">Jaipur</NavDropdown.Item>
                            <NavDropdown.Item href="/destination-wedding-in-goa">Goa</NavDropdown.Item>
                            <NavDropdown.Item href="#">International</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/international-destination-wedding-in-antalya">Antalya</NavDropdown.Item>
                            <NavDropdown.Item href="/international-destination-wedding-in-australia">Australia</NavDropdown.Item>
                            <NavDropdown.Item href="/international-destination-wedding-in-bali">Bali</NavDropdown.Item>
                            <NavDropdown.Item href="/international-destination-wedding-in-dubai">Dubai</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Memories" id="memories-dropdown">
                            <NavDropdown.Item href="/events_gallery">Events</NavDropdown.Item>
                            <NavDropdown.Item href="/wedding-gallery">Wedding Gallery</NavDropdown.Item>
                            <NavDropdown.Item href="/gallery">Photo Gallery</NavDropdown.Item>
                            <NavDropdown.Item href="/video">Video Gallery</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/contact-us">Reach Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default AppNavbar;
