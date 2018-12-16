/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-else-return */
/* eslint-disable camelcase */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
// @flow
import React, { Component } from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

type Props = {};

type State = {};

class UserManage extends Component<Props, State> {
  render() {
    return <div style={{ marginLeft: 15 }} />;
  }
}

export default withRouter(UserManage);
