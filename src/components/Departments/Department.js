import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Departments.css'
const Department = (props) => {
    const { id, name, img, shortDetail } = props.department;
    return (
        <Card className="cart col-sm-6">
            <Card.Img variant="top" src={img} className="cart-img" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{shortDetail}</Card.Text>
                <Link to={`/details/${id}`}><Button variant="primary">View Details</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default Department;