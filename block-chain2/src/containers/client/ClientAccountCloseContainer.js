/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
// @flow
import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import qs from "query-string";
import _ from "lodash";
import { bindActionCreators } from "redux";
import { Row, Col } from "reactstrap";
import ClientAccountClose from "../../components/client/ClientCloseAccount";
import * as ClientActions from "./../../actions/client/ClientActions";
import { actFetchAccountsRequest } from "./../../actions/client/account";

type Props = {
    location: Object,
    clientActions: Object,
    accounts: Object
};

type State = {
    // isSetRedirectFrom: boolean
};

class ClientAccountCloseContainer extends Component<Props, State> {
    componentWillMount = () => {
        this.props.clientActions.actFetchAccountsRequest();
    };
    componentDidMount() {}
    render() {
        const { clientActions, accounts } = this.props;
        const { state } = this.props.location;

        if (!accounts || !state) return "";
        // console.log(accounts);
        // console.log(state);
        accounts.map((item, index) => {
            const { account_number } = state;
            if (item.account_number === account_number) {
                accounts.splice(index, 1);
                return null;
            }
        });
        return (
            <Row>
                <Col>
                    <ClientAccountClose clientActions={clientActions} accounts={accounts} state={state} />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    const { clients, accounts, userInfo } = state.clientReducer;
    return {
        clients,
        accounts,
        userInfo
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
    )(ClientAccountCloseContainer)
);
