import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { loginAuth } from '../../../actions/loginActions';
import {registrationStore} from '../../../actions/registrationActions'

// USED FOR ORGANIZATIONS WITH EXISTING LOGIN CREDENTIALS

const OrgLogin = props => {
  const [orgLogin, setOrgLogin] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
      e.preventDefault();
    axios
      .post(`https://save-the-animals-backend.herokuapp.com/api/users/login`, orgLogin)
      .then(res => {localStorage.setItem('token', res.data.token)
      localStorage.setItem('user_id', res.data.id)
    // props.registrationStore(res.data.id)
    return props.history.push('/organization')
    console.log(res)
    })
      .catch(err => console.log(err))
    // props.history.push('/organization')
  };

  const handleChanges = e => {
    setOrgLogin({ ...orgLogin, [e.target.name]: e.target.value });
  };

  console.log(orgLogin)

  return (
    <div>
      <form onSubmit={() => props.loginAuth(orgLogin), handleSubmit}>
        <label htmlFor="username"></label>
        <input
          type="username"
          name="username"
          placeholder="username"
          onChange={handleChanges}
          value={orgLogin.username}
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
       <button>Sign In</button>
      </form>
    </div>
  );
};

export default connect(null, { loginAuth, registrationStore })(OrgLogin);
