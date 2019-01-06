// @flow
import React, { Component } from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { URL_TRANFER, URL_ACCOUNT_CLOSE } from "./../../configs/constants/AppUrlConstant";

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
                    {account.account_number}{" "}
                </td>
                <td id="balance" className="text-center">
                    {account.balance}
                </td>
                <td className="text-center">
                    <Link to={{ pathname: `${URL_TRANFER}`, search: `?user=${account.account_number}` }}>
                        {" "}
                        <button className="btn btn-success">Transfer</button>&#160;&#160;
                    </Link>
                    <button className="btn btn-success">History Transfer</button>&#160;&#160;
                    <Link to={{ pathname: `${URL_ACCOUNT_CLOSE}`, state: account }}>
                        <button className="btn btn-success">Close Account</button>
                    </Link>
                    &#160;&#160;
                </td>
            </tr>
        );
    }
}

export default withRouter(AccountItem);
