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
      "Descriptive Statistics - It includes methodologies such as cross-tabulation, frequencies, and descriptive ratio statistics.",
      "Bivariate Statistics - It includes methodologies such as means, nonparametric tests, correlation, and Analysis of Variance (ANOVA).",
      "Predicting numeral outcomes such as linear regression.",
      "Methodologies such as cluster analysis and factor analysis which is great for predicting for identifying groups.",
      "Numerous chart and graph options for visualizing data patterns, such as histograms, bar charts, and scatter plots.",
      "Government entities, educational institutions, survey companies, market researchers, marketing organizations, health researchers, data miners, and many others use it for analysing survey data. It is popular in academic, scientific, and applied research environments.",
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
    // console.log(e.value.img);
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
              Covers pretty much everything you need to know about SPSS
            </div>
            <div className="detailshead">Details:</div>
            <div className="detailstext">
              {/* The course is uniquely designed by top technical experts to ensure
              the meaningful skill development which enables the candidates to
              gain insight about technology and make them ready to
              start/accelerate their carrier immediately after completing this
              course. SPSS Training course aims to deliver quality training that
              covers solid fundamental knowledge on core concepts with a
              practical approach. Such exposure will help learners scale up
              their skills and perform real-time projects with the best
              practices. It is a perfect practical and interactive course that
              gives excellent basic to intermediate knowledge. It includes- */}
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
