/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import * as USER_ACTIONS from "./UserActionsType";
import Api from "../../api/Api";
import { API_URL, API_USER_ACCOUNT_INFOR, API_BASE_URL, API_USER_ACCOUNT_GET, API_USER_GET_LIST } from "../../configs/AppConfig";

const getUsers = (users: any) => ({
    type: USER_ACTIONS.USERS_LIST,
    users
});

export const eGetUsers = () => (dispatch: any) => {
    Api.get(`${API_BASE_URL}${API_USER_GET_LIST}`)
        .then(res => {
            console.log(res);
            dispatch(getUsers(res.users));
        })
        .catch(err => {
            throw err;
        });
};

// const getUserAccount = (userInfo: Object) => ({
//     type: CLIENT_ACTIONS.USER_ACCOUNT_INFOR,
//     userInfo
// });

// export const getUserAccountInfor = (account_number: string) => (dispatch: any) => {
//     // dispatch(startLoading());
//     Api.getWithParams(`${API_URL}${API_USER_ACCOUNT_INFOR}`, {
//         account_number
//     })
//         .then(res => {
//             console.log(res);
//             return res;
//             // dispatch(getUserAccount(res.userInfo));
//         })
//         .catch(err => {
//             throw err;
//         });
// };
