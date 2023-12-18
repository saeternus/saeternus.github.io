import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";

function CourseCard({ img, category, heading, link, price,mrp, offer }) {
  const imagePath = `../../assets/${img}`;
  const mrpValue = parseFloat(mrp.replace("₹", "").replace(/,/g, ""));
  const offerValue = parseFloat(offer.replace("₹", "").replace(/,/g, ""));
  const headingRef = useRef(null);
  useEffect(() => {
    const adjustHeadingFontSize = () => {
      const headingElement = headingRef.current;
      if (headingElement) {
        const card = headingElement.closest(".card");
        const cardStyles = window.getComputedStyle(card);
        const cardWidth = parseInt(cardStyles.width);

        let fontSize = 16; // Initial font size in pixels
        headingElement.style.fontSize = `${fontSize}px`;

        while (
          headingElement.scrollHeight > headingElement.offsetHeight &&
          fontSize > 10 // Minimum font size
        ) {
          fontSize -= 1;
          headingElement.style.fontSize = `${fontSize}px`;
        }
      }
    };

    adjustHeadingFontSize();

    // Re-adjust font size when window resizes
    window.addEventListener("resize", adjustHeadingFontSize);
    return () => {
      window.removeEventListener("resize", adjustHeadingFontSize);
    };
  }, []);

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
        <div className="heading dynamic-heading">
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
