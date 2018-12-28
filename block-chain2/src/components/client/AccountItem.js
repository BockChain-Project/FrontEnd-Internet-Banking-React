/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disableed-prop-types */
// @flow
import React, { Component } from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

type Props = {};

type State = {};

class AccountItem extends Component<Props, State> {
    render() {
        var { account } = this.props;
        return (
            <tr className="edit" id="detail">
                <td id="no" className="text-center"> {account.id}</td>
                <td id="name" className="text-center"> {account.name} </td>
                <td id="balance" className="text-center"> {account.balance} </td>
            </tr>
        );
    }
}

export default withRouter(AccountItem);
