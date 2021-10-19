import React, { useEffect, useState } from 'react';
import Department from './Department';

const Departments = () => {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        fetch('./departments.json')
            .then(req => req.json())
            .then(data => setDepartments(data))
    }, [])
    return (
        <div className="mt-5"><br />
            <h2>All Departments</h2>
            <div className="container">
                <div className="row my-5">
                    {
                        departments.map(d => <Department key={d.id} department={d} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Departments;