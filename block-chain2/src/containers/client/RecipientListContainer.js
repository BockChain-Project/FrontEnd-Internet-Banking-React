/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prefer-template */
/* eslint-disable react/self-closing-comp */
// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from "reactstrap";
import * as ClientActions from "./../../actions/client/ClientActions";

import { actFetchRecipientsRequest } from "./../../actions/client/RecipientAction";
import RecipientList from "../../components/client/RecipientList";

type Props = {
    clients: Array,
    clientActions: Object,
    recipients: Array,
    fetchAllRecipients: PropTypes.func
};

type State = {
    isSetRedirectFrom: boolean
};

class RecipientListContainer extends Component<Props, State> {
    componentWillMount = props => { };
    componentDidMount() {
        this.props.fetchAllRecipients();
    }
    render() {
        const { clients, clientActions, recipients } = this.props;
        //console.log("RecipientListContainer", recipients);
        return (
            <Row>
                <Col>
                    <RecipientList clients={clients} clientActions={clientActions} recipients={recipients} />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    const { clients, recipients } = state.clientReducer;
    return {
        clients,
        recipients
    };
};

function mapDispatchToProps(dispatch) {
    return {
        clientActions: bindActionCreators(ClientActions, dispatch),
        fetchAllRecipients: () => {
            dispatch(actFetchRecipientsRequest());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipientListContainer);
