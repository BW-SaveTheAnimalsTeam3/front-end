import React, {useEffect} from "react";
import axios from 'axios';

import CampaignCard from '../card/campaign-card';
import Navigation from '../Navigation';

const SupporterProfile = (props) => {

    // AXIOS CALL HERE WHEN ENDPOINTS ARE READY
    useEffect(() => {
        axios
            .get('https://save-the-animals-backend.herokuapp.com/api/campaigns')
            .then(res => {
                // setCampaigns(res.data);
            })
            .catch(err => {
                console.log("cannot get data", err);
            })
    }, [])

    return (
        <>
            <Navigation />
            <div className='profile'>
                <div className='user-info'>
                    <div className='profile-image'></div>
                    <div className='user-info-text'>
                        <h2>George Clooney</h2>
                        <p>Flint, MI</p>
                        {/* <p>Conservation Organization</p> */}
                    </div>
                </div>
                <div className='feed-buttons'>
                    <h3><span>Campaigns</span></h3>
                </div>
                <div className='feed'>
                    <CampaignCard />
                </div>
            </div>
        </>
    );
};

export default SupporterProfile;