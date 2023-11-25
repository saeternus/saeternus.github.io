import React from "react";
import "./Aboutcourse.css";
import Authentic from "../../assets/certificate.png";
import Online from "../../assets/online classes.png";
import Life from "../../assets/life time.png";
import Level from "../../assets/beginner level.png";
import Support from "../../assets/subtitles.png";

function RemoteSensingAbout() {
  const data = {
    details: [
        "Satellite Image Processing: FCC preparation, image referencing, and enhancement.",
        "Image Classification and Analysis: Digital classification, supervised/unsupervised classification, and on-screen visual interpretation.",
        "Advanced Technologies: Delve into LiDAR, microwave, and hyperspectral data, understanding their applications and advancements.",
        "Real-world Use Cases: Examine practical applications through case studies, highlighting the versatility of remote sensing technologies.",
        "Practical Hands-on Practice: Engage in extensive hands-on sessions, reinforcing skills in utilizing ERDAS Imagine for practical applications.",         
    ],
  };
  const feature = {
    features: [
      {
        title: "Authentic Certificate",
        text: "Earn a Certificate upon completion",
        img: Authentic,
      },
      {
        title: "Live Classes",
        text: "Realtime Doubt Solving",
        img: Online,
      },
      {
        title: "Reading Materials and Notes",
        text: "Set and maintain flexible deadlines.",
        img: Life,
      },
      {
        title: "Beginner Level",
        text: "No prior experience required.",
        img: Level,
      },
      {
        title: "Medium of Instruction",
        text: "English & Hindi",
        img: Support,
      },
    ],
  };

  function Detailspoint(e) {
    return (
      <div className="detailpoint">
        <div className="dark circle"></div>
        <div className="pointtext">{e.values}</div>
      </div>
    );
  }

  function Featurespoint(e) {
    console.log(e.value.img);
    return (
      <div className="featurepoint">
        <div className="featureimg">
          <img src={e.value.img} alt="" />
        </div>
        <div className="featuretextbox">
          <div className="featuretopic">{e.value.title} </div>
          <div className="featuretexts">{e.value.text}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="Aboutcoursebox">
      <div className="eighty">
        <div className="aboutcoursebox">
          <div className="aboutcoursetextarea">
            <div className="abouthead">
              <div className="line"></div>
              <div className="abouttext">About Course</div>
            </div>
            <div className="aboutheaing">
              Covers pretty much everything you need to know about Remote Sensing and ERDAS Imagine
            </div>
            <div className="detailshead">Details:</div>
            <div className="detailstext">
            The Remote Sensing with ERDAS Imagine Certification Course offers a comprehensive exploration of remote sensing principles and practical applications using ERDAS Imagine software. Beginning with foundational concepts, participants learn satellite image processing techniques, image classification, and analysis methodologies. Advanced technologies, including LiDAR and hyperspectral data, are covered alongside real-world use cases and applications of UAVs in remote sensing. Hands-on practice sessions reinforce theoretical knowledge, preparing participants for certification through a structured curriculum.
            Topics include:
            </div>
            <div className="detailpoints">
              {data.details.map((e) => {
                return <Detailspoint values={e} />;
              })}
            </div>
          </div>

          <div className="featurestable">
            {feature.features.map((e) => {
              return <Featurespoint value={e} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default RemoteSensingAbout