import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory} from 'react-router';

import CampaignCard from '../card/campaign-card';
import Navigation from '../Navigation';

const OrganizationProfile = (props) => {
  const [campaigns, setCampaigns] = useState([]);
  const history = useHistory()

  const handleClick = e => {
    e.preventDefault();
    history.push('/create-campaign');
  }

  // AXIOS CALL HERE WHEN ENDPOINTS ARE READY
  useEffect(() => {
    axios
      .get('https://save-the-animals-backend.herokuapp.com/api/campaigns/organizations/1')
      .then(res => {
        // console.log('.get response', res)
        setCampaigns(res.data);
      })
      .catch(err => {
        console.log("cannot get data", err);
      })
  }, [])

  // console.log(props, 'props')

  return (
    <>
      <Navigation />
      <div className='profile'>
        <div className='user-info'>
          <div className='profile-image'></div>
          <div className='user-info-text'>
            <h2>Caribbean Sea Turtle Project</h2>
            <p>St. George's, Grenada</p>
            <p>Conservation Organization</p>
          </div>
        </div>
        <div className='feed-buttons'>
          <h3><span>Campaigns</span></h3>
          <h3 onClick={handleClick}>Start New Campaign</h3>
        </div>
        <div className='feed'>
          <CampaignCard campaigns={campaigns} />
        </div>
      </div>
    </>
  );
};

export default OrganizationProfile;
