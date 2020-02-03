import React from "react";
import CampaignCard from '../card/campaign-card';

const OrganizationProfile = () => {
  return (
    <>
      <div>
        <h2>Caribbean Sea Turtle Project</h2>
        <p>St. George's, Grenada</p>
        <p>Conservation Organization</p>
      </div>
      <div>
        <h3>Campaigns</h3>
        <h3>Start New Campaign</h3>
      </div>
      <div className='feed'>
        <CampaignCard />
      </div>
    </>
  );
};

export default OrganizationProfile;
