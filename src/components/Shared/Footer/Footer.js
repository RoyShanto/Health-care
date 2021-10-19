import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className=" footer-container">
            <div className="container">
                <div className="row p-5">
                    <div className="col-md-4">
                        <h3>HealthCare</h3>
                        <p>Sed magna nulla, pulvinar vel ante vel, fringilla vulputate nibh. In placerat facilisis tincidunt. Integer quis erat dictum, placerat massa non, bibendum ante. Duis aliquet tellus magna, quis egestas enim vulputate sed. Phasellus in dui malesuada, lacinia urna sed.</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Our services</h3>
                        <p>Appointments<br />
                            Working hours<br />
                            Cost calculator<br />
                            Procedures<br />
                            Special offers<br />
                            Testimonials</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Contact Us</h3>
                        <p>+8801627167955</p>
                        <p>roycse17@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;