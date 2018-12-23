/* eslint-disable spaced-comment */
/* eslint-disable jsx-a11y/no-redundant-roles */
// @flow
import React, { Component } from "react";

class Error extends Component {
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
    return (
      <div>
        <div className="body-content outer-top-bd">
          <div className="container">
            <div className="x-page inner-bottom-sm">
              <div className="row">
                <div className="col-md-12 x-text text-center">
                  <h1>404</h1>
                  <p>We are sorry, the page you have requested is not available. </p>
                  <form role="form" className="outer-top-vs outer-bottom-xs">
                    <input placeholder="Search" autoComplete="off" />
                    <button className="  btn-default le-button">Go</button>
                  </form>
                  <a href="home.html"><i className="fa fa-home" /> Go To Homepage</a>
                </div>
              </div>{/* /.row */}
            </div>{/* /.sigin-in*/}
          </div>{/* /.container */}
        </div>{/* /.body-content */}
      </div>
    );
  }
}

export default Error;
