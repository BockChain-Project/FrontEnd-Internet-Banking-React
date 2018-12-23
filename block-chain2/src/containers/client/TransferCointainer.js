/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prefer-template */
/* eslint-disable react/self-closing-comp */
// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from "reactstrap";
import Transfer from "../../components/Transfer";
import * as ClientActions from "./../../actions/client/ClientActions";

type Props = {
    clients: Array,
    clientActions: Object
};

type State = {
    isSetRedirectFrom: boolean
};

class TransferCointainer extends Component<Props, State> {
    componentWillMount = props => { };

    render() {
        const { clients, clientActions } = this.props;
        return (
            <Row>
                <Col>
                    <Transfer clients={clients} clientActions={clientActions} />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    const { clients } = state.clientReducer;
    return {
        clients
    };
};

function mapDispatchToProps(dispatch) {
    return {
        clientActions: bindActionCreators(ClientActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransferCointainer);
