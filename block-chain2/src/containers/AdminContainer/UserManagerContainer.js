/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prefer-template */
/* eslint-disable react/self-closing-comp */
// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from "reactstrap";
import UserManage from "../../components/admin/UserManage";

import * as authenticationAction from "../../actions/AuthenticationAction";
import * as headerActions from "../../actions/header/HeaderActions";
import * as UserActions from "./../../actions/admin/UserActions";

type Props = {
  users: Array,
  userActions: Object
};

type State = {
  isSetRedirectFrom: boolean
};

class UserManager extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentWillMount = props => {};

  render() {
    const { users, userActions } = this.props;

    return (
      <Row>
        <Col>
          <UserManage users={users} userActions={userActions} />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  const { users } = state.userReducer;
  return {
    users
  };
};

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManager);
