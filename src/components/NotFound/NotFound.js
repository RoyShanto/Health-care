import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mt-5">
            <img src="./image/404.jpg" alt="" className="vh-100" /><br />
            <h3><Link className="fs-5 " to={'/home'}>Back To Home</Link></h3>
        </div>
    );
};

export default NotFound;