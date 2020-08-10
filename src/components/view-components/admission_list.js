import React from "react";
import "./view_components.scss";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";


const admission_list = () => {
    return (
        <div className='mt-3 text-center'>
            <div className='mt-3 text-center'>
                <Carousel className="admission_list">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/admission_list_1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/admission_list_2.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/admission_list_3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/admission_list_persion_1.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/admission_list_persion_2.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
export default admission_list;