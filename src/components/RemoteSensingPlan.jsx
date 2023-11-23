import React, { useState } from "react";
import "./Courseplan.css";
import plus from "../assets/add.png";
import minus from "../assets/minus.png";

export default function RemoteSensingPlan() {
  const dayplan = [
    {
      daycount: "Day 1",
      Chapter: "Introduction to Remote Sensing: A Short History of Remote Sensing; Introduction to Digital Data; Important Basic Concepts of Remote Sensing; Geographic Concepts",
      duration: "1 hour 30 minutes",
      date: "25/12/2023",
      day: "Monday",
    },
    {
      daycount: "Day 2",
      Chapter: "Satellite Image Technology and Basics: The Electromagnetic Spectrum; Passive/Active Sensors; Remote Sensing Sensor Platforms; Analogue Aerial Photography; Digital Imagery; Imagery Types",
      duration: "1 hour 30 minutes",
      date: "29/12/2023",
      day: "Friday",
    },
    {
      daycount: "Day 3",
      Chapter: "Image Processing Software Installation Demo",
      duration: "1 hour 30 minutes",
      date: "1/01/2024",
      day: "Monday",
    },
    {
      daycount: "Day 4",
      Chapter: "Satellite Image Pre Processing-I: Satellite Data Downloading; FCC Preparation; Colour Matching; Hands on Practice",
      duration: "1 hour 30 minutes",
      date: "5/01/2024",
      day: "Friday",
    },
    {
      daycount: "Day 5",
      Chapter: "Satellite Image Pre Processing-II: Image Pre-Processing; Hands on Practice",
      duration: "1 hour 30 minutes",
      date: "8/01/2024",
      day: "Monday",
    },
    {
      daycount: "Day 6",
      Chapter: "Satellite Image Pre Processing-III: Image Referencing and Transformation; Image Mosaics; Hands on Practice",
      duration: "1 hour 30 minutes",
      date: "12/01/2024",
      day: "Friday",
    },
    {
      daycount: "Day 7",
      Chapter: "Hands on Practice for Satellite Image Pre Processing",
      duration: "1 hour 30 minutes",
      date: "15/01/2024",
      day: "Monday",
    },
    {
      daycount: "Day 8",
      Chapter: "Image Processing-I: Image Enhancement; Hands on Practice",
      duration: "1 hour 30 minutes",
      date: "19/01/2024",
      day: "Friday",
    },
    {
      daycount: "Day 9",
      Chapter: "Image Processing-II: Image Fusion; Hands on Practice",
      duration: "1 hour 30 minutes",
      date: "22/01/2024",
      day: "Monday",
    },
    {
      daycount: "Day 10",
      Chapter: "Image Classification-I: General Introduction; Vector File Creation; Raster File Creation; Hands on Practice",
      duration: "1 hour 30 minutes",
      date: "26/01/2024",
      day: "Friday",
    },
    {
      daycount: "Day 11",
      Chapter: "Image Classification-II: Digital Classification; Image Classification Unsupervised; Image Classification Supervised; Hands on Practice",
      duration: "1 hour 30 minutes",
      date: "29/01/2024",
      day: "Monday",
    },
    {
      daycount: "Day 12",
      Chapter: "Image Classification-III: On Screen Visual Interpretation; Change Detection; Vegetation Indices Analysis; Hands on Practice",
      duration: "1 hour 30 minutes",
      date: "2/02/2024",
      day: "Friday",
    },
    {
      daycount: "Day 13",
      Chapter: "Hands on Practice for Image Classification",
      duration: "1 hour 30 minutes",
      date: "5/02/2024",
      day: "Monday",
    },
    {
      daycount: "Day 14",
      Chapter: "Satellite Image Analysis-I: Attribute Formation; Colour Coding; Hands on Practice",
      duration: "1 hour 30 minutes",
      date: "9/02/2024",
      day: "Friday",
    },
    {
      daycount: "Day 15",
      Chapter: "Satellite Image Analysis-II: Area Calculation; Statistics Generation",
      duration: "1 hour 30 minutes",
      date: "12/02/2024",
      day: "Monday",
    },
    {
      daycount: "Day 16",
      Chapter: "Advanced Technology of Remote Sensing: Brief Description of Optical, Microwave, LiDAR & Hyperspectral Data; Advancement of Mivrowave, LiDAR and Hyperspectral on Optical Data; Use Cases of Various Aspects of Remote Sensing; UAV (Unmanned Aerial Vehicle)",
      duration: "1 hour 30 minutes",
      date: "16/02/2024",
      day: "Friday",
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
              <div className="distributionpoint">8 Weeks</div>
            </div>
            <div className="distributionpoints">
              <div className="grey circle"></div>
              <div className="distributionpoint">16 Live Classes</div>
            </div>
            <div className="distributionpoints">
              <div className="grey circle"></div>
              <div className="distributionpoint">8 Assignments</div>
            </div>
            {/* <div className="distributionpoints">
              <div className="grey circle"></div>
              <div className="distributionpoint">Hands-on Projects</div>
            </div> */}
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
                Lecture timings will be decided as per your avalibility
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
