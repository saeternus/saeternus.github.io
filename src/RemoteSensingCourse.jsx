import React from "react";
import * as Components from "./components/index";
import { Helmet } from "react-helmet";
import RemoteSensingHeader from "./components/RemoteSensingHeader";
import RemoteSensingAbout from "./components/RemoteSensingAbout";
import RemoteSensingPlan from "./components/RemoteSensingPlan";

export default function RemoteSensingCourse() {
  return (
    <div className="Coursepage">
      <Helmet>
        <title>Remote Sensing with ERDAS Certification</title>
        <meta name="description" content="Certificate Course in Remote Sensing with ERDAS" />
      </Helmet>
      <div className="empty darkblue"></div>
      <RemoteSensingHeader />
      <RemoteSensingAbout />
      <RemoteSensingPlan />
    </div>
  );
}

