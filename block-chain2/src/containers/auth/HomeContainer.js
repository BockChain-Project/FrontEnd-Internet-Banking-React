/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LoginForm from "../../components/LoginForm";
import * as authenticationAction from "../../actions/AuthenticationAction";
import Home from "../../components/Home";

class HomeContainer extends Component {
  componentDidMount = () => {};

  render() {
    const { isAuthenticated, isFailure, actions, userInfo } = this.props;

    return (
      <div>
        <Home userInfo={userInfo} />
      </div>
    );
  }
}

HomeContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isFailure: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { isAuthenticated, isFailure, userInfo } = state.authentication;
  return {
    isAuthenticated,
    isFailure,
    userInfo
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
)(HomeContainer);
