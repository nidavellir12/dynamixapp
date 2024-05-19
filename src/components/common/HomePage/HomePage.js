import React from 'react'
import './HomePage.scss'
import HeaderImage from '../../../assets/images/headerImage.png'

const ImageSlider = () => {
    return <div className='page-cnt'>
        <div className='image-cnt'>
            <img src={HeaderImage} alt="headerimage" />
        </div>
        <div className='content-cnt'>
            <div className='content-items'>
                <div className='image-title'>
                    <h2>Manufacturing</h2>
                    <h2>Made Easy</h2>
                </div>
                <div className='content-text'>
                    <p>Our technology-driven approach and partnerships with trusted manufacturers ensures high-quality, custom parts delivered faster and more cost-effective than ever before.</p>
                </div>
                <div className='content-text'>
                    <p>Get rapid online quotes and precision-engineered parts by partnering with us today.</p>
                    <ul>
                        <li>Get Online Quotes</li>
                        <li>Multi-point inspections</li>
                        <li>Rapid Prototyping</li>
                    </ul>
                </div>

                <div className='quote-btn'>
                    <button>Get A Quote</button>
                </div>
            </div>
        </div>
    </div>
}


export default ImageSlider;