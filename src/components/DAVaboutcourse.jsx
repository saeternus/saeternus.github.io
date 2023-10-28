import React from "react";
import "./Aboutcourse.css";
import Authentic from "../assets/certificate.png";
import Online from "../assets/online classes.png";
import Life from "../assets/life time.png";
import Level from "../assets/beginner level.png";
import Support from "../assets/subtitles.png";

export default function DAVAbout() {
  const data = {
    details: [
      "Python - Introduction, variables, constants, strings, lists and maps.",
      "Python - conditionals, loops and functions.",
      "Python - classes and packages. How to read documentation?",
      "Importing/loading datasets. Data wrangling, preprocessing, and cleanup. Handling excel, csv, and dataframes.",
      "Exploratory data analysis with pandas and numpy. Basic statistical analysis like mean, median, mode, standard deviation, percentiles, etc.",
      "Plotting with matplotlib. Visually appealing visualizations for papers and presentations.",
      "Area plots, histograms, bar charts, pie charts, box plots, and scatter plots.",
      "Classification and regression decision trees. Linear regression, logistic regression.",
      "Handling 3D data. Bubble plots, heatmaps, and 3D bar charts.",
      "Normality, Statistical tests, confidence interval estimates, etc.",
      "Visualizing geospatial data with folium.",
      "Model evaluation and refinement. Testing.",
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
              Covers pretty much everything you need to know about DAV
            </div>
            <div className="detailshead">Details:</div>
            <div className="detailstext">
            Master the art of data analysis and visualization with Python in this comprehensive course. Covering a wide range of topics, from Python fundamentals and data handling to advanced visualization techniques and statistical analysis, this course is perfect for beginners and those looking to enhance their data analysis skills. Topics include:
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


