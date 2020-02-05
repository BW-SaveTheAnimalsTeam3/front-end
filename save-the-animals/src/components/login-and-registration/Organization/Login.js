import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginAuth } from '../../../actions/loginActions';

// USED FOR ORGANIZATIONS WITH EXISTING LOGIN CREDENTIALS

const OrgLogin = props => {
  const [orgLogin, setOrgLogin] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = e => {
      e.preventDefault();
    props.history.push('/organization')
  };

  const handleChanges = e => {
    setOrgLogin({ ...orgLogin, [e.target.name]: e.target.value });
  };

  console.log(orgLogin)

  return (
    <div>
      <form onSubmit={() => props.loginAuth(orgLogin), handleSubmit}>
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChanges}
          value={orgLogin.email}
          required
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChanges}
          value={orgLogin.password}
          required
        />
       <button><Link to='/organization'>Sign In</Link></button>
      </form>
    </div>
  );
};

export default connect(null, { loginAuth }) (OrgLogin);
