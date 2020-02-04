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

  return (
    <div className="form-container">
      <div className="registration">
        <h4 className='form-heading'>Register</h4>
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
                {/* RENDERING ORGANIZATION SPECIFIC SIGNUP FORM */}
                <OrgSignUp />
                <ExistingAccount />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                {/* RENDERING SUPPORTER SPECIFIC SIGNUP FORM */}
                <SupporterSignUp />
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