import React from 'react'
import './Aboutcourse.css'
import Authentic from '../assets/certificate.png'
import Online from '../assets/online classes.png'
import Life from '../assets/life time.png'
import Level from '../assets/beginner level.png'
import Support from '../assets/subtitles.png'   

function Aboutcourse() {
    const data = {
        details: ['Apply UX strategies to a sites content & design',
            'Understand Information Architecture to enhance the content on your website',
            'Apply UX strategies to a sites content & design',
            'Know what dictates how your website should look',
            'Apply UX strategies to a sites content & design',
            'Design and code a B2B website, a B2C blog, and an ecommerce site',]
    }
    const feature = {
        features :[{
            title : 'Authentic Certificate',
            text : 'Earn a Certificate upon completion',
            img : Authentic
        },{
            title : 'Online Classes',
            text : 'Start instantly and learn at your own',
            img : Online
        },{
            title : 'Life Time Accessibility',
            text : 'Set and maintain flexible deadlines.',
            img : Life
        },{
            title : 'Beginner Level',
            text : 'No prior experience required.',
            img : Level
        },{
            title : 'Subtiteles Support',
            text : 'English, Hindi & Marathi',
            img : Support
        },]
    }

    function Detailspoint(e) {
        return (
            <div className='detailpoint'>
                <div className='dark circle'></div>
                <div className='pointtext'>{e.values}</div></div>
        )
    }

    function Featurespoint(e) {
        console.log(e.value.img)
        return(
            <div className='featurepoint'>
                <div className='featureimg'><img src={e.value.img} alt="" /></div>
                <div className='featuretextbox'>
                    <div className='featuretopic'>{e.value.title} </div>
                    <div className='featuretexts'>{e.value.text}</div>
                </div>
            </div>
        )
    }

    return (
        <div className='Aboutcoursebox'>
            <div className='eighty'>
                <div className='aboutcoursebox'>
                    <div className='aboutcoursetextarea'>
                        <div className='abouthead'>
                            <div className='line'></div>
                            <div className='abouttext'>About Course</div>
                        </div>
                        <div className='aboutheaing'>
                            Covers pretty much everything you need to know about UX
                        </div>
                        <div className='detailshead'>Details:</div>
                        <div className='detailstext'>This course will teach you everything you need to know about UX, including design, content, and coding. And you'll learn from the ground up, so it doesn't matter how much experience you have when you start.</div>
                        <div className='detailpoints'>
                            {data.details.map((e) => {
                                return (
                                    <Detailspoint values={e} />)
                            })}
                        </div>
                    </div>

                    <div className='featurestable'>
                        {feature.features.map((e)=>{
                            return(
                                <Featurespoint value={e}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutcourse
