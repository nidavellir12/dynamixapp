import React from 'react'
import './Services.scss'
import CNCMaching from '../../../assets/images/CNCMaching.png'
import RapidPrototyping from '../../../assets/images/RapidPrototyping.png'
import DigitalPrinting from '../../../assets/images/DigitalPrinting.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
    const ServicesArray = [
        {
            content: "From complex designs to simple geometries, our CNC milling provides precision with ease by utilizing advanced 3-axis and 5-axis milling processes. Whether it's prototyping or production, Dynamix delivers a perfect product every time.",
            title: "CNC Machining",
            image: CNCMaching
        },
        {
            content: "Dynamix accelerates your product development from concept to prototype in a matter of hours or days. Our fast-prototyping services allow you to develop and refine your designs quickly and cost-effectively, ensuring that your ideas come to life with precision and efficiency.",
            title: "Rapid Prototyping",
            image: RapidPrototyping
        },
        {
            content: "Whether it's promotional materials or product branding, Dynamix digital printing services ensure your message stands out with clarity and conviction.",
            title: "Digital Printing",
            image: DigitalPrinting
        },

    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <div className='services-container'>
            <div className='service-item-cnt'>
                <Slider {...settings}>
                    {ServicesArray?.map((item) =>
                        <div className='service-item'>
                            <div className='service-image'>
                                <img src={item.image} alt="defaultImage" />
                            </div>
                            <div className='service-content'>
                                <div className='item-header'>{item?.title}</div>
                                <div className='item-content'>{item?.content}</div>
                            </div>
                        </div>)}
                </Slider></div>
        </div>
    )
}

export default Services