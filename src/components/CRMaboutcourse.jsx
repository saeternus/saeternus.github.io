import React from "react";
import "./Aboutcourse.css";
import Authentic from "../assets/certificate.png";
import Online from "../assets/online classes.png";
import Life from "../assets/life time.png";
import Level from "../assets/beginner level.png";
import Support from "../assets/subtitles.png";

function CRMAbout() {
  const data = {
    details: [
      "Fundamentals of research: its Importance & Scope.",
      "Research: Meaning, Types, Objectives and Characteristics.",
      "Positivism and Post Positivism in Research.",
      "Introduction to Research in Social Sciences.",
      "Research Process and Designs.",
      "Various Methods and Techniques of Research.",
      "Formulation of Research Problems and Hypotheses.",
      "Literature Review and Referencing.",
      "Sampling Techniques and Error.",
      "Data Types and Sources: Primary and secondary.",
      "Questionnaire/Interview Schedule Designing.",
      "Data Preprocessing, Tabulation, and Graphical Representation.",
      "Application of Remote Sensing and GIS in Research.",
      "Use of Statistical Techniques in Research.",
      "Data Analysis and Visualization with SPSS and Python.",
      "Scale Techniques and Quality Measurement.",
      "Researcher Qualities and Attitude.",
      "Preparation of Research Reports and Papers.",
      "Research Proposals and Presentation Skills.",
      "Utilizing Internet for Research and Impact Analysis.",
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
              Covers pretty much everything you need to know about Research methodology
            </div>
            <div className="detailshead">Details:</div>
            <div className="detailstext">
              Gain a comprehensive understanding of research methodology with
              this course. Covering everything from the fundamentals and
              research process to data analysis, statistical techniques, and
              presentation skills, this course is designed to equip you with the
              knowledge and practical skills needed to excel in research. Topics
              include:
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
export default CRMAbout