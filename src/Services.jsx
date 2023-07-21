import * as Components from "./components";
import "./Services.css";
import Frontend from "./assets/Frontend.png";
import Frontendback from "./assets/Asset 2@3x 1.png";
import Backend from "./assets/backend@3x 1.png";
import Backendback from "./assets/Backendback.png";
import APP from "./assets/APP dev@3x 1.png";
import APPback from "./assets/app back@3x 1.png";
import UIUX from "./assets/ui ux@3x 1.png";
import UIUXback from "./assets/ui ux back@3x 1.png";
import { Helmet } from "react-helmet";

function Ourwork() {
  return (
    <div className="OurWork">
      <Helmet>
        <title>Saeternus</title>
        <meta name="description" content="Portfolio page for Saeternus" />
      </Helmet>
      <div className="workBox">
        <div className="header">
          <p className="WorkHeading">What We Do ...</p>
          <p className="Headertext">
            Our solutions are designed to help businesses solve complex
            challenges and achieve their goals. Whether you need a new website,
            an e-commerce solution, a mobile application, digital marketing
            services, or technology consulting, we have the expertise and
            experience to help you succeed.{" "}
          </p>
        </div>
        <Components.Work
          text="Our frontend team excels in creating visually stunning and responsive user interfaces. We use HTML, CSS, and JS frameworks like React and Angular to deliver seamless and immersive user experiences."
          direction="rtl"
          heading="Frontend Development"
          img={`${Frontend}`}
          background={`${Frontendback}`}
        />
        <Components.Work
          text="Behind every successful application lies a powerful backend infrastructure. Our skilled developers build scalable, secure, and efficient server-side applications using technologies like Node.js, Django, and Java."
          direction="ltr"
          heading="Backend Development"
          img={`${Backend}`}
          background={`${Backendback}`}
        />
        <Components.Work
          text="We specialize in crafting high-performance and feature-rich mobile applications for both Android and iOS platforms. Our expert team uses native and cross-platform technologies like React Native and Flutter to create engaging user experiences."
          direction="rtl"
          heading="App Development"
          img={`${APP}`}
          background={`${APPback}`}
        />
        <Components.Work
          text="User-centric design is at the core of our approach. Our talented designers conduct in-depth research, create wireframes, and perform iterative testing to ensure intuitive and visually appealing interfaces that captivate users."
          direction="ltr"
          heading="UI/UX"
          img={`${UIUX}`}
          background={`${UIUXback}`}
        />
      </div>
    </div>
  );
}

export default Ourwork;
