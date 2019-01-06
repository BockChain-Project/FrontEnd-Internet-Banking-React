// @flow
import axios from "axios";
import jwtDecode from "jwt-decode";
// import { push } from "react-router-redux";
import StorageService from "../services/StorageService";
import * as ActionTypes from "./ActionTypes";
import { API_BASE_URL, API_USER_LOGIN } from "../configs/AppConfig";
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

export const login = (username: string, password: string) => (dispatch: any) => {
    dispatch(loginStart());

    Api.post(`${API_BASE_URL}${API_USER_LOGIN}`, { username, password })
        .then(res => {
            StorageService.setToken(res.access_token);
            StorageService.setRefreshToken(res.refresh_token);
            dispatch(loginSuccess(jwtDecode(res.access_token).user));
        })
        .catch(error => {
            dispatch(loginFailure(error));
        });
};

export const logout = () => (dispatch: any) => {
    StorageService.removeToken();
    StorageService.removeRefreshToken();
    dispatch(logoutAction());
};

export const verifyToken = () => async (dispatch: any) => {
    if (!StorageService.getToken()) {
        // dispatch(logoutAction());
        TokenApi.postVerifyRefreshToken()
            .then(res => {
                StorageService.setToken(res.access_token);
            })
            .catch(err => {
                throw err;
            });
        return;
    }
    try {
        TokenApi.postVerifyToken()
            .then(resp => {
                dispatch(loginSuccess(resp));
            })
            .catch(error => {
                StorageService.removeToken();
                dispatch(logoutAction());
                throw error;
            });
    } catch (e) {
        StorageService.removeToken();
        dispatch(logoutAction());
        throw e;
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

// export const authenticate = (
//     username: string,
//     password: string,
//     client_id: string = CLIENT_ID,
//     client_secret: string = CLIENT_SECRET,
//     grant_type: string = GRANT_TYPE
// ) => (dispatch: any) => {
//     dispatch(loginStart());

//     const searchParams = new URLSearchParams();
//     searchParams.set("username", username);
//     searchParams.set("grant_type", grant_type);
//     searchParams.set("client_id", client_id);
//     searchParams.set("client_secret", client_secret);

//     axios
//         .post(`${API_BASE_URL}/api/login`, searchParams)
//         .then(response => {
//             loggedIn(response.data.accessToken, response.data.user.loginId, response.data.expires_at);
//             dispatch(loginSuccess());
//         })
//         .catch(e => {
//             dispatch(loginFailure(e));
//         });
// };
