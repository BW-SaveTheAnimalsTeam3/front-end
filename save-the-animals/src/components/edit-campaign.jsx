import React, { useState } from "react";

import {
  ListGroup,
  ListGroupItem,
  Input,
  InputGroup,
  InputGroupAddon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { editCampaignModal, editCampaignPut } from "../actions/editCampaignActions";

const EditCampaign = props => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");
  const [initialValue, setInitialValue] = useState({
    campaign: props.campaign,
    location: props.location,
    description: props.description,
    species: props.species,
    urgency_level: props.urgency_level,
    funding_goal: props.funding_goal,
    deadline: props.deadline
  });
  console.log(initialValue);

  const handleClick = e => {
    e.preventDefault();
    console.log(e.target.value, "target val");
    console.log(selected, "selected");
    setSelected(e.target.value);
  };

  const editClick = e => {

  }

  const handleChanges = e => {
    setInitialValue({ ...initialValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    props.editCampaignPut(initialValue, props.id)
    
  };

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    // console.log(e.target, 'target')
    data.append("file", files[0]);
    data.append("upload_preset", "save-the-animals");
    setLoading(true);
    const res = await fetch(
      "http://api.cloudinary.com/v1_1/dbc1k1pq3/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  };

  console.log("props", props.openModal);
  console.log("initial value", initialValue);
  console.log("props", props.id);

  return (
    <>
      <div className="edit-form">
        <Modal isOpen={true}>
          <ModalHeader>
            Save This Turtle
            {props.campaign}
            <p>South Palm Beach</p>
            <button onClick={() => props.editCampaignModal(false)}>
              Close
            </button>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Name Campaign"
                name="campaign"
                value={initialValue.campaign}
                onChange={handleChanges}
              />
              <Input
                type="text"
                placeholder="Species"
                name="species"
                value={props.species}
              />
              <div className="image-description-cont">
                <div className="image-cont">
                  <label htmlFor="file">Upload Image</label>
                  <input
                    className="image"
                    type="file"
                    id="file"
                    name="file"
                    placeholder="Upload Image"
                    onChange={uploadImage}
                  />
                  {loading ? (
                    <div className="loader">
                      <Loader
                        type="RevolvingDot"
                        color="#37ec7e"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                      />
                    </div>
                  ) : (
                    <img src={image} style={{ width: "229px" }} />
                  )}
                </div>
                <textarea
                  className="description"
                  type="text"
                  placeholder="Tell us what's happening..."
                  name="description"
                  value={props.description}
                />
              </div>
              <Input
                type="text"
                placeholder="Location"
                name="location"
                value={props.location}
              />
              <ListGroup>
                <h3>Urgency Level</h3>
                <p>Select One. This can always be changed later.</p>
                <ListGroupItem
                  onClick={handleClick}
                  name="urgency"
                  value="critical"
                  className={`critical ${
                    selected === "critical" ? "selected" : ""
                  }`}
                  tag="button"
                  action
                >
                  Critical
                </ListGroupItem>
                <ListGroupItem
                  onClick={handleClick}
                  name="urgency"
                  value="urgent"
                  className={`urgent ${
                    selected === "urgent" ? "selected" : ""
                  }`}
                  tag="button"
                  action
                >
                  Urgent
                </ListGroupItem>
                <ListGroupItem
                  onClick={handleClick}
                  name="urgency"
                  value="pressing"
                  className={`pressing ${
                    selected === "pressing" ? "selected" : ""
                  }`}
                  tag="button"
                  action
                >
                  Pressing
                </ListGroupItem>
                <ListGroupItem
                  onClick={handleClick}
                  name="urgency"
                  value="longterm"
                  className={`longterm ${
                    selected === "longterm" ? "selected" : ""
                  }`}
                  tag="button"
                  action
                >
                  Longterm
                </ListGroupItem>
              </ListGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input
                  placeholder="Funding Goal"
                  min={0}
                  max={1000000}
                  type="number"
                  step="1"
                  name="goal"
                  value={props.funding_goal}
                />
              </InputGroup>
              <Input type="datetime-local" name="deadline" />
              <button type="submit" className="submit-button" onClick={() => editClick}>
                Apply Changes
              </button>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state.editCampaignReducer, "state");
  return {
    openModal: state.editCampaignReducer.isOpen,
    campaign: state.editCampaignReducer.campaign.campaign,
    species: state.editCampaignReducer.campaign.species,
    location: state.editCampaignReducer.campaign.location,
    description: state.editCampaignReducer.campaign.description,
    urgency_level: state.editCampaignReducer.campaign.urgency_level,
    funding_goal: state.editCampaignReducer.campaign.funding_goal,
    deadline: state.editCampaignReducer.campaign.deadline,
    id: state.editCampaignReducer.campaign.id
  };
};

export default connect(mapStateToProps, { editCampaignModal, editCampaignPut })(EditCampaign);
