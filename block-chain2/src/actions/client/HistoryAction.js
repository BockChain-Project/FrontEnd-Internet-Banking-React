import * as Types from "./ClientActionType";
import Api from "./../../api/Api";
import { API_BASE_URL, API_USER_ACCOUNT_GET, API_HISTORY_GET } from "./../../configs/AppConfig";

export const actFetchHistory = history => {
    return {
        type: Types.FETCH_HISTORY,
        history
    };
};
export const actFetchHistoryRequest = (accountNumber) => dispatch =>
    Api.get(`${API_BASE_URL}${API_HISTORY_GET}?account=${accountNumber}`).then(res => {
        //console.log("History api: ", res);
        dispatch(actFetchHistory(res));
    });
