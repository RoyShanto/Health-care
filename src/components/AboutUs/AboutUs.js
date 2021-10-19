import React, { useEffect, useState } from 'react';
import Doctors from '../Doctors/Doctors';

const AboutUs = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(req => req.json())
            .then(data => setDoctors(data))
    }, []);
    return (
        <div className="my-5 container" ><br />
            <h2 className="text-primary">Specialist Doctors</h2>
            <div className="row my-5">
                {
                    doctors.map(d => <Doctors key={d.id} doctor={d} />)
                }
            </div>
        </div>
    );
};

export default AboutUs;