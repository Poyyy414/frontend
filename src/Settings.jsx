import React, { useState, useEffect } from 'react';
import './Setting.css';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Ensure to import Link for navigation
import logo from './assets/logo.png'; // Assuming logo image is in the same directory

const Settings = () => {
  const [settingsData, setSettingsData] = useState({
    darkMode: false,
    language: 'en',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Load saved settings data from localStorage if available
  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('settingsData'));
    if (savedSettings) {
      setSettingsData(savedSettings);
    }
  }, []);

  // Save settings data to localStorage when it changes
  useEffect(() => {
    if (formSubmitted) {
      localStorage.setItem('settingsData', JSON.stringify(settingsData));
    }
  }, [settingsData, formSubmitted]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettingsData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    alert('Settings saved successfully!');
  };

  return (
    <div className={`settings-page ${settingsData.darkMode ? 'dark-mode' : ''}`}>
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
                <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Settings Form */}
      <div className="settings-container">
        <h2>Settings</h2>
        <form onSubmit={handleSubmit} className="settings-form">
          {/* Dark Mode Toggle */}
          <div className="form-group">
            <label htmlFor="darkMode">Enable Dark Mode</label>
            <input
              type="checkbox"
              id="darkMode"
              name="darkMode"
              checked={settingsData.darkMode}
              onChange={handleChange}
            />
          </div>

          {/* Language Selection */}
          <div className="form-group">
            <label htmlFor="language">Language</label>
            <select
              id="language"
              name="language"
              value={settingsData.language}
              onChange={handleChange}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>

          {/* Save Button */}
          <button type="submit" className="submit-btn">Save Settings</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
