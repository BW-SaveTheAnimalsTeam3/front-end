import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginSupporterAuth } from '../../../actions/loginActions';
import axios from "axios";

// USED FOR SUPPORTERS WITH EXISTING LOGIN CREDENTIALS

const SupporterLogin = props => {
  const [supporterLogin, setSupporterLogin] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`https://save-the-animals-backend.herokuapp.com/api/users/login`, supporterLogin)
      .then(res => 
        // console.log(res)
        {localStorage.setItem('token', res.data.token)
      return props.history.push('/supporter')}
      )
      .catch(err => console.log(err))
    // props.loginSupporterAuth(supporterLogin);
    // props.history.push("/organization");
  };

  const handleChanges = e => {
    e.preventDefault();
    setSupporterLogin({ ...supporterLogin, [e.target.name]: e.target.value });
  };

  console.log(supporterLogin);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"></label>
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={handleChanges}
        value={supporterLogin.username}
        required
      />
      <label htmlFor="password"></label>
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChanges}
        value={supporterLogin.password}
        required
      />
      <button>Sign In</button>
    </form>
  );
};

export default connect(null, { loginSupporterAuth }) (SupporterLogin);


//testSupporter
