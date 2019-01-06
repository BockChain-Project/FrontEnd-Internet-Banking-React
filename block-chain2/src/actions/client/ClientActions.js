/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import * as CLIENT_ACTIONS from "./ClientActionType";
import Api from "../../api/Api";
import { API_URL, API_USER_ACCOUNT_INFOR } from "../../configs/AppConfig";

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
