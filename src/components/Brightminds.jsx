import React from "react";
import brain from "../assets/brain.png";
import "./brightminds.css";
import { motion, useAnimation } from "framer-motion";

function Brightminds() {
  return (
    <div className="brightbox brainimg">
      <div className="brain">
      <motion.div
                    initial={{ opacity: 0, scale:0}}
                    whileInView={{ opacity: 1,scale:1}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2}}
          >
            
            <img src={brain} alt="Bright Minds" />   
          </motion.div>
        
      </div>
      <div className="brighttext ">
          <motion.div
                    initial={{ opacity: 0, y:-20 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5}}
          >
            
            <p className="brighthead">Innovation at our core </p>       
          </motion.div>
        
          <motion.div
                    initial={{ opacity: 0, y:20 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5}}
          >
          <p className="brightcontent">
            Our team can assist you in transforming your business with the latest
            tech capabilities to stay ahead of the curve.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

export default Brightminds;
