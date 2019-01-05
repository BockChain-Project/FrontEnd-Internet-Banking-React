/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from "react";
import classnames from "classnames";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Row,
    Col
} from "reactstrap";
import { withFormik, Formik } from "formik";
import Loading from "./Loading";
import Error from "./Error";

const formikEnhancer = withFormik({
    mapPropsToValues: props => ({ account: "", password: "" }),
    handleSubmit: (values, { setSubmitting, props }) => {
        props.handler(values.account, values.password);
        setSubmitting(false);
    },
    displayName: "ZLoginForm" // helps with React DevTools
});

type Props = {
    isLoading: boolean,
    isSubmitting: boolean,
    handler: Function,
    handleSubmit: Function,
    handleChange: Function,
    handleBlur: Function,
    errorInfo: Object,
    isFailure: boolean
};

class LoginForm extends Component<Props> {
    componentDidMount = () => {};

    render() {
        const { isLoading, isSubmitting, handleSubmit, handleChange, handleBlur, handler, errorInfo, isFailure } = this.props;
        const initValues = {
            account: "",
            password: ""
        };

        return (
            <div className="pt-11em">
                {isLoading && <Loading />}
                <div className="col-md-6 col-sm-6 create-new-account">
                    <h4 className="checkout-subtitle">Sign in</h4>
                    <p className="text title-tag-line">Create your new account.</p>

                    <Formik
                        initialValues={initValues}
                        // validationSchema={SignupSchema}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                handler(values.account, values.password);
                                actions.setSubmitting(false);
                            }, 100);
                        }}
                        render={props => (
                            <form className="register-form outer-top-xs" role="form" onSubmit={props.handleSubmit}>
                                <div className="form-group">
                                    <Label className="info-title" htmlFor="account">
                                        Username <span>*</span>
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control unicase-form-control text-input"
                                        name="account"
                                        defaultValue={props.values.account}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        id="account"
                                    />
                                </div>
                                <div className="form-group">
                                    <Label className="info-title" htmlFor="password">
                                        Password <span>*</span>
                                    </Label>
                                    <input
                                        type="password"
                                        className="form-control unicase-form-control text-input"
                                        id="password"
                                        defaultValue={props.values.password}
                                        onBlur={props.handleBlur}
                                        onChange={props.handleChange}
                                        name="password"
                                    />
                                </div>
                                <button type="submit" className="btn-upper btn btn-primary checkout-page-button">
                                    Sign In
                                </button>
                                &nbsp;&nbsp;&nbsp;
                                <button className="btn-upper btn btn-default checkout-page-button">
                                    <a href="" className="facebook-sign-in">
                                        <i className="fa fa-google" /> Sign In with Google
                                    </a>
                                </button>
                                <div className="radio outer-xs">
                                    <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
                                        Remember me!
                                    </label>
                                    <a href="" className="forgot-password pull-right">
                                        Forgot your Password?
                                    </a>
                                </div>
                            </form>
                        )}
                    />
                </div>
                {/* create a new account */}

                {/** phuong add end */}
            </div>
        );
    }
}

export default formikEnhancer(LoginForm);
