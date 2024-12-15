import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import logo from './assets/logo.png';
import { Carousel } from 'react-bootstrap';
import cebu from './assets/cebu.jpg';
import palawan from './assets/palawan.jpeg';
import baguio from './assets/Baguio.jpg';
import yin from './assets/yin.jpg';
import zoey from './assets/zoey.jpg';

function Home() {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar-home" role="navigation" aria-label="Main Navigation">
                <div className="navbar-container-home">
                    <img src={logo} alt="Ampoy's Airline Logo" width="5%" className="logo-home" />
                    <Link to="/dashboard" className="navbar-brand-home">Ampoy's Airline</Link>
                    <div className="navbar-links-home">
                        <Link to="/dashboard" className="navbar-link-home">💻Dashboard</Link>
                        <Link to="/services" className="navbar-link-home">📝Services</Link>
                        <Link to="/home" className="navbar-link-home active">🏠︎Home</Link>
                        <Link to="/contact" className="navbar-link-home">📞 Contact</Link>
                        
                    </div>
                </div>

                
            </nav>

            {/* Carousel Section */}
            <Carousel>
                <Carousel.Item>
                    <img className="carousel-image" src={cebu} alt="Cebu - Historical and cultural paradise" />
                    <Carousel.Caption>
                        <h3>Cebu</h3>
                        <p>"Cebu: Where history, culture, and paradise unite!"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-image" src={palawan} alt="Palawan - Nature's ultimate paradise" />
                    <Carousel.Caption>
                        <h3>Palawan</h3>
                        <p>"Palawan: Nature's ultimate paradise in the Philippines!"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-image" src={baguio} alt="Baguio - Cool heart of the Philippines" />
                    <Carousel.Caption>
                        <h3>Baguio City</h3>
                        <p>"Baguio: The cool heart of the Philippines!"</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Features Section */}
            <section id="features" className="features-section">
                <h2 className="section-heading">Why Choose Us?</h2>
                <div className="feature">
                    <i className="fas fa-search" aria-hidden="true"></i>
                    <p>Easy Flight Search</p>
                    <p className="feature-description">Quickly browse and book flights that fit your schedule and budget.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-credit-card" aria-hidden="true"></i>
                    <p>Secure Payment Options</p>
                    <p className="feature-description">Feel confident with our secure and convenient payment methods.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-headset" aria-hidden="true"></i>
                    <p>24/7 Customer Support</p>
                    <p className="feature-description">Our customer service team is here to help you anytime, anywhere.</p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="testimonials-section">
                <h2 className="section-heading">What Our Customers Say</h2>
                <div className="testimonial">
                    <div className="testimonial-card">
                        <div className="testimonial-image">
                            <img src={zoey} alt="Zoey's Picture" />
                        </div>
                        <div className="testimonial-content">
                            <p>"The booking process was so easy, and I found the best deals! Highly recommend!"</p>
                            <cite>- Zoey, Frequent Traveler</cite>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="testimonial-card">
                        <div className="testimonial-image">
                            <img src={yin} alt="Yin's Picture" />
                        </div>
                        <div className="testimonial-content">
                            <p>"I traveled to Palawan with Ampoy's Airline, and the whole experience was seamless. Excellent service!"</p>
                            <cite>- Yin, Adventure Enthusiast</cite>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section id="cta" className="cta-section">
                <h2 className="cta-heading">Ready to Plan Your Next Adventure?</h2>
                <p>Book your flight today and start your journey to beautiful destinations across the Philippines!</p>
                <Link to="/services" className="btn-primary">Book Now</Link>
            </section>

            {/* About Us Section */}
            <section id="about" className="about-us-section">
                <h2 className="section-heading">About Us</h2>
                <p>
                    Ampoy's Airline is dedicated to providing affordable, comfortable, and safe travel experiences for all our customers. With a fleet of modern aircraft and a team of experienced professionals, we strive to make your journey unforgettable. Whether you're flying for business, pleasure, or adventure, we're here to serve you every step of the way.
                </p>
            </section>
        </div>
    );
}

export default Home;
