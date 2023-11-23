import React from "react";
import "./Aboutcourse.css";
import Authentic from "../../assets/certificate.png";
import Online from "../../assets/online classes.png";
import Life from "../../assets/life time.png";
import Level from "../../assets/beginner level.png";
import Support from "../../assets/subtitles.png";

function Aboutcourse() {
  const data = {
    details: [
      "Digitization of maps and different themes for present day landform evaluation.",
      "Calculation of the area, perimeter and other domains for estimation of different layers for integration and decision making capacity.",
      "Auto Generation of hydrological parameters for water related processes.",
      "Use of various statistical methods in GIS for spatial and vector data.",
      "Application of GIS in various disciplines of geography, geology, social sciences, civil works, etc.",
      "Relevant for disciplines like Science, Social Science, Humanities, Archeology, Disaster Management, Engineering, Computer Science, Planning and Architechture, Mining, Agriculture, Population Studies, Medical Science etc."
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
              Covers pretty much everything you need to know about GIS
            </div>
            <div className="detailshead">Details:</div>
            <div className="detailstext">
              The course is uniquely designed by top technical experts to
              ensure the meaningful skill development which enables the
              candidates to gain insight about technology and make them ready to
              start/accelerate their carrier immediately after completing this
              course. The objective of the course is to develop an understanding
              and competence in, Geo spatial technology as-
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

export default Aboutcourse;
