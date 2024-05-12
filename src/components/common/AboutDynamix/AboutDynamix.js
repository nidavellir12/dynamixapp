import React from 'react'
import './AboutDynamix.scss'
import DynamixImage from '../../../assets/images/headerImage.png'
const AboutDynamix = () => {
    return <div className='dynamix-cnt'>
        <div className='dynamix-header'>
            <h1>Why us</h1>
        </div>
        <div className='dynamix-items'>
            <div className='dynamix-content'>
                <div className='service-item'>
                    <div className='item-title'>Speed</div>
                    <div className='item-content'>In today's fast-paced business environment, time is of the essence. Dynamix delivers rapid turnaround times without compromising on quality.</div>
                </div>
                <div className='service-item'>
                    <div className='item-title'>Reliability</div>
                    <div className='item-content'>Count on us to meet deadlines and exceed expectations. Our commitment to reliability is unwavering, ensuring seamless collaboration and satisfaction.</div>
                </div>
            </div>
            <div className='dynamix-image'>
                <img src={DynamixImage} alt="dynamiximage" />
            </div>
            <div className='dynamix-content'>
                <div className='service-item'>
                    <div className='item-title'>Innovation</div>
                    <div className='item-content'>Stay ahead of the curve with Dynamix. We embrace innovation and continuously invest in new technologies to drive progress and stay at the forefront of the industry.</div>
                </div>
                <div className='service-item'>
                    <div className='item-title'>Partnership</div>
                    <div className='item-content'>When you choose Dynamix, you're not just a client; you're a valued partner. We're dedicated to fostering long-term relationships built on trust, transparency, and mutual success.</div>
                </div>
            </div>
        </div>
    </div>
}

export default AboutDynamix