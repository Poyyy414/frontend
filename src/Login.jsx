import React, { useEffect, useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import axios from 'axios';  

import 'bootstrap/dist/css/bootstrap.min.css';  // Make sure Bootstrap is included
import './Login.css'; // Custom CSS if needed

import Container from 'react-bootstrap/Container';  
import Navbar from 'react-bootstrap/Navbar';  // Importing Navbar component
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Button from 'react-bootstrap/Button';  
import Spinner from 'react-bootstrap/Spinner';  // Import Spinner for loading effect

import logo from './assets/logo.png'; // Path to your logo image
import bg from './assets/background-login.jpg'; // Path to your background image
import { API_ENDPOINT } from './Api.jsx';  

function Login() {  
  const navigate = useNavigate();  

  const [user, setUser] = useState(null);  

  /* Verify if User In Session in LocalStorage */  
  useEffect(() => {  
    const fetchUser = async () => {  
      try {  
        const response = JSON.parse(localStorage.getItem('token'));  
        setUser(response.data);  
        navigate('/dashboard');  
      } catch (error) {  
        navigate('/login');  
      }  
    };  

    fetchUser();  
  }, []);  

  /* Performs Login Method */  
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');  
  const [loading, setLoading] = useState(false);  // Add loading state

  const handleSubmit = async (e) => {  
    e.preventDefault();  
    setLoading(true);  // Start loading when form is submitted

    try {  
      const response = await axios.post(`${API_ENDPOINT}/auth/login`, {  
        username,  
        password,  
      });  
      localStorage.setItem("token", JSON.stringify(response));  
      setError('');  
      navigate('/dashboard');  
    } catch (error) {  
      setError('Invalid username or password');  
    } finally {
      setLoading(false);  // Stop loading after response
    }  
  };

  return ( 
    <>
      {/* Navbar */}
      <Navbar className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className="logo" width="50" />
            <span>Ampoy's Airline</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      {/* Background */}
      <div 
        className="background-container"
        style={{ backgroundImage: `url(${bg})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
      >
        <Container className="login-container">
          <Row className="justify-content-md-center">
            <Col md={4}>
              <div className="login_form">
                <div className="login-logo">
                  <center>
                    <h2>Airline Booking Based System</h2>
                  </center>
                </div>
                <div className="card">
                  <div className="card-body login-card-body">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                          className="form-control-sm rounded-0"
                          type="text"
                          placeholder="Enter Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                          className="form-control-sm rounded-0"
                          type="password"
                          placeholder="Enter Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </Form.Group>

                      <br />
                      <Form.Group controlId="formButton">
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <Button
                          className="btn btn-block bg-custom btn-flat rounded-0 dark-blue-btn"
                          size="sm"
                          block
                          type="submit"
                          disabled={loading}  // Disable button while loading
                        >
                          {loading ? (
                            <Spinner animation="border" size="sm" />  // Show spinner when loading
                          ) : (
                            'Login'
                          )}
                        </Button>
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;
