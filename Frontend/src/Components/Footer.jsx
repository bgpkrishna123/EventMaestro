import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faDribbble, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/Logo.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Logo = () => {
    return (
        <img
            src={logo}
            style={{ height: "70px" }}
            alt="Logo"
        />
    );
};

const ListHeader = ({ children }) => {
    return (
        <h5 style={{ fontWeight: '500', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{children}</h5>
    );
};

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#FFF1ED', color: 'Black' }}>
            <Container className="py-5">
                <Row>
                    {/* Product */}
                    <Col xs={6} sm={6} md={3}>
                        <ListHeader>Product</ListHeader>
                        <ul className="list-unstyled">
                            <li><a style={{ color: 'black' }} href="#">Overview</a></li>
                            <li>
                                <div className="d-flex align-items-center">
                                    <a style={{ color: 'black' }} className="me-2" href="#">Features</a>
                                    <span className="badge bg-success">New</span>
                                </div>
                            </li>
                            <li><a style={{ color: 'black' }} href="#">Tutorials</a></li>
                            <li><a style={{ color: 'black' }} href="#">Pricing</a></li>
                            <li><a style={{ color: 'black' }} href="#">Releases</a></li>
                        </ul>
                    </Col>
                    {/* Company */}
                    <Col xs={6} sm={6} md={3}>
                        <ListHeader>Company</ListHeader>
                        <ul className="list-unstyled">
                            <li><a style={{ color: 'black' }} href="#">About Us</a></li>
                            <li><a style={{ color: 'black' }} href="#">Press</a></li>
                            <li><a style={{ color: 'black' }} href="#">Careers</a></li>
                            <li><a style={{ color: 'black' }} href="#">Contact Us</a></li>
                            <li><a style={{ color: 'black' }} href="#">Partners</a></li>
                        </ul>
                    </Col>
                    {/* Legal */}
                    <Col xs={6} sm={6} md={3}>
                        <ListHeader>Legal</ListHeader>
                        <ul className="list-unstyled">
                            <li><a style={{ color: 'black' }} href="#">Cookies Policy</a></li>
                            <li><a style={{ color: 'black' }} href="#">Privacy Policy</a></li>
                            <li><a style={{ color: 'black' }} href="#">Terms of Service</a></li>
                            <li><a style={{ color: 'black' }} href="#">Law Enforcement</a></li>
                            <li><a style={{ color: 'black' }} href="#">Status</a></li>
                        </ul>
                    </Col>
                    {/* Follow Us */}
                    <Col xs={6} sm={6} md={3}>
                        <ListHeader>Follow Us</ListHeader>
                        <div className="d-flex flex-column">
                            <a style={{ color: 'black' }} className="mb-2 d-flex align-items-center" href="#">
                                <FontAwesomeIcon icon={faFacebookF} />
                                <span className="ms-2">Facebook</span>
                            </a>
                            <a style={{ color: 'black' }} className="mb-2 d-flex align-items-center" href="#">
                                <FontAwesomeIcon icon={faTwitter} />
                                <span className="ms-2">Twitter</span>
                            </a>
                            <a style={{ color: 'black' }} className="mb-2 d-flex align-items-center" href="#">
                                <FontAwesomeIcon icon={faDribbble} />
                                <span className="ms-2">Dribbble</span>
                            </a>
                            <a style={{ color: 'black' }} className="mb-2 d-flex align-items-center" href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                                <span className="ms-2">Instagram</span>
                            </a>
                            <a style={{ color: 'black' }} className="mb-2 d-flex align-items-center" href="#">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                                <span className="ms-2">LinkedIn</span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="py-5" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <Row className="justify-content-center">
                    <Col xs="auto" className="text-center">
                        <Logo />
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col xs="auto">
                        <p style={{ fontSize: '0.875rem', textAlign: 'center' }}>© 2024 Event Maestro. All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
