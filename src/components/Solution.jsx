import React from "react";
import Puzzle from "../assets/puzzle.png";
import "./Solution.css";

function Solution() {
  return (
    <div className="solutionbox solutionimg">
      <div className="brain">
        <img src={Puzzle} alt="Bright Minds" />
      </div>
      <div className="brighttext">
        <p className="brighthead">Custom Solutions</p>
        <p className="brightcontent">
          We build on the IT domain expertise and industry knowledge to design
          sustainable technology solutions.
        </p>
      </div>
    </div>
  );
}

export default Solution;
