import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import OrgLogin from './Organization/Login';
import SupporterLogin from './Supporter/Login';
import Register from './Register';


const FormLayout = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}>
                        Organization
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}>
                        Supporter
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <h4>Organization Login</h4>
                            <OrgLogin />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <h4>Supporter Login</h4>
                            <SupporterLogin />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>

            <Register />
        </div>

    )
}

export default FormLayout;