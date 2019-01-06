// @flow
import React, { Component } from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
<<<<<<< HEAD
import { URL_TRANFER, URL_ACCOUNT_CLOSE } from "./../../configs/constants/AppUrlConstant";
=======
import { URL_TRANFER, URL_HISTORY } from "./../../configs/constants/AppUrlConstant";
>>>>>>> 821e20b232d679dab5454edf8152e1a264c6f214

type Props = {
    account: Array<any>
};

type State = {};

class AccountItem extends Component<Props, State> {
    componentWillMount = () => { };

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
<<<<<<< HEAD
                    <Link to={{ pathname: `${URL_ACCOUNT_CLOSE}`, state: account }}>
                        <button className="btn btn-success">Close Account</button>
                    </Link>
                    &#160;&#160;
=======
                    <button className="btn btn-success">Close Account</button>&#160;&#160;
                    <Link to={{ pathname: `${URL_HISTORY}`, search: `?user=${account.account_number}` }}>
                        {" "}
                        <button className="btn btn-success">History</button>&#160;&#160;
                    </Link>
>>>>>>> 821e20b232d679dab5454edf8152e1a264c6f214
                </td>
            </tr>
        );
    }
}

export default withRouter(AccountItem);
