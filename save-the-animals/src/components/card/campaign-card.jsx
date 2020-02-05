import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress
} from "reactstrap";

import  EditCampaign  from '../edit-campaign';

const CampaignCard = (props) => {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleEdit = () => {
    setModal(false);
    setEditModal(!editModal);
  };

  return (
    <>
      {props.campaigns.map(campaign => {

        return (
          <div className="card" key={campaign.id}>
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
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>
                {campaign.campaign}
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
    </>
  );
};

export default CampaignCard;
