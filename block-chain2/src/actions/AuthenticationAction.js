// @flow
import axios from "axios";
import jwtDecode from "jwt-decode";
// import { push } from "react-router-redux";
import StorageService from "../services/StorageService";
import * as ActionTypes from "./ActionTypes";
import {
  API_BASE_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  GRANT_TYPE
} from "../configs/AppConfig";
import TokenApi from "../api/TokenApi";
import Api from "../api/Api";

const loginStart = () => ({
  type: ActionTypes.AUTH_INIT
});

const loginFailure = error => ({
  type: ActionTypes.AUTH_FAILED,
  error
});

const loginSuccess = userInfo => ({
  type: ActionTypes.AUTH_SUCCESS,
  userInfo
});

const logoutAction = () => ({
  type: ActionTypes.AUTH_LOGOUT
});

const requestProfile = () => ({
  type: ActionTypes.AUTH_REQUEST_PROFILE
});

const receiveProfile = data => ({
  type: ActionTypes.AUTH_RECEIVE_PROFILE,
  data
});

export const login = (username: string, password: string) => (
  dispatch: any
) => {
  dispatch(loginStart());

  const config = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  };

  const getTokenUrl = `oauth/token?grant_type=${GRANT_TYPE}&username=${username}&password=${password}`;
  Api.postToken(getTokenUrl, config)
    .then(res => {
      StorageService.setToken(res.access_token);
      dispatch(loginSuccess(jwtDecode(res.access_token).user_info));
    })
    .catch(error => {
      console.log(error);
      dispatch(loginFailure(error));
    });
};

export const logout = () => (dispatch: any) => {
  StorageService.removeToken();
  dispatch(logoutAction());
};

export const verifyToken = () => async (dispatch: any) => {
  if (!StorageService.getToken()) {
    // if no token - logout
    dispatch(logoutAction());
    return;
  }
  try {
    dispatch(requestProfile());
    TokenApi.postVerifyToken()
      .then(resp => {
        dispatch(loginSuccess(resp.data));
      })
      .catch(error => {
        dispatch(logoutAction());
      });
  } catch (e) {
    // remove token and logout if invalid
    console.error(e.message);
    StorageService.removeToken();
    dispatch(logoutAction());
  }
};

const monitorTokenExpiry = () => {
  const tokenExpiresAt: any = localStorage.getItem("expires_at");
  const now: ?number = new Date().getTime();
  if (now !== null && now !== undefined)
    if (now > tokenExpiresAt) {
      localStorage.clear();
      return {
        type: ActionTypes.AUTH_EXPIRED
      };
    }
  return {
    type: ActionTypes.AUTH_NOT_EXPIRE
  };
};

const loggedIn = (accessToken, userId, expiresAt) => {
  localStorage.clear();
  localStorage.setItem("token", accessToken);
  localStorage.setItem("userId", userId);
  localStorage.setItem("expires_at", expiresAt);
};

export const authenticate = (
  username: string,
  password: string,
  client_id: string = CLIENT_ID,
  client_secret: string = CLIENT_SECRET,
  grant_type: string = GRANT_TYPE
) => (dispatch: any) => {
  dispatch(loginStart());

  const searchParams = new URLSearchParams();
  searchParams.set("username", username);
  searchParams.set("grant_type", grant_type);
  searchParams.set("client_id", client_id);
  searchParams.set("client_secret", client_secret);

  axios
    .post(`${API_BASE_URL}/api/login`, searchParams)
    .then(response => {
      loggedIn(
        response.data.accessToken,
        response.data.user.loginId,
        response.data.expires_at
      );
      dispatch(loginSuccess());
    })
    .catch(e => {
      dispatch(loginFailure(e));
    });
};
