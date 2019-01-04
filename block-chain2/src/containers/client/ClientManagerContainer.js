/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prefer-template */
/* eslint-disable react/self-closing-comp */
// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from "reactstrap";
import ClientManage from "../../components/client/ClientManage";
import * as ClientActions from "./../../actions/client/ClientActions";

import { actFetchProductsRequest } from './../../actions/client/account';

type Props = {
  clients: Array,
  clientActions: Object,
  accounts: Object,
  fetchAllAccounts: PropTypes.func
};

type State = {
  isSetRedirectFrom: boolean
};

class ClientManagerContainer extends Component<Props, State> {
  componentWillMount = props => { };
  componentDidMount() {
    // console.log("componentDidMount");
    this.props.fetchAllAccounts();
  }
  render() {
    const { clients, clientActions, accounts } = this.props;
    return (
      <Row>
        <Col>
          <ClientManage clients={clients} clientActions={clientActions} accounts={accounts} />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  const { clients, accounts } = state.clientReducer;
  return {
    clients, accounts
  };
};

function mapDispatchToProps(dispatch) {
  return {
    clientActions: bindActionCreators(ClientActions, dispatch),
    fetchAllAccounts: () => {
      // console.log("actFetchProductsRequest");
      dispatch(actFetchProductsRequest());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientManagerContainer);
