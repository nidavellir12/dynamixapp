import React from 'react'
import './Services.scss'
import image from '../../../assets/images/image.png'
import CNCMaching from '../../../assets/images/CNCMaching.png'
import RapidPrototyping from '../../../assets/images/RapidPrototyping.png'
import DigitalPrinting from '../../../assets/images/DigitalPrinting.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
    const ServicesArray = [
        {
            content: "Xometry has always given us exactly what we needed. We’ve received parts with holes in the right places, with the right finish, and on time. Their user-friendly website means faster turnaround.",
            name: "Jackson Siu",
            title: "CNC Machining",
            image: CNCMaching
        },
        {
            content: "Xometry delivers professionalism and ease. They take care of fulfillment so I don't need to juggle or manage suppliers. We buy the quote, and Xometry takes care of the rest.",
            name: "Ryan Lambert",
            title: "Rapid Prototyping",
            image: RapidPrototyping
        },
        {
            content: "I have been impressed with how forthcoming and responsive Xometry has been in all of our communications. Your prices have won you a lot of friends here at Thermaco.",
            name: "Bruce Kyles",
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