// @flow
import React, { Component } from "react";
import { Alert } from "reactstrap";

type Props = {
  isFailure: boolean,
  error: Object
};
type State = {
  showError: boolean
};

class Error extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      showError: true
    };
    this.toggleError = this.toggleError.bind(this);
  }

  toggleError = () => {
    this.setState({ showError: !this.state.showError });
  };

  render() {
    const { isFailure, error } = this.props;
    const errorStr = error.error ? error.error : "";
    return (
      <div>
        <Alert color="danger" isOpen={isFailure}>
          {`${errorStr} ${error.message}`}
        </Alert>
      </div>
    );
  }
}

export default Error;
