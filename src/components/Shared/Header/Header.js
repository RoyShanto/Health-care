import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top" className="fixed-top">
                <Container>
                    <Navbar.Brand href="/home">Health Care</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/home">Home</Link>
                        <Link to="/departments">Departments</Link>
                        <Link to="/aboutus">About Us</Link>
                        <Link to="/contactus">Contact Us &nbsp;&nbsp; </Link>
                        {
                            user.email ?
                                <button onClick={logOut}>LogOut</button>
                                :
                                <Link to="/login">Login</Link>
                        }
                    </Nav>
                    <div className="btn-login-out">
                        <b>Welcome {user.displayName}</b>
                    </div>
                </Container>
            </Navbar><br /><br /><br />
        </div>
    );
};

export default Header;