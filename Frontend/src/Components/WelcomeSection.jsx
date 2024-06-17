import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import titleIcon from '../assets/title-icon.png';
import '../Styles/WelcomeSection.css';

const WelcomeSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <div class="con-title">
                        <h2>
                            Welcome to Event Maestro <span>-Best Wedding & Event Management Company</span>
                        </h2>
                        <h5>Event Maestro -Award Winning Wedding Planners & Event Management Company</h5>
                        <img src={titleIcon} alt="Best Event Management Company" />
                    </div>

                </Row>
                <Row className="ulockd-mrgn1225">
                    <Col xs={6} sm={6} md={3}>
                        <div className="ulockd-ffact-one text-center">
                            <p>Experiences</p>
                            <div className="timer">20 +</div>

                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={3}>
                        <div className="ulockd-ffact-one text-center">
                            <p>Corporate Events</p>
                            <div className="timer">300 +</div>

                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={3}>
                        <div className="ulockd-ffact-one text-center">
                            <p>Wedding</p>
                            <div className="timer">400 +</div>

                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={3}>
                        <div className="ulockd-ffact-one text-center">
                            <p>Musical Concerts</p>
                            <div className="timer">200  +</div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WelcomeSection;
