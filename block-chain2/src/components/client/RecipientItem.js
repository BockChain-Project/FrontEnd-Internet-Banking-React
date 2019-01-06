// @flow
import React, { Component } from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { URL_TRANFER } from "./../../configs/constants/AppUrlConstant";

type Props = {
    recipient: Array<any>
};

type State = {};

class AccountItem extends Component<Props, State> {
    componentWillMount = () => { };

    render() {
        const { recipient } = this.props;
        return (
            <tr className="edit" id="detail">
                <td id="number" className="text-center">
                    {recipient.account_number}{" "}
                </td>
                <td id="name" className="text-center">
                    {recipient.name}
                </td>
                <td>
                    <Link to={{ pathname: `${URL_TRANFER}`, state: `${recipient}` }}>
                        {" "}
                        <button className="btn btn-success">Transfer</button>&#160;&#160;
                    </Link>
                </td>

            </tr>
        );
    }
}

export default withRouter(AccountItem);
