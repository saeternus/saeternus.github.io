import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";

function CourseCard({ img, category, heading, link, price,mrp, offer }) {
  const imagePath = `../../assets/${img}`;
  const mrpValue = parseFloat(mrp.replace("₹", "").replace(/,/g, ""));
  const offerValue = parseFloat(offer.replace("₹", "").replace(/,/g, ""));

  const discountPercentage = isNaN(mrpValue) || isNaN(offerValue)
    ? "N/A"
    : Math.round(((mrpValue - offerValue) / mrpValue) * 100);

  return (
    <Link to={link} className="cardlink">
      <div className="card">
        <div className="discount-badge">
          {offer} OFF
          {/* {discountPercentage === "N/A" ? "N/A" : `${offer}% OFF`} */}
        </div>
        <div className="card-image">
          <img src={require(`../../assets/${img}`)} alt="Course" />
        </div>
        <div className="category">{category}</div>
        <div className="heading">
          {heading}
          <div className="cardprice">
            <span className="discounted">{price}</span>
            <span className="cardmrp">{mrp}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
