import React from "react";
import * as Components from "./components";
import background1 from "./assets/Shape1.png";
import background2 from "./assets/Shape2.png";
import background3 from "./assets/Shape3.png";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Saeternus</title>
        <meta name="description" content="Portfolio page for Saeternus" />
      </Helmet>
      <Components.MainSection />
      <div className="cards">

        <Components.Cards heading="24x7 Support" background={background3} />
        <Components.Cards
          heading="Custom Solution"
          background={background2}
          color="orange"
        />
        <Components.Cards heading="Reliability" background={background1} />
        
      </div>
      <Components.Mind />
      <Components.Solution />
      <Components.Why />
      <Components.Targets />
    </>
  );
}

export default Home;
