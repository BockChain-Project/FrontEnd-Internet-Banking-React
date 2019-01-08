/* eslint-disable spaced-comment */
// @flow
export const API_BASE_URL = window.API_URL;
// phuong add
export const API_URL = "http://192.168.43.230:5000";

//user
export const API_USER_GET_LIST = "/users";
export const API_USER_LOGIN = "/users/login";
export const API_TRANSFER_POST = "/otp";
export const API_TRANSFER_OTP_CONFIRM = "/transfers";
// users_account
export const API_USER_ACCOUNT_GET = "/accounts";
export const API_USER_ACCOUNT_INFOR = "/accounts/user";
export const API_USER_ACCOUNT_DELETE = "/accounts";
export const API_USER_ACCOUNT_ADD = "/accounts";

// Recipient List
export const API_RECIPIENT_LIST_GET = "/recipients";
export const API_HISTORY_GET = "/transfers";

export const API_RECIPIENT_LIST_POST = "/recipients";
