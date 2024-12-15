import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import logo from './assets/logo.png'; // Ampoy's Airline logo
import bgLogin from './assets/background-login.jpg'; // Ensure the path is correct

import { API_ENDPOINT } from './Api.jsx';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
  const [loading, setLoading] = useState(false); // Manage loading state

  /* Verify if User In Session in LocalStorage */
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
          setUser(token.data);
          navigate('/dashboard');
        } else {
          throw new Error('No token found');
        }
      } catch (error) {
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  /* Login State and Methods */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_ENDPOINT}/auth/login`, {
        username,
        password,
      });

      localStorage.setItem('token', JSON.stringify(response));
      setError('');
      setLoading(false);
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid username or password');
      setLoading(false);
    }
  };

  /* Signup State and Methods */
  const [fullname, setFullname] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_ENDPOINT}/auth/register`, {
        fullname,
        username,
        password,
      });

      localStorage.setItem('token', JSON.stringify(response));
      setError('');
      setLoading(false);
      navigate('/dashboard');
    } catch (error) {
      setError('Signup failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Ampoy's Airline Logo" width="40" />
            <span className="ms-2">Ampoy's Airline</span>
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Background Section */}
      <div
        style={{
          backgroundImage: `url(${bgLogin})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Login or Signup Form */}
        <Container>
          <Row className="justify-content-md-center">
            <Col md={4}>
              <div className="login_signup_form">
                <div className="container">
                  <div className="login-logo" style={{ textAlign: 'center' }}>
                    <img src={logo} width="38%" alt="Ampoy's Airline Logo" />
                  </div>
                  <center>
                    Ampoy's Airline: Seamless Flight Booking Made Easy
                  </center>
                  &nbsp;
                  <div className="card">
                    <div className="card-body login-card-body">
                      {isSignup ? (
                        <Form onSubmit={handleSignup}>
                          <Form.Group controlId="formFullname">
                            <Form.Label>Full Name:</Form.Label>
                            <Form.Control
                              className="form-control-sm rounded-0"
                              type="text"
                              placeholder="Enter Full Name"
                              value={fullname}
                              onChange={(e) => setFullname(e.target.value)}
                              required
                            />
                          </Form.Group>
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
                          <Form.Group controlId="formsButton">
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <Button
                              variant="primary"
                              className="btn btn-block bg-custom btn-flat rounded-0"
                              size="sm"
                              type="submit"
                              disabled={loading}
                            >
                              {loading ? (
                                <Spinner
                                  animation="border"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                />
                              ) : (
                                'Signup'
                              )}
                            </Button>
                          </Form.Group>
                        </Form>
                      ) : (
                        <Form onSubmit={handleLogin}>
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
                          <Form.Group controlId="formsButton">
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <Button
                              variant="primary"
                              className="btn btn-block bg-custom btn-flat rounded-0"
                              size="sm"
                              type="submit"
                              disabled={loading}
                            >
                              {loading ? (
                                <Spinner
                                  animation="border"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                />
                              ) : (
                                'Login'
                              )}
                            </Button>
                          </Form.Group>
                        </Form>
                      )}
                      <div className="mt-3 text-center">
                        <Button
                          variant="link"
                          onClick={() => setIsSignup(!isSignup)}
                        >
                          {isSignup
                            ? 'Already have an account? Login'
                            : "Don't have an account? Signup"}
                        </Button>
                      </div>
                    </div>
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
