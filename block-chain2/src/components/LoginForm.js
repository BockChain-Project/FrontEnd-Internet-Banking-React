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
  componentDidMount = () => {};

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
      </div>
    );
  }
}

export default formikEnhancer(LoginForm);
