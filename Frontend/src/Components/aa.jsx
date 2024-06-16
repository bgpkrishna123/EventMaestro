import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './aa.css';

const EventManagementServices = () => {
    return (
        <section className="ulockd-service bgc-overlay-white8 background_details">
            <div className="container">
                <div className="col-md-12 text-center">
                    <div className="ulockd-main-title">
                        <h2>
                            <span className="text-thm2">Event Management Services</span>
                        </h2>
                        <img src="images/title-icon.png" alt="V3 Events Service" />
                    </div>
                </div>
                <div className="row">
                    {[
                        {
                            src: "images/color-icon/corporate.png",
                            alt: "corporate",
                            title: "Corporate Event Management",
                            description: "V3 Events can be your one-stop event management provider for corporate events. We offer comprehensive corporate event management and creative services, tailor-made precisely according to your needs.",
                            duration: "1s"
                        },
                        {
                            src: "images/color-icon/seminar.png",
                            alt: "Seminar",
                            title: "Seminars and Conferences",
                            description: "We are one of the best event management companies in Delhi NCR for organising seminars and conferences. We are committed to serving the varied needs of the businesses and delivering the best outcomes meeting their expectations.",
                            duration: "1.3s"
                        },
                        {
                            src: "images/color-icon/brand.png",
                            alt: "Brand",
                            title: "Brand Promotion",
                            description: "Seeking a smart event management company for your brand promotion related needs? V3 Events is the perfect choice to fulfil such requirements efficiently. We have experienced professionals to deliver such services.",
                            duration: "1.6s"
                        },
                        {
                            src: "images/color-icon/meeting.png",
                            alt: "Meeting",
                            title: "MICE",
                            description: "V3 Events is one of the most sought after event management companies for organising Meetings, Incentives, Conferences & Exhibitions (MICE) in Delhi NCR. Connect with us now for impeccable MICE management services.",
                            duration: "1.9s"
                        },
                        {
                            src: "images/color-icon/management.png",
                            alt: "Management",
                            title: "Exhibition Management",
                            description: "Make your exhibitions appealing and highly engaging platforms for your target audience with V3 Events. Let us boost your business in a smart and efficient manner with our expertise.",
                            duration: "1.6s"
                        },
                        {
                            src: "images/color-icon/artist.png",
                            alt: "Bollywood Singers",
                            title: "Bollywood Artists",
                            description: "V3 Events is a well-reputed event management company for planning events involving Bollywood artists. We have numerous celebrities with us ready for collaboration for private events.",
                            duration: "1.9s"
                        },
                        {
                            src: "images/color-icon/feshion.png",
                            alt: "Fashion Shows",
                            title: "Fashion Shows",
                            description: "We have an incredible team of experienced and young talent who can glam up fashion shows beyond expectations. Connect with us now if you are looking for the best professionals for organising fashion shows.",
                            duration: "1s"
                        },
                        {
                            src: "images/color-icon/vir.png",
                            alt: "Virtual Shows",
                            title: "Virtual Shows",
                            description: "Make your business unaffected by the global challenges and geographical boundaries. Promote your products and/or services worldwide conveniently with our professional assistance in organising virtual events.",
                            duration: "1s"
                        }
                    ].map((item, index) => (
                        <div key={index} className="col-xxs-12 col-xs-6 col-sm-6 col-md-3 ulockd-pad395">
                            <div className={`about-box2 about-cont text-center wow fadeInUp`} data-wow-duration={item.duration}>
                                <div className="ab-thumb">
                                    <img src={item.src} alt={item.alt} width="60px" />
                                </div>
                                <div className="ab-details">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="button_area_sec text-center">
                    <a href="https://www.v3events.in/Wedding-new1" className="btn btn-primary">
                        Event Gallery
                    </a>
                </div>
            </div>
        </section>
    );
};

export default EventManagementServices;
