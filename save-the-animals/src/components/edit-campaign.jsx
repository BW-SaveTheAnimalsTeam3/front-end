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

import {editCampaignModal} from '../actions/editCampaignActions'

const EditCampaign = (props) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");
  

  const handleClick = e => {
    e.preventDefault();
    console.log(e.target.value, "target val");
    console.log(selected, "selected");
    setSelected(e.target.value);
  };

  const handleChanges = e => {};

  const handleSubmit = e => {
    // e.preventDefault();
    console.log("submit");
    // setModal(false);
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

 console.log('props', props.openModal)

  return (
    <>
      <div className='edit-form'>
        <Modal isOpen={props.openModal}>
          <ModalHeader>
            Save This Turtle
            <p>South Palm Beach</p>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Input type="text" placeholder="Name Campaign" name="title" />
              <Input type="text" placeholder="Species" name="species" />
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
                />
              </div>
              <Input type="text" placeholder="Location" name="location" />
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
                  max={10000}
                  type="number"
                  step="1"
                  name="goal"
                />
              </InputGroup>
              <Input type="datetime-local" name="deadline" />
              <button type="submit" className="submit-button">
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
    console.log(state.editCampaignReducer, 'state')
    return {
        openModal: state.editCampaignReducer.isOpen
    }
}

export default connect(mapStateToProps, {editCampaignModal}) (EditCampaign);
