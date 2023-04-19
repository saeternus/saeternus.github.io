import React from 'react'
import './Targets.css'

function Targets() {
  return (
    <div className='TargetCard'>
      <div className='TopicCard'>
        <div className='Topic'></div>
      </div>
      <div className='PicAndPoints'>
        <div className='Pic'>

        </div>
        <div className='Points'>
          <div className='Point Yellow'>
            <h3>Innovation</h3>
            <p className='Grey'>Our goal is to develop cutting-edge solutions that leverage the latest technologies and tools to solve complex business challenges. </p>
          </div>
          <div className='Point Blue'>
            <h3>Scalability</h3>
            <p className='Grey'> We strive to create solutions that are scalable and can adapt to our clients' evolving needs, ensuring long-term success. </p>
          </div>
          <div className='Point Green'>
            <h3>Customer Satisfaction</h3>
            <p className='Grey'>Our priority is to deliver exceptional customer service and support to build strong relationships with our clients and ensure their satisfaction with our solutions. </p>
          </div>
          <div className='Point Purple'>
            <h3>Continuous Improvement</h3>
            <p className='Grey'>We foster a culture of continuous learning, collaboration, and innovation to stay at the forefront of the technology industry and provide the best solutions to our clients. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Targets;
