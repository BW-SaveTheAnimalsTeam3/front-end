import React, { useState, useEffect } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Progress
} from "reactstrap";
import { connect } from "react-redux";
import axios from "axios";
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { useHistory } from "react-router";

import EditCampaign from "../edit-campaign";
import {
    editCampaignGet,
    editCampaignModal,
    deleteCampaign
} from "../../actions/editCampaignActions";



const SupporterCard = props => {
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [modalState, setModalState] = useState({});
    const history = useHistory();

    const [campaigns, setCampaigns] = useState([]);
    const [query, setQuery] = useState('');

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
    };

    const handleDelete = id => {
        props.deleteCampaign(id);
        setModal(!modal)
        // history.push("/organization");
        // axios
        //   .delete(`https://save-the-animals-backend.herokuapp.com/api/campaigns/${id}`)
        //   .then(res => console.log(res))
        //   .catch(err => console.log(err));
    };
    console.log("props in campaign card", props);
    console.log("modal state", modalState);

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

            {/* STYLING CAMPAIGN CARDS IN GRID FORMAT */}
            {/* <div className="grid-container"> */}

            {/* MAPPING THROUGH FILTERED CAMPAIGNS. STATE SET ABOVE */}
            {campaigns.map(campaign => {
                return (
                    <div className="card" key={campaign.id}>
                        {/* {console.log(campaign.id)} */}
                        <h4>{campaign.campaign}</h4>
                        <p className="location">{campaign.location}</p>
                        <div className="status">Status: {campaign.urgency_level}</div>
                        <div className="image-container">
                            <img
                                src="https://images.unsplash.com/photo-1564652518878-669c345bb458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
                                alt="campaign image"
                            />
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
                                <div className="status">Status: {modalState.urgency_level}</div>
                                <div className="image-container">
                                    <img
                                        src="https://images.unsplash.com/photo-1564652518878-669c345bb458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
                                        alt="campaign image"
                                    />
                                </div>
                                <div className="bottom-content">
                                    <p>{modalState.description}</p>
                                    <div className="progress-info">
                                        <span>Progress Toward Goal:</span>
                                        <p>{modalState.funding_goal}</p>
                                    </div>
                                    <Progress value={75}>75%</Progress>
                                    <p>
                                        <span>Deadline:</span> {modalState.deadline}
                                    </p>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                {console.log(modalState.id, "modal state")}
                                <button
                                    className="edit-button"
                                    onClick={() => handleEdit(modalState.id)}
                                >
                                    Donate
                </button>
                            </ModalFooter>
                        </Modal>
                    </div>
                );
            })}
            {/* </div> */}
            {editModal === true && <EditCampaign />}
        </>
    );
};

export default SupporterCard;
