import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router";
import * as authenticationAction from "../../actions/AuthenticationAction";

const Props = {
  isAuthenticated: Boolean,
  isFailure: Boolean,
  actions: Object
};

const State = {};

class LogoutContainer extends Component<Props, State> {
  componentDidMount = () => {
    const { actions } = this.props;
    actions.logout();
  };

  render = () => {
    return null;
  };
}

const mapStateToProps = state => {
  const { isLoading, isAuthenticated, isFailure } = state.authentication;
  return {
    isLoading,
    isAuthenticated,
    isFailure
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationAction, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutContainer);
