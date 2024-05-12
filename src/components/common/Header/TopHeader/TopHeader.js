import React from 'react'
import { Link } from 'react-scroll'
import Logo from '../../../../assets/images/Title.png'
import './TopHeader.scss'
const TopHeader = () => {
    return <div className='top-header'>
        <div className='top-logo'>
            <img src={Logo} alt="logo" />
        </div>
        <div className='header-content'>
            <div className='header-items'>
                <ul>
                    <li>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Services
                        </Link></li>
                    <li>
                        <Link
                            to="materials"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Materials
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="aboutus"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="offlineorders"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Offline Orders
                        </Link></li>
                </ul>
            </div>
            {/* <div className='top-header-elements'>
                <div className='login-btn'>
                    <button>Log In</button>
                </div>
            </div> */}
        </div>
    </div>
}


export default TopHeader;