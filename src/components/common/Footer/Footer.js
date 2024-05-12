import React from 'react'
import './Footer.scss'
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
    return <div className='footer-cnt'>
        <div className='footer-title'>
            <div className='footer-title-content'>
                <div className='item-title'>
                    <h1>GET STARTED TODAY</h1>
                </div>
                <div className='item-content'>
                    <p>Ready to experience the Dynamix difference? Contact us now to discuss your manufacturing needs and discover how we can empower your business to thrive in a dynamic world</p>
                </div>
                <div className='item-btn'><button>Contact</button></div>
            </div>

        </div>
        <div className='footer-content'>
            <div className='footer-address'>
                <div className='address-list'>
                    <div>Address</div>
                    <div>
                        <span><CiLocationOn /></span>
                        <span>06-264/13/A/1/1/21, AERONAUTIC ENCLAVE, RAGHAVENDRA NAGAR,SUCHITRA,HYDERABAD,TS-500067</span>
                    </div>
                </div>
                <div className='contact-list'>
                    <div>Contact</div>
                    <div>
                        <span><MdEmail /></span>
                        <span>info@dynamix.in.net</span>
                    </div>
                    <div>
                        <span><FaPhone /></span>
                        <span>+91-798967903</span>
                    </div>
                </div>
            </div>
            <div className='footer-menu'>
                <div className='menu-title'>Menu</div>
                <div className='menu-content'>
                    <div>Home Page</div>
                    <div>About us</div>
                    <div>Offer</div>
                    <div>Price List</div>
                    <div>Gallery</div>
                    <div>Projects</div>
                    <div>Contact</div>
                </div>
            </div>
            <div className='footer-icons'></div>
        </div>
    </div>
}

export default Footer