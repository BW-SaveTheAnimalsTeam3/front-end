import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress
} from "reactstrap";

import EditCampaign from '../edit-campaign';
import axios from 'axios';

const CampaignCard = (props) => {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [campaigns, setCampaigns] = useState([]);
  const [query, setQuery] = useState('');

  const toggle = () => setModal(!modal);
  const toggleEdit = () => {
    setModal(false);
    setEditModal(!editModal);
  };

  // CALLING API TO RETURN CAMPAIGN CARD DATA
  useEffect(() => {
    axios
      .get('https://save-the-animals-backend.herokuapp.com/api/campaigns')
      .then(res => {
        const searchResults = res.data.filter(campaign => {

          // FILTERING THROUGH API RESPONSE AND SETTING CAMPAIGNS STATE TO MATCH SEARCH QUERY
          if (campaign.campaign.toLowerCase().includes(query.toLowerCase()) || campaign.location.toLowerCase().includes(query.toLowerCase()) || campaign.description.toLowerCase().includes(query.toLowerCase())) {
            return true;
          }
        });
        setCampaigns(searchResults);
      })
      .catch(err => {
        console.log("CANNOT RETRIEVE DATA", err);
      })
  }, [query])

  // SETTING QUERY STATE TO SEARCH-FORM INPUT VALUE
  const handleChanges = (e) => {
    setQuery(e.target.value);
  }


  return (
    <>
      <form className="search-form">
        <input type="text" placeholder="Search Campaigns" onChange={handleChanges} value={query} />
      </form>
      <>
        {/* STYLING CAMPAIGN CARDS IN GRID FORMAT */}
        <div className="grid-container">

          {/* MAPPING THROUGH FILTERED CAMPAIGNS. STATE SET ABOVE */}
          {campaigns.map((campaign, key) => {
            return (
              <div className="card" key={key}>
                <h4>{campaign.campaign}</h4>
                <p className="location">{campaign.location}</p>
                <div className="status">Status: {campaign.urgency_level}</div>
                <div className="image-container">
                  <img
                    src="https://images.unsplash.com/photo-1564652518878-669c345bb458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
                    alt="campaign image"
                  />
                </div>
                <button onClick={toggle}>View Details</button>

                {/* BUTTON CLICK OPENS MODAL WITH ADDITIONAL DETAILS */}
                <Modal isOpen={modal} toggle={toggle}>
                  <ModalHeader toggle={toggle}>
                    <h4>{campaign.campaign}</h4>
                    <p>{campaign.location}</p>
                  </ModalHeader>

                  <ModalBody>
                    <div className="status">Status: {campaign.urgency_level}</div>
                    <div className="image-container">
                      <img
                        src="https://images.unsplash.com/photo-1564652518878-669c345bb458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
                        alt="campaign image"
                      />
                    </div>
                    <div className="bottom-content">
                      <p>
                        {campaign.description}
                      </p>
                      <div className="progress-info">
                        <span>Progress Toward Goal:</span>
                        <p>{campaign.funding_goal}</p>
                      </div>
                      <Progress value={75}>75%</Progress>
                      <p><span>Deadline:</span> {campaign.deadline}</p>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <button className="edit-button">Edit Campaign</button>
                    <button className="delete-button">Delete Campaign</button>
                  </ModalFooter>
                </Modal>
              </div>
            )
          })}
        </div>
      </>
    </>
  );
};

export default CampaignCard;
