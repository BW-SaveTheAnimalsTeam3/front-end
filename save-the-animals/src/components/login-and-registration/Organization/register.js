import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

const RegisterOrganization = props => {
  console.log(props);

  const [orgSignUp, setOrgSignUp] = useState({
    org_name: "",
    user_id: props.id[0]
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(
        `https://save-the-animals-backend.herokuapp.com/api/users/register/organizations`, orgSignUp
      )
      .then(res => {
          
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  const handleChanges = e => {
    setOrgSignUp({ ...orgSignUp, [e.target.name]: e.target.value });
  };
  console.log(orgSignUp)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="org_name"
          value={orgSignUp.org_name}
          onChange={handleChanges}
        />
        <input value={props.id} />
        <button>Submit</button>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  console.log("state", state.registrationReducer);
  return {
    id: state.registrationReducer.user_id
  };
};

export default connect(mapStateToProps)(RegisterOrganization);
