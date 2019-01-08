/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import * as CLIENT_ACTIONS from "./ClientActionType";
import Api from "../../api/Api";
import { API_URL, API_USER_ACCOUNT_INFOR, API_BASE_URL, API_USER_ACCOUNT_GET } from "../../configs/AppConfig";

const actFetchProducts = (accounts: any) => ({
    type: CLIENT_ACTIONS.FETCH_ACCOUNTS,
    accounts
});

export const actFetchAccountsRequest = () => (dispatch: any) => {
    Api.get(`${API_BASE_URL}${API_USER_ACCOUNT_GET}`)
        .then(res => {
            dispatch(actFetchProducts(res.accounts));
        })
        .catch(err => {
            throw err;
        });
};

const getUserAccount = (userInfo: Object) => ({
    type: CLIENT_ACTIONS.USER_ACCOUNT_INFOR,
    userInfo
});

export const getUserAccountInfor = (account_number: string) => (dispatch: any) => {
    // dispatch(startLoading());
    Api.getWithParams(`${API_URL}${API_USER_ACCOUNT_INFOR}`, {
        account_number
    })
        .then(res => {
            console.log(res);
            return res;
            // dispatch(getUserAccount(res.userInfo));
        })
        .catch(err => {
            throw err;
        });
};

// const deleteAccount = () => ({
//     type: CLIENT_ACTIONS.USER_ACCOUNT_INFOR,
//     userInfo
// });

export const eDeleteAccount = (id: any) => (dispatch: any) => {
    Api.delete(`${API_URL}${API_USER_ACCOUNT_INFOR}/${id}`)
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(err => {
            throw err;
        });
};

const getAccountClose = (account: any) => ({
    type: CLIENT_ACTIONS.CLIENT_ACCOUNT_CLOSE,
    account
});

export const eGetAccountClose = (id: any) => (dispatch: any) => {
    Api.get(`${API_URL}${API_USER_ACCOUNT_GET}/${id}`)
        .then(res => {
            console.log(res);
            dispatch(getAccountClose(res));
            return res;
        })
        .catch(err => {
            throw err;
        });
};
