import React, { useEffect, useState } from 'react';  
import { Link, useNavigate } from 'react-router-dom';  
import axios from 'axios';  
import './Dashboard.css';

import Container from 'react-bootstrap/Container';  
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';  
import Button from 'react-bootstrap/Button';  
import { jwtDecode } from 'jwt-decode';  
import { API_ENDPOINT } from './Api'; 
import logo from './assets/logo.png'; 
import Swal from 'sweetalert2';
import airport from './assets/airport.jpg';
import Modal from 'react-bootstrap/Modal';

function Dashboard() {  

  const [user, setUser] = useState(null);  
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();  

  /* Verify if User In-Session in LocalStorage */  
  useEffect(() => {  
    const fetchDecodedUserID = async () => {  
      try {  
        const response = JSON.parse(localStorage.getItem('token'));  
        
        // Decode the token and store the user data
        const decoded_token = jwtDecode(response.data.token);
        setUserData(response.data);  
        setUser(decoded_token);  

      } catch (error) {  
        navigate('/login');  
      }  
    };  

    fetchDecodedUserID();  
  }, [navigate]);  

  /* Performs Logout Method */  
  const handleLogout = async () => {  
    try {  
      localStorage.removeItem('token');  
      navigate('/login');  
    } catch (error) {  
      console.error('Logout failed:', error);  
    }  
  };  

  // DISPLAY USERS  
  const [users, setUsers] = useState([]);  
  const token = userData ? userData.token : null;  

  const headers = {  
    accept: 'application/json',  
    Authorization: token  
  };  

  useEffect(() => {  
    if (token) fetchUsers();
  }, [token]);  

  const fetchUsers = async () => {  
    try {
      const { data } = await axios.get(`${API_ENDPOINT}/user`, { headers });
      setUsers(data);  
    } catch (error) {
      console.error('Error fetching users:', error);
    }  
  };  

  /* DELETE USER */  
  const deleteUser = async (id) => {  
    const isConfirm = await Swal.fire({  
      title: 'Are you sure?',  
      text: "You won't be able to revert this!",  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonColor: '#3085d6',  
      cancelButtonColor: '#d33',  
      confirmButtonText: 'Yes, delete it!'  
    }).then((result) => result.isConfirmed);  

    if (!isConfirm) return;  

    try {
      await axios.delete(`${API_ENDPOINT}/user/${id}`, { headers });
      Swal.fire({  
        icon: "success",  
        text: "Successfully Deleted"
      });
      fetchUsers();
    } catch (error) {
      Swal.fire({  
        text: error.response?.data?.message || "An error occurred",  
        icon: "error"  
      });  
    }
  };

  /* CREATE USER */  
  const [show, setShow] = useState(false);  
  const [fullname, setFullname] = useState("");  
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");  
  const [validationError, setValidationError] = useState({});  
  const [currentUserId, setCurrentUserId] = useState(null);  

  const handleClose = () => {  
    setShow(false);  
    resetForm();  
  };  

  const handleShow = (user = null) => {  
    if (user) {  
      setFullname(user.fullname);  
      setUsername(user.username);  
      setCurrentUserId(user.user_id);  
    } else {  
      resetForm();  
    }  
    setShow(true);  
  };

  const resetForm = () => {  
    setFullname("");  
    setUsername("");  
    setPassword("");  
    setValidationError({});  
    setCurrentUserId(null);  
  };  

  const createUser = async (e) => {  
    e.preventDefault();  

    const payload = { fullname, username, password };  

    try {  
      await axios.post(`${API_ENDPOINT}/user`, payload, { headers });  
      Swal.fire({  
        icon: "success",  
        text: "Successfully Added"  
      });  
      fetchUsers();  
      handleClose();  
    } catch (error) {  
      if (error.response && error.response.status === 422) {  
        setValidationError(error.response.data.errors);  
      } else {  
        Swal.fire({  
          text: error.response?.data?.message || "An error occurred",  
          icon: "error"  
        });  
      }  
    }  
  };

  /* UPDATE USER */  
  const updateUser = async (e) => {  
    e.preventDefault();  

    const payload = { fullname, username, password };  

    try {  
      await axios.put(`${API_ENDPOINT}/user/${currentUserId}`, payload, { headers });  
      Swal.fire({  
        icon: "success",  
        text: "Successfully Updated"  
      });  
      fetchUsers();  
      handleClose();  
    } catch (error) {  
      if (error.response && error.response.status === 422) {  
        setValidationError(error.response.data.errors);  
      } else {  
        Swal.fire({  
          text: error.response?.data?.message || "An error occurred",  
          icon: "error"  
        });  
      }  
    }  
  };

  /* READ USER */
  const [selectedUser, setSelectedUser] = useState(null);
  const [showReadModal, setShowReadModal] = useState(false);

  const handleShowReadModal = (user) => {
    setSelectedUser(user);
    setShowReadModal(true);
  };

  const handleCloseReadModal = () => {
    setSelectedUser(null);
    setShowReadModal(false);
  };

  return (
    <>

  <>
    <Navbar className='navbar-dashboard'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" width="50" className="navbar-logo-dashboard" />
          Ampoy's Airline
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-link-dashboard">
            <Nav.Link as={Link} to="/dashboard" className="navbar-link-services active">💻 Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/services" className="navbar-link-services">📝 Services</Nav.Link>
            <Nav.Link as={Link} to="/home" className="navbar-link-services">🏠 Home</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="navbar-link-services">📞 Contact</Nav.Link>

            <NavDropdown title={user ? `User: ${user.username}` : 'Dropdown'} id="basic-nav-dropdown" align="end">
              <NavDropdown.Item as={Link} to="/Profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>


      <br />
      <div className="dashboard-background">
        {/* Your dashboard content here */}
      </div>

      {/* Show data */}
      <div className="container">
        <div className='col-12'>  
          <Button variant='btn btn-primary mb-2 float-end btn-sm me-2' onClick={() => handleShow()}>Create User</Button>  
        </div>

        <table className='table table-bordered'>  
          <thead>  
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>  
          <tbody>
            {users.map((user) => (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>
                <td>{user.fullname}</td>
                <td>{user.username}</td>
                <td>
                  <Button variant="info" size="sm" onClick={() => handleShowReadModal(user)}>View</Button>{' '}
                  <Button variant="warning" size="sm" onClick={() => handleShow(user)}>Edit

                  </Button>{' '}
                  <Button variant="danger" size="sm" onClick={() => deleteUser(user.user_id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create and Edit Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{currentUserId ? 'Edit User' : 'Create User'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={currentUserId ? updateUser : createUser}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                isInvalid={!!validationError.fullname}
              />
              <Form.Control.Feedback type="invalid">
                {validationError.fullname}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                isInvalid={!!validationError.username}
              />
              <Form.Control.Feedback type="invalid">
                {validationError.username}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!validationError.password}
              />
              <Form.Control.Feedback type="invalid">
                {validationError.password}
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {currentUserId ? 'Update User' : 'Create User'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Read User Modal */}
      <Modal show={showReadModal} onHide={handleCloseReadModal}>
        <Modal.Header closeButton>
          <Modal.Title>View User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <>
              <p><strong>Full Name:</strong> {selectedUser.fullname}</p>
              <p><strong>Username:</strong> {selectedUser.username}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReadModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Dashboard;
