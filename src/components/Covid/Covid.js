import React from 'react';

const Covid = () => {
    return (
        <div className="container my-5 pt-4">
            <h2 className="text-primary fw-bold fs-1 mb-4">COVID-19 Vaccine Information</h2>
            <div className="row">
                <div className="col-md-6" >
                    <div className="mb-3 p-3 border" style={{ backgroundColor: "#9690901a" }}>
                        <h4>Vaccination options for Healthcare patients</h4>
                        <p>COVID-19 vaccination options and guidelines vary widely by location and may change over time. See the latest information specific to Healthcare campuses:</p>
                        <li>Arizona</li>
                        <li>Florida</li>
                        <li>Rochester</li>
                        <li>Health System</li>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3 p-3 border" style={{ backgroundColor: "#9690901a" }}>
                        <h4>Not a Healthcare patient?</h4>
                        <p>If you're not a Healthcare patient, check your public health department's website for the most complete information.</p>
                        <input className="mb-1" type="text" placeholder="Enter Your Name" /><br />
                        <input className="mb-1" type="text" placeholder="Enter Your Year" /><br />
                        <input type="text" placeholder="Enter Your Address" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Covid;