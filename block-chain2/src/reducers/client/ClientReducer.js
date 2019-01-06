// @flow
import api from "../../api/Api";
import * as BASE_URL from "../../configs/AppConfig";
import * as Types from "./../../actions/client/ClientActionType";

const initialState = {
    clients: [],
    pagination: 1,
    accounts: [],
    userInfo: null
};

const ClientReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ACCOUNTS:
            return {
                ...state,
                accounts: action.accounts
            };
        case Types.USER_ACCOUNT_INFOR: {
            // console.log(action);
            return {
                ...state,
                userInfo: action.userInfo
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default ClientReducer;
