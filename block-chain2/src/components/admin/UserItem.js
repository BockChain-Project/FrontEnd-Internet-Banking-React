// @flow
import React, { Component } from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {
    URL_TRANFER,
    URL_ACCOUNT_CLOSE,
    URL_HISTORY,
    URL_ADMIN_ADD_ACCOUNT,
    URL_ADMIN_USER_DEPOSIT
} from "./../../configs/constants/AppUrlConstant";
import Api from "../../api/Api";

type Props = {
    user: Array<any>
};

type State = {};

class UserItem extends Component<Props, State> {
    componentWillMount = () => {};

    render() {
        const { user } = this.props;
        function format2(n: any, currency: any = "") {
            return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        }
        console.log(user);
        return (
            <tr className="edit" id="detail">
                <td id="name" className="text-center">
                    {user.username}{" "}
                </td>
                <td id="balance" className="text-center">
                    {user.email}
                </td>
                <td id="balance" className="text-center">
                    {user.first_name && `${user.firstname}` && user.last_name && `${user.last_name}`}
                </td>
                <td className="text-center">
                    <Link to={{ pathname: `${URL_ADMIN_ADD_ACCOUNT}`, search: `?user=${user.uid}` }}>
                        {" "}
                        <button className="btn btn-success">add account</button>&#160;&#160;
                    </Link>
                    <Link to={{ pathname: `${URL_ADMIN_USER_DEPOSIT}`, state: user }}>
                        <button className="btn btn-success">deposit</button>
                    </Link>
                    &#160;&#160;
                </td>
            </tr>
        );
    }
}

export default withRouter(UserItem);
