import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import titleIcon from "../assets/title-icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/VideosSection.css";

const VideosSection = () => {
    return (
        <section className="ulockd-blog new-ulockd_bgnew">
            <Container>
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <div className="ulockd-main-title">
                            <h2><span className="text-thm2" style={{ color: '#FEAEA3' }}>Some Spectacular Videos</span></h2>
                            <img src={titleIcon} alt="" />
                        </div>
                    </div>
                </div>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <div className="gallery-thumb">
                            <iframe
                                width="100%"
                                height="220"
                                src="https://www.youtube.com/embed/b3WuU-ME118?si=GovGSqSrT10Jkv5G"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="gallery-thumb">
                            <iframe
                                width="100%"
                                height="220"
                                src="https://www.youtube.com/embed/JtFGwpFwv9c?si=Fj-z9P3SAwittHkZ"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="gallery-thumb">
                            <iframe
                                width="100%"
                                height="220"
                                src="https://www.youtube.com/embed/v4HFFfsO4u4?si=nQ-n3ui4WxUDsYNX"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="gallery-thumb">
                            <iframe
                                width="100%"
                                height="220"
                                src="https://www.youtube.com/embed/_Z4UqvicMa4?si=tybbckvDXnE5UqKM"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="video_more">
                <a className="button">View More</a>
            </div>
        </section>
    );
};

export default VideosSection;