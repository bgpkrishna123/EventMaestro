import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/InternationalWeddingPlanner.css'; // Ensure this is your CSS file path
import globeImage from '../assets/globe-1.jpg'; // Adjust the path as necessary
import markerIcon from '../assets/marker.png';
import waiterIcon from '../assets/waiter.png';
import dishIcon from '../assets/dish.png';
import videoCameraIcon from '../assets/video-camera.png';
import photoCameraIcon from '../assets/photo-camera.png';
import hospitalityIcon from '../assets/hospitality.png';
import musicalNoteIcon from '../assets/musical-note.png';
import coupleIcon from '../assets/couple.png';
import singerIcon from '../assets/singer.png';
import airplaneIcon from '../assets/airplane.png';

const services = [
    {
        icon: markerIcon,
        title: "Destination Wedding",
    },
    {
        icon: waiterIcon,
        title: "Corporate Event",
    },
    {
        icon: dishIcon,
        title: "Catering",
    },
    {
        icon: videoCameraIcon,
        title: "Entertainment",
    },
    {
        icon: photoCameraIcon,
        title: "Wedding Photographers",
    },
    {
        icon: hospitalityIcon,
        title: "Hospitality",
    },
    {
        icon: musicalNoteIcon,
        title: "Artist",
    },
    {
        icon: coupleIcon,
        title: "Wedding Planning",
    },
    {
        icon: singerIcon,
        title: "Bollywood Singers",
    },
    {
        icon: airplaneIcon,
        title: "Luxury Wedding",
    }
];

const InternationalWeddingPlanner = () => {
    return (
        <section id="other" className="scrollsections">
            <div className="induse-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-5">
                            <div className="induse-sec-lft" >
                                <div className="globe-img" >
                                    <img className="image" id="circle" src={globeImage} alt="Globe" />
                                    <div className="globe-info">
                                        <p>International Wedding Planner</p>
                                        <h2>Events Maestro</h2>
                                        <p>
                                            <span>Thailand | Dubai| Malaysia <br />
                                                Bali | Turkey | Kathmandu | Baku</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-7">
                            <div className="induse-sec-rgt">
                                <div className="indus-brief device-mode">
                                    <h2 style={{ color: '#FEAEA3' }}>International Wedding Planner</h2>
                                    <p>Events Maestro and Entertainments Pvt Ltd specialises in planning lavish and flawless events. Our team has qualified and experienced event planners who get counted as the finest wedding designers and event organisers in Delhi and Gurgaon.</p>
                                </div>
                                <div className="confetti-container">
                                    {services.map((service, index) => (
                                        <div key={index} className="confetti-button">
                                            <a href={service.href} className="d-block text-center">
                                                <div className="img-icon" >
                                                    <img src={service.icon} alt={service.title} className="img-icon" />
                                                </div>
                                                <span>{service.title}</span>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InternationalWeddingPlanner;
