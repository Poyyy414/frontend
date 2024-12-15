import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import 'bootstrap/dist/css/bootstrap.css';  

// Import Components
import Dashboard from './Dashboard';  
import Login from './Login';  
import Services from './Services';  // Ensure Services is imported
import Home from './Home';
import Contact from './Contact';
import Profile from './Profile'; // Import Profile correctly
import Settings from './Settings';

function App() {  
  return (  
    <Router>  
      <Row>  
        <Col md={12}>  
          <Routes>  
            {/* Route for the login page */}
            <Route path="/" element={<Login />} />  
            <Route path="/login" element={<Login />} />  
            
            {/* Route for the dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />  
            
            {/* Route for the services page */}
            <Route path="/services" element={<Services />} />

            <Route path="/home" element={<Home />} />

            <Route path="/contact" element={<Contact />} />

            {/* Route for the profile page */}
            <Route path="/profile" element={<Profile />} /> {/* Fixed Profile Route */}
            <Route path="/settings" element={<Settings />} />
          </Routes>  
        </Col>  
      </Row>  
    </Router>  
  );  
}

export default App;
