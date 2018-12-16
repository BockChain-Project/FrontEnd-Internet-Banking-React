// @flow
import React, { Component } from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import {
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  Navbar,
  Dropdown,
  NavLink
} from "reactstrap";

type Props = {
  isAuthenticated: boolean,
  userInfo: Object,
  logout: Object
};

type State = {
  dropdownOpen: boolean
};

class Header extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render = () => {
    const { userInfo, isAuthenticated, logout } = this.props;

    let user;
    if (isAuthenticated) {
      user = (
        <NavItem>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret className="user-info">
              <i className="fa fa-user" /> {""}
              {userInfo.display_name}
            </DropdownToggle>
            <DropdownMenu className="dropdown-size">
              <DropdownItem header className="dropdown-header">
                Tài khoản
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="dropdown-item">
                <i className="fa fa-wrench pull-right" />
                Change password
              </DropdownItem>
              <DropdownItem className="dropdown-item" onClick={logout}>
                <i className="fa fa-ban fa-fw pull-right" />
                Sign out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
      );
    }

    return (
      <div>
        <Navbar className="shadow sbi-header">
          <Nav navbar className="ml-auto">
            {user}
          </Nav>
        </Navbar>
        <a href="/">
          <div className="col-md-2 brandName">
            <div className="col-md-2 brandName">Home Page</div>
          </div>
        </a>
      </div>
    );
  };
}

export default withRouter(Header);
