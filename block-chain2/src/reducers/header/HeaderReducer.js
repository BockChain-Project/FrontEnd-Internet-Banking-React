import * as ACTIONTYPES from "../../actions/header/HeaderActionTypes";

const initialState = {
  redirectFrom: "",
  currentSelect: ""
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONTYPES.HEADER_LOADING_ACTION: {
      return {
        ...state
      };
    }
    case ACTIONTYPES.HEADER_NAVIGATE_FROM_LOGIN_ACTION: {
      return {
        ...state,
        redirectFrom: action.redirectFrom
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default headerReducer;
