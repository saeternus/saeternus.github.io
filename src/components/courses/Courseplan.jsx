import React, { useState } from "react";
import "./Courseplan.css";
import plus from "../../assets/add.png";
import minus from "../../assets/minus.png";

function Courseplan({ course }) {

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
          <div className="daycount"> Day {e.index +1}</div>
          <div className="topicname">{e.value.Chapter} </div>
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
            {course.courseLine}
          </div>

          <div className="coursedistribution">
            {/* <div className="distributionpoints">
              <div className="grey circle"></div>
              <div className="distributionpoint">{course.duration} </div>
            </div>
            <div className="distributionpoints">
              <div className="grey circle"></div>
              <div className="distributionpoint">{course.numberOfLiveClasses} Live Classes</div>
            </div>
            <div className="distributionpoints">
              <div className="grey circle"></div>
              <div className="distributionpoint">{course.numberOfLiveClasses/Number(course.duration[0])} Lectures per week </div>
            </div>
            <div className="distributionpoints">
              <div className="grey circle"></div>
              <div className="distributionpoint">{course.numberOfAssignments} Assignments</div>
            </div>
            <div className="distributionpoints">
              <div className="grey circle"></div>
              <div className="distributionpoint">{course.projectsIncluded}</div>
            </div> */}
            {course.infoPoints && course.infoPoints.map((e, index) => (
              <div className="distributionpoints" key={index}>
                <div className="grey circle"></div>
                <div className="distributionpoint">{e}</div>
              </div>
            ))}

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
                {course.additionalInfo}
              </div>
            </div>
          </div>
          <div className="dayplans">
            {course.dayPlan.map((e, index) => {
              return <Dayplan index= {index} value={e} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courseplan;

