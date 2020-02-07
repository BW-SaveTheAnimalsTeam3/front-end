import React from "react";

import Navigation from "./Navigation";
import SupporterCard from "./card/supporter-card";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navigation />
      <SupporterCard />
    </div>
  );
};

export default Dashboard;
