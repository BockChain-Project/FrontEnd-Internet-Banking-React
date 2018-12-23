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
import { withFormik } from "formik";
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
  values: Object,
  isSubmitting: boolean,
  handler: Function,
  handleSubmit: Function,
  handleChange: Function,
  handleBlur: Function,
  errorInfo: Object,
  isFailure: boolean
};

class LoginForm extends Component<Props> {
  componentDidMount = () => { };

  render() {
    const {
      isLoading,
      values,
      isSubmitting,
      handleSubmit,
      handleChange,
      handleBlur,
      handler,
      errorInfo,
      isFailure
    } = this.props;

    return (
      <div className="pt-11em">
        {isLoading && <Loading />}
        {/** Phuong remove 
        <Row>
          <Col md={{ size: 4, offset: 3 }}>
            <Card className="form-signin">
              <CardTitle className="card-header">ĐĂNG NHẬP</CardTitle>
              <CardBody>
                <TabContent>
                  <TabPane>
                    <Row>
                      <Col sm="12">
                        <Form onSubmit={handleSubmit}>
                          <FormGroup>
                            <Label for="accountLabel">Tên đăng nhập</Label>
                            <Input
                              type="text"
                              name="account"
                              id="account"
                              placeholder="Nhập tài khoản"
                              required
                              value={values.account}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="password">Mật khẩu</Label>
                            <Input
                              type="password"
                              name="password"
                              id="password"
                              required
                              placeholder="Mật khẩu"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </FormGroup>
                          <FormGroup className="text-center">
                            <Button
                              color="info"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Đăng nhập
                            </Button>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Error isFailure={isFailure} error={errorInfo} />
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
         */}

        {/** phuong add start */}
        {/* create a new account */}
        <div className="col-md-6 col-sm-6 create-new-account">
          <h4 className="checkout-subtitle">Sign in</h4>
          <p className="text title-tag-line">Create your new account.</p>

          <form className="register-form outer-top-xs" role="form">
            <div className="form-group">
              <label className="info-title" htmlFor="exampleInputEmail2">Email Address <span>*</span></label>
              <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail2" />
            </div>
            <div className="form-group">
              <label className="info-title" htmlFor="exampleInputEmail1">Name <span>*</span></label>
              <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
            </div>

            <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Sign Up</button>
            &nbsp;&nbsp;&nbsp;
                        <button className="btn-upper btn btn-default checkout-page-button">
              <a href="" className="facebook-sign-in"><i className="fa fa-google" /> Sign In with Google</a>
            </button>
            <div className="radio outer-xs">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />Remember me!
                              </label>
              <a href="" className="forgot-password pull-right">Forgot your Password?</a>
            </div>
          </form>
        </div>
        {/* create a new account */}

        {/** phuong add end */}

      </div>
    );
  }
}

export default formikEnhancer(LoginForm);
