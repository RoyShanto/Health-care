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
        <div>
            <h2>All Departments</h2>
            <div className="department-container row">
                {
                    departments.map(d => <Department key={d.id} department={d} />)
                }
            </div>
        </div>
    );
};

export default Departments;