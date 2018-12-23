/* eslint-disable no-var */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Footer from "./components/Footer";
import HeaderContainer from "./containers/auth/HeaderContainer";
import LoginContainer from "./containers/auth/LoginContainer";
import HomeContainer from "./containers/auth/HomeContainer";
import PrivateRoute from "./containers/hoc/PrivateRoute";
import routes from "./routes/routes";
import LogoutContainer from "./containers/auth/LogoutContainer";

class App extends Component {
  showRoutes = routesList => {
    var result = null;
    if (routes.length > 0) {
      result = routesList.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };

  render() {
    return (
      <div>
        <HeaderContainer />
        <Container fluid className="sbi-content">
          <Row>
            <Col md={{ size: 11, offset: 1 }}>
              <Switch>
                <Route path="/login" component={LoginContainer} />
                {this.showRoutes(routes)}
              </Switch>
            </Col>
          </Row>
        </Container>
        <footer className="sbi-footer">
          <Container>
            <Footer />
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
