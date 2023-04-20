import * as Components from './components';
import './OurWork.css'
import Frontend from "./assets/Frontend.png"
import Frontendback from "./assets/Asset 2@3x 1.png"
import Backend from './assets/backend@3x 1.png'
import Backendback from './assets/Backendback.png'
import APP from './assets/APP dev@3x 1.png'
import APPback from "./assets/app back@3x 1.png"
import UIUX from './assets/ui ux@3x 1.png'
import UIUXback from './assets/ui ux back@3x 1.png'

function Ourwork() {

  return (
    <div className='OurWork' >
      <div className='workBox'>
        <div className='header'>
        <p className='WorkHeading'>What We Do ...</p>
        <p className='Headertext'>Our solutions are designed to help businesses solve complex challenges and achieve their goals. Whether you need a new website, an e-commerce solution, a mobile application, digital marketing services, or technology consulting, we have the expertise and experience to help you succeed. </p>
        </div>
        <Components.Work text='Our solutions are designed to help businesses solve complex challenges and achieve their goals. Whether you need a new website, an e-commerce solution, a mobile application, digital marketing services, or technology consulting, we have the expertise and experience to help you succeed. Our solutions are designed to help businesses solve complex challenges and achieve their goals.' direction='rtl' heading='Frontend Development' img={`${Frontend}`} background={`${Frontendback}`} />
        <Components.Work text='Our solutions are designed to help businesses solve complex challenges and achieve their goals. Whether you need a new website, an e-commerce solution, a mobile application, digital marketing services, or technology consulting, we have the expertise and experience to help you succeed. Our solutions are designed to help businesses solve complex challenges and achieve their goals.' direction='ltr' heading='Backend Development' img={`${Backend}`} background={`${Backendback}`} />
        <Components.Work text='Our solutions are designed to help businesses solve complex challenges and achieve their goals. Whether you need a new website, an e-commerce solution, a mobile application, digital marketing services, or technology consulting, we have the expertise and experience to help you succeed. Our solutions are designed to help businesses solve complex challenges and achieve their goals.' direction='rtl' heading='App Development' img={`${APP}`} background={`${APPback}`} />
        <Components.Work text='Our solutions are designed to help businesses solve complex challenges and achieve their goals. Whether you need a new website, an e-commerce solution, a mobile application, digital marketing services, or technology consulting, we have the expertise and experience to help you succeed. Our solutions are designed to help businesses solve complex challenges and achieve their goals.' direction='ltr' heading='UI/UX' img={`${UIUX}`} background={`${UIUXback}`} />
      </div>
    </div>
  )
}

export default Ourwork
