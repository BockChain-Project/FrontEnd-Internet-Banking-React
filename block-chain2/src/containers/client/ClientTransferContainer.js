// @flow
import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import qs from "query-string";
import { bindActionCreators } from "redux";
import { Row, Col } from "reactstrap";
import ClientTransfer from "../../components/client/ClientTransfer";
import * as ClientActions from "./../../actions/client/ClientActions";

import { actFetchAccountsRequest } from "./../../actions/client/account";

type Props = {
    search: Object,
    location: Object,
    clients: Array,
    clientActions: Object,
    accounts: Object,
    fetchAllAccounts: Function
};

type State = {
    isSetRedirectFrom: boolean
};

class ClientTransferContainer extends Component<Props, State> {
    componentWillMount = props => {
        const { user } = qs.parse(this.props.location.search);
        console.log(user);
    };
    componentDidMount() {
        this.props.fetchAllAccounts();
    }
    render() {
        const { clients, clientActions, accounts } = this.props;
        const { user } = qs.parse(this.props.location.search);

        return (
            <Row>
                <Col>
                    <ClientTransfer user_account={user} clientActions={clientActions} accounts={accounts} />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    const { clients, accounts } = state.clientReducer;
    return {
        clients,
        accounts
    };
};

function mapDispatchToProps(dispatch) {
    return {
        clientActions: bindActionCreators(ClientActions, dispatch),
        fetchAllAccounts: () => {
            dispatch(actFetchAccountsRequest());
        }
    };
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ClientTransferContainer)
);
