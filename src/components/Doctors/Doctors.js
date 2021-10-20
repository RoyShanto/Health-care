import React from 'react';
import { Card } from 'react-bootstrap';

const Doctors = (props) => {
    const { name, img, detail } = props.doctor;
    return (
        <div className="col-md-4 pb-2">
            <Card className="cart">
                <Card.Img variant="top" src={img} height="265px" />
                <Card.Body>
                    <Card.Title><h4>{name}</h4></Card.Title>
                    <Card.Text>{detail}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Doctors;