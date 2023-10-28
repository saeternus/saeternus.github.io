import React, { useState } from "react";
import "./Courseplan.css";
import plus from "../assets/add.png";
import minus from "../assets/minus.png";

export default function CRMPlan() {
  const dayplan = [
    {
      daycount: "Day 1",
      Chapter: "Fundamentals of research: Its Importance & Scope. Research: Meaning, Types, Objectives, and Characteristics. Positivism and Post Positivism to Research. Introducing the Idea of Research in Social Sciences. Limitation of Research.",
      duration: "1 hour 30 minutes",
      date: "7/11/2023",
      day: "Tuesday",
    },
    {
      daycount: "Day 2",
      Chapter: "Research Process. Research Designs and Variables. Vectoring and examples.",
      duration: "1 hour 30 minutes",
      date: "8/11/2023",
      day: "Wednesday",
    },
    {
      daycount: "Day 3",
      Chapter: "Various Methods and Techniques of Research.",
      duration: "1 hour 30 minutes",
      date: "9/11/2023",
      day: "Thursday",
    },
    {
      daycount: "Day 4",
      Chapter: "Formulation of Research Problem. Articulating your Synopsis. How to map the thesis to a claim?",
      duration: "1 hour 30 minutes",
      date: "10/11/2023",
      day: "Friday",
    },
    {
      daycount: "Day 5",
      Chapter: "Formulation of Hypothesis: Concepts, Types, and Sources. Characteristics of a Good Hypothesis. Hypothesis testing and Evaluation Design.",
      duration: "1 hour 30 minutes",
      date: "11/11/2023",
      day: "Saturday",
    },
    {
      daycount: "Day 6",
      Chapter: "How to read a research paper? Review of Literature. Referencing System.",
      duration: "1 hour 30 minutes",
      date: "12/11/2023",
      day: "Sunday",
    },
    {
      daycount: "Day 7",
      Chapter: "Sampling Design Techniques: Concepts and Types. Selection of Suitable Sampling Techniques. Sampling Size Decision. Sampling Error.",
      duration: "1 hour 30 minutes",
      date: "13/11/2023",
      day: "Monday",
    },
    {
      daycount: "Day 8",
      Chapter: "Data Types and Sources: Primary and secondary. Application of Sampling in on various types. User Study.",
      duration: "1 hour 30 minutes",
      date: "14/11/2023",
      day: "Tuesday",
    },
    {
      daycount: "Day 9",
      Chapter: "Designing Questionnaire/Interview Schedule.",
      duration: "1 hour 30 minutes",
      date: "15/11/2023",
      day: "Wednesday",
    },
    {
      daycount: "Day 10",
      Chapter: "Data Preprocessing. Data Preparation, Tabulation, Coding, and Editing. Graphical Representation and Mapping.",
      duration: "1 hour 30 minutes",
      date: "16/11/2023",
      day: "Thursday",
    },
    {
      daycount: "Day 11",
      Chapter: "Application of Remote Sensing in Research.",
      duration: "1 hour 30 minutes",
      date: "17/11/2023",
      day: "Friday",
    },
    {
      daycount: "Day 12",
      Chapter: "Application of GIS in Research.",
      duration: "1 hour 30 minutes",
      date: "18/11/2023",
      day: "Saturday",
    },
    {
      daycount: "Day 13",
      Chapter: "Use of Statistical Techniques in Research.",
      duration: "1 hour 30 minutes",
      date: "19/11/2023",
      day: "Sunday",
    },
    {
      daycount: "Day 14",
      Chapter: "Data Analysis and Visualisation with SPSS.",
      duration: "1 hour 30 minutes",
      date: "20/11/2023",
      day: "Monday",
    },
    {
      daycount: "Day 15",
      Chapter: "Introduction to Python. Exploratory Data Analysis with Python. Handling Large Excel and CSV files Using Open Street Maps.",
      duration: "1 hour 30 minutes",
      date: "21/11/2023",
      day: "Tuesday",
    },
    {
      daycount: "Day 16",
      Chapter: "More Python concepts. Data Analysis and Visualisation with Python.",
      duration: "1 hour 30 minutes",
      date: "22/11/2023",
      day: "Wednesday",
    },
    {
      daycount: "Day 17",
      Chapter: "Scale Techniques: Concepts, Types, Rating and Ranking Scale. Scale Construction Techniques, Multidimensional Scaling.",
      duration: "1 hour 30 minutes",
      date: "23/11/2023",
      day: "Thursday",
    },
    {
      daycount: "Day 18",
      Chapter: "Qualities of Researcher. Attitude Measuring and Observation. Importance of Velocity. Preparing your Elevator Pitch.",
      duration: "1 hour 30 minutes",
      date: "24/11/2023",
      day: "Friday",
    },
    {
      daycount: "Day 19",
      Chapter: "Precaution in Preparing the Research Report. The Mechanics of Writing: Report, Dissertation, Thesis. Index/Content, Appendix, Footnotes, Endnotes, Use of Diacritical Marks.",
      duration: "1 hour 30 minutes",
      date: "25/11/2023",
      day: "Saturday",
    },
    {
      daycount: "Day 20",
      Chapter: "Quotation, Citation, Bibliographical References. Drawing Conclusion, Giving Suggestions and Recommendations. Claims and Implied Evaluation.",
      duration: "1 hour 30 minutes",
      date: "26/11/2023",
      day: "Sunday",
    },
    {
      daycount: "Day 21",
      Chapter: "Writing Abstract, Book Review, Content Writing, Writing and Editing Research Papers. How to Avoid Plagiarism.",
      duration: "1 hour 30 minutes",
      date: "27/11/2023",
      day: "Monday",
    },
    {
      daycount: "Day 22",
      Chapter: "Formulation of Research Proposal. How to Ask for Funding/Collaboration? How to Give a Presentation.",
      duration: "1 hour 30 minutes",
      date: "28/11/2023",
      day: "Tuesday",
    },
    {
      daycount: "Day 23",
      Chapter: "Writing Well-Formatted Papers: LATEX and Overleaf.",
      duration: "1 hour 30 minutes",
      date: "29/11/2023",
      day: "Wednesday",
    },
    {
      daycount: "Day 24",
      Chapter: "Use of Internet in Research: Email, Google Scholar, Interaction through Social Networking and Other Channels. How to Showcase your Work on the Web? Understanding Impact Factor, Citations, H-index etc.",
      duration: "1 hour 30 minutes",
      date: "30/11/2023",
      day: "Thursday",
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

