import React from 'react'
import './WorkFlowDesign.scss'
import uploadFile from '../../../assets/images/upload-file.png'
import quotation from '../../../assets/images/OnlineQuotation.png'
import manufacturing from '../../../assets/images/Manufacturing.png'
import quality from '../../../assets/images/QualityCheck.png'
import delivery from '../../../assets/images/Truck.svg'
const WorkFlowDesign = () => {
    const workFlowItemsList = [{
        image: uploadFile,
        title: "Upload CAD File",
        content:"Upload the CAD files and project specifications using our secured Dynamix intuitive platform."
    }, {
        image: quotation,
        title: "Get Quote",
        content:"Receive the estimated quote and review the manufacturability comments."
    }, {
        image: manufacturing,
        title: "Manufacturing",
        content:"Confirm the specifications by placing the order and we will work with the best manufacturers to create your project."
    }, {
        image: quality,
        title: "Quality Assurance",
        content:"Through in-process inspection, we verify parts for size, tolerance, and appearance to meet your expectations."
    }, {
        image: delivery,
        title: "Delivery",
        content:"Your order will be carefully wrapped and shipped on time, ensuring that your parts arrive securely."
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
                        <p>{item?.content}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default WorkFlowDesign