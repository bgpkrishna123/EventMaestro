import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import v3_f1 from '../assets/v3_f1.jpg';
import v3_f2 from '../assets/v3_f2.jpg';
import v3_f3 from '../assets/v3_f3.jpg';
import slider1 from '../assets/slider1.jpg';
import './AppCarousel.css';

function Carousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} id="myCarousel">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={v3_f1}
                    alt="Best Event Planner in India"
                />
                <Carousel.Caption className="col-md-6 col-xs-12 animate__animated animate__bounceInDown animate__delay-2s homepage_bannerfrm">
                    <h2>Best Event Planner in India</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={v3_f2}
                    alt="Destination Wedding Planner"
                />
                <Carousel.Caption className="col-md-6 col-xs-12 animate__animated animate__bounceInLeft animate__delay-2s homepage_bannerfrm">
                    <h2>Destination Wedding Planner</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={v3_f3}
                    alt=""
                />
                {/* <Carousel.Caption className="col-md-6 col-xs-12 animate__animated animate__bounceInDown animate__delay-2s homepage_bannerfrm">
                    <h2></h2>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="Award-Winning Event Organizer"
                />
                <Carousel.Caption className="col-md-6 col-xs-12 animate__animated animate__bounceInUp animate__delay-2s homepage_bannerfrm">
                    <h2>Award-Winning Event Organizer</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousel;
