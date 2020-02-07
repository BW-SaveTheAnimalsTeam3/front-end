import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import { connect } from "react-redux";
import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router";

import EditCampaign from "../edit-campaign";
import { donationPost } from "../../actions/donationActions";

const SupporterCard = props => {
  const user_id = localStorage.getItem("user_id");
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [modalState, setModalState] = useState({});
  const history = useHistory();
  const [donations, setDonations] = useState(0);

  const [campaigns, setCampaigns] = useState([]);
  const [query, setQuery] = useState("");
  const [currentDonations, setCurrentDonations] = useState(0)

  const toggle = () => setModal(!modal);
  const toggleEdit = () => {
    setModal(false);
    setEditModal(!editModal);
  };

  const handleEdit = id => {
    props.editCampaignModal(true);
    toggleEdit();
    props.editCampaignGet(id);
  };

  const detailClick = id => {
    setModal(!modal);
    console.log("this is the id", id);
    axiosWithAuth()
      .get(`/campaigns/${id}`)
      .then(res => {
        console.log(res);
        setModalState(res.data);
      })
      .catch(err => console.log(err));
    
      axios
    .get(`https://save-the-animals-backend.herokuapp.com/api/donations/campaigns/${id}`)
    .then(res => {console.log('donation response',res.data)
})
    .catch(err => console.log(err))
  };

 

  const handleDonations = e => {
    e.preventDefault();
    setDonations(e.target.value);
  };

//   const fetchDonations = id => {
    
//   }

  const donationClick = campaign_id => {
    console.log(`Just received the following donation amount: ${donations}`);
    console.log(campaign_id);
    const donationSubmit = {
      user_id: user_id,
      campaign_id: campaign_id,
      donation_amount: donations
    };
    console.log("donation submit", donationSubmit);
    props.donationPost(donationSubmit)
    setCurrentDonations(props.donations)
  };

  

//   console.log("props in campaign card", props);
//   console.log("modal state", modalState);

  useEffect(() => {
    axios
      .get("https://save-the-animals-backend.herokuapp.com/api/campaigns")
      .then(res => {
        const searchResults = res.data.filter(campaign => {
          // FILTERING THROUGH API RESPONSE AND SETTING CAMPAIGNS STATE TO MATCH SEARCH QUERY
          if (
            campaign.campaign.toLowerCase().includes(query.toLowerCase()) ||
            campaign.location.toLowerCase().includes(query.toLowerCase()) ||
            campaign.description.toLowerCase().includes(query.toLowerCase())
          ) {
            return true;
          }
        });
        setCampaigns(searchResults);
      })
      .catch(err => {
        console.log("CANNOT RETRIEVE DATA", err);
      });
  }, [query]);

  // SETTING QUERY STATE TO SEARCH-FORM INPUT VALUE
  const handleChanges = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search Campaigns"
          onChange={handleChanges}
          value={query}
        />
      </form>
      {/* STYLING CAMPAIGN CARDS IN GRID FORMAT */}
      <div className="grid-container">
        {/* MAPPING THROUGH FILTERED CAMPAIGNS. STATE SET ABOVE */}
        {campaigns.map(campaign => {
          return (
            <div className="card" key={campaign.id}>
              {/* {console.log(campaign.id)} */}
              <h4>{campaign.campaign}</h4>
              <p className="location">{campaign.location}</p>
              <div className="status">Status: {campaign.urgency_level}</div>
              <div className="image-container">
                <img src={campaign.image} alt="campaign image" />
              </div>
              <button onClick={() => detailClick(campaign.id)}>
                View Details
              </button>
              <Modal isOpen={modal} toggle={detailClick}>
                <ModalHeader toggle={detailClick}>
                  {modalState.campaign}
                  <p>{modalState.location}</p>
                </ModalHeader>

                <ModalBody>
                  <div className="status">
                    Status: {modalState.urgency_level}
                  </div>
                  <div className="image-container">
                    <img src={modalState.image} alt="campaign image" />
                  </div>
                  <div className="bottom-content">
                    <p>{modalState.description}</p>
                    <div className="progress-info">
                      <span>Progress Toward Goal:</span>
                      <p>${currentDonations}/${modalState.funding_goal}</p>
                    </div>
          <Progress value={currentDonations / modalState.funding_goal * 100}>{currentDonations / modalState.funding_goal * 100}%</Progress>
                    <p>
                      <span>Deadline:</span> {modalState.deadline}
                    </p>
                  </div>
                </ModalBody>
                <ModalFooter className="supporter-modal">
                  {console.log(modalState.id, "modal state")}
                  <div className="supporter-donation-input">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                      <Input
                        placeholder="Donation Amount"
                        min={0}
                        max={1000000}
                        type="number"
                        step="1"
                        name="donationAmount"
                        value={donations}
                        onChange={handleDonations}
                      />
                    </InputGroup>
                  </div>
                  <button
                    className="donate-button"
                    onClick={() => donationClick(modalState.id)}
                  >
                    Donate
                  </button>
                </ModalFooter>
              </Modal>
            </div>
          );
        })}
      </div>

      {editModal === true && <EditCampaign />}
    </>
  );
};

const mapStateToProps = state => {
    console.log(state.donateReducer)
    return {
        donations: state.donateReducer.totalDonations
    }
}

export default connect(mapStateToProps, {donationPost}) (SupporterCard);
