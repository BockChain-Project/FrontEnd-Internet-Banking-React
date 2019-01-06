/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
// @flow
import React, { Component } from "react";
import _ from "lodash";
import qs from "query-string";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Table, Col, Row, Label, Input, FormGroup, Button } from "reactstrap";
import AccountItem from "./AccountItem";
import Api from "./../../api/Api";
import { API_URL, API_USER_ACCOUNT_INFOR, API_TRANSFER_POST, API_BASE_URL, API_TRANSFER_OTP_CONFIRM } from "./../../configs/AppConfig";

type Props = {
    location: Object,
    state: Object,
    search: Object,
    history: Object
};

type State = {
    disabled: boolean
};
const express = /^[0-9]+$/;

const SignupSchema = Yup.object().shape({
    otp: Yup.string().required("Please input number account of reveiver")
});
class ClientTransferOtp extends Component<Props, State> {
    componentWillMount = () => {
        console.log(this.props.location);
    };

    render() {
        const { state, search } = this.props.location;

        if (!state) return "";
        const initValues = {
            transaction_token: state,
            otp: ""
        };
        const { user } = qs.parse(this.props.location.search);
        console.log(this.props);

        return (
            <div>
                <div className="breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-inner">
                            <ul className="list-inline list-unstyled">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    &#160;
                                    <Link to={`/transfer?user=${user}`}>Transfer</Link>
                                </li>
                                <li className="active">OTP confirm</li>
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
                                        &#160;Otp Confirm
                                    </h2>
                                </div>
                                <div className="col-xs-9 col-sm-9 col-md-9">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="col-xs-12 col-md-9">
                                            <h2> User Account Number: {user}</h2>
                                        </div>

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
                                    <Formik
                                        initialValues={initValues}
                                        validationSchema={SignupSchema}
                                        onSubmit={(values, actions) => {
                                            setTimeout(() => {
                                                console.log(values);
                                                actions.setSubmitting(false);
                                                Api.post(`${API_BASE_URL}${API_TRANSFER_OTP_CONFIRM}`, values).then(res => {
                                                    console.log(res);
                                                    return this.props.history.goBack();
                                                });
                                            }, 100);
                                        }}
                                        render={props => (
                                            <form className="search-form" onSubmit={props.handleSubmit}>
                                                <Row className="text-center" form>
                                                    <Col style={{ marginLeft: "70px" }} md={12}>
                                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                            <Label for="otp" className="mr-sm-2">
                                                                OTP:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="otp"
                                                                onBlur={props.handleBlur}
                                                                onChange={props.handleChange}
                                                                defaultValue={props.values.otp}
                                                            />
                                                            <ErrorMessage name="otp">
                                                                {msg => <div className="errormess">{msg}</div>}
                                                            </ErrorMessage>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row form>
                                                    <Col style={{ marginLeft: "500px" }} md={1}>
                                                        <FormGroup inline>
                                                            <Link to="/">
                                                                <button type="button" className="btn btn-primary">
                                                                    Back{" "}
                                                                </button>
                                                            </Link>{" "}
                                                            &#160;
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={1}>
                                                        <button type="submit" className="btn btn-primary">
                                                            Confirm
                                                        </button>
                                                    </Col>
                                                </Row>
                                            </form>
                                        )}
                                    />
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

export default withRouter(ClientTransferOtp);
