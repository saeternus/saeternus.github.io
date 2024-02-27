import React from "react";
import Puzzle from "../assets/puzzle.png";
import "./Solution.css";
import { motion, useAnimation } from "framer-motion";

function Solution() {
  return (
    <div className="solutionbox solutionimg">
      <div className="brain">
      <motion.div
                    initial={{ opacity: 0, scale:0}}
                    whileInView={{ opacity: 1,scale:1}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2}}
          >
        <img src={Puzzle} alt="Bright Minds" />
        </motion.div>

      </div>
      <div className="brighttext">
      <motion.div
                    initial={{ opacity: 0, y:-20 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5}}
          >
        <p className="brighthead">Custom Solutions</p>
        </motion.div>

        <motion.div
                    initial={{ opacity: 0, y:20 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5}}
          >
        <p className="brightcontent">
          We build on the IT domain expertise and industry knowledge to design
          sustainable technology solutions.
        </p>
        </motion.div>

      </div>
    </div>
  );
}

export default Solution;
