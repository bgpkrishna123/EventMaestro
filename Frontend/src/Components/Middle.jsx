import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Middle.css';
import corporateImage from '../assets/corporate.png';
import seminarImage from '../assets/seminar.png';
import brandImage from '../assets/brand.png';
import meetingImage from '../assets/meeting.png';
import managementImage from '../assets/management.png';
import artistImage from '../assets/artist.png';
import fashionImage from '../assets/fashion.png';
import virtualImage from '../assets/virtual.png';
import titleIcon from '../assets/title-icon.png';

const services = [
    {
        image: corporateImage,
        alt: "Corporate",
        title: "Corporate Event Management",
        description: "Event Maestro can be your one-stop event management provider for corporate events. We offer comprehensive corporate event management and creative services, tailor-made precisely according to your needs.",
        duration: "1.3s"
    },
    {
        image: seminarImage,
        alt: "Seminar",
        title: "Seminars and Conferences",
        description: "We are one of the best event management companies  for organising seminars and conferences. We are committed to serving the varied needs of the businesses and delivering the best outcomes meeting their expectations.",
        duration: "1.3s"
    },
    {
        image: brandImage,
        alt: "Brand",
        title: "Brand Promotion",
        description: "Seeking a smart event management company for your brand promotion related needs? Event Maestro is the perfect choice to fulfil such requirements efficiently.  We have experienced professionals to deliver such services.",
        duration: "1.6s"
    },
    {
        image: meetingImage,
        alt: "Meeting",
        title: "MICE",
        description: "Event Maestro is one of the most sought after event management companies for organising Meetings, Incentives, Conferences & Exhibitions (MICE) in Delhi NCR. Connect with us now for impeccable MICE management services.",
        duration: "1.9s"
    },
    {
        image: managementImage,
        alt: "Management",
        title: "Exhibition Management",
        description: "Make your exhibitions appealing and highly engaging platforms for your target audience with Event Maestro. Let us boost your business in a smart and efficient manner with our expertise.",
        duration: "1.6s"
    },
    {
        image: artistImage,
        alt: "Bollywood Singers",
        title: "Bollywood Artists",
        description: "Event Maestro is a well-reputed event management company for planning events involving Bollywood artists. We have numerous celebrities with us ready for collaboration for private events.",
        duration: "1.9s"
    },
    {
        image: fashionImage,
        alt: "Fashion Shows",
        title: "Fashion Shows",
        description: "We have an incredible team of experienced and young talent who can glam up fashion shows beyond expectations. Connect with us now if you are looking for the best professionals for organising fashion shows.",
        duration: "1s"
    },
    {
        image: virtualImage,
        alt: "Virtual Shows",
        title: "Virtual Shows",
        description: "Make your business unaffected by the global challenges and geographical boundaries. Promote your products and/or services worldwide conveniently with our professional assistance in organising virtual events.",
        duration: "1s"
    }
];

const EventManagementSection = () => {
    return (
        <section className="ulockd-service bgc-overlay-white8 background_details">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <div className="ulockd-main-title">
                            <h2><span className="text-thm2">Event Management Services</span></h2>
                            <img src={titleIcon} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-3 mb-4 d-flex align-items-stretch">
                            <div className="about-box2 about-cont text-center wow fadeInUp" data-wow-duration={service.duration}>
                                <div className="ab-thumb">
                                    <img src={service.image} alt={service.alt} className="img-fluid rounded-square" />
                                </div>
                                <div className="ab-details">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-3">
                        <div className="button_area_sec">
                            <a className="btn btn-primary btn-block">Event Gallery</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EventManagementSection;
