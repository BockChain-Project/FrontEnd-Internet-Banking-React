// @flow
import React, { Component } from "react";
import _ from "lodash";
import { Formik, ErrorMessage } from "formik";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Table, Col, Row, Label, Input, FormGroup } from "reactstrap";
import AccountItem from "./AccountItem";

type Props = {
    accounts: Array,
    user_account: string
};

type State = {};

class ClientTransfer extends Component<Props, State> {
    showAccounts = accounts => {
        let result = null;

        if (accounts.length > 0) {
            result = _.map(accounts, (account, key) => <AccountItem key={key} account={account} index={key} />);
        }
        return result;
    };

    render() {
        const { accounts } = this.props;
        const initValues = {
            roles: "",
            username: "",
            displayName: "",
            email: "",
            phone: "",
            isActive: ""
        };

        return (
            <div>
                <div className="breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-inner">
                            <ul className="list-inline list-unstyled">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="active">Transfer</li>
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
                                        <span className="glyphicon glyphicon-list-alt" />
                                        Transfer
                                    </h2>
                                </div>
                                <div className="col-xs-9 col-sm-9 col-md-9">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="col-xs-12 col-md-9">
                                            <h2> User Account Number: {this.props.user_account}</h2>
                                        </div>

                                        <div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-center">Input information of receiver</h3>
                        <div className="panel-body table-responsive">
                            <Row>
                                <Col md={{ size: 10, offset: 3 }}>
                                    <Formik
                                        initialValues={initValues}
                                        // validationSchema={SignupSchema}
                                        onSubmit={(values, actions) => {
                                            setTimeout(() => {
                                                actions.setSubmitting(false);
                                            }, 100);
                                        }}
                                        render={props => (
                                            <form className="search-form" onSubmit={props.handleSubmit}>
                                                <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                    <Label for="numberAccount" className="mr-sm-2">
                                                        Receiver account number:
                                                    </Label>
                                                    <Input type="text" name="numberAccount" value={props.values.username} />
                                                </FormGroup>
                                                <Row form>
                                                    <Col md={6}>
                                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                            <Label for="displayName" className="mr-sm-2">
                                                                Fullname:
                                                            </Label>
                                                            <Input
                                                                disabled
                                                                type="text"
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
                                                                value={props.values.email}
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
                                                                value={props.values.phone}
                                                            />
                                                            {/* <ErrorMessage name="phone">{msg => <div className="errormess">{msg}</div>}</ErrorMessage> */}
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row form>
                                                    <Col md={6}>
                                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                            <Label for="money" className="mr-sm-2">
                                                                Total Transfer Money:
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="money"
                                                                onChange={props.handleChange}
                                                                onBlur={props.handleBlur}
                                                                defaultValue={props.values.money}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={6}>
                                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                                            <Label for="content" className="mr-sm-2">
                                                                content transfer
                                                            </Label>
                                                            <Input
                                                                type="text"
                                                                name="content"
                                                                onChange={props.handleChange}
                                                                onBlur={props.handleBlur}
                                                                defaultValue={props.values.content}
                                                            />
                                                            {/* <ErrorMessage name="phone">{msg => <div className="errormess">{msg}</div>}</ErrorMessage> */}
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <FormGroup inline className="mb-2 mr-sm-2 mb-sm-2">
                                                    <Link to="/">
                                                        <button type="button" className="btn btn-primary">
                                                            Trở về
                                                        </button>
                                                    </Link>{" "}
                                                    &#160;
                                                    <button type="submit" className="btn btn-primary">
                                                        Gửi tiền
                                                    </button>
                                                </FormGroup>
                                            </form>
                                        )}
                                    />
                                </Col>
                            </Row>
                        </div>
                        {/* <div className="panel-body table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center"> Account number </th>
                                        <th className="text-center"> Balance in the account </th>
                                        <th className="text-center"> Actions </th>
                                    </tr>
                                </thead>
                                <tbody>{this.showAccounts(accounts)}</tbody>
                            </table>
                        </div> */}
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

export default withRouter(ClientTransfer);
