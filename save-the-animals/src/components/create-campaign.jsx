import React, { useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

const CreateCampaign = () => {
  const [newCampaign, setNewCampaign] = useState({
    title: "",
    species: "",
    description: "",
    location: "",
    urgency: "",
    goal: "",
    deadline: ""
  });

  const handleClick = e => {
    e.preventDefault();
    setNewCampaign({ ...newCampaign, [e.target.name]: e.target.value });
  };

  const handleChanges = e => {
    setNewCampaign({ ...newCampaign, [e.target.name]: e.target.value })
  };

  console.log("Campaign", newCampaign);

  return (
    <div className="create-form">
      <h2>Create A New Campaign</h2>
      <form>
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
        <Input
        className='description'
          type="text"
          placeholder="Tell us what's happening..."
          name="description"
          value={newCampaign.description}
          onChange={handleChanges}
        />
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
        <button className='submit-button'>Create Campaign</button>
      </form>
    </div>
  );
};

export default CreateCampaign;
