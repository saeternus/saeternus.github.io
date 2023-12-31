import React from 'react'
import './Why.css'
import { motion, useAnimation } from "framer-motion";

function Why() {
    return (
        <div>
            {/* <hr className='TopLine'></hr> */}
            <div className='Why'>
            <motion.div
                    initial={{ opacity: 0, scale: 0 }} 
                    whileInView={{ opacity: 1, scale: [1.2, 1] }} 
                    transition={{ duration: 1, }} 
                    ><p className='WhyTopic'>Why Saeturnus?</p>         
                </motion.div>
                
                <div className='Cards'>
                    
                    <div className='Card'>
                        <h2>Solutions</h2>
                        <p>Our solutions are designed to help businesses solve complex challenges and achieve their goals. Whether you need a new website, an e-commerce solution, a mobile application, digital marketing services, or technology consulting, we have the expertise and experience to help you succeed. </p>
                    </div>
                    <div className='Card'>
                        <h2>Personalization</h2>
                        <p>We understand that every business is unique and has specific needs and requirements. We offer personalized solutions that are tailored to our clients' individual needs. Our personalized approach ensures that our clients receive solutions that are tailored to their specific needs and requirements.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Why
