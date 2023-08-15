import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";

function CourseCard({ img, category, heading, link , mrp, offer}) {
  return (
    <Link to={link} className="cardlink">
      <div class="card">
        <div class="card-image">
          <img src={img} />
        </div>
        <div class="category"> {category} </div>
        <div class="heading">
          {heading}
          <div class="cardprice">
            <span class="discounted">{offer}</span>
            <span class="cardmrp">{mrp}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
