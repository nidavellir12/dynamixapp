import React from 'react'
import './WorkFlow.scss'
import image1 from '../../../assets/images/resourcesimage1.png'
import image2 from '../../../assets/images/resourcesimage2.png'
import image3 from '../../../assets/images/resourcesimage3.png'
import image4 from '../../../assets/images/resourcesimage4.png'
const WorkFlow = () => {
    return <div className='workflow-cnt'>
        <ul>
            <li className='start'>
                <div className="workflow-item">
                    <img src={image1} alt="image1" />
                    <h5>Upload CAD File</h5>
                </div>
            </li>
            <li>
                <div className="workflow-item">
                    <img src={image2} alt="image2" />
                    <h5>Get Quote</h5>
                </div>
            </li>
            <li>
                <div className="workflow-item">
                    <img src={image3} alt="image3" />
                    <h5>Manufacturing</h5>
                </div>
            </li>
            <li>
                <div className="workflow-item">
                    <img src={image3} alt="image3" />
                    <h5>Quality Assurance</h5>
                </div>
            </li>
            <li class="active">
                <div className="workflow-item">
                    <img src={image4} alt="image4" />
                    <h5>Delivery</h5>
                </div>
            </li>
        </ul>

    </div>

}

export default WorkFlow