import React, { useState } from "react";
import "./Courseplan.css";
import plus from "../assets/add.png";
import minus from "../assets/minus.png";

export default function DAVPlan() {
  const dayplan = [
    {
      daycount: "Day 1",
      Chapter: "Python - Introduction, variables, constants, strings, lists and maps.",
      duration: "1 hour 30 minutes",
      date: "7/11/2023",
      day: "Tuesday",
    },
    {
      daycount: "Day 2",
      Chapter: "Python - conditionals, loops and functions.",
      duration: "1 hour 30 minutes",
      date: "8/11/2023",
      day: "Wednesday",
    },
    {
      daycount: "Day 3",
      Chapter: "Python - classes and packages. How to read documentation?",
      duration: "1 hour 30 minutes",
      date: "9/11/2023",
      day: "Thursday",
    },
    {
      daycount: "Day 4",
      Chapter: "Importing/loading datasets. Data wrangling, preprocessing and cleanup. Handling excel, csv and dataframes.",
      duration: "1 hour 30 minutes",
      date: "10/11/2023",
      day: "Friday",
    },
    {
      daycount: "Day 5",
      Chapter: "Exploratory data analysis with pandas and numpy. Basic statistical analysis like mean, median, mode, standard deviation, percentiles etc.",
      duration: "1 hour 30 minutes",
      date: "11/11/2023",
      day: "Saturday",
    },
    {
      daycount: "Day 6",
      Chapter: "Plotting with matplotlib. Visually appealing visualizations for papers and presentations.",
      duration: "1 hour 30 minutes",
      date: "12/11/2023",
      day: "Sunday",
    },
    {
      daycount: "Day 7",
      Chapter: "Area plots, histograms, bar charts, pie charts, box plots, and scatter plots.",
      duration: "1 hour 30 minutes",
      date: "13/11/2023",
      day: "Monday",
    },
    {
      daycount: "Day 8",
      Chapter: "Classification and regression decision trees. Linear regression, logistic regression.",
      duration: "1 hour 30 minutes",
      date: "14/11/2023",
      day: "Tuesday",
    },
    {
      daycount: "Day 9",
      Chapter: "Handling 3D data. Bubble plots, heatmaps and 3D bar charts.",
      duration: "1 hour 30 minutes",
      date: "15/11/2023",
      day: "Wednesday",
    },
    {
      daycount: "Day 10",
      Chapter: "Normality, Statistical tests, confidence interval estimates etc.",
      duration: "1 hour 30 minutes",
      date: "16/11/2023",
      day: "Thursday",
    },
    {
      daycount: "Day 11",
      Chapter: "Visualizing geospatial data with folium.",
      duration: "1 hour 30 minutes",
      date: "17/11/2023",
      day: "Friday",
    },
    {
      daycount: "Day 12",
      Chapter: "Model evaluation and refinement. Testing.",
      duration: "1 hour 30 minutes",
      date: "18/11/2023",
      day: "Saturday",
    },
  ];

  function Dayplan(e) {
    const [toggle, settoggle] = useState(false);

    function toggleswitch() {
      if (toggle) {
        settoggle(false);
      } else {
        settoggle(true);
      }
    }
    return (
      <div className="dayplanbox">
        <div className="dayplan" onClick={toggleswitch}>
          <div className="sign">
            {toggle ? (
              <>
                <div>
                  <img src={minus} alt="" />
                </div>
              </>
            ) : (
              <>
                <div>
                  <img src={plus} alt="" />
                </div>
              </>
            )}
          </div>
          <div className="daycount">{e.value.daycount}</div>
          <div className="topicname">{e.value.Chapter} </div>
          <div className="duration date">{e.value.date}</div>
          <div className="duration day">{e.value.day}</div>
          <div className="duration time">{e.value.duration}</div>
        </div>
        <div className={`daydescription ${toggle ? "" : "nonedisplay"}`}>
          <h3>{e.value.Chapter}</h3>
          {e.value.Chapterdes}
        </div>
      </div>
    );
  }

  return (
    <div className="Courseplanbox">
      <div className="eighty">
        <div className="courseplanbox">
          <div className="courseplanboxheading">
            <div className="line"></div>
            <div className="abouttext">Course Plan</div>
          </div>
          <div className="courseplanheading">
            This course is a balance of lectures & practicals
          </div>
          <div className="coursedistribution">
            <div className="distributionpoints">
              <div className="grey circle"></div>
              <div className="distributionpoint">6 weeks</div>
            </div>
            <div className="distributionpoints">
              <div className="grey circle"></div>
              <div className="distributionpoint">18 Live Classes</div>
            </div>
            <div className="distributionpoints">
              <div className="grey circle"></div>
              <div className="distributionpoint">6+ Assignments</div>
            </div>
            <div className="distributionpoints">
              <div className="grey circle"></div>
              <div className="distributionpoint">Hands-on Projects</div>
            </div>
            <div
              className="distributionpoints"
              style={{
                backgroundColor: "silver",
                borderRadius: "5px",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              <div
                className="circle"
                style={{ backgroundColor: "dimgray" }}
              ></div>
              <div
                className="distributionpoint"
                style={{ fontWeight: "bold", color: "dimgray" }}
              >
                Lecture timings will be decided on mutual consensus
              </div>
            </div>
          </div>
          <div className="dayplans">
            {dayplan.map((e) => {
              return <Dayplan value={e} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


