import React from 'react';
import '../Styles/OurServices.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import titleIcon from "../assets/title-icon.png";
import guestsIcon from "../assets/guests.png";
import weddingRingsIcon from "../assets/wedding-rings.png";
import weddingIcon from "../assets/wedding.png";
import locationIcon from "../assets/location.png";
import cocktailIcon from "../assets/cocktail.png";
import garlandsIcon from "../assets/garlands.png";
import curtainsIcon from "../assets/curtains.png";
import balloonsIcon from "../assets/balloons.png";

function OurServices() {
    return (
        <div className="App">
            <section className="ulockd-service bgc-overlay-white8 ulockd_bgp3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <div className="ulockd-main-title">
                                <h2><span className="text-thm2" style={{ color: '#FEAEA3' }}>Event Mestro Services</span></h2>
                                <img src={titleIcon} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* First row */}
                    <div className="row">
                        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3 ulockd-pad395">
                            <div className="about-box2 text-center wow fadeInUp" data-wow-duration="1s">
                                <div className="ab-thumb">
                                    <img src={guestsIcon} alt="Entertainment" width="60px" />
                                </div>
                                <div className="ab-details">
                                    <h3>Entertainment</h3>
                                    <p>Event is the most efficient & direct tool for any communication. Entertainment in an event helps to leave a better.</p>
                                </div>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3 ulockd-pad395">
                            <div className="about-box2 text-center wow fadeInUp" data-wow-duration="1.3s">
                                <div className="ab-thumb">
                                    <img src={weddingRingsIcon} alt="Wedding Rings" width="60px" />
                                </div>
                                <div className="ab-details">
                                    <h3>Events</h3>
                                    <p>We know how important any event that you do is to you whether in the corporate field or personally.</p>
                                </div>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3 ulockd-pad395">
                            <div className="about-box2 text-center wow fadeInUp" data-wow-duration="1.6s">
                                <div className="ab-thumb">
                                    <img src={weddingIcon} alt="Wedding Venues" width="60px" />
                                </div>
                                <div className="ab-details">
                                    <h3>Wedding Venues</h3>
                                    <p>The Wedding is a once-in-lifetime event and everyone wants a ravishing venue for that moment.</p>

                                </div>
                            </div>
                        </div>

                        {/* Column 4 */}
                        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3 ulockd-pad395">
                            <div className="about-box2 text-center wow fadeInUp" data-wow-duration="1.9s">
                                <div className="ab-thumb">
                                    <img src={locationIcon} alt="Hospitality" width="60px" />
                                </div>
                                <div className="ab-details">
                                    <h3>Hospitality</h3>
                                    <p>Travel and Hotel arrangement is one of the major tensions while hosting any event. Therefore, to relieve you so that.</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second row */}
                    <div className="row ulockd-mrgn1220">
                        {/* Column 5 */}
                        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3 ulockd-pad395">
                            <div className="about-box2 text-center wow fadeInUp" data-wow-duration="1.6s">
                                <div className="ab-thumb">
                                    <img src={cocktailIcon} alt="Choreographers" width="60px" />
                                </div>
                                <div className="ab-details">
                                    <h3>Choreographers</h3>
                                    <p>The Events Maestro & Entertainments is a leading event management company in India, catering to the needs..</p>

                                </div>
                            </div>
                        </div>

                        {/* Column 6 */}
                        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3 ulockd-pad395">
                            <div className="about-box2 text-center wow fadeInUp" data-wow-duration="1.9s">
                                <div className="ab-thumb">
                                    <img src={garlandsIcon} alt="Bollywood Singers" width="60px" />
                                </div>
                                <div className="ab-details">
                                    <h3>Bollywood Singers</h3>
                                    <p>If you are planning to hold an event for your company or in your city with Bollywood Singers, then Event Mestro ..</p>

                                </div>
                            </div>
                        </div>

                        {/* Column 7 */}
                        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3 ulockd-pad395">
                            <div className="about-box2 text-center wow fadeInUp" data-wow-duration="1s">
                                <div className="ab-thumb">
                                    <img src={curtainsIcon} alt="International Artists" width="60px" />
                                </div>
                                <div className="ab-details">
                                    <h3>International Artists</h3>
                                    <p> Events  Maestro & Entertainments is a well-reputed company which specializes in event management .</p>

                                </div>
                            </div>
                        </div>

                        {/* Column 8 */}
                        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3 ulockd-pad395">
                            <div className="about-box2 text-center wow fadeInUp" data-wow-duration="1.3s">
                                <div className="ab-thumb">
                                    <img src={balloonsIcon} alt="Anchors" width="60px" />
                                </div>
                                <div className="ab-details">
                                    <h3>Anchors</h3>
                                    <p>Event Maestro & Entertainments is having a dynamic and vibrant group of young professionals as Anchors </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OurServices;
