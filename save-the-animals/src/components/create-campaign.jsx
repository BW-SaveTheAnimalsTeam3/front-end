import React, { useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import { connect } from "react-redux";

import { createCampaignPost } from "../actions/createCampaignActions";

const CreateCampaign = props => {
  const [newCampaign, setNewCampaign] = useState({
    title: "",
    species: "",
    image_url: "",
    description: "",
    location: "",
    urgency: "",
    goal: "",
    deadline: ""
  });
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setNewCampaign({ ...newCampaign, [e.target.name]: e.target.value });
  };

  const handleChanges = e => {
    setNewCampaign({ ...newCampaign, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    props.history.push("/organization");
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
    <div className="create-form">
      <h2>Create A New Campaign</h2>
      <form
        onSubmit={(() => props.createCampaignPost(newCampaign), handleSubmit)}
      >
        <Input
          type="text"
          placeholder="Name Campaign"
          name="title"
          value={newCampaign.title}
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
          <label htmlFor='file'>Upload Image</label>
          <input
            className="image"
            type="file"
            id='file'
            name="file"
            placeholder="Upload Image"
            onChange={uploadImage}
          />
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <img src={image} style={{ width: "300px" }} />
          )}
          <Input
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
            name="urgency"
            value="critical"
            className="critical"
            tag="button"
            action
          >
            Critical
          </ListGroupItem>
          <ListGroupItem
            onClick={handleClick}
            name="urgency"
            value="urgent"
            className="urgent"
            tag="button"
            action
          >
            Urgent
          </ListGroupItem>
          <ListGroupItem
            onClick={handleClick}
            name="urgency"
            value="pressing"
            className="pressing"
            tag="button"
            action
          >
            Pressing
          </ListGroupItem>
          <ListGroupItem
            onClick={handleClick}
            name="urgency"
            value="longterm"
            className="longterm"
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
            max={100}
            type="number"
            step="1"
            name="goal"
            value={newCampaign.goal}
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
  );
};

export default connect(null, { createCampaignPost })(CreateCampaign);
