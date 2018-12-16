import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../../components/Header";
import * as authenticationAction from "../../actions/AuthenticationAction";

type Props = {
  userInfo: Object,
  isAuthenticated: boolean,
  actions: Object
};
type State = {};
class HeaderContainer extends Component<Props, State> {
  componentDidMount = () => {};

  render() {
    const { userInfo, isAuthenticated, actions } = this.props;
    return (
      <Header
        userInfo={userInfo}
        isAuthenticated={isAuthenticated}
        logout={actions.logout}
      />
    );
  }
}

const mapStateToProps = state => {
  const { userInfo, isAuthenticated } = state.authentication;
  return {
    userInfo,
    isAuthenticated
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
)(HeaderContainer);
