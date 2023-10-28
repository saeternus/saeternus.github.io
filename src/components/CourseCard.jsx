import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";

function CourseCard({ img, category, heading, link, mrp, offer }) {

  const mrpValue = parseFloat(mrp.replace("₹", "").replace(/,/g, ""));
  const offerValue = parseFloat(offer.replace("₹", "").replace(/,/g, ""));

  const discountPercentage = isNaN(mrpValue) || isNaN(offerValue)
    ? "N/A"
    : Math.round(((mrpValue - offerValue) / mrpValue) * 100);

  return (
    <Link to={link} className="cardlink">
      <div className="card">
        <div className="discount-badge">
          {discountPercentage === "N/A" ? "N/A" : `${discountPercentage}% OFF`}
        </div>
        <div className="card-image">
          <img src={img} alt="Course Image" />
        </div>
        <div className="category">{category}</div>
        <div className="heading">
          {heading}
          <div className="cardprice">
            <span className="discounted">{offer}</span>
            <span className="cardmrp">{mrp}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
