import React, { useState } from "react";
import { connect } from "react-redux";

import { registrationPost } from "../../actions/registrationActions";

// USED FOR ORGANIZATIONS THAT NEED TO CREATE AN ACCOUNT

const OrgSignUp = props => {
  const [orgSignUp, setOrgSignUp] = useState({
    organizationName: "",
    email: "",
    password: "",
    city: "",
    state: ""
  });

    const handleSubmit = e => {
      e.preventDefault();
      props.history.push('/')
    };

  const handleChanges = e => {
    e.preventDefault();
    setOrgSignUp({ ...orgSignUp, [e.target.name]: e.target.value });
  };
  console.log(orgSignUp)

  return (
    <form onSubmit={() => props.registrationPost(orgSignUp), handleSubmit}>
      <label htmlFor="organizationName"></label>
      <input
        type="text"
        placeholder="Organization Name"
        name="organizationName"
        onChange={handleChanges}
        value={orgSignUp.organizationName}
        required
      />

      <label htmlFor="email"></label>
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleChanges}
        value={orgSignUp.email}
        required
      />

<label htmlFor="password"></label>
            <input type="password" placeholder="Password" name='password' onChange={handleChanges} value={orgSignUp.password} required />4

      <label htmlFor="confirm-password"></label>
      <input type="password" placeholder="Confirm Password" required />

      <label htmlFor="cityName"></label>
      <input
        type="text"
        placeholder="City Name"
        name="city"
        onChange={handleChanges}
        value={orgSignUp.city}
        required
      />

      <label htmlFor="state"></label>
      <select
        name="state"
        id="state"
        name="state"
        onChange={handleChanges}
        value={orgSignUp.state}
        required
      >
        <option value="" defaultValue="selected">
          Select a State
        </option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>

      <button>Create an Account</button>
    </form>
  );
};

export default connect(null, { registrationPost })(OrgSignUp);
