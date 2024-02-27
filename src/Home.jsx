import React from "react";
import * as Components from "./components";
import background1 from "./assets/Shape1.png";
import background2 from "./assets/Shape2.png";
import background3 from "./assets/Shape3.png";
import { Helmet } from "react-helmet";
import { motion, useAnimation } from "framer-motion";

function Home() {
  return (
    <>
      <Helmet>
        <title>Saeternus</title>
        <meta name="description" content="Portfolio page for Saeternus" />
      </Helmet>
      <Components.MainSection />
                   
                <div className="cards">
                <motion.div
                    initial={{ opacity: 0, scale: 0}}
                    whileInView={{ opacity: 1, scale: 1}}
                    viewport={{ once: true }}
                    transition={ {delay:0.2, duration: 0.3}}
                >  
                  <Components.Cards heading="24x7 Support" background={background3} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0}}
                    whileInView={{ opacity: 1, scale: 1}}
                    viewport={{ once: true }}
                    transition={ {delay:0, duration: 0.3}}
                >  
                  <Components.Cards
                    heading="Custom Solution"
                    background={background2}
                    color="orange"
                  />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0}}
                    whileInView={{ opacity: 1, scale: 1}}
                    viewport={{ once: true }}
                    transition={ {delay:0.3, duration: 0.3}}
                >  
                   <Components.Cards heading="Reliability" background={background1} />
                </motion.div>


                  

                 
                  
                </div>
      

      <Components.Mind />
      <Components.Solution />
      <Components.Why />
      <Components.Targets />
    </>
  );
}

export default Home;
