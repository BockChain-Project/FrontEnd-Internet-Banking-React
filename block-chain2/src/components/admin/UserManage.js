/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable spaced-comment */
/* eslint-disable jsx-a11y/no-redundant-roles */
// @flow
import React, { Component } from "react";

type Props = {

};
type State = {
  showError: boolean
};
class UserManage extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        {/* create a new account */}
        <div className="col-md-6 col-sm-6 create-new-account">
          <h4 className="checkout-subtitle">Create a new account</h4>
          <p className="text title-tag-line">Create your new account.</p>
          <form className="register-form outer-top-xs" role="form">
            <div className="form-group">
              <label className="info-title" htmlFor="exampleInputEmail2">Email Address <span>*</span></label>
              <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail2" />
            </div>
            <div className="form-group">
              <label className="info-title" htmlFor="exampleInputEmail1">Name <span>*</span></label>
              <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
            </div>
            <div>
              <div className="form-group">
                <label className="info-title" htmlFor="exampleInputEmail1">Phone Number <span>*</span></label>
                <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
              </div>
              <div className="form-group">
                <label className="info-title" htmlFor="exampleInputEmail1">Password <span>*</span></label>
                <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
              </div>
              <div className="form-group">
                <label className="info-title" htmlFor="exampleInputEmail1">Confirm Password <span>*</span></label>
                <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
              </div>
            </div>


            <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Sign Up</button>
          </form>
        </div>
        {/* create a new account */}
      </div>
    );
  }
}

export default UserManage;
