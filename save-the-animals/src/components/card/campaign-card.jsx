import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress
} from "reactstrap";

import "./campaign-card.scss";

const CampaignCard = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="card">
      <h4>Save This Turtle</h4>
      <p className="location">South Palm Beach</p>
      <div className="status">Status: Critical</div>
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1564652518878-669c345bb458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
          alt="campaign image"
        />
      </div>
      <button onClick={toggle}>View Details</button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Save This Turtle
          <p>South Palm Beach</p>
        </ModalHeader>

        <ModalBody>
          <div className="status">Status: Critical</div>
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1564652518878-669c345bb458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
              alt="campaign image"
            />
          </div>
          <div className="bottom-content">
            <p>
              This dude won't stop harassing this turtle and making threatening
              hand gestures. We need $1100 to pay him off.
            </p>
            <div className="progress-info">
              <span>Progress Toward Goal:</span>
              <p>$825 / $1100</p>
            </div>
            <Progress value={75}>75%</Progress>
            <p><span>Deadline:</span> 02/03/2020 7:30 PM</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="edit-button">Edit Campaign</button>
          <button className="delete-button">Delete Campaign</button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CampaignCard;
