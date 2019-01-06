/* eslint-disable no-var */
// @flow
import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import qs from "query-string";
import { bindActionCreators } from "redux";
import { Row, Col } from "reactstrap";
import ClientTransfer from "../../components/client/ClientTransfer";
import * as ClientActions from "./../../actions/client/ClientActions";

import { actFetchHistoryRequest } from "./../../actions/client/HistoryAction";
import History from "../../components/History";

type Props = {
    search: Object,
    location: Object,
    clients: Array,
    clientActions: Object,
    accounts: Object,
    history: Array,
    fetchAllHistory: Function
};

type State = {
    isSetRedirectFrom: boolean
};

class HistoryContainer extends Component<Props, State> {
    componentWillMount = props => {
        const { user } = qs.parse(this.props.location.search);
    };
    componentDidMount() {
        const { user } = qs.parse(this.props.location.search);
        this.props.fetchAllHistory(user);
        // console.log("fetchAllHistory", this.props.history);
    }
    render() {
        const { clients, clientActions, accounts, history } = this.props;
        const { user } = qs.parse(this.props.location.search);

        return (
            <Row>
                <Col>
                    <History user_account={user} clientActions={clientActions} accounts={accounts} history={history} />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    const { clients, accounts, history } = state.clientReducer;
    return {
        clients,
        accounts,
        history
    };
};

function mapDispatchToProps(dispatch) {
    return {
        clientActions: bindActionCreators(ClientActions, dispatch),
        fetchAllHistory: user => {
            dispatch(actFetchHistoryRequest(user));
        }
    };
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(HistoryContainer)
);
