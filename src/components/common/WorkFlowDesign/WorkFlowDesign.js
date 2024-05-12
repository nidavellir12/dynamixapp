import React from 'react'
import './WorkFlowDesign.scss'
import uploadFile from '../../../assets/images/upload-file.png'
import quotation from '../../../assets/images/OnlineQuotation.png'
import manufacturing from '../../../assets/images/Manufacturing.png'
import quality from '../../../assets/images/QualityCheck.png'
import delivery from '../../../assets/images/Delivery.png'
const WorkFlowDesign = () => {
    const workFlowItemsList = [{
        image: uploadFile,
        title: "Upload CAD File"
    }, {
        image: quotation,
        title: "Get Quote"
    }, {
        image: manufacturing,
        title: "Manufacturing"
    }, {
        image: quality,
        title: "Quality Assurance"
    }, {
        image: delivery,
        title: "Delivery"
    }]
    return (
        <div className='workflow-design'>
            <div className='workflow-items-cnt'>
                {workFlowItemsList?.map(item => {
                    return <div className='workflow-item'>
                        <div>
                            <img src={item?.image} alt={item?.title} />
                        </div>
                        <div>{item?.title}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default WorkFlowDesign