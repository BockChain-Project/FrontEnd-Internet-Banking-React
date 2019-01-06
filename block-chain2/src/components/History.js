/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable import/first */
/* eslint-disable camelcase */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable spaced-comment */
/* eslint-disable jsx-a11y/no-redundant-roles */
// @flow
import _ from "lodash";
import React, { Component } from "react";
import HistoryItem from "./HistoryItem";


type Props = {
    accounts: Array,
    user_account: string,
    history: Array,
    transfers_log: Array
};

type State = {};

class History extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    showHistory = accounts => {
        let result = null;
        console.log("showHistory", accounts.length);

        if (accounts.length > 0) {
            result = _.map(accounts, (account, key) => <HistoryItem key={key} acc_history={account} index={key} />);
        }
        return result;
    };



    render() {
        console.log("this.props.user_account: ", this.props.user_account);
        const { transfers_log } = this.props.history;

        if (!transfers_log)
            return "";
        console.log("this.props.history: ", transfers_log);
        return (
            <div>
                <div className="breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-inner">
                            <ul className="list-inline list-unstyled">
                                <li><a href="home.html">Home</a></li>
                                <li className="active">History</li>
                            </ul>
                        </div>{/* /.breadcrumb-inner */}
                    </div>{/* /.container */}
                </div>{/* /.breadcrumb */}
                <div className="body-content">
                    <div className="container">
                        <div className="my-wishlist-page">
                            <div className="row">
                                <h4> User Account Number: {this.props.user_account}</h4>

                                <div className="col-md-12 my-wishlist">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="heading-title">Destination account</th>
                                                    <th className="heading-title">Amount</th>
                                                    <th className="heading-title">Fee type</th>
                                                    <th className="heading-title">Note</th>
                                                    <th className="heading-title">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {this.showHistory(transfers_log)}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>{/* /.row */}
                        </div>{/* /.sigin-in*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default History;
