/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prefer-template */
/* eslint-disable react/self-closing-comp */
// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import qs from "query-string";
import { bindActionCreators } from "redux";
import { Row, Col } from "reactstrap";
import UserAddAccount from "../../components/admin/UserAddAccount";
import * as UserActions from "./../../actions/admin/UserActions";

type Props = {
    clients: Array,
    userActions: Object,
    users: Object,
    location: Object,
    search: Object
};

type State = {
    isSetRedirectFrom: boolean
};

class UserAddAccountContainer extends Component<Props, State> {
    componentWillMount = props => {
        this.props.userActions.eGetUsers();
    };
    componentDidMount() {}
    render() {
        const { clients, userActions, users } = this.props;
        const { user } = qs.parse(this.props.location.search);
        if (!users) return "";
        return (
            <Row>
                <Col>
                    <UserAddAccount clients={clients} userActions={userActions} users={users} />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    const { clients, users } = state.userReducer;
    return {
        clients,
        users
    };
};

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(UserActions, dispatch)
    };
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(UserAddAccountContainer)
);
