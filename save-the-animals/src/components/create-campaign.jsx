import React, { useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router";
import axios from "axios";

import Navigation from "./Navigation";
import { createCampaignPost } from "../actions/createCampaignActions";
import {registrationStore } from '../actions/registrationActions'

const CreateCampaign = props => {
  const user_id = localStorage.getItem('user_id')
  console.log(user_id)
  const history = useHistory();
  const [newCampaign, setNewCampaign] = useState({
    org_id: user_id,
    campaign: "",
    location: "",
    // image_url: "",
    description: "",
    
    species: "",
    urgency_level: "",
    funding_goal: "",
    deadline: ""
  });
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");

  const handleClick = e => {
    e.preventDefault();
    console.log(e.target.value, "target val");
    console.log(selected, "selected");
    setNewCampaign({ ...newCampaign, [e.target.name]: e.target.value });
    setSelected(e.target.value);
  };

  const handleChanges = e => {
    setNewCampaign({ ...newCampaign, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    axios.post(
      `https://save-the-animals-backend.herokuapp.com/api/campaigns/createNewCampaign`,
      newCampaign
    )
    .then(res => {console.log(res)
      history.push('/organization')
    })
    .catch(err => console.log(err))
    // props.history.push("/organization");
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
    setNewCampaign({ ...newCampaign, image_url: file.secure_url });
  };

  console.log("Campaign", newCampaign);
  // console.log('image', image)
  // console.log(props);

  return (
    <>
      <Navigation />
      <div className="create-form">
        <h2>Create A New Campaign</h2>
        <form
          onSubmit={(() => props.createCampaignPost(newCampaign), handleSubmit)}
        >
          <Input
            type="text"
            placeholder="Name Campaign"
            name="campaign"
            value={newCampaign.campaign}
            onChange={handleChanges}
          />
          <Input
            type="text"
            placeholder="Species"
            name="species"
            value={newCampaign.species}
            onChange={handleChanges}
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
                // onChange={uploadImage}
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
                <img src={image} style={{ width: "300px" }} />
              )}
            </div>
            <textarea
              className="description"
              type="text"
              placeholder="Tell us what's happening..."
              name="description"
              value={newCampaign.description}
              onChange={handleChanges}
            />
          </div>
          <Input
            type="text"
            placeholder="Location"
            name="location"
            value={newCampaign.location}
            onChange={handleChanges}
          />
          <ListGroup>
            <h3>Urgency Level</h3>
            <p>Select One. This can always be changed later.</p>
            <ListGroupItem
              onClick={handleClick}
              name="urgency_level"
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
              name="urgency_level"
              value="urgent"
              className={`urgent ${selected === "urgent" ? "selected" : ""}`}
              tag="button"
              action
            >
              Urgent
            </ListGroupItem>
            <ListGroupItem
              onClick={handleClick}
              name="urgency_level"
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
              name="urgency_level"
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
              name="funding_goal"
              value={newCampaign.funding_goal}
              onChange={handleChanges}
            />
          </InputGroup>
          <Input
            type="datetime-local"
            name="deadline"
            value={newCampaign.deadline}
            onChange={handleChanges}
          />
          <button type="submit" className="submit-button">
            Create Campaign
          </button>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state)
}

export default connect(mapStateToProps, { createCampaignPost, registrationStore })(CreateCampaign);
