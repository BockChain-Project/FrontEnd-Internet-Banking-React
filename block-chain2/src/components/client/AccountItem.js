// @flow
import React, { Component } from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

type Props = {
    account: Array<any>
};

type State = {};

class AccountItem extends Component<Props, State> {
    componentWillMount = () => {};

    render() {
        const { account } = this.props;
        return (
            <tr className="edit" id="detail">
                <td id="name" className="text-center">
                    {" "}
                    {account.account_number}{" "}
                </td>
                <td id="balance" className="text-center">
                    {" "}
                    {account.balance}{" "}
                </td>
                <td className="text-center">
                    <button className="btn btn-success">Transfer</button>&#160;&#160;
                    <button className="btn btn-success">History Transfer</button>&#160;&#160;
                    <button className="btn btn-success">Close Account</button>&#160;&#160;
                </td>
            </tr>
        );
    }
}

export default withRouter(AccountItem);
