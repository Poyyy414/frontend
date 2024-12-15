import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'; // Assuming logo image is in the same directory
import './Profile.css';

const Profile = () => {
  // Retrieve stored data from localStorage only on initial mount
  const storedData = JSON.parse(localStorage.getItem('profileData')) || {
    username: '',
    fullname: '',
    address: '',
    contactNumber: '',
    profilePicture: null,
  };

  const [formData, setFormData] = useState(storedData); // Initialize form data with stored data
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
  const [formErrors, setFormErrors] = useState({}); // Store form validation errors

  // Persist the form data to localStorage whenever it changes
  useEffect(() => {
    if (formSubmitted) {
      localStorage.setItem('profileData', JSON.stringify(formData));
    }
  }, [formData, formSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.fullname) errors.fullname = 'Full Name is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.contactNumber) errors.contactNumber = 'Contact Number is required';
    if (!formData.profilePicture) errors.profilePicture = 'Profile Picture is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormSubmitted(true); // Mark form as submitted
      localStorage.setItem('profileData', JSON.stringify(formData)); // Store form data in localStorage
      alert('Profile saved successfully!');
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar className="navbar-dark-blue" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className="logo" width="50" />
            <span>Ampoy's Airline</span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard">💻Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/home">🏠Home</Nav.Link>
            <Nav.Link as={Link} to="/services">📝Services</Nav.Link>
            
          </Nav>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="User" id="basic-nav-dropdown" align="end">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Profile Form Section */}
      <div className="profile-container">
        {!formSubmitted ? (
          <div className="profile-form">
            <h2>Profile Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                {formErrors.username && <div className="error">{formErrors.username}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
                {formErrors.fullname && <div className="error">{formErrors.fullname}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                {formErrors.address && <div className="error">{formErrors.address}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
                {formErrors.contactNumber && <div className="error">{formErrors.contactNumber}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="profilePicture">Profile Picture</label>
                <input
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
                {formErrors.profilePicture && <div className="error">{formErrors.profilePicture}</div>}
              </div>

              <button type="submit" className="submit-btn">Save Profile</button>
            </form>
          </div>
        ) : (
          // Display saved data after submission
          <div className="saved-profile">
            <h3>Saved Profile:</h3>
            {formData.profilePicture && (
              <div className="profile-picture">
                <img
                  src={URL.createObjectURL(formData.profilePicture)}
                  alt="Profile"
                  className="profile-pic"
                />
              </div>
            )}
            <p><strong>Username:</strong> {formData.username}</p>
            <p><strong>Full Name:</strong> {formData.fullname}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>Contact Number:</strong> {formData.contactNumber}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
