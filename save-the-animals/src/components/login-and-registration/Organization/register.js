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
        `https://save-the-animals-backend.herokuapp.com/api/users/register/organizations`,
        orgSignUp
      )
      .then(res => {
        props.history.push('/organization')
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  const handleChanges = e => {
    setOrgSignUp({ ...orgSignUp, [e.target.name]: e.target.value });
  };
  console.log(orgSignUp);

  return (
    <div className="register-organization-container">
      <form onSubmit={handleSubmit} className="register-organization-form">
        <h2>Please Enter Your Organization's Name</h2>
        <input
          name="org_name"
          placeholder="Organization Name"
          value={orgSignUp.org_name}
          onChange={handleChanges}
        />
        <input className="org-id" value={props.id} />
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
