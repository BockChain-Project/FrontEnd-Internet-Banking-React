import * as ACTIONTYPES from "../actions/ActionTypes";

const initialState = {
  isAuthenticated: false,
  isFailure: false,
  isLoading: false,
  currentUser: null,
  isFirstLoad: true,
  userInfo: {},
  error: {}
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONTYPES.AUTH_INIT:
      return {
        ...state,
        isLoading: true,
        isFirstLoad: true
      };
    case ACTIONTYPES.AUTH_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        isFailure: true,
        isLoading: false,
        isFirstLoad: false,
        error: action.error
      };
    case ACTIONTYPES.AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isFailure: false,
        isLoading: false,
        isFirstLoad: false,
        userInfo: action.userInfo
      };
    case ACTIONTYPES.AUTH_EXPIRED:
      return {
        ...state,
        isAuthenticated: false,
        isFirstLoad: false,
        userInfo: {}
      };
    case ACTIONTYPES.AUTH_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        isFirstLoad: false,
        isLoading: false,
        userInfo: {}
      };

    default:
      return state;
  }
};

export default authenticationReducer;
