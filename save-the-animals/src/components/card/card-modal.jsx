import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress
} from "reactstrap";
import axios from "axios";

const CardModal = props => {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const handleClick = (e, id) => {
    // e.preventDefault();
    // console.log(id)
    console.log(e.target, "target");
    props.editCampaignModal(true);
    toggleEdit();
    props.editCampaignGet(id);
  };

  const handleDelete = id => {
    axios
      .delete(
        `https://save-the-animals-backend.herokuapp.com/api/campaigns/${id}`
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const toggleEdit = () => {
    setModal(false);
    setEditModal(!editModal);
  };

  console.log(props);
  return (
    <div>
      {props.campaign.map(test => {
        return (
          <Modal isOpen={true}>
            <ModalHeader>
              {test.campaign}
              <p>{test.location}</p>
            </ModalHeader>

            <ModalBody>
              <div className="status">Status: {test.urgency_level}</div>
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1564652518878-669c345bb458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
                  alt="campaign image"
                />
              </div>
              <div className="bottom-content">
                <p>{test.description}</p>
                <div className="progress-info">
                  <span>Progress Toward Goal:</span>
                  <p>{test.funding_goal}</p>
                </div>
                <Progress value={75}>75%</Progress>
                <p>
                  <span>Deadline:</span> {test.deadline}
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                className="edit-button"
                onClick={() => handleClick(test.id)}
              >
                Edit Campaign
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(test.id)}
              >
                Delete Campaign
              </button>
            </ModalFooter>
          </Modal>
        );
      })}
    </div>
  );
};

export default CardModal;
