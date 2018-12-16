// @flow
import React, { Component } from "react";
import { Alert } from "reactstrap";

type Props = {
  isSuccess: boolean,
  message: string
};

type State = {};

class Success extends Component<Props, State> {
  componentDidMount = () => {};

  render() {
    const { isSuccess, message } = this.props;
    return (
      <div>
        <Alert color="success" isOpen={isSuccess}>
          {message || "Successfully"}
        </Alert>
      </div>
    );
  }
}

export default Success;
