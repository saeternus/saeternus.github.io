import React, { useState } from "react";
import "./Courseplan.css";
import plus from "../assets/add.png";
import minus from "../assets/minus.png";

function Courseplan() {
  const dayplan = [
    {
      daycount: "Day 1",
      Chapter: "Introduction to GIS",
      duration: "1 hours 30 minutes",
      date: "2/10/2023",
      day: "Monday",
      Chapterdes:
        "Basic concepts: Definition and history, Components of GIS, Recent trends and applications of GIS.",
    },
    {
      daycount: "Day 2",
      Chapter: "Data structure and formats, Spatial data models",
      duration: "1 hours 30 minutes",
      date: "4/10/2023",
      day: "Wednesday",
      Chapterdes:
        "Data structure and formats, Spatial data models - Raster and vector, Data base design- editing and topology creation in GIS,",
    },
    {
      daycount: "Day 3",
      Chapter: "Spatial and non-spatial data",
      duration: "1 hours 30 minutes",
      date: "6/10/2023",
      day: "Friday",
      Chapterdes:
        "Linkage between spatial and non-spatial data, Data inputting in GIS. Rectification, Geo-referencing, Root Mean Square (RMS) Error.",
    },
    {
      daycount: "Day 4",
      Chapter: "Data Types and Data Models",
      duration: "1 hours 30 minutes",
      date: "9/10/2023",
      day: "Monday",
      Chapterdes: "Data Types; Spatial Data; Non-Spatial Data, Data Input.",
    },
    {
      daycount: "Day 5",
      Chapter: "GIS Data, Metadata",
      duration: "1 hours 30 minutes",
      date: "11/10/2023",
      day: "Wednesday",
      Chapterdes:
        "Existing GIS Data, Metadata; Conversion of Existing Data, Creating New Data.",
    },
    {
      daycount: "Day 6",
      Chapter: "More on Data Models",
      duration: "1 hours 30 minutes",
      date: "13/10/2023",
      day: "Friday",
      Chapterdes:
        "Data Models; Vector Data Model; Raster Data Model; Integration and Comparison of Vector and Raster Data Models.",
    },
    {
      daycount: "Day 7",
      Chapter: "Spatial Data Editing",
      duration: "1 hours 30 minutes",
      date: "16/10/2023",
      day: "Monday",
      Chapterdes: "Types of Digitizing Errors, Causes for Digitizing Errors.",
    },
    {
      daycount: "Day 8",
      Chapter: "Topological Editing and Non-topological Editing",
      duration: "1 hours 30 minutes",
      date: "18/10/2023",
      day: "Wednesday",
      Chapterdes: "Topological Editing and Non-topological Editing.",
    },
    {
      daycount: "Day 9",
      Chapter: "Other Editing Operations",
      duration: "1 hours 30 minutes",
      date: "20/10/2023",
      day: "Friday",
      Chapterdes: "Editing Using Topological Rules.",
    },
    {
      daycount: "Day 10",
      Chapter: "Attribute Data and Data Exploration",
      duration: "1 hours 30 minutes",
      date: "23/10/2023",
      day: "Monday",
      Chapterdes:
        "Attribute Data in GIS, Attribute Data Entry, Manipulation of Fields and Attribute Data.",
    },
    {
      daycount: "Day 11",
      Chapter: "DataExploration",
      duration: "1 hours 30 minutes",
      date: "25/10/2023",
      day: "Wednesday",
      Chapterdes: "Attribute Data Query, Raster Data Query.",
    },
    {
      daycount: "Day 12",
      Chapter: "Map- Based Data Interpretation",
      duration: "1 hours 30 minutes",
      date: "27/10/2023",
      day: "Friday",
      Chapterdes: "Map- Based Data Interpretation.",
    },
    {
      daycount: "Day 13",
      Chapter: "Spatial Analysis",
      duration: "1 hours 30 minutes",
      date: "30/10/2023",
      day: "Monday",
      Chapterdes:
        "Spatial Data: Definition, Analysis, Processes &amp; Steps, Software and Tools, Geodatabase Model, Role of Databases in GIS, Creating, Editing and Managing.",
    },
    {
      daycount: "Day 14",
      Chapter: "Classification scheme of GIS Operations",
      duration: "1 hours 30 minutes",
      date: "1/11/2023",
      day: "Wednesday",
      Chapterdes:
        "Classification scheme of Vector-Based and Raster-Based GIS Operation Raster-Based Techniques: Methods of reclassification, overlay analysis.",
    },
    {
      daycount: "Day 15",
      Chapter: "Digital Terrain Analysis and Modelling",
      duration: "1 hours 30 minutes",
      date: "3/11/2023",
      day: "Friday",
      Chapterdes:
        "TIN and DEM, Surface representation and analysis, Slope and Aspect, Geographic Visualization Data Classification, Map Comparison.",
    },
    {
      daycount: "Day 16",
      Chapter: "Geo Statistical Analysis Techniques",
      duration: "1 hours 30 minutes",
      date: "6/11/2023",
      day: "Monday",
      Chapterdes:
        "Introduction to Spatial Interpolation: Control Points, Global Method- Trend surface analysis, regression model",
    },
    {
      daycount: "Day 17",
      Chapter: "Local methods using 3D Analyst",
      duration: "1 hours 30 minutes",
      date: "8/11/2023",
      day: "Wednesday",
      Chapterdes:
        "Inverse Distance weighted Interpolation, Kriging- Ordinary Kriging and Universal Kriging, GIS and decision support system.",
    },
    {
      daycount: "Day 18",
      Chapter: "Introduction to Analytical Hierarchy Process (AHP)",
      duration: "1 hours 30 minutes",
      date: "10/11/2023",
      day: "Friday",
      Chapterdes:
        "Introduction to Analytical Hierarchy Process (AHP), basic principal of AHP. Principal and components of multiple criteria decisionmaking.",
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

export default Courseplan;
