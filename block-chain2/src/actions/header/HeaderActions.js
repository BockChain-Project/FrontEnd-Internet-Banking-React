// @flow
import * as ACTIVETYPES from "./HeaderActionTypes";

const headerLoadingAction = () => ({
  type: ACTIVETYPES.HEADER_LOADING_ACTION
});

const headerNavigateFromLoginAction = (redirectFrom: String) => ({
  type: ACTIVETYPES.HEADER_NAVIGATE_FROM_LOGIN_ACTION,
  redirectFrom
});

export const loading = () => (dispatch: any) => {
  dispatch(headerLoadingAction());
};

export const nagivateFromLogin = (redirectFrom: String) => (dispatch: any) => {
  dispatch(headerNavigateFromLoginAction(redirectFrom));
};
