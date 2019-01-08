/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
// @flow
import React, { Component } from "react";
import _ from "lodash";
import * as Yup from "yup";
import { Redirect } from "react-router";
import { Formik, ErrorMessage } from "formik";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Table, Col, Row, Label, Input, FormGroup, Button } from "reactstrap";
import AccountItem from "./AccountItem";
import Api from "./../../api/Api";
import { URL_TRANFER_OTP } from "./../../configs/constants/AppUrlConstant";
import { API_URL, API_USER_ACCOUNT_INFOR, API_TRANSFER_POST, API_BASE_URL, API_USER_ACCOUNT_DELETE } from "./../../configs/AppConfig";

type Props = {
    // accounts: Array,
    // user_account: string,
    accounts: Object,
    state: Object,
    closeAccount: Object
    // pathname: Object
    // search: Object
};

type State = {
    disabled: boolean,
    isRedirect: boolean,
    transaction_token: string
};
const express = /^[0-9]+$/;

// const SignupSchema = Yup.object().shape({
//     dest_account: Yup.string()
//         .required("Please input number account of reveiver")
//         .matches(express, "Number account is not valid"),
//     amount: Yup.string()
//         .required("Please input number account of reveiver")
//         .typeError("This field is only included number")
//         .matches(express, "Number account is not valid")
// });
class ClientCloseAccount extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            disabled: false,
            isRedirect: false,
            transaction_token: ""
        };
    }
    componentDidUpdate = (props: any) => {
        // console.log("11111111", this.state.isRedirect);
        if (this.state.isRedirect) return <Redirect from="/transfer" to="/" push />;
        return null;
    };
    showOption = (accounts: any) => {
        return _.map(accounts, (item, index) => {
            return (
                <option key={index} value={item.account_number}>
                    {item.account_number}
                </option>
            );
        });
    };
    render() {
        const { state, accounts, closeAccount } = this.props;
        if (!state || !accounts) return "";
        // console.log(accounts);
        const { disabled } = this.state;
        // console.log(this.state.isRedirect);
        if (this.state.isRedirect) return <Redirect to="/" push />;
        // const { account_number } = accounts;
        const initValues = {
            fee_type: 2,
            dest_account: accounts.length > 0 ? accounts[0].account_number : "",
            src_account: state.account_number,
            username: "",
            displayName: "",
            email: "",
            phone: "",
            amount: state.balance ? state.balance : "",
            note: ""
        };
        // const priceSplitter = value => value && value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        function format2(n: any, currency: any = "") {
            return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        }

        return (
            <div>
                <div className="breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-inner">
                            <ul className="list-inline list-unstyled">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="active">Close Account</li>
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
                                        <span className="glyphicon glyphicon-list-alt" />
                                        &#160; Close Account
                                    </h2>
                                </div>
                                <div className="col-xs-9 col-sm-9 col-md-9">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="col-xs-12 col-md-9">
                                            <h2> {`Account Number: ${state.account_number}`}</h2>
                                        </div>

                                        <div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-center">Your balance:&#160; {format2(closeAccount.balance)} vnd</h3>
                        {closeAccount.balance > 0 && (
                            <h4 style={{ color: "red" }} className="text-center">
                                Please transfer your balance to another account before close this account
                            </h4>
                        )}
                        <div className="panel-body table-responsive">
                            <Row>
                                <Col md={{ size: 10, offset: 3 }}>
                                    {closeAccount.balance > 0 && (
                                        <Formik
                                            initialValues={initValues}
                                            // validationSchema={SignupSchema}
                                            onSubmit={(values, actions) => {
                                                setTimeout(() => {
                                                    console.log(values);
                                                    let key = "username";
                                                    delete values[key];
                                                    key = "displayName";
                                                    delete values[key];
                                                    key = "email";
                                                    delete values[key];
                                                    key = "phone";
                                                    delete values[key];

                                                    Api.post(`${API_BASE_URL}${API_TRANSFER_POST}`, values)
                                                        .then(res => {
                                                            console.log(res);
                                                            this.setState({
                                                                isRedirect: true,
                                                                transaction_token: res.transaction_token
                                                            });
                                                        })
                                                        .catch(err => {
                                                            throw err;
                                                        });
                                                    actions.setSubmitting(false);
                                                }, 100);
                                            }}
                                            render={props => (
                                                <form className="search-form" onSubmit={props.handleSubmit}>
                                                    <Row form>
                                                        <Col md={10}>
                                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                <Label for="dest_account" className="mr-sm-2">
                                                                    Receiver account number:
                                                                </Label>
                                                                <Input
                                                                    disabled={disabled}
                                                                    type="select"
                                                                    name="dest_account"
                                                                    onBlur={props.handleBlur}
                                                                    onChange={props.handleChange}
                                                                    defaultValue={props.values.dest_account}
                                                                >
                                                                    {this.showOption(accounts)}
                                                                </Input>

                                                                {/* <ErrorMessage name="dest_account">
                                                                {msg => <div className="errormess">{msg}</div>}
                                                            </ErrorMessage> */}
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={2} style={{ marginTop: "20px" }}>
                                                            <FormGroup>
                                                                <Button
                                                                    onClick={() => {
                                                                        if (props.values.dest_account === "") {
                                                                            props.values.dest_account = accounts[0].account_number;
                                                                        }
                                                                        Api.getWithParams(`${API_URL}${API_USER_ACCOUNT_INFOR}`, {
                                                                            account_number: props.values.dest_account
                                                                        })
                                                                            .then(res => {
                                                                                console.log(res.userInfo.username);
                                                                                const {
                                                                                    username,
                                                                                    first_name,
                                                                                    last_name,
                                                                                    email,
                                                                                    phone
                                                                                } = res.userInfo;
                                                                                props.values.username = username;
                                                                                props.values.displayName = `${first_name} ${last_name}`;
                                                                                document.getElementById("username").value = username;
                                                                                document.getElementById(
                                                                                    "displayName"
                                                                                ).value = `${first_name} ${last_name}`;

                                                                                props.values.email = `${email}`;
                                                                                document.getElementById("email").value = email;

                                                                                props.values.phone = `${phone}`;
                                                                                document.getElementById("phone").value = phone;
                                                                                console.log(props.values);
                                                                            })
                                                                            .catch(err => {
                                                                                alert("There has no account you get");
                                                                                return null;
                                                                            });
                                                                    }}
                                                                    className="btn btn-success"
                                                                >
                                                                    Get Infor
                                                                </Button>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row form>
                                                        <Col md={6}>
                                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                <Label for="displayName" className="mr-sm-2">
                                                                    Fullname:
                                                                </Label>
                                                                <Input
                                                                    disabled
                                                                    type="text"
                                                                    id="displayName"
                                                                    name="displayName"
                                                                    onChange={props.handleChange}
                                                                    onBlur={props.handleBlur}
                                                                    defaultValue={props.values.displayName}
                                                                />
                                                                {/* <ErrorMessage name="displayName">{msg => <div className="errormess">{msg}</div>}</ErrorMessage> */}
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={6}>
                                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                <Label for="username" className="mr-sm-2">
                                                                    Username:
                                                                </Label>
                                                                <Input
                                                                    disabled
                                                                    type="text"
                                                                    name="username"
                                                                    id="username"
                                                                    onChange={props.handleChange}
                                                                    onBlur={props.handleBlur}
                                                                    defaultValue={props.values.username}
                                                                />
                                                                {/* <ErrorMessage name="displayName">{msg => <div className="errormess">{msg}</div>}</ErrorMessage> */}
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row form>
                                                        <Col md={6}>
                                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                <Label for="email" className="mr-sm-2">
                                                                    Email
                                                                </Label>
                                                                <Input
                                                                    disabled
                                                                    type="email"
                                                                    name="email"
                                                                    id="email"
                                                                    onChange={props.handleChange}
                                                                    onBlur={props.handleBlur}
                                                                    defaultValue={props.values.email}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={6}>
                                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                <Label for="phone" className="mr-sm-2">
                                                                    Số điện thoại
                                                                </Label>
                                                                <Input
                                                                    disabled
                                                                    type="text"
                                                                    name="phone"
                                                                    id="phone"
                                                                    onChange={props.handleChange}
                                                                    onBlur={props.handleBlur}
                                                                    defaultValue={props.values.phone}
                                                                />
                                                                {/* <ErrorMessage name="phone">{msg => <div className="errormess">{msg}</div>}</ErrorMessage> */}
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row form>
                                                        <Col md={6}>
                                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                <Label for="amount" className="mr-sm-2">
                                                                    Total Transfer Money:
                                                                </Label>
                                                                <Input
                                                                    disabled={disabled}
                                                                    type="text"
                                                                    name="amount"
                                                                    id="amount"
                                                                    onChange={e => {
                                                                        props.handleChange(e);
                                                                    }}
                                                                    onBlur={props.handleBlur}
                                                                    defaultValue={props.values.amount}
                                                                />
                                                                <ErrorMessage name="amount">
                                                                    {msg => <div className="errormess">{msg}</div>}
                                                                </ErrorMessage>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={6}>
                                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                <Label for="note" className="mr-sm-2">
                                                                    content transfer
                                                                </Label>
                                                                <Input
                                                                    disabled={disabled}
                                                                    type="text"
                                                                    name="note"
                                                                    onChange={props.handleChange}
                                                                    onBlur={props.handleBlur}
                                                                    defaultValue={props.values.content}
                                                                />
                                                                {/* <ErrorMessage name="phone">{msg => <div className="errormess">{msg}</div>}</ErrorMessage> */}
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>

                                                    <Row form>
                                                        <Col md={2}>
                                                            <FormGroup>
                                                                <Label for="fee_type" className="mr-sm-2">
                                                                    Model Fee
                                                                </Label>
                                                                <Input
                                                                    disabled
                                                                    type="select"
                                                                    name="fee_type"
                                                                    onChange={props.handleChange}
                                                                    onBlur={props.handleBlur}
                                                                    defaultValue={props.values.fee_type}
                                                                >
                                                                    <option key={1} value={1}>
                                                                        Người gửi trả phí
                                                                    </option>
                                                                    <option key={2} value={2}>
                                                                        Người nhận trả phí
                                                                    </option>{" "}
                                                                </Input>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={10} />
                                                    </Row>
                                                    <Row form>
                                                        <Col style={{ marginTop: "80px" }} md={1}>
                                                            <FormGroup inline>
                                                                <Link to="/">
                                                                    <button type="button" className="btn btn-primary">
                                                                        Trở về
                                                                    </button>
                                                                </Link>{" "}
                                                                &#160;
                                                            </FormGroup>
                                                        </Col>
                                                        <Col style={{ marginTop: "80px" }} md={1}>
                                                            {/* <Link to={{ pathname: `${URL_TRANFER_OTP}`, search: `user=${user_account}` }}> */}
                                                            <button type="submit" className="btn btn-primary">
                                                                Gửi tiền
                                                            </button>
                                                            {/* </Link> */}
                                                        </Col>
                                                    </Row>
                                                </form>
                                            )}
                                        />
                                    )}
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ size: 10, offset: 3 }}>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => {
                                            if (closeAccount.balance > 0) {
                                                alert("Please transfer your balance to another account");
                                                return;
                                            }
                                            Api.delete(`${API_BASE_URL}${API_USER_ACCOUNT_DELETE}/${closeAccount.id}`).then(res => {
                                                console.log(res);
                                                this.setState({
                                                    isRedirect: true
                                                });
                                            });
                                            console.log("erer");
                                        }}
                                    >
                                        Close Account
                                    </button>
                                </Col>
                            </Row>
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

export default withRouter(ClientCloseAccount);
