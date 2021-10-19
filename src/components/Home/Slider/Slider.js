import React from 'react';
import { Carousel } from "react-bootstrap";

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./image/slider/slider1.jpg?text=First slide&bg=282c34"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>We are always ready to service</h3>
                        <p>We provide 24 hours service. We have several branches. You can easily contact any specialized doctor.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./image/slider/slider2.jpg?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Easily contact any doctor</h3>
                        <p>We provide 24 hours service. We have several branches. You can easily contact any specialized doctor.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./image/slider/slider3.jpg?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Research in various critical fields</h3>
                        <p>We provide 24 hours service. We have several branches. You can easily contact any specialized doctor.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;