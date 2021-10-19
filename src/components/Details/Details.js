import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const [departments, setDepartments] = useState([]);
    let { departmentId } = useParams();

    useEffect(() => {
        fetch('./../departments.json')
            .then(req => req.json())
            .then(data => setDepartments(data))
    }, [])
    const data = departments.find(d => d.id === departmentId)
    // console.log(data?.img);
    const imgg = `${'./.'}${data?.img}`;
    return (
        <div className="container details">
            <div>
                <img src={imgg} alt="" />
            </div>
            <div className="text">
                <h2>{data?.name}</h2>
                <p>Description: {data?.detail}</p>
            </div>
        </div>
    );
};

export default Details;