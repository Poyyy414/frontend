import React, { useState } from "react";
import { Link } from "react-router-dom"; // For navigation
import './Services.css';
import airport from './assets/airport.jpg'; // Ensure this path is correct
import logo from './assets/logo.png';

const Services = () => {
  // Rename state variables to avoid conflicts with dashboard.jsx
  const [departureCity, setDepartureCity] = useState("Cagayan de Oro (CGY)");
  const [arrivalCity, setArrivalCity] = useState("Cebu City (CEB)");
  const [departureDate, setDepartureDate] = useState("2024-12-18");
  const [returnDate, setReturnDate] = useState("2025-01-10");
  const [onlyDirectFlights, setOnlyDirectFlights] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Flight search submitted!", {
      departureCity,
      arrivalCity,
      departureDate,
      returnDate,
      onlyDirectFlights,
    });
    // TODO: Implement logic to search for flights based on the form data
  };

  return (
    <div>
      <nav className="navbar-services">
        <div className="navbar-container-services">
          <img src={logo} alt="Logo-services" width="5%" className="me-2" />
          <Link to="/" className="navbar-brand-services">Ampoy's Airline</Link>
          <div className="navbar-links-services">
            <Link to="/dashboard" className="navbar-link-services">Dashboard</Link>
            <Link to="/services" className="navbar-link-services">Services</Link>
            <Link to="#contact" className="navbar-link-services">Contact</Link>
            <Link to="#about_us" className="navbar-link-services">About Us</Link>
          </div>
        </div>
      </nav>

      {/* Background image div */}
      <div className="dashboard-background"></div>

      <div className="container-services">
        <h1>Welcome, Choose your services and enjoy!!</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group-services">
            <label htmlFor="departureCity">Departure:</label>
            <select
              id="departureCity"
              value={departureCity}
              onChange={(e) => setDepartureCity(e.target.value)}
            >
              <option value="Cagayan de Oro (CGY)">Cagayan de Oro (CGY)</option>
              <option value="Manila (MNL)">Manila (MNL)</option>
              <option value="Davao City (DVO)">Davao City (DVO)</option>
              <option value="Iloilo City (ILO)">Iloilo City (ILO)</option>
              <option value="Dumaguete City (DGT)">Dumaguete City (DGT)</option>
              <option value="Calabanga">Calabanga (CLB)</option>
            </select>
          </div>
          <div className="form-group-services">
            <label htmlFor="arrivalCity">Arrival:</label>
            <select
              id="arrivalCity"
              value={arrivalCity}
              onChange={(e) => setArrivalCity(e.target.value)}
            >
              <option value="Cebu City (CEB)">Cebu City (CEB)</option>
              <option value="Manila (MNL)">Manila (MNL)</option>
              <option value="Davao City (DVO)">Davao City (DVO)</option>
              <option value="Iloilo City (ILO)">Iloilo City (ILO)</option>
              <option value="Dumaguete City (DGT)">Dumaguete City (DGT)</option>
              <option value="Calabanga">Calabanga (CLB)</option>
            </select>
          </div>
          <div className="form-group-services">
            <label htmlFor="departureDate">Departure Date:</label>
            <input
              type="date"
              id="departureDate"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>
          <div className="form-group-services">
            <label htmlFor="returnDate">Return Date:</label>
            <input
              type="date"
              id="returnDate"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
          <div className="form-group-services">
            <label htmlFor="onlyDirectFlights">Direct Flights Only:</label>
            <input
              type="checkbox"
              id="onlyDirectFlights"
              checked={onlyDirectFlights}
              onChange={() => setOnlyDirectFlights(!onlyDirectFlights)}
            />
          </div>
          <button type="submit">Search Flights</button>
        </form>
      </div>

      <div className="container">
        <h1 className="title">Cheap flight deals from Daraga to Cebu</h1>
        <div className="deals">
          <div className="deal">
            <div className="deal-header">
              <h2>Round-trip from</h2>
              <h3>₱2,494</h3>
            </div>
            <div className="deal-details">
              <img src="https://i.imgur.com/n8q4b2c.png" alt="Air Asia logo" />
              <ul>
                <li>Philippines AirAsia</li>
                <li>1/8-1/30</li>
                <li>Nonstop</li>
                <li>2h 40m total</li>
                <li>Manila to Cebu City</li>
              </ul>
            </div>
            <button className="search-button">Search Deals</button>
          </div>
          <div className="deal">
            <div className="deal-header">
              <h2>One-way from</h2>
              <h3>₱1,218</h3>
            </div>
            <div className="deal-details">
              <img src="https://i.imgur.com/n8q4b2c.png" alt="Air Asia logo" />
              <ul>
                <li>Philippines AirAsia</li>
                <li>1/22</li>
                <li>Nonstop</li>
                <li>1h 20m total</li>
                <li>Manila to Cebu</li>
              </ul>
            </div>
            <button className="search-button">Search Deals</button>
          </div>
          <div className="deal">
            <div className="deal-header">
              <h2>Popular in</h2>
              <h3>December</h3>
            </div>
            <div className="deal-details">
              <p>High demand for flights, 0% potential price rise</p>
            </div>
            <button className="search-button">Search Deals</button>
          </div>
          <div className="deal">
            <div className="deal-header">
              <h2>Last-minute deals</h2>
              <h3>Check availability</h3>
            </div>
            <div className="deal-details">
              <p>Explore flights departing soon with great discounts</p>
            </div>
            <button className="search-button">Search Deals</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
