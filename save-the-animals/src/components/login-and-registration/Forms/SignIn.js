import React, { useState } from "react";
import { Route } from "react-router-dom";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import { TweenLite, Linear } from 'gsap';
import classnames from "classnames";
import OrgLogin from "../Organization/Login";
import SupporterLogin from "../Supporter/Login";
import RegisterButton from "../RegisterButton";

// MAIN FORM THAT IS RENDERING THE LOGIN VIEWS WHEN SWITCHING BETWEEN TABS

const SignIn = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  console.log(props, 'sign in')

  // GREENSOCK ANIMATIONS

  function fadeIn() {
    const el = document.querySelector('.sign-in');
    const duration = 0.75;
    const from = { opacity: 0, ease: Linear.easeIn };
    const to = { opacity: 1 };
    TweenLite.fromTo(el, duration, from, to);
  }


  return (
    <div className='form-container' onLoad={fadeIn()}>
      <div className='sign-in'>
        <h4 className='form-heading'>Login</h4>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Organization
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Supporter
          </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {/* RENDERING ORGANIZATION SPECIFIC LOGIN FORM */}
                <OrgLogin {...props} />
                <RegisterButton />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                {/* RENDERING SUPPORTER SPECIFIC LOGIN FORM */}
                <SupporterLogin {...props} />
                <RegisterButton />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default SignIn;
