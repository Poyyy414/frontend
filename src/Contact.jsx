import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Contact.css'; 
import logo from './assets/logo.png';
import airport from './assets/airport.jpg';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add form submission logic here
        console.log(formData);
        alert("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" }); // Clear form after submission
    };

    return (
        <div className="contact-section">
             <nav className="navbar-contact" role="navigation" aria-label="Main Navigation">
                <div className="navbar-container-contact">
                    <img src={logo} alt="Ampoy's Airline Logo" width="5%" className="logo-contact" />
                    <Link to="/dashboard" className="navbar-brand-home">Ampoy's Airline</Link>
                    <div className="navbar-links-home">
                        <Link to="/dashboard" className="navbar-link-home">💻Dashboard</Link>
                        <Link to="/services" className="navbar-link-home">📝 Services</Link>
                        <Link to="/home" className="navbar-link-home ">🏠︎Home</Link>
                        <Link to ="/contact" className="navbar-link-home active">📞Contact</Link>
                      
                    </div>
                </div>
            </nav>
            
            <div className="dashboard-background"></div>

            <div className="container">
                <h2 className="section-title">Contact Us</h2>
                <p className="section-description">
                    We’re here to assist you with your travel needs, answer your questions, and ensure your journey is smooth and hassle-free. Please don’t hesitate to reach out to us.
                </p>

                <div className="contact-details">
                    <div className="contact-item">
                        <h4>Email</h4>
                        <p>
                            For general inquiries or support, email us at: 
                            <a href="mailto:support@ampoysairline.com" className="contact-link"> support@ampoysairline.com</a>
                        </p>
                    </div>
                    <div className="contact-item">
                        <h4>Phone</h4>
                        <p>
                            Call us anytime at: 
                            <a href="tel:09777443427" className="contact-link"> 09777443427</a>
                        </p>
                    </div>
                    <div className="contact-item">
                        <h4>Office Address</h4>
                        <p>123 Airline Ave, Suite 456<br />Naga City, Camarines Sur<br />Philippines</p>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h3>Send Us a Message</h3>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name" 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address" 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here" 
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
