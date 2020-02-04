import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginSupporterAuth } from '../../actions/loginActions';

// USED FOR SUPPORTERS WITH EXISTING LOGIN CREDENTIALS

const SupporterLogin = props => {
  const [supporterLogin, setSupporterLogin] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    
    props.loginSupporterAuth(supporterLogin);
    props.history.push("/organization");
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
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChanges}
        value={supporterLogin.email}
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
      <button><Link to='/supporter'>Sign In</Link></button>
    </form>
  );
};

export default connect(null, { loginSupporterAuth }) (SupporterLogin);
