/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disableed-prop-types */
// @flow
import React, { Component } from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Table } from 'reactstrap';

type Props = {};

type State = {};

class ClientManage extends Component<Props, State> {
  render() {
    return (
      <div className="container">

        <div className="panel panel-success">
          <div className="panel-heading">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-3">
                <h2 className="text-center pull-left" style={{ paddingLeft: '30px' }}> <span className="glyphicon glyphicon-list-alt"> </span> Details </h2>
              </div>
              <div className="col-xs-9 col-sm-9 col-md-9">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="col-xs-12 col-md-9">
                    <label> Search </label>
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" className="form-control input-md" name="search" />
                        <div className="input-group-btn">
                          <button type="button" className="btn btn-md btn-warning"> <span className=" glyphicon glyphicon-search" /></button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <br />

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-body table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="text-center"> No. </th>
                  <th className="text-center"> Name </th>
                  <th className="text-center"> Mobile No. </th>
                  <th className="text-center"> E-Mail </th>
                  <th className="text-center"> City </th>
                </tr>
              </thead>
              <tbody>
                <tr className="edit" id="detail">
                  <td id="no" className="text-center"> this.props.id</td>
                  <td id="name" className="text-center"> this.props.name </td>
                  <td id="mobile" className="text-center"> this.props.number </td>
                  <td id="mail" className="text-center"> this.props.email </td>
                  <td id="city" className="text-center">this.props.city</td>
                </tr>
                <tr className="edit" id="detail">
                  <td id="no" className="text-center"> this.props.id</td>
                  <td id="name" className="text-center"> this.props.name </td>
                  <td id="mobile" className="text-center"> this.props.number </td>
                  <td id="mail" className="text-center"> this.props.email </td>
                  <td id="city" className="text-center">this.props.city</td>
                </tr>

              </tbody>
            </table>
          </div>
          <div className="panel-footer">
            <div className="row">
              <div className="col-lg-12">
                <div className="col-md-8">
                </div>
                <div className="col-md-4">
                  <p className="muted pull-right"><strong> © 2017 All rights reserved </strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ClientManage);
