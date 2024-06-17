import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import titleIcon from '../assets/title-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/VideosSection.css";

const VideosSection = () => {
    return (
        <section className="ulockd-blog new-ulockd_bgnew">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="text-center">
                        <div className="ulockd-main-title">
                            <h2><span className="text-thm2">Some Spectacular Videos</span></h2>
                            <img src={titleIcon} alt="title-bottom.png" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <div className="gallery-thumb">
                            <iframe
                                width="100%"
                                height="220"
                                src="https://www.youtube.com/embed/b3WuU-ME118"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="gallery-thumb">
                            <iframe
                                width="100%"
                                height="220"
                                src="https://youtu.be/NBRp2xY3EP4?si=WbOk4h3W3MtjURp3"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="gallery-thumb">
                            <iframe
                                width="100%"
                                height="220"
                                src="https://www.youtube.com/embed/v4HFFfsO4u4"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="gallery-thumb">
                            <iframe
                                width="100%"
                                height="220"
                                src="https://www.youtube.chttps://youtu.be/NBRp2xY3EP4?si=687NGf9OQITAXoCJ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="video_more">
                <a href="https://www.v3events.in/video" className="button">View More</a>
            </div>
        </section>
    );
};

export default VideosSection;
