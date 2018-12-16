// @flow
import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";

type Props = {};
type State = {};

class Loading extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="loader" />
        <div className="loader-icon" />
      </div>
    );
  }
}

export default Loading;
