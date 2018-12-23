import * as ACTIONTYPES from "../../actions/admin/UserActionsType";
import api from "../../api/Api";
import * as BASE_URL from "../../configs/AppConfig";

const initialState = {
  users: [],
  pagination: 1
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};

export default UserReducer;
