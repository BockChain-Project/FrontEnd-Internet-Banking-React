/* eslint-disable react/no-array-index-key */
/* eslint-disable no-var */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disableed-prop-types */
// @flow
import React, { Component } from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Table } from "reactstrap";
import AccountItem from "./AccountItem";

type Props = {
    accounts: Array
};

type State = {};

class ClientManage extends Component<Props, State> {
    showAccounts = accounts => {
        var result = null;
        console.log("showAccounts", accounts);

        if (accounts.length > 0) {
            result = accounts.map((account, key) => <AccountItem key={key} account={account} index={key} />);
        }
        return result;
    };

    render() {
        var { accounts } = this.props;
        console.log("showAccounts 1", accounts);

        return (
            <div>
                <div className="breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-inner">
                            <ul className="list-inline list-unstyled">
                                <li>
                                    <a href="home.html">Home</a>
                                </li>
                                <li className="active">HomePage</li>
                            </ul>
                        </div>
                        {/* /.breadcrumb-inner */}
                    </div>
                    {/* /.container */}
                </div>
                {/* /.breadcrumb */}
                <div className="container">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-3">
                                    <h2 className="text-center pull-left" style={{ paddingLeft: "30px" }}>
                                        {" "}
                                        <span className="glyphicon glyphicon-list-alt"> </span> Details{" "}
                                    </h2>
                                </div>
                                <div className="col-xs-9 col-sm-9 col-md-9">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="col-xs-12 col-md-9">
                                            <label> Search </label>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input type="text" className="form-control input-md" name="search" />
                                                    <div className="input-group-btn">
                                                        <button type="button" className="btn btn-md btn-warning">
                                                            {" "}
                                                            <span className=" glyphicon glyphicon-search" />
                                                        </button>
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
                                        <th className="text-center"> Account number </th>
                                        <th className="text-center"> Balance in the account </th>
                                        <th className="text-center"> Actions </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/**
                 <tr className="edit" id="detail">
                    <td id="no" className="text-center"> this.props.id</td>
                    <td id="name" className="text-center"> this.props.name </td>
                    <td id="mobile" className="text-center"> this.props.number </td>
                  </tr>
                  <tr className="edit" id="detail">
                    <td id="no" className="text-center"> this.props.id</td>
                    <td id="name" className="text-center"> this.props.name </td>
                    <td id="mobile" className="text-center"> this.props.number </td>
                  </tr>
                */}
                                    {this.showAccounts(accounts)}
                                </tbody>
                            </table>
                        </div>
                        <div className="panel-footer">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="col-md-8" />
                                    <div className="col-md-4">
                                        <p className="muted pull-right">
                                            <strong> © spa banking 2018</strong>
                                        </p>
                                    </div>
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
