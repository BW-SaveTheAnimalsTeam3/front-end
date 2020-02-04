import React, { useState } from "react";
import { Route } from "react-router-dom";
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

  return (
    <div className='form-container'>
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
                <OrgLogin />
                <RegisterButton />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                {/* RENDERING SUPPORTER SPECIFIC LOGIN FORM */}
                <SupporterLogin />
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
