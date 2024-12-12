import React, { useState } from "react";
import { Link } from "react-router-dom"; // For navigation
import './Services.css';
import airport from './assets/airport.jpg'; // Ensure this path is correct
import logo from './assets/logo.png';

const Services = () => {
  // Rename state variables to avoid conflicts with dashboard.jsx
  const [departureCity, setDepartureCity] = useState("Cagayan de Oro (CGY)");
  const [arrivalCity, setArrivalCity] = useState("Cebu City (CEB)");
  const [departureDate, setDepartureDate] = useState("Wed 12/18");
  const [returnDate, setReturnDate] = useState("Fri 1/10");
  const [onlyDirectFlights, setOnlyDirectFlights] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Flight search submitted!");
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
        <h1>Welcome, Choose your services enjoy!!</h1>
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
              {/* Add more options as needed */}
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
              {/* Add more options as needed */}
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
    </div>
  );
};

export default Services;
