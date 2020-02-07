import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import { TweenLite, Linear } from 'gsap';
import classnames from "classnames";
import OrgSignUp from "../Organization/SignUp";
import SupporterSignUp from "../Supporter/SignUp";
import ExistingAccount from "../ExistingAccount";


// MAIN FORM THAT IS RENDERING THE REGISTRATION VIEWS WHEN SWITCHING BETWEEN TABS

const RegisterAccount = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // GREENSOCK ANIMATIONS

  function fadeIn() {
    const el = document.querySelector('.registration');
    const duration = 0.75;
    const from = { opacity: 0, ease: Linear.easeIn };
    const to = { opacity: 1 };
    TweenLite.fromTo(el, duration, from, to);
  }


  return (
    <div className="form-container" onLoad={fadeIn()}>
      <div className="registration">
        <h4 className='form-heading'></h4>
        <Nav tabs>
          {/* <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Organization
          </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
            // onClick={() => {
            //   toggle("2");
            // }}
            >
              Register
          </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                {/* RENDERING ORGANIZATION SPECIFIC SIGNUP FORM */}
                {/* <OrgSignUp {...props} />
                <ExistingAccount /> */}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {/* RENDERING SUPPORTER SPECIFIC SIGNUP FORM */}
                <SupporterSignUp {...props} />
                <ExistingAccount />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default RegisterAccount;
