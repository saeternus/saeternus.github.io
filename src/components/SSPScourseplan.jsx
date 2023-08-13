import React, { useState } from "react";
import "./Courseplan.css";
import plus from "../assets/add.png";
import minus from "../assets/minus.png";

function Courseplan() {
  const dayplan = [
    {
      daycount: "Day 1",
      Chapter: "Introductory Statistics: Data types, Measures of Central tendency, SPSS Environment: Data View &amp; Variable View",
    },
    {
      daycount: "Day 2",
      Chapter: "Measures of Variability and Shape, Exploratory Data Analysis: Descriptive Statistics",
    },
    {
      daycount: "Day 3",
      Chapter: "Normality tests with plots",
    },
    {
      daycount: "Day 4",
      Chapter: "Data Management: Preparation, Computation & Transformation.",
    },
    {
      daycount: "Day 5",
      Chapter: "Bivariate analysis- cross tabulation-chi square, Kappa, correlation.",
    },
    {
      daycount: "Day 6",
      Chapter: "Graphical Representation of Data: Histogram, Bar plot, Pie chart, Frequency polygon and Bi-variate analysis",
    },
    {
      daycount: "Day 7",
      Chapter: "Parametric tests: t-test (one sample, paired sample & two independent sample),",
    },
    {
      daycount: "Day 8",
      Chapter: "One-way ANOVA, Post hoc tests",
    },
    {
      daycount: "Day 9",
      Chapter: "Two-way ANOVA, ANCOVA",
    },
    {
      daycount: "Day 10",
      Chapter: "Non-parametric tests: Mann Whitney U test, Wilcoxon sign rank test, one sample run test, Kruskal-Wallis test.",
    },
    {
      daycount: "Day 11",
      Chapter: "Linear Regression (Simple & Multiple) and its diagnostics",
    },
    {
      daycount: "Day 12",
      Chapter: "Logistic Regression-Binary & Ordinal and its diagnostics",
    },
    {
      daycount: "Day 13",
      Chapter: "Factor Analysis",
    },
    {
      daycount: "Day 14",
      Chapter: "Cluster Analysis-Hierarchical &amp; k-means clustering",
    },
    {
      daycount: "Day 15",
      Chapter: "Discriminant Analysis",
    },
    {
      daycount: "Day 16",
      Chapter: "Survival Analysis",
    },
    {
      daycount: "Day 17",
      Chapter: "Nearest Neighbour Analysis",
    },
    {
      daycount: "Day 18",
      Chapter: "Practice & Case Studies",
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
