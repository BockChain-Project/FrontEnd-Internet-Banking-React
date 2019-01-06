// import * as ACTIONTYPES from "../../actions/admin/UserActionsType";
import api from "../../api/Api";
import * as BASE_URL from "../../configs/AppConfig";
import * as USER_ACTIONS from "./../../actions/admin/UserActionsType";

const initialState = {
    users: [],
    pagination: 1
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTIONS.USERS_LIST: {
            console.log(action.users);
            return {
                ...state,
                users: action.users
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default UserReducer;
