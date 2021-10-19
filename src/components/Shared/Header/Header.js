import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <Link className="navbar-brand" to="/">Health Care</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/departments">Departments</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/aboutus">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/contactus">Contact Us &nbsp; &nbsp; </Link>
                            </li>
                            <li class="nav-item">
                                {
                                    user.email ?
                                        <Link to='/login' className="nav-link" onClick={logOut}>LogOut</Link>
                                        :
                                        <Link className="nav-link" to="/login">Login</Link>
                                }
                            </li>
                        </ul>
                        <span class="nav-item d-flex justify-content-end">
                            <Link className="nav-link text-white">Welcome {user.displayName}</Link>
                        </span>

                    </div>
                </div>
            </nav >

        </div >
    );
};

export default Header;