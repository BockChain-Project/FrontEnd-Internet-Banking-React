// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router";
import LoginForm from "../../components/LoginForm";
import * as authenticationAction from "../../actions/AuthenticationAction";
import * as headerActions from "../../actions/header/HeaderActions";
import StorageService from "../../services/StorageService";

type Props = {
  isFailure: boolean,
  actions: Object,
  location: Object,
  isLoading: boolean,
  headerInActions: Object,
  error: Object
};

type State = {
  isSetRedirectFrom: boolean
};

class LoginContainer extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isSetRedirectFrom: false
    };
  }

  componentDidUpdate = () => {
    const landingURL = this.getLandingURL();
    if (
      !this.state.isSetRedirectFrom &&
      (landingURL !== "/login" || landingURL !== "/logout")
    ) {
      this.setState({
        isSetRedirectFrom: true
      });
      this.props.headerInActions.nagivateFromLogin(landingURL);
    }
  };

  getLandingURL = () => {
    const landingURL =
      this.props.location.state === undefined ||
      this.props.location.state.from.pathname === "/login" ||
      this.props.location.state.from.pathname === "/logout"
        ? "/"
        : this.props.location.state.from.pathname +
          this.props.location.state.from.search;

    return landingURL;
  };

  render() {
    const { isLoading, isFailure, actions, error } = this.props;

    if (StorageService.getToken()) {
      return <Redirect to={this.getLandingURL()} />;
    }

    return (
      <div>
        <LoginForm
          isLoading={isLoading}
          isFailure={isFailure}
          handler={actions.login}
          errorInfo={error}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isLoading, isFailure, error } = state.authentication;
  return {
    isLoading,
    isFailure,
    error
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationAction, dispatch),
    headerInActions: bindActionCreators(headerActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
