import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://save-the-animals-backend.herokuapp.com/api",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
