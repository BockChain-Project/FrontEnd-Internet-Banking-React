/* eslint-disable import/prefer-default-export */
import * as Types from "./ClientActionType";
import Api from "./../../api/Api";
import { API_BASE_URL, API_USER_ACCOUNT_GET } from "./../../configs/AppConfig";

const actFetchProducts = (accounts: any) => ({
    type: Types.FETCH_ACCOUNTS,
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
