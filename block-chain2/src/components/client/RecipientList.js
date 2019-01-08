/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable prefer-template */
/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/no-unused-state */
/* eslint-disable spaced-comment */
/* eslint-disable import/first */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
// @flow
import React, { Component } from "react";
import _ from "lodash";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import RecipientItem from "./RecipientItem";
import { Table, Col, Row, Label, Input, FormGroup, Button } from "reactstrap";
import { Formik, ErrorMessage } from "formik";
import Api from "./../../api/Api";
import { API_RECIPIENT_LIST_POST, API_BASE_URL } from "./../../configs/AppConfig";

type Props = {
    recipients: Array,
    onAddAccount: PropTypes.func
};

type State = {};

class RecipientList extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onChange = e => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        //console.log('name: ' + name + " - value: " + value);
        this.setState({
            [name]: value
        });
    };

    // onSave = (e) => {
    //     e.preventDefault();
    //     var { txtName, txtNumber } = this.state;
    //     var account = {
    //         name: txtName,
    //         account_number: txtNumber
    //     };
    //     //console.log("acc: ", account);

    //     this.props.onAddAccount(account);

    // }
    showRecipientList = recipientlist => {
        let result = null;

        console.log("showRecipientList", recipientlist);
        if (recipientlist.length > 0) {
            result = _.map(recipientlist, (recipient, key) => <RecipientItem key={key} recipient={recipient} index={key} />);
        }
        return result;
    };

    render() {
        const { recipients, onAddAccount } = this.props;
        if (!recipients) return "";
        const initValues = {
            name: "",
            account_number: ""
        };
        //console.log("showRecipientList 1", recipients);
        var { txtName, txtNumber } = this.state;

        return (
            <div>
                <div className="breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-inner">
                            <ul className="list-inline list-unstyled">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li className="active">Recipient List</li>
                            </ul>
                        </div>
                        {/* /.breadcrumb-inner */}
                    </div>
                    {/* /.container */}
                </div>
                {/* /.breadcrumb */}
                <div className="container">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-3">
                                    <h2 className="text-center pull-left" style={{ paddingLeft: "30px" }}>
                                        {" "}
                                        <span className="glyphicon glyphicon-list-alt" /> Recipient List{" "}
                                    </h2>
                                </div>
                                <div className="col-xs-9 col-sm-9 col-md-9">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="col-xs-12 col-md-9">
                                            <Label> Search Recipient </Label>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input type="text" className="form-control input-md" name="search" />
                                                    <div className="input-group-btn">
                                                        <button type="button" className="btn btn-md btn-warning">
                                                            {" "}
                                                            <span className=" glyphicon glyphicon-search" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <hr />
                                            <Row>
                                                <Col md={{ size: 12, offset: 3 }}>
                                                    <Formik
                                                        initialValues={initValues}
                                                        onSubmit={(values, actions) => {
                                                            setTimeout(() => {
                                                                console.log("values", values);
                                                                Api.post(`${API_BASE_URL}${API_RECIPIENT_LIST_POST}`, values)
                                                                    .then(res => {
                                                                        console.log(res);
                                                                    })
                                                                    .catch(err => {
                                                                        alert("account is not exist.");
                                                                        throw err;
                                                                    });
                                                                actions.setSubmitting(false);
                                                            }, 100);
                                                            console.log("end");
                                                        }}
                                                        render={props => (
                                                            <form className="search-form" onSubmit={props.handleSubmit}>
                                                                <Row form>
                                                                    <Col md={6}>
                                                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                            <Label for="displayName" className="mr-sm-2">
                                                                                Name:
                                                                            </Label>
                                                                            <Input
                                                                                type="text"
                                                                                id="name"
                                                                                name="name"
                                                                                onChange={props.handleChange}
                                                                                onBlur={props.handleBlur}
                                                                                defaultValue={props.values.name}
                                                                            />
                                                                        </FormGroup>
                                                                    </Col>
                                                                    <Col md={6}>
                                                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                            <Label for="username" className="mr-sm-2">
                                                                                Account number:
                                                                            </Label>
                                                                            <Input
                                                                                type="text"
                                                                                name="account_number"
                                                                                id="account_number"
                                                                                onChange={props.handleChange}
                                                                                onBlur={props.handleBlur}
                                                                                defaultValue={props.values.account_number}
                                                                            />
                                                                            {/* <ErrorMessage name="displayName">{msg => <div className="errormess">{msg}</div>}</ErrorMessage> */}
                                                                        </FormGroup>
                                                                    </Col>
                                                                </Row>

                                                                <Row form>
                                                                    <Col md={6}>
                                                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                                            <button type="submit" className="btn btn-success">
                                                                                Add to contact list
                                                                            </button>
                                                                        </FormGroup>
                                                                    </Col>
                                                                </Row>
                                                            </form>
                                                        )}
                                                    />
                                                </Col>
                                            </Row>
                                            {/** end add phuong */}
                                        </div>

                                        <div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center"> Account number </th>
                                        <th className="text-center"> Account name </th>
                                        <th className="text-center"> Action </th>
                                    </tr>
                                </thead>
                                <tbody>{this.showRecipientList(recipients)}</tbody>
                            </table>
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

export default withRouter(RecipientList);
