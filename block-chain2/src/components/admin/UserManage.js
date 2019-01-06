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
// import AccountItem from "./AccountItem";
import Api from "./../../api/Api";
import { URL_ADMIN_LIST_USER } from "./../../configs/constants/AppUrlConstant";
import { API_URL, API_USER_ACCOUNT_INFOR, API_TRANSFER_POST, API_BASE_URL } from "./../../configs/AppConfig";

type Props = {};

type State = {};
const express = /^[a-zA-Z0-9]+$/;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .required("Please input username for user")
        .matches(express, "User name has no include special word"),
    password: Yup.string().required("Please input this field"),
    first_name: Yup.string().required("Please input this field"),
    last_name: Yup.string().required("Please input this field"),
    email: Yup.string().required("Please input this field"),
    phone: Yup.string()
        .required("Please input number account of reveiver")
        .matches(phoneRegExp, "Phone number is not valid")
});
class UserManager extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        const initValues = {
            username: "",
            password: "",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            role: 3
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
                                <li className="active">Add User</li>
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
                                        &#160; Add New User
                                    </h2>
                                </div>
                                <div className="col-xs-9 col-sm-9 col-md-9">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="col-xs-12 col-md-9" />

                                        <div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body table-responsive">
                            <Row>
                                <Col md={{ size: 10, offset: 3 }}>
                                    {
                                        <Formik
                                            initialValues={initValues}
                                            validationSchema={SignupSchema}
                                            onSubmit={(values, actions) => {
                                                setTimeout(() => {
                                                    console.log(values);
                                                    // Api.post(`${API_BASE_URL}${API_TRANSFER_POST}`, values)
                                                    //     .then(res => {
                                                    //         console.log(res);
                                                    //         // this.setState({
                                                    //         //     isRedirect: true,
                                                    //         //     transaction_token: res.transaction_token
                                                    //         // });
                                                    //     })
                                                    //     .catch(err => {
                                                    //         throw err;
                                                    //     });
                                                    actions.setSubmitting(false);
                                                }, 100);
                                            }}
                                            render={props => (
                                                <form className="search-form" onSubmit={props.handleSubmit}>
                                                    <Row form>
                                                        <Col style={{ marginLeft: "155px" }} md={10}>
                                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                <Label for="username" className="mr-sm-2">
                                                                    Username:
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    name="username"
                                                                    onBlur={props.handleBlur}
                                                                    onChange={props.handleChange}
                                                                    defaultValue={props.values.username}
                                                                />

                                                                <ErrorMessage name="username">
                                                                    {msg => <div className="errormess">{msg}</div>}
                                                                </ErrorMessage>
                                                            </FormGroup>
                                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                <Label for="first_name" className="mr-sm-2">
                                                                    First Name:
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    id="first_name"
                                                                    name="first_name"
                                                                    onChange={props.handleChange}
                                                                    onBlur={props.handleBlur}
                                                                    defaultValue={props.values.first_name}
                                                                />
                                                                <ErrorMessage name="first_name">
                                                                    {msg => <div className="errormess">{msg}</div>}
                                                                </ErrorMessage>
                                                            </FormGroup>
                                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                <Label for="last_name" className="mr-sm-2">
                                                                    Last Name:
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    name="last_name"
                                                                    id="last_name"
                                                                    onChange={props.handleChange}
                                                                    onBlur={props.handleBlur}
                                                                    defaultValue={props.values.last_name}
                                                                />
                                                                <ErrorMessage name="last_name">
                                                                    {msg => <div className="errormess">{msg}</div>}
                                                                </ErrorMessage>
                                                            </FormGroup>
                                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                <Label for="password" className="mr-sm-2">
                                                                    password:
                                                                </Label>
                                                                <Input
                                                                    type="password"
                                                                    name="password"
                                                                    onBlur={props.handleBlur}
                                                                    onChange={props.handleChange}
                                                                    defaultValue={props.values.password}
                                                                />

                                                                <ErrorMessage name="password">
                                                                    {msg => <div className="errormess">{msg}</div>}
                                                                </ErrorMessage>
                                                            </FormGroup>
                                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                <Label for="email" className="mr-sm-2">
                                                                    Email
                                                                </Label>
                                                                <Input
                                                                    type="email"
                                                                    name="email"
                                                                    id="email"
                                                                    onChange={props.handleChange}
                                                                    onBlur={props.handleBlur}
                                                                    defaultValue={props.values.email}
                                                                />
                                                                <ErrorMessage name="email">
                                                                    {msg => <div className="errormess">{msg}</div>}
                                                                </ErrorMessage>
                                                            </FormGroup>
                                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                <Label for="phone" className="mr-sm-2">
                                                                    Số điện thoại
                                                                </Label>
                                                                <Input
                                                                    type="text"
                                                                    name="phone"
                                                                    id="phone"
                                                                    onChange={props.handleChange}
                                                                    onBlur={props.handleBlur}
                                                                    defaultValue={props.values.phone}
                                                                />
                                                                <ErrorMessage name="phone">
                                                                    {msg => <div className="errormess">{msg}</div>}
                                                                </ErrorMessage>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col style={{ marginLeft: "155px" }} md={1}>
                                                            <FormGroup inline>
                                                                <Link to={URL_ADMIN_LIST_USER}>
                                                                    <button type="button" className="btn btn-primary">
                                                                        List Users
                                                                    </button>
                                                                </Link>{" "}
                                                                &#160;
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={1}>
                                                            <button type="submit" className="btn btn-primary">
                                                                Create User
                                                            </button>
                                                        </Col>
                                                    </Row>
                                                </form>
                                            )}
                                        />
                                    }
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

export default withRouter(UserManager);
