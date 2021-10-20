import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const [departments, setDepartments] = useState([]);
    let { departmentId } = useParams();

    useEffect(() => {
        fetch('./../departments.json')
            .then(req => req.json())
            .then(data => setDepartments(data))
    }, [])
    const data = departments.find(d => d.id === departmentId)
    const img = `${'./.'}${data?.img}`;
    return (
        <div className="container py-5 mt-5">
            <div className="row p-2 border border-danger" >
                <div className="col-md-6">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="pt-5 mt-5">
                        <h2>{data?.name}</h2>
                        <p>Description: {data?.detail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;