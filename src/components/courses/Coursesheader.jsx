import React from "react";
import { useEffect } from "react";
import "./Coursesheader.css";
import Check from "../../assets/check.png";

function Coursesheader({course}) {
  useEffect(() => {
    document.title = `${course.header}`;
  }, [course]);
  return (
    <>
      <div className="headerbox darkblue">
        <div className="headertext">
          <div className="courseheading">
            {course.header}
          </div>
          <div className="coursedes">
          {course.description}
          </div>
          <div className="coursepublish">
            <div className="circle"></div>
            <div>{course.begining}</div>
            <div className="name">{course.startdate}</div>
            <div className="checkicon">
              <img src={Check} alt="" />
            </div>
          </div>
          <div className="coursepublish">
            <div className="circle"></div>
            <div>For more info contact</div>
            <div className="number">{course.contact}</div>
            <div>
              or join {" "}
              {/* <a href="https://chat.whatsapp.com/FRmZTHwsDLACdxUAQOg3GE" target="_blank"> */}
              <a href={course.whatsapp} target="_blank">

                Whatsapp Group
              </a>
            </div>
            <div className="checkicon">
              <img src={Check} alt="" />
            </div>
          </div>
          <div className="courseregister">
            <div className="link">
              {/* <a href="https://forms.gle/2KLbzK9qmT7mr59j7" target="_blank">
               */}
              <a href={course.formLink} target="_blank">
                <div className="registerbutton">{course.registerBtn}</div>
              </a>
            </div>
            <div className="pricedetails">
              <div className="amt">
                
                <div className="price">{course.price}</div>
                <div className="mrp">{course.orignalPrice}</div>
                <div className="discount">{course.discount} off</div>
              </div>
              <div className="tax">Inclusive of GST</div>
            </div>
          </div>
        </div>
      </div>
      <div className="empty darkblue" style={{ height: "30px" }}></div>
      <div className="feturesbox">
        <div className="eighty">
          <div className="feturesbox">
            <div className="coursefeature">
              <div className="featurenumber">{course.duration}</div>
              <div className="featuretext">{course.durationLine}</div>
            </div>
            <div className="coursefeature">
              <div className="featurenumber">{course.numberOfLiveClasses}</div>
              <div className="featuretext">{course.liveLine}</div>
            </div>
            <div className="coursefeature">
              <div className="featurenumber">{course.numberOfAssignments}</div>
              <div className="featuretext">{course.assignmentsLine} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coursesheader;


