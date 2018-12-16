// @flow
import React, { Component } from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Container,
  Col,
  Row,
  NavBar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  NavLink,
  NavItem,
  Label,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Dropdown
} from "reactstrap";

type Props = {
  userInfo: Object
};

type State = {
  dropdownOpen: boolean
};

class Home extends Component<Props, State> {
  componentDidMount() {}

  render = () => {
    const { userInfo } = this.props;

    const to = "/login";
    return (
      <div>
        <h2 className="greeting">
          Xin chào{" "}
          <span className="greeting-name">{userInfo.display_name}</span>
        </h2>
        <Col>
          <Row />
        </Col>
      </div>
    );
  };
}

export default withRouter(Home);
