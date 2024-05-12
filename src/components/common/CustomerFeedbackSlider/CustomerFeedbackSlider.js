import React from 'react'
import './CustomerFeedbackSlider.scss'
import image from '../../../assets/images/image.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerFeedbackSlider = () => {
    const testimonalArray = [
        {
            content: "Xometry has always given us exactly what we needed. We’ve received parts with holes in the right places, with the right finish, and on time. Their user-friendly website means faster turnaround.",
            name: "Jackson Siu",
            title: "Lead Mechanical Engineer, Asylon"
        },
        {
            content: "Xometry delivers professionalism and ease. They take care of fulfillment so I don't need to juggle or manage suppliers. We buy the quote, and Xometry takes care of the rest.",
            name: "Ryan Lambert",
            title: "Tooling Design Engineer, BMW"
        },
        {
            content: "I have been impressed with how forthcoming and responsive Xometry has been in all of our communications. Your prices have won you a lot of friends here at Thermaco.",
            name: "Bruce Kyles",
            title: "Engineer, Thermaco"
        },
        {
            content: "Xometry has always given us exactly what we needed. We’ve received parts with holes in the right places, with the right finish, and on time. Their user-friendly website means faster turnaround.",
            name: "Jackson Siu",
            title: "Lead Mechanical Engineer, Asylon"
        },
        {
            content: "Xometry delivers professionalism and ease. They take care of fulfillment so I don't need to juggle or manage suppliers. We buy the quote, and Xometry takes care of the rest.",
            name: "Ryan Lambert",
            title: "Tooling Design Engineer, BMW"
        },
        {
            content: "I have been impressed with how forthcoming and responsive Xometry has been in all of our communications. Your prices have won you a lot of friends here at Thermaco.",
            name: "Bruce Kyles",
            title: "Engineer, Thermaco"
        },
        {
            content: "I have been impressed with how forthcoming and responsive Xometry has been in all of our communications. Your prices have won you a lot of friends here at Thermaco.",
            name: "Bruce Kyles",
            title: "Engineer, Thermaco"
        }

    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {testimonalArray?.map((item) =>
                <div className='testimonal-item'>
                    <div className='testimonal-image'>
                        <img src={image} alt="defaultImage" />
                    </div>
                    <div className='testimonal-content'>
                        <p>{item?.content}</p>
                        <p>{item?.name}</p>
                    </div>
                </div>)}
        </Slider>
    )
}

export default CustomerFeedbackSlider