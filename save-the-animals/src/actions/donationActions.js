import axios from "axios";
import { DONATE_LOADING, DONATE_SUCCESS, DONATE_FAILURE } from "./types";

export const donationPost = donation => dispatch => {
  dispatch({ type: DONATE_LOADING });
  axios
    .post(
      `https://save-the-animals-backend.herokuapp.com/api/donations`,
      donation
    )
    .then(res => {console.log(res)
        console.log('donation amount', donation.donation_amount)
    dispatch({ type: DONATE_SUCCESS, payload: donation.donation_amount })
    })
    .catch(err => {
      dispatch({ type: DONATE_FAILURE, payload: err });
    });
};
