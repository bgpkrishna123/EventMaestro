import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import titleIcon from '../assets/title-icon.png';
import '../Styles/WelcomeSection.css';
import { Text } from '@chakra-ui/react';

const WelcomeSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <div className="con-title">
                    <Text as="h2" fontSize={['15px', '20px', '30px', '30px']} mt={5} >

                            Welcome to Event Maestro <span>-Best Wedding & Event Management Company</span>
                        </Text>
                        <h5 style={{textAlign:"center"}}>Event Maestro -Award Winning Wedding Planners & Event Management Company</h5>
                    </div>
                        <img style={{height:"25px" , width:"25px"}} src={titleIcon} alt="Best Event Management Company" />
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
