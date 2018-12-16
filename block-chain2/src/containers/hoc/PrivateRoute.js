// @flow
import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Loading from "../../components/Loading";
import Header from "../../components/Header";
import * as authenticationAction from "../../actions/AuthenticationAction";
import StorageService from "../../services/StorageService";
/**
 * Private route to navigate over private routes
 * If not logged in - goes to login
 * If not admin but required - throws an error!
 */
const PrivateRoute = (props: Object) => {
  const { isAuthenticated, actions, isFirstLoad } = props;

  if (isFirstLoad) {
    actions.verifyToken();
    return "";
  }

  if (isAuthenticated) {
    return <Route {...props} />;
  }

  return (
    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isFirstLoad: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { isAuthenticated, isFirstLoad } = state.authentication;
  return {
    isAuthenticated,
    isFirstLoad
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
)(PrivateRoute);
