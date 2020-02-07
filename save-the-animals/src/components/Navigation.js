import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function Navigation() {
  const history = useHistory();

  const logout = () => {
    localStorage.clear("token");
    history.push("/");
  };

  return (
    <div className="nav-cont">
      <ul className="nav-list">
        <a
          href="https://savetheanimalsweb28.netlify.com/"
          className="menu-item"
        >
          Home
        </a>
        <Link to="/dashboard" className="menu-item">
          Dashboard
        </Link>
        <Link to="organization" className="menu-item">
          Profile
        </Link>
        <button onClick={logout} className="menu-item">
          Log Out
        </button>
      </ul>
    </div>
  );
}
