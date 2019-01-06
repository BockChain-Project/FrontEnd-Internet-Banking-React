/* eslint-disable vars-on-top */
/* eslint-disable no-shadow */
/* eslint-disable prefer-template */
/* eslint-disable no-var */
/* eslint-disable spaced-comment */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
// @flow
import React, { Component } from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { URL_TRANFER, URL_HISTORY } from "./../configs/constants/AppUrlConstant";

type Props = {
    acc_history: Array<any>,
    create_at: String
};

type State = {};

class HistoryItem extends Component<Props, State> {
    componentWillMount = () => {};
    displayDate = oldDate => {
        var date = new Date(oldDate); //'2013-08-03T02:00:00Z'
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var dt = date.getDate();

        if (dt < 10) {
            dt = "0" + dt;
        }
        if (month < 10) {
            month = "0" + month;
        }
        var newDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + dt + "-" + month + "-" + year;
        //console.log(newDate);
        return newDate;
    };

    render() {
        const { acc_history } = this.props;
        if (!acc_history) return "";
        //console.log("HistoryItem", this.props.acc_history);
        const { create_at } = this.props.acc_history;
        function format2(n: any, currency: any = "") {
            return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        }

        return (
            <tr>
                <td className="col-md-3 col-sm-3 col-xs-3">
                    <div className="rating">
                        {/**
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star non-rate" />
                        <span className="review">( 06 Reviews )</span> 
                                                                             <span>$900.00</span>
*/}
                    </div>
                    <div className="price">{acc_history.dest_account}</div>
                </td>
                <td className="col-md-2 ">
                    <div className="product-name">{format2(acc_history.amount)}</div>
                </td>
                <td className="col-md-2 ">
                    <div className="product-name">{acc_history.fee_type}</div>
                </td>
                <td className="col-md-2 ">
                    <div className="product-name">{acc_history.note}</div>
                </td>
                <td className="col-md-2 ">
                    <div className="product-name">{this.displayDate(create_at)}</div>
                </td>
                <td className="col-md-1 close-btn">
                    <a href="#">
                        <i className="fa fa-times" />
                    </a>
                </td>
            </tr>
        );
    }
}

export default withRouter(HistoryItem);
