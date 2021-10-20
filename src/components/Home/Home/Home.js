import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Covid from '../../Covid/Covid';
import Departments from '../../Departments/Departments';
import Slider from '../Slider/Slider';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div><Slider /></div>
            <div className="container my-5">
                <h1>ALL YOU NEED<br />
                    <span>FOR YOUR WEBSITE</span></h1>
                <p>One of the main benefits of this theme is being specialized
                    for healthcare and medical business.</p><br /><br />
                <div className="feacher">
                    <div>
                        <i className="far fa-clock"></i>
                        <p>Show visiting hours</p>
                        <h2>Timetable</h2>
                    </div>
                    <div>
                        <i className="far fa-calendar-check"></i>
                        <p>Make an appointment</p>
                        <h2>Online booking</h2>
                    </div>
                    <div>
                        <i className="fas fa-exchange-alt"></i>
                        <p>Showcase your work</p>
                        <h2>Before & After</h2>
                    </div>
                </div>
                <hr />
            </div>
            <AboutUs />
            <div className="container">
                <i className="fas fa-phone-volume"></i>
                <h1>Top notch customer support</h1>
                <p>Help Desk with one on one email and ticket support and dedicated support staff ready to assist you. Response times usually less than 8 hours.</p>
                <hr />
            </div>
            <Departments />
            <Covid />
        </div >
    );
};

export default Home;