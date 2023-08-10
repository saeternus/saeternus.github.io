import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";

function CourseCard({ img, category, heading, link }) {
  return (
    <Link to={link} className="cardlink">
      <div class="card">
        <div class="card-image">
          <img src={img} />
        </div>
        <div class="category"> {category} </div>
        <div class="heading">
          {heading}
          <div class="price">
            <span class="discounted">₹2,950</span>
            <span class="cardmrp">₹5,900</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
