import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import 'bootstrap/dist/css/bootstrap.css';  

import Dashboard from './Dashboard';  
import Login from './Login';  
import Services from './Services'; // Ensure Services is imported

function App() {  
  return (  
    <Router>  
      <Row>  
        <Col md={12}>  
          <Routes>  
            <Route path="/" element={<Login />} />  
            <Route path="/login" element={<Login />} />  
            <Route path="/dashboard" element={<Dashboard />} />  
            <Route path="/services" element={<Services />} /> {/* Services Route */}
          </Routes>  
        </Col>  
      </Row>  
    </Router>  
  );  
}  

export default App;
