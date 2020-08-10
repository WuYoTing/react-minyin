import React from "react";
import Carousel from "react-bootstrap/Carousel";


const home = () => {
    return (
        <div className='mt-3 text-center'>
            <Carousel className="home">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/main_entrance.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/home_intro_1.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/home_intro_2.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/home_intro_3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default home;