import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Services.css';
import airport from './assets/airport.jpg'; // Ensure this path is correct
import logo from './assets/logo.png';
import airasia from './assets/AirAsia.jpg'; // Corrected image path
import Swal from 'sweetalert2'; // Import SweetAlert2
import baggage from './assets/baggage.jpg';
import checkin from './assets/check-in.jpg';
import travelInsurance from './assets/travel-insurance.jpg';
import phairline from './assets/phairline.png';
import cebupacific from './assets/cebupacific.png';

const FlightCard = ({ route, departDate, departTime, returnDate, returnTime, price, airlineLogo, isCheapest, isQuickest, buttonLabel, onBook }) => {
  return (
    <div className="flight-card">
      <img src={airlineLogo} alt="Airline Logo" className="airline-logo" />
      <div className="flight-info">
        <h3>{route}</h3>
        <p>Departure: {departDate} | {departTime}</p>
        <p>Return: {returnDate} | {returnTime}</p>
        <p>Price: {price}</p>
        {isCheapest && <span className="badge cheapest">Cheapest</span>}
        {isQuickest && <span className="badge quickest">Quickest</span>}
      </div>
      <button className="flight-button" onClick={onBook}>{buttonLabel}</button>
    </div>
  );
};

const Services = () => {
  const [departureCity, setDepartureCity] = useState("Cagayan de Oro");
  const [arrivalCity, setArrivalCity] = useState("Cebu");
  const [departureDate, setDepartureDate] = useState("2024-12-18");
  const [returnDate, setReturnDate] = useState("2025-01-10");
  const [onlyDirectFlights, setOnlyDirectFlights] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (departureCity === arrivalCity) {
      alert("Departure and arrival cities cannot be the same.");
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Flight Search Submitted',
      text: `Confirmed flights from ${departureCity} to ${arrivalCity} for ${departureDate} to ${returnDate}`,
    });

    console.log("Flight search submitted!", {
      departureCity,
      arrivalCity,
      departureDate,
      returnDate,
      onlyDirectFlights,
    });
  };

  const flights = [
    {
      route: 'Manila  ✈︎ Cebu City',
      departDate: 'Tue 1/21',
      departTime: '3:35 pm-5:05 pm',
      returnDate: 'Sun 2/16',
      returnTime: '12:20 am-1:45 am',
      price: 'P2,506',
      airlineLogo: phairline,
      isCheapest: true,
      isQuickest: false,
      buttonLabel: 'Book Now'
    },
    {
      route: 'Calabanga ✈︎ Jupiter',
      departDate: 'Sat 1/25',
      departTime: '4:00 am - 5:30 am',
      returnDate: 'Wed 1/29',
      returnTime: '1:45 pm - 3:05 pm',
      price: 'P1,000,000',
      airlineLogo: airasia,
      isCheapest: false,
      isQuickest: true,
      buttonLabel: 'Book Now'
    },
    {
      route: 'Calabanga ✈︎ North Korea',
      departDate: 'Sat 1/25',
      departTime: '4:00 am - 5:30 am',
      returnDate: 'Wed 1/29',
      returnTime: '1:45 pm - 3:05 pm',
      price: 'Free',
      airlineLogo: cebupacific,
      isCheapest: false,
      isQuickest: true,
      buttonLabel: 'Book Now'
    },
    {
      route: 'Naga City ✈︎ Albay',
      departDate: 'Sat 1/25',
      departTime: '4:00 am - 5:30 am',
      returnDate: 'Wed 1/29',
      returnTime: '1:45 pm - 3:05 pm',
      price: 'P1,000,000,000',
      airlineLogo: logo,
      isCheapest: false,
      isQuickest: true,
      buttonLabel: 'Book Now'
    },
    {
      route: 'Calabanga ✈︎ Tinambac ',
      departDate: 'Sat 1/25',
      departTime: '4:00 am - 5:30 am',
      returnDate: 'Wed 1/29',
      returnTime: '1:45 pm - 3:05 pm',
      price: 'P1,000,000,000',
      airlineLogo: cebupacific,
      isCheapest: false,
      isQuickest: true,
      buttonLabel: 'Book Now'
    },
    {
      route: 'Davao City ✈︎ Ilo-Ilo City ',
      departDate: 'Sat 1/25',
      departTime: '4:00 am - 5:30 am',
      returnDate: 'Wed 1/29',
      returnTime: '1:45 pm - 3:05 pm',
      price: 'P1,000,000,000',
      airlineLogo: phairline,
      isCheapest: false,
      isQuickest: true,
      buttonLabel: 'Book Now'
    },
  ];

  const services = [
    {
      name: 'Extra Luggage',
      price: 'P500',
      description: 'Add extra luggage allowance to your flight.',
      buttonLabel: 'Add Service',
      image: baggage,  // Image added here
    },
    {
      name: 'Priority Check-in',
      price: 'P300',
      description: 'Skip the lines with priority check-in service.',
      buttonLabel: 'Add Service',
      image: checkin,  // Image added here
    },
    {
      name: 'Travel Insurance',
      price: 'P1,000',
      description: 'Protect your trip with travel insurance.',
      buttonLabel: 'Add Service',
      image: travelInsurance,  // Image added here
    },
  ];

  const handleBooking = () => {
    Swal.fire({
      icon: 'success',
      title: 'Booking Successful',
      text: 'Your flight has been booked successfully!',
    });
  };

  const handleServiceAdd = (serviceName) => {
    Swal.fire({
      icon: 'info',
      title: 'Service Added',
      text: `You have added the service: ${serviceName}`,
    });
  };

  const cities = [
    "Cagayan de Oro", "Manila", "Palawan", "Baguio", "Pili", 
    "Calabanga", "Naga", "Davao", "Cebu", "Tagbilaran", 
    "Iloilo", "Bacolod", "Bohol", "Boracay", "Zamboanga"
  ];

  return (
    <div>
      <nav className="navbar-services">
        <div className="navbar-container-services">
          <img src={logo} alt="Logo" width="50" className="navbar-logo" />
          <Link to="/" className="navbar-brand-services">Ampoy's Airline</Link>
          <div className="navbar-links-services">
            <Link to="/dashboard" className="navbar-link-services">💻Dashboard</Link>
            <Link to="/services" className="navbar-link-services active">📝Services</Link>
            <Link to="/home" className="navbar-link-services">🏠︎Home</Link>
            <Link to="/contact" className="navbar-link-services">📞 Contact</Link>
          </div>
        </div>
      </nav>

      <div className="dashboard-background"></div>

      <div className="container-services">
        <h1>Welcome, Choose your services and enjoy!!</h1>
        <form onSubmit={handleSubmit} className="services-form">
          <label>
            Departure City:
            <select
              value={departureCity}
              onChange={(e) => setDepartureCity(e.target.value)}
            >
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </label>
          <label>
            Arrival City:
            <select
              value={arrivalCity}
              onChange={(e) => setArrivalCity(e.target.value)}
            >
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </label>
          <label>
            Departure Date:
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </label>
          <label>
            Return Date:
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </label>
          <label>
            Direct Flights Only:
            <input
              type="checkbox"
              checked={onlyDirectFlights}
              onChange={(e) => setOnlyDirectFlights(e.target.checked)}
            />
          </label>
          <button type="submit">Confirm Flight</button>
        </form>
      </div>

      {/* Flight Listing Section */}
      <div className="container">
        <h1 className="title-1">Flight Deals</h1>
        <div className="deals">
          {flights.map((flight, index) => (
            <FlightCard key={index} {...flight} onBook={handleBooking} />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="container">
        <h1 className="title">Additional Services</h1>
        <div className="services">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.name} className="service-image" />  {/* Display the image here */}
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p>Price: {service.price}</p>
              <button onClick={() => handleServiceAdd(service.name)}>{service.buttonLabel}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
