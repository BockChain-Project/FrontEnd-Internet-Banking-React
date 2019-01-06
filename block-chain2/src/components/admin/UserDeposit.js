// @flow
import React, { Component } from "react";
import _ from "lodash";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Table, Label } from "reactstrap";
import UserItem from "./../admin/UserItem";

type Props = {
    users: Array
};

type State = {};

class UserDeposit extends Component<Props, State> {
    showUsers = users => {
        let result = null;

        if (users.length > 0) {
            result = _.map(users, (user, key) => <UserItem key={key} user={user} index={key} />);
        }
        return result;
    };

    render() {
        const { users } = this.props;

        return (
            <div>
                <div className="breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-inner">
                            <ul className="list-inline list-unstyled">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li className="active">User List</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-3">
                                    <h2 className="text-center pull-left" style={{ paddingLeft: "30px" }}>
                                        {" "}
                                        <span className="glyphicon glyphicon-list-alt" /> &#160;Details{" "}
                                    </h2>
                                </div>
                                <div className="col-xs-9 col-sm-9 col-md-9">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
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
                                        <th className="text-center"> User Name </th>
                                        <th className="text-center"> Email </th>
                                        <th className="text-center"> Full Name </th>
                                    </tr>
                                </thead>
                                <tbody>{this.showUsers(users)}</tbody>
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

export default withRouter(UserDeposit);
